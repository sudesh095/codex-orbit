![API VS IMPLEMENTATION](./assets/api_vs_implementation.png)

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

# Understanding `implementation` vs `api` in Android Gradle: A Deep Dive

<!-- *Published on August 5, 2025* -->

## Introduction

If you’ve worked on a modular Android project, you’ve probably come across the terms implementation
and api in your Gradle files—and wondered what they really mean. For many developers, especially
those just getting started with Gradle, this can be a bit confusing. In simple terms, these keywords
control how one module shares its dependencies with other modules. And the choice between them can
affect everything from how fast your app builds to how clean and maintainable your codebase is.

In this post, I’ll walk you through what implementation and api actually do in Gradle, and show you
how they work using real-world Android examples you can relate to.

## What is an API?

An API (short for Application Programming Interface) is basically a set of rules or promises a class
or module makes about what it can do. You don’t need to know how it works behind the scenes—you just
need to know what’s available to use. It’s kind of like using a remote control: you press a button
to change the channel, but you don’t need to know how the remote actually sends the signal to the
TV.

For instance:

```kotlin
interface AuthService {
    fun login(username: String, password: String): Boolean
}
```

This is what an API does — it shows you **what you can do**, but not **how it’s done** behind the
scenes.

---

## What is an Implementation?

The **implementation** is the real code that does the work behind the API. While the API tells you
what’s possible, the implementation is where all the logic lives—how the methods are written, how
data is processed, and how things actually happen under the hood. It’s like the engine inside a car:
the buttons and controls (API) let you drive, but the engine (implementation) is what makes it move.

```kotlin
class AuthServiceImpl : AuthService {
    override fun login(username: String, password: String): Boolean {
        // Actual login logic
        return true
    }
}
```

You can have **multiple ways to implement** the same API. As long as each one sticks to the
agreed-upon rules (the contract), you can swap them out without breaking anything. It’s like having
different brands of TV remotes that all work with the same TV—they might look different, but they
follow the same commands.

---

## Gradle Dependency Configurations: `api` vs `implementation`

In Android development, it’s common to split your app into smaller, focused parts called **modules
**. This helps keep your code organized and makes it easier to manage as the project grows.

```
MyApp/
├── app/         // Main Android app module
├── core/        // Business logic and shared classes
├── network/     // Network layer
```

When we declare dependencies between these modules, we have two main options in Gradle:

```kotlin
dependencies {
    implementation(project(":network"))
    // OR
    api(project(":network"))
}
```

Let’s explore more about it.

---

## What `implementation` Means

When you use `implementation`, you’re saying:  
“This dependency is just for this module’s internal use—no one else needs to know about it.”

- Other modules won’t have access to it.
- It keeps things more private and contained.
- And as a bonus, it can make your builds faster, because fewer parts of the app need to recompile
  when something changes.

### Example:

```kotlin
// core/build.gradle.kts
dependencies {
    implementation(project(":network"))
}
```

So, if the `app` module depends on `core`, it **won’t be able to see or use** anything from the
`network` module directly—because `core` is keeping that dependency to itself.

---

## What `api` Means

When you use `api`, you’re saying:  
“This dependency is part of what I’m offering to other modules.”

- Any module that depends on yours can also use this dependency.
- It’s like you're sharing it publicly, not keeping it private.
- But be careful—if that shared dependency changes, other modules might need to recompile too, which
  can slow down your build.

### Example:

```kotlin
// core/build.gradle.kts
dependencies {
    api(project(":network"))
}
```

That means the `app` module can now directly use any public classes from both `core` and `network`
—because `core` is openly sharing its `network` dependency.

---

## Visual Explanation

| What You Use   | Can Other Modules See It? | Faster Builds? | When to Use It                        |
|----------------|---------------------------|----------------|---------------------------------------|
| implementation | No                        | Yes            | When it’s just your module’s business |
| api            | Yes                       | Not really     | When you want to share with others    |

---

## Real Project Example

### Project Layout:

```
MyApp/
├── app/
├── core/
├── network/
```

### network/ApiService.kt

```kotlin
class ApiService {
    fun fetchData(): String = "Data from network"
}
```

### core/Repository.kt

```kotlin
class Repository(private val api: ApiService) {
    fun getData(): String = api.fetchData()
}
```

#### Now in `core/build.gradle.kts`:

- If you use `implementation`, the `ApiService` stays hidden inside the `core` module. The `app`
  module won’t even know it exists.
- But if you use `api`, `core` is basically saying, “Hey, I’m using `ApiService`, and you can use it
  too.” So now, the `app` module can directly access `ApiService` without needing to add the
  `network` module as a separate dependency.

---

## Best Practices

1. Stick with `implementation` most of the time — it’s safer and keeps things tidy.
2. Use `api` only when you really need to share a dependency with other modules.
3. Keep your modules focused and well-separated — don’t let everything depend on everything else. It
   makes your project easier to manage.

---

## Summary

Knowing when to use `api` and when to use `implementation` can really make a difference in how clean
and scalable your Android project is.

- `api` is for when you want to share something with other modules.
- `implementation` is for keeping things private and speeding up your builds.

Use them smartly, and you’ll have an app that’s easier to manage, faster to build, and better
organized.

---

## Conclusion

When you use `api` and `implementation` the right way, your project ends up with cleaner
architecture, quicker builds, and a smoother developer experience. So don’t just throw every library
under `api`—be intentional. Ask yourself: “Do other modules really need to see this?”

Happy Coding, Thanks!

**Sudesh Kumar**

[www.codexorbit.com](https://www.codexorbit.com)
