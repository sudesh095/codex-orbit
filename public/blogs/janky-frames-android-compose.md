![JENKYFRAMES](https://github.com/user-attachments/assets/a14f12e6-67c7-469d-9a2c-ac0e0b1a27ca)

## About me

Hi, I’m **Sudesh Kumar**, a results-driven Android Developer with over **8 years** of experience
building high-performance mobile apps.

I specialize in **Kotlin**, **Jetpack Compose**, and **modern Android architecture patterns** like
MVVM and Clean Architecture. Over the years, I’ve worked on everything from startups to
enterprise-grade apps—focusing on scalability, performance, and great user experiences.

This blog is my way of sharing what I’ve learned (and continue to learn) with the Android community.
Whether it’s code patterns, real project insights, or lessons from building in production—I’m here
to make Android development a little easier and a lot more fun.

I’ve also started my own venture called **Codex Orbit**, where I continue crafting clean, scalable
Android solutions. You can learn more or get in touch
at [www.codexorbit.com](https://www.codexorbit.com).

Thanks for reading—and welcome to the journey!

# Fixing Janky Frames and Rendering Issues in Android (Jetpack Compose)

When developing smooth Android apps, one of the biggest challenges is avoiding **janky frames** — moments when your app lags, stutters, or feels unresponsive. In this guide, we’ll explore how to detect, analyze, and fix these issues using tools like **Perfetto** and smart Compose techniques.

---

## What Are Janky Frames?

Android aims to render UI at **60 frames per second (fps)**, which means every frame should complete within **16.67 ms**.  
If a frame takes longer, it causes a **stutter or lag**, known as *jank*.

Typical causes include:
- Heavy work on the main thread (CPU bound operations)
- Inefficient recompositions in Jetpack Compose
- Slow rendering of complex layouts or lists

---

## Understanding the Frame Timeline with Perfetto

Perfetto is a system profiler that lets you visualize how long each frame takes to render.

### Steps to Capture Frame Timeline
1. Open **Android Studio > Profiler > System Trace** or use **Perfetto UI (perfetto.dev)**.
2. Record while interacting with your app (like scrolling or clicking buttons).
3. Look for the **Choreographer#doFrame** and **UI Thread** tracks.
4. Identify long-running frames — those exceeding 16.67 ms.

A “long” Choreographer callback often indicates too much work on the main thread — maybe layout passes, recomposition storms, or synchronous data loads.

---

## Example of a Janky Screen

Here’s a simplified example that could cause lag:

```kotlin
@OptIn(ExperimentalCoroutinesApi::class)
class SmoothViewModel : ViewModel() {
    private val initialList = (1..1000).map { "Item $it" }
    private val _items = MutableStateFlow(initialList)

    val processedItems = _items
        .mapLatest { list ->
            withContext(Dispatchers.Default) {
                // Heavy operation
                list.map { it.reversed() }
            }
        }
        .stateIn(viewModelScope, SharingStarted.Lazily, emptyList())
}
```

And the UI:
```kotlin
@Composable
fun SmoothListScreen(onClick: (String) -> Unit, viewModel: SmoothViewModel = viewModel()) {
    val processed by viewModel.processedItems.collectAsState()
    val derived by remember { derivedStateOf { processed } }

    Column(modifier = Modifier.fillMaxSize()) {
        CommonToolbar("Smooth List Screen", onBackClick = { onClick("BACK") })
        LazyColumn {
            items(derived) { item ->
                Text(item, modifier = Modifier.fillMaxWidth().padding(8.dp), textAlign = TextAlign.Center)
                HorizontalDivider(thickness = 1.dp, color = Color.LightGray)
            }
        }
    }
}
```

---

## What’s Happening Here?

- The **ViewModel** processes a large list (1000 items) by reversing each string.
- Even though processing is done using **Dispatchers.Default**, the UI still updates with a big recomposition — potentially making the scroll laggy.
- The recomposition may trigger multiple times if you don’t handle state efficiently.

---

## How To Fix It

### 1. Move Heavy Work Off the Main Thread
Already done above using **Dispatchers.Default**. But ensure no UI logic or list transformation happens on the main thread.

### 2. Use **derivedStateOf** Carefully
Wrap expensive or derived computations that depend on stable state.

```kotlin
val derived by remember { derivedStateOf { processed } }
```
This prevents unnecessary recompositions when the list hasn’t actually changed.

### 3. Snapshot Flow Optimization
If using **snapshotFlow**, be cautious — it triggers every time the observed state changes. Only observe necessary states.

### 4. Use Pagination or Lazy Loading
Instead of rendering 1000 items at once, load and display data in chunks.

### 5. Measure Improvements with Perfetto
Before and after optimization, record the frame timeline again:
- Before: Frame time ~125 ms (laggy)
- After: Frame time ~16 ms (smooth)

Take screenshots from Perfetto to visualize improvement.

---

## Real-World Tips
- Avoid large or deep Compose trees — use **key()** to maintain stable elements in LazyLists.
- Keep animations lightweight; avoid running multiple animations simultaneously.
- Use **CompositionLocalProvider** and **remember** to cache expensive objects.
- Don’t log too much in Compose — even **Log.d()** in composables adds overhead.

---

## Summary

| Problem | Cause | Solution |
|----------|--------|-----------|
| Janky frames | Heavy main-thread work | Move to background with coroutines |
| Frequent recompositions | Inefficient state observation | Use **derivedStateOf**, **remember** |
| Slow rendering | Overdraw, deep layouts | Simplify UI tree |
| Scroll lag | Too many items rendered | Use pagination |

---

By learning to use **Perfetto traces**, understanding **frame timelines**, and optimizing Compose recompositions, you can create buttery-smooth Android experiences that feel fast and fluid.

You can explore the complete project on [GitHub](https://github.com/sudesh095/memory-leaks.git). Try running it, check the leaky and fixed examples, and start applying these safe practices in your own apps.

Happy Coding, Thanks!

**Sudesh Kumar**

[www.codexorbit.com](https://www.codexorbit.com)
