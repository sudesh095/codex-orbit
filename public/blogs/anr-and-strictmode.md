![ANR](https://github.com/user-attachments/assets/8ed868fd-fdc6-4be4-99aa-f795d41d0b4c)

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

# Debugging ANRs in Android with StrictMode and Bugreport  

If you have worked on Android apps for some time, you might have faced the scary **ANR** dialog: *“App isn’t responding”*.  
It usually means your **main thread is blocked** for too long.  
Catching these issues early can save you (and your users) a lot of pain.  

In this blog, I’ll share how I use **StrictMode** and **Bugreport** to catch and debug ANRs before release.  

---

## What is StrictMode?  
StrictMode is like a watchdog provided by Android.  
It checks if you are doing something risky on the **main thread** (like disk I/O, network call, long computation).  
It can also warn you about **leaked resources** like Cursors, SQLite objects, or Activities.  

When a violation happens, StrictMode can:  
- Log it in Logcat  
- Show a red flash on screen  
- Even crash the app (in debug builds only)  

---

## Enabling StrictMode  

The best place to enable StrictMode is in your Application class.  
I usually enable it only in **debug builds**, because we don’t want users to see red flashes or random crashes in production.  

```kotlin
class MyApp : Application() {
    override fun onCreate() {
        super.onCreate()

        if (BuildConfig.DEBUG) {
            StrictMode.setThreadPolicy(
                StrictMode.ThreadPolicy.Builder()
                    .detectAll()           // catch disk, network, etc.
                    .penaltyLog()          // log in Logcat
                    .penaltyFlashScreen()  // quick red flash
                    .build()
            )

            StrictMode.setVmPolicy(
                StrictMode.VmPolicy.Builder()
                    .detectAll()      // activity leaks, cursor leaks, etc.
                    .penaltyLog()
                    .build()
            )
        }
    }
}
```

And don’t forget to set your app class in AndroidManifest.xml:  
```xml
<application
    android:name=".MyApp"
    ... >
```

---

## Quick Demo  

Let’s try something that should **never** be done on main thread:  
a network call.  

```kotlin
@Composable
fun StrictModeDemoButton() {
    val context = LocalContext.current
    Button(onClick = {
        // BAD: running network on main thread
        val text = URL("https://www.google.com").readText()
        Toast.makeText(context, text.take(20), Toast.LENGTH_SHORT).show()
    }) {
        Text("Trigger StrictMode Violation")
    }
}
```

When you click this button in a debug build, Logcat will show:  
```
StrictMode policy violation: android.os.NetworkOnMainThreadException
```

If you enabled penaltyFlashScreen(), the screen will flash red.  

That’s StrictMode saving you from shipping an ANR.  

---

## Why BuildConfig?  

BuildConfig is a class generated automatically for every module.  
It gives you constants like:  
- BuildConfig.DEBUG → true for debug build, false for release  
- BuildConfig.APPLICATION_ID  
- Your custom fields (API URL, flags, etc.)  

I use BuildConfig.DEBUG to enable StrictMode only for debug:  
```kotlin
if (BuildConfig.DEBUG) {
    // enable strict mode
}
```

You can also add your own values in build.gradle:
```kotlin
buildTypes {
    debug {
        buildConfigField("String", "BASE_URL", ""https://dev.api.com/"")
    }
    release {
        buildConfigField("String", "BASE_URL", ""https://prod.api.com/"")
    }
}
```

Now in code:
```kotlin
val baseUrl = BuildConfig.BASE_URL
```

---

## Practicing ANR with Bugreport  

ANR debugging sounds scary, but you can practice it step by step. Here’s a simple flow you can follow in any project.  

### 1. Trigger an ANR  
Add a button in your app that blocks the main thread:  

```kotlin
Button(onClick = {
    Thread.sleep(10000) // freeze UI for 10s
}) {
    Text("Trigger ANR")
}
```  

When you click it, the app will freeze. After 5–10 seconds, Android may show the **“App isn’t responding”** dialog.  

---

### 2. Capture Bugreport  
Open a terminal and run:  

```bash
adb bugreport anr_report.zip
```  

This creates a big ZIP file (anr_report.zip) with all logs and traces at that moment.  

---

### 3. Look Inside the Report  
1. Unzip anr_report.zip.  
2. Open the folder **FS/data/anr/** → you’ll see files like anr_12345.txt.  
3. Open that file and search for:  

- am_anr → tells you which component caused the ANR.  
- main thread → shows what the main thread was doing (for example, stuck in Thread.sleep).  

---

### 4. Quick Alternative: Stack Dump  
If your app is frozen and you want only the thread stack:  

```bash
adb shell pidof com.yourpackage.app   # get process ID
adb shell kill -s QUIT <pid>          # dump stacks into traces.txt
adb pull /data/anr/traces.txt         # copy file to your PC
```  

Open traces.txt → check the main thread stack.  

---

### 5. (Optional) Visual Check with Perfetto  
- Record a system trace with:  
  ```bash
  adb shell perfetto -o /data/misc/perfetto-traces/anr_trace.pb -t 15s sched freq idle am wm gfx view binder_driver
  adb pull /data/misc/perfetto-traces/anr_trace.pb
  ```  
- Open [ui.perfetto.dev](https://ui.perfetto.dev) and load the file.  
- Highlight the **main thread** → you’ll see the long block slice that caused the ANR.  

---

## In Short  
1. **Freeze app** → e.g., Thread.sleep(10000)
2. **Run bugreport** → adb bugreport anr_report.zip
3. **Check FS/data/anr/** → see main thread stack  
4. (Optional) **Perfetto** → visualize long main-thread block  

That’s it! You now know how to **reproduce, capture, and analyze** an ANR like a pro.  

---

## Final Thoughts  

StrictMode, BuildConfig, and Bugreport are small but very powerful tools.  
They don’t add heavy code, but they save you from common mistakes that lead to **ANRs** and bad user experience.  

- Enable StrictMode in your debug builds.  
- Use BuildConfig to keep debug/release behaviors separate.  
- Use Bugreport to capture and analyze ANRs.  

This simple workflow makes your apps more stable and your users happier.  

You can explore the complete project on [GitHub](https://github.com/sudesh095/anr-demo.git). Try running it, check how we can produce ANR and Fix it.

---

Happy Coding, Thanks!

**Sudesh Kumar**

[www.codexorbit.com](https://www.codexorbit.com)
