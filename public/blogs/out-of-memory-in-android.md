![OUTOFMEMORY](https://github.com/user-attachments/assets/a84540cf-a436-48f3-97a5-d8cc348d0924)

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

# Understanding “Out Of Memory” (OOM) in Android – Causes, Examples, and Fixes

If you’ve ever seen your Android app crash with the scary message  
> **“java.lang.OutOfMemoryError”**,  

you’re not alone! This is one of the most common — and frustrating — issues faced by developers. Let’s break it down in a simple and practical way.

## What Does “Out Of Memory” Mean?

Android apps run inside a limited memory sandbox. Each app gets a certain amount of heap space, and once that limit is crossed, the app throws an **OutOfMemoryError (OOM)**.  

It basically means your app is trying to hold **more data in memory** than Android allows.

## Common Reasons for OOM in Android

Here are the top real-world causes (with examples) that often lead to memory crashes.

### 1. Memory Leaks

A **memory leak** happens when objects that are no longer needed stay referenced and never get garbage-collected.

**Example:**
```kotlin
object MemoryLeakSingleton {
    var context: Context? = null
}
```
If you assign an **Activity** context here, it stays in memory forever — even after the Activity is closed.

**Fix:**  
Always use **applicationContext** instead of **Activity** context in singletons.

### 2. Loading Large Bitmaps

Images are the number one cause of memory issues in Android.  
A single 4000×4000 image can take **64 MB** in memory!

**Example:**
```kotlin
val bitmap = BitmapFactory.decodeResource(resources, R.drawable.large_image)
```

**Fix:**
Use **inSampleSize** to reduce bitmap size.
```kotlin
val options = BitmapFactory.Options().apply { inSampleSize = 4 }
val bitmap = BitmapFactory.decodeResource(resources, R.drawable.large_image, options)
```

### 3. Handlers, Runnables, and Delayed Tasks

If you post a **Runnable** with delay on an Activity and forget to remove it on destroy — memory leak occurs.

**Example:**
```kotlin
handler.postDelayed({
    Log.d("OOM", "Leak!")
}, 60000)
```

**Fix:**
```kotlin
override fun onDestroy() {
    handler.removeCallbacksAndMessages(null)
    super.onDestroy()
}
```

### 4. Large Collections and Heavy JSON

Parsing or storing large lists, maps, or JSON objects in memory can lead to OOM.

**Example:**
```kotlin
val jsonArray = JSONArray(largeJsonString)
```

**Fix:**
Use **streaming parsers** like **JsonReader** or **pagination** to load smaller chunks.

### 5. Context Misuse

Passing an **Activity** context to adapters, singletons, or libraries keeps your entire Activity in memory.

**Fix:**
Always prefer:
```kotlin
val safeContext = context.applicationContext
```

### 6. Unclosed Resources

Forgetting to close files, cursors, or streams can hold memory longer than needed.

**Fix:**
```kotlin
FileInputStream(file).use { input ->
    val text = input.readBytes()
}
```

The **.use {}** block automatically closes the resource.

### 7. Heavy Animations or GIFs

Large frame-by-frame animations load every frame in memory.  
**Solution:** Use **Lottie** or **AnimatedImageDrawable** which are memory-efficient.

### 8. Fragment Retention

Old fragments or retained instances can keep activities alive in memory.

**Fix:**  
Use **ViewModel** to hold data across configuration changes instead of **retainInstance**.

### 9. Glide or Image Library Misuse

Calling **.submit()** without clearing references can keep bitmaps alive.

**Fix:**
```kotlin
Glide.with(this)
    .load(url)
    .into(imageView)
```
And limit memory usage:
```kotlin
Glide.get(this).setMemoryCategory(MemoryCategory.LOW)
```

### 10. Heap Limit Reached

Sometimes your app simply uses more memory than the device allows — especially on low-end phones.

**Check available heap:**
```kotlin
val maxMemory = Runtime.getRuntime().maxMemory() / 1024 / 1024
Log.d("App", "Max memory available: $maxMemory MB")
```

## Tools to Detect and Prevent OOM

| Tool | Purpose |
|------|----------|
| Android Profiler | View memory usage & GC events |
| LeakCanary | Detect memory leaks automatically |
| StrictMode | Catch leaked closables |
| WeakReference | Avoid strong references for short-lived objects |

## Quick Tips to Avoid OOM
- Use Glide/Coil/Picasso for images instead of manual decoding  
- Always unregister listeners & observers  
- Prefer Application Context over Activity Context where possible  
- Avoid storing large data in memory (use database or cache)  
- Regularly test with LeakCanary or Android Profiler

## Example OOM Crash Log
```
java.lang.OutOfMemoryError: Failed to allocate a 16777220 byte allocation
```
This means the app tried to allocate around **16 MB**, but the heap was full.

## Conclusion

Out Of Memory errors are painful but **100% preventable** once you understand what causes them.  
By managing contexts properly, optimizing image loading, and cleaning up references, your app can stay smooth, stable, and crash-free.

You can explore the complete project on [GitHub](https://github.com/sudesh095/memory-leaks.git). Try running it, check the out of memory and fixed examples, and start applying these safe practices in your own apps.

Happy Coding, Thanks!

**Sudesh Kumar**

[www.codexorbit.com](https://www.codexorbit.com)


### Tags:
**#AndroidDevelopment** **#OOM** **#MemoryLeak** **#JetpackCompose** **#Glide** **#KotlinTips**
