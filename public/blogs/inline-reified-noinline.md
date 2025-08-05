![Inline Refied Noinline](./assets/inline_reified_noinline.png)

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

# Mastering `inline`, `noinline`, `crossinline`, and `reified` in Kotlin

Kotlin provides developers with powerful keywords that offer both performance boosts and language
expressiveness. Among the most essential for advanced Kotlin developers are `inline`, `noinline`,
`crossinline`, and `reified`. These features help improve runtime efficiency, enable type-safe
operations with generics, and allow for more flexible lambda usage in higher-order functions.

In this blog post, we'll break down each keyword with detailed explanations, examples, and practical
use cases. Whether you're an experienced Android developer or a backend Kotlin engineer,
understanding these will help you write cleaner, safer, and faster Kotlin code.

---

## 1. `inline` Functions

### What is an `inline` Function?

By default, every function call in Kotlin introduces a bit of overhead because it involves setting
up a new stack frame. This becomes particularly problematic with higher-order functions—functions
that accept other functions (lambdas) as parameters—because they involve not just function call
overhead, but also object allocation for the lambda.

Kotlin's `inline` keyword solves this by instructing the compiler to insert the **function’s body**
directly at the **call site**. This reduces overhead and improves performance.

### Syntax and Example

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
```

The compiled code will resemble:

```kotlin
println("Start")
println("Hello, Sudesh")
println("End")
```

### Why Use `inline`?

- Reduces overhead of function calls and lambda allocations.
- Enables usage of `reified` types (discussed later).
- Improves performance in performance-critical areas like UI rendering or JSON parsing.

### When Not to Use

- If the function is very large, inlining it can lead to code bloat.
- If the function is used frequently, repeated code may increase APK size.
- If you don't need lambda parameters or `reified` types, inlining might be unnecessary.

---

## 2. `noinline`

### What is `noinline`?

When a function is marked as `inline`, all of its lambda parameters are inlined by default. However,
there are situations where you **don't want to inline** a particular lambda. For such cases, Kotlin
provides the `noinline` modifier.

### When to Use `noinline`

Use `noinline` if:

- You need to **store** a lambda into a variable.
- You want to **return** the lambda.
- You want to **pass** the lambda to another function.

### Example

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

- `inlineAction` is directly inlined at the call site.
- `storeLater` is not inlined and is compiled as a real object implementing `Function0<Unit>`.

If you **don’t** use `noinline`, you’ll get a compiler error when trying to store or pass the
lambda.

---

## 3. `crossinline`

### What is `crossinline`?

Normally, inlined lambdas allow **non-local returns**—meaning, you can return from the **caller
function** within the lambda. But when you're executing that lambda inside another context like a
coroutine, thread, or `Runnable`, this behavior becomes unsafe and is disallowed.

To fix this, Kotlin provides the `crossinline` modifier, which **disallows non-local returns** in
the lambda.

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
        // return  ❌ Compiler Error if used
    }
}
```

### Use Case

- Lambdas that are executed in a different scope (e.g., coroutine, thread).
- Prevents accidental or unsafe `return` statements from affecting the outer function.

---

## 4. `reified` Type Parameters

### Problem with Generics: Type Erasure

In Java and Kotlin, generic type information is **erased** at runtime. So you can't check a type
like this:

```kotlin
fun <T> isOfType(value: Any): Boolean {
    return value is T // ❌ Error
}
```

### Solution: `inline` + `reified`

If you make the function `inline` and the type parameter `reified`, Kotlin will retain the type at
runtime.

### Example

```kotlin
inline fun <reified T> isOfType(value: Any): Boolean {
    return value is T
}

fun main() {
    println(isOfType<String>("Hello"))  // true
    println(isOfType<Int>("Hello"))     // false
}
```

Now you can use `is T`, `T::class`, and `T::class.java`, which would otherwise not be allowed.

### Real Use Case: JSON Parsing

```kotlin
inline fun <reified T> parseJson(json: String): T {
    return Gson().fromJson(json, T::class.java)
}

val userJson = "{\"name\":\"Sudesh\"}"
val user: User = parseJson(userJson)
```

---

## 🔄 Summary Table

| Keyword       | Inlined?       | Can store lambda? | Can return? | Use Case                             |
|---------------|----------------|-------------------|-------------|--------------------------------------|
| `inline`      | ✅ Yes          | ❌ No              | ✅ Yes       | Performance, `reified` support       |
| `noinline`    | ❌ No           | ✅ Yes             | ✅ Yes       | Store, pass lambda                   |
| `crossinline` | ✅ Yes          | ✅ Yes             | ❌ No        | Safe execution in threads/coroutines |
| `reified`     | ✅ Needs inline | ❌ Not a lambda    | ✅ Yes       | Retain type info at runtime          |

---

## 🧠 Final Thoughts

These four keywords—`inline`, `noinline`, `crossinline`, and `reified`—are powerful tools in
Kotlin’s language toolbox. They make generic programming safer and more expressive, and improve
runtime efficiency, especially in Android and Kotlin Multiplatform development.

- Use `inline` to eliminate function call overhead.
- Use `noinline` when you want to pass or store a lambda.
- Use `crossinline` to prevent invalid `return`s in lambdas executed outside the call context.
- Use `reified` when you want to retain type information for generic functions.

Understanding how they work under the hood will give you an edge in writing both performant and safe
Kotlin code.

Happy coding!

---

*Written by Sudesh Kumar*

[www.codexorbit.com](https://www.codexorbit.com)

