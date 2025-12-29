![VIEMODEL](https://github.com/user-attachments/assets/dc5233c4-5ae3-44f2-b013-543bc773c310)

## About me

Hi, I’m **Sudesh Kumar**, a results-driven Android Developer with over **8 years** of experience building high-performance mobile apps.

I specialize in **Kotlin**, **Jetpack Compose**, and **modern Android architecture patterns** like MVVM and Clean Architecture. Over the years, I’ve worked on everything from startups to enterprise-grade apps—focusing on scalability, performance, and great user experiences.

This blog is my way of sharing what I’ve learned (and continue to learn) with the Android community. Whether it’s code patterns, real project insights, or lessons from building in production—I’m here to make Android development a little easier and a lot more fun.

I’ve also started my own venture called **Codex Orbit**, where I continue crafting clean, scalable Android solutions. You can learn more or get in touch at [www.codexorbit.com](https://www.codexorbit.com).

Thanks for reading—and welcome to the journey!

---

## About ViewModel

When we rotate a phone, switch to dark mode, or change language, Android often **destroys and recreates Activities or Fragments**. If you keep data only inside an Activity, you’ll lose it. This is where **ViewModel** comes in.

The **ViewModel** class is part of Android Jetpack Architecture Components. It helps you store and manage UI-related data in a lifecycle-conscious way.

---

## What is ViewModel?

- A **lifecycle-aware container** for UI data  
- Survives **configuration changes** like rotation, dark mode, and language  
- Keeps UI logic **separate from UI controllers** (Activity/Fragment)  
- Designed to **reduce boilerplate** and make apps more robust  

---

## Configuration Changes that ViewModel Survives

- Device rotation (portrait ↔ landscape)  
- Dark mode toggle (day ↔ night theme)  
- Language or locale change (English → Hindi, LTR ↔ RTL)  
- Font size changes (Accessibility settings)  
- Screen density / DPI changes  
- Split-screen or foldable posture change  
- External display connection  
- Hardware keyboard availability  

---

## Exposing Data: Observable Patterns

- **LiveData** – simple, lifecycle-aware  
- **StateFlow** – Kotlin-first, hot state (recommended for Compose)  
- **SharedFlow** – one-time events (snackbars, navigation)  
- **Flow** – cold streams for pipelines  
- **mutableStateOf** – Compose local state  
- **RxJava** – Rx-based projects  
- **callbackFlow / Channel** – system callbacks  

### Example with StateFlow

```kotlin
data class UiState(
    val loading: Boolean = false,
    val message: String? = null
)

class MyViewModel : ViewModel() {

    private val _state = MutableStateFlow(UiState())
    val state: StateFlow<UiState> = _state

    fun loadData() {
        viewModelScope.launch {
            _state.value = UiState(loading = true)
            delay(1000)
            _state.value = UiState(
                loading = false,
                message = "Data loaded!"
            )
        }
    }
}

@Composable
fun MyScreen(
    viewModel: MyViewModel = viewModel()
) {
    val state by viewModel.state.collectAsState()

    if (state.loading) {
        CircularProgressIndicator()
    }

    state.message?.let {
        Text(it)
    }
}
```

---

## How ViewModelProvider Works

- **ViewModelStoreOwner** – Activity / Fragment  
- **ViewModelStore** – holds ViewModels across config changes  
- **ViewModelProvider.Factory** – creates ViewModels  
- **SavedStateHandle** – survives process death (small data)  

### Flow

1. Request ViewModel from ViewModelProvider  
2. Existing instance returned if present  
3. Otherwise, Factory creates a new one  
4. Cleared only when Activity is finished  

```kotlin
override fun onDestroy() {
    super.onDestroy()

    if (isChangingConfiguration) {
        // configuration change
    } else {
        // activity finished
    }
}
```

---

## ActivityThread & ActivityManager (Advanced)

- **ActivityThread** – main entry point of app process  
- **ActivityManagerService (AMS)** – system service managing tasks  

### Flow

ActivityManagerService → ActivityThread → Application → Activity

- AMS calls ActivityThread.attachApplication()  
- Application.onCreate() runs once per process  
- AMS schedules Activity launch  
- Activity lifecycle: onCreate → onStart → onResume  

---

## Shared ViewModel vs Singleton

### Shared ViewModel

- Scoped to Activity or NavGraph  
- Lifecycle-aware and safe  
- Ideal for Fragment communication  

```kotlin
class SharedVm : ViewModel() {
    val selectedItem = MutableLiveData<String>()
}

class FragmentA : Fragment() {
    private val vm: SharedVm by activityViewModels()
}

class FragmentB : Fragment() {
    private val vm: SharedVm by activityViewModels()
}
```

### Singleton

- Global lifetime  
- Risk of memory leaks  
- Suitable only for stateless services  

---

## Key Takeaways

- ViewModel is for **in-memory UI state**  
- SavedStateHandle survives **process death**  
- Room / DataStore for **persistent data**  
- Use Shared ViewModels for Fragment communication  
- Avoid Singletons for UI state  

---

You can explore the complete project on [GitHub](https://github.com/sudesh095/sudesh-learning.git).

Happy Coding, Thanks!

**Sudesh Kumar**  
[www.codexorbit.com](https://www.codexorbit.com)
