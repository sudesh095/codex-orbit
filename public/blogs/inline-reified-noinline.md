![Inline Refied Noinline](https://github.com/user-attachments/assets/379398a1-b384-4d2d-aaca-6c90c0880230)

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

# Mastering inline, noinline, crossinline, and reified in Kotlin

Kotlin has a few special keywords that often confuse developers at first: **inline**, **noinline**, **crossinline**, and **reified**.  

They’re not just fancy language features – they help improve performance, make generic code safer, and give us more flexibility with lambdas. In this post, I’ll explain them in plain English, with examples you can actually use in real projects.

---

## 1. inline

### What does inline mean?

Normally, when you call a function, Kotlin sets up a new stack frame. This is fine most of the time, but it adds a bit of overhead. With higher-order functions (functions that take lambdas), this overhead also includes creating objects for the lambdas.

The **inline** keyword tells the compiler:  
“Instead of calling this function, copy its body directly into the place where it’s used.”  

This saves both the function call overhead and the lambda allocation.

### Example

```kotlin
inline fun greet(name: String, action: (String) -> Unit) {
    println("Start")
    action(name)
    println("End")
}

fun main() {
    greet("Sudesh") {
        println("Hello, $it")
    }
}

// The compiler basically expands this into:

println("Start")
println("Hello, Sudesh")
println("End")
```

### When to use it

- When you want to avoid overhead of lambdas in performance-sensitive code.
- When you want to use reified type parameters (we’ll cover this later).

### When Not to Use

- If the function is very large, inlining it everywhere can blow up your code size.
- If it’s called a lot, you might make your APK bigger without real benefit.

---

## 2. noinline

### Why noinline?

By default, all lambdas in an inline function are inlined. But sometimes you need to keep a lambda as an object instead of inlining it. For example, you might want to store it in a variable or pass it somewhere else. That’s when you use noinline.

```kotlin
inline fun doWork(
    inlineAction: () -> Unit,
    noinline storeLater: () -> Unit
) {
    println("Doing inline work:")
    inlineAction() // gets inlined

    println("Storing delayed work:")
    val runnable = Runnable { storeLater() } // can't inline this
    runnable.run()
}
```

### When to Use **noinline**

Use **noinline** if:

- You need to **store** a lambda into a variable.
- You want to **return** the lambda.
- You want to **pass** the lambda to another function.

### Example (noinline)

```kotlin
inline fun doWork(
    inlineAction: () -> Unit,
    noinline storeLater: () -> Unit
) {
    println("Doing inline work:")
    inlineAction()

    println("Storing delayed work:")
    val runnable = Runnable {
        storeLater()
    }
    runnable.run()
}

fun main() {
    doWork(
        inlineAction = { println("Running now") },
        storeLater = { println("Running later") }
    )
}
```

### Explanation

- **inlineAction** is directly inlined at the call site.
- **storeLater** is not inlined and is compiled as a real object implementing **Function0<Unit>**.

If you **don’t** use **noinline**, you’ll get a compiler error when trying to store or pass the
lambda.

---

## 3. crossinline

### What is crossinline?

Inline lambdas normally allow non-local returns. That means you can write return inside the lambda, and it will return from the outer function.

But if your lambda is being called inside another scope (like a coroutine, thread, or Runnable), this can break things. Kotlin stops you and asks you to mark the lambda as crossinline. This tells the compiler:
“You can inline this lambda, but don’t allow return from it.”

### Example

```kotlin
inline fun doTask(crossinline work: () -> Unit) {
    val runnable = Runnable {
        work() // Cannot return from outer function here
    }
    runnable.run()
}

fun main() {
    doTask {
        println("Running task")
        // return  Compiler Error if used
    }
}
```

### Use Case

- Lambdas that are executed in a different scope (e.g., coroutine, thread).
- Prevents accidental or unsafe **return** statements from affecting the outer function.

---

## 4. reified

### Problem with Generics: Type Erasure

In Java and Kotlin, generic type information is **erased** at runtime. So you can't check a type
like this:

```kotlin
fun <T> isOfType(value: Any): Boolean {
    return value is T // Error
}
```

### Solution: inline + reified

If you make the function inline and the type parameter reified, Kotlin will retain the type at
runtime.

### Example: reified type check

```kotlin
inline fun <reified T> isOfType(value: Any): Boolean {
    return value is T
}

fun main() {
    println(isOfType<String>("Hello"))  // true
    println(isOfType<Int>("Hello"))     // false
}
```

Now you can use **is T**, **T::class**, and **T::class.java**, which would otherwise not be allowed.

### Real Use Case: JSON Parsing

```kotlin
inline fun <reified T> parseJson(json: String): T {
    return Gson().fromJson(json, T::class.java)
}

val userJson = "{\"name\":\"Sudesh\"}"
val user: User = parseJson(userJson)
```

---

## Summary Table

- **inline**
  - Inlined: Yes
  - Store lambda: No
  - Return allowed: Yes
  - Use case: Performance, **reified** support

- **noinline**
  - Inlined: No
  - Store lambda: Yes
  - Return allowed: Yes
  - Use case: Store or pass lambda

- **crossinline**
  - Inlined: Yes
  - Store lambda: Yes
  - Return allowed: No
  - Use case: Safe execution in threads/coroutines

- **reified**
  - Requires **inline**
  - Not a lambda
  - Return allowed: Yes
  - Use case: Runtime type retention

---

## Final Thoughts

These four keywords—**inline**, **noinline**, **crossinline**, and **reified**—are powerful tools in
Kotlin’s language toolbox. They make generic programming safer and more expressive, and improve
runtime efficiency, especially in Android and Kotlin Multiplatform development.

- Use **inline** to eliminate function call overhead.
- Use **noinline** when you want to pass or store a lambda.
- Use **crossinline** to prevent invalid return in lambdas executed outside the call context.
- Use **reified** when you want to retain type information for generic functions.

Understanding how they work under the hood will give you an edge in writing both performant and safe
Kotlin code.

Happy coding!

---

Sudesh Kumar

[www.codexorbit.com](https://www.codexorbit.com)
