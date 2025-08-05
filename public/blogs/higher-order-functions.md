![HIGH ORDER FUNCTION](/assets/high_order_function.png)

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

# Understanding Higher-Order Functions in Kotlin

Kotlin is a modern and expressive language that gives developers a lot of powerful tools to write
better code. One of those tools—though it might sound a bit fancy at first—is the higher-order
function.

If you've come across this term but never really taken the time to explore it, don’t worry. This
blog is here to break it down in a simple, easy-to-understand way.

Whether you're just starting with Kotlin or have been using it for a while, understanding
higher-order functions can help you write cleaner, more reusable, and more efficient code.

In this post, we'll walk through:

- What are higher-order functions?
- Syntax and explanation
- Real-world examples
- Benefits and use-cases
- Comparison with Java
- Lambdas, function references, and inline functions
- Best practices

## What is a Higher-Order Function?

A higher-order function is just a fancy way of saying:

1. It can take another function as an input, or
2. It can give you a function as its output

In Kotlin, functions are treated like regular values. That means you can do things like:

- Save a function in a variable
- Pass a function to another function
- Or even return a function from another function

Just like you work with numbers or strings, you can work with functions the same way. And that’s
what makes higher-order functions so powerful and flexible.

## Why Use Higher-Order Functions?

Higher-order functions are super helpful because they let you:

- Avoid writing the same code over and over again
- Pull out common behaviors so your code is easier to manage
- Create your own logic flows, kind of like making your own control structures
- Write code that’s cleaner, shorter, and easier to understand

They’re also the reason we can use cool Kotlin features like map, filter, reduce, and other
functional programming tools that make working with lists and data a breeze.

## Simple Example

Let’s create a higher-order function to perform arithmetic operations like add, subtract, and
multiply:

```kotlin
fun calculate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
    return operation(a, b)
}

fun add(x: Int, y: Int) = x + y
fun subtract(x: Int, y: Int) = x - y
fun multiply(x: Int, y: Int) = x * y

fun main() {
    val result1 = calculate(10, 5, ::add)
    val result2 = calculate(10, 5, ::subtract)
    val result3 = calculate(10, 5, ::multiply)

    println("Add: $result1")
    println("Subtract: $result2")
    println("Multiply: $result3")
}
```

We can also use lambda expressions directly:

```kotlin
val divide = calculate(10, 2) { a, b -> a / b }
println("Divide: $divide")
```

## Real-World Use Case: Filtering a List

```kotlin
fun filterList(numbers: List<Int>, predicate: (Int) -> Boolean): List<Int> {
    return numbers.filter(predicate)
}

fun main() {
    val numbers = listOf(1, 2, 3, 4, 5, 6)
    val evenNumbers = filterList(numbers) { it % 2 == 0 }
    println(evenNumbers)
}
```

## Kotlin’s Built-in Higher-Order Functions

Kotlin gives us some super handy higher-order functions built right into the language, especially
for working with lists:

- map: lets you change each item in a list (like turning numbers into their squares)
- filter: helps you pick only the items you want (like keeping only even numbers)
- reduce: combines all items into a single result (like adding up all the numbers)
- forEach: lets you go through each item one by one (like printing each name in a list)

These functions make your code shorter, cleaner, and easier to read.

Example:

```kotlin
val names = listOf("Sudesh", "Suresh", "Sandeep")
val lengths = names.map { it.length }
println(lengths)
```

## Returning Functions from Functions

```kotlin
fun operation(type: String): (Int, Int) -> Int {
    return when (type) {
        "add" -> { a, b -> a + b }
        "multiply" -> { a, b -> a * b }
        else -> { a, b -> a - b }
    }
}
```

## Function Types and Lambdas

```kotlin
val sum: (Int, Int) -> Int = { x, y -> x + y }
println(sum(3, 7))
```

## Inline Functions

```kotlin
inline fun execute(action: () -> Unit) {
    println("Before action")
    action()
    println("After action")
}
```

## Advantages of Higher-Order Functions

- Cleaner Code
- Reusable Logic
- Better Abstraction
- Functional Style

## Kotlin vs Java

Kotlin makes it concise:

```kotlin
val result = calculate(5, 10) { a, b -> a + b }
```

Java requires interface or class definition for the same.

## Challenge

```kotlin
fun <T, R> customMap(list: List<T>, transform: (T) -> R): List<R> {
    val result = mutableListOf<R>()
    for (item in list) {
        result.add(transform(item))
    }
    return result
}
```

## Conclusion

Higher-order functions are one of the key features that make Kotlin so expressive and powerful.
Whether you’re responding to button clicks, building an API, or working with data, they let you
write code that’s cleaner, shorter, and easier to reuse. Once you get comfortable with them, you’ll
wonder how you ever coded without them!

---

## 🔗 References

- [Kotlin Official Docs - Higher Order Functions](https://kotlinlang.org/docs/lambdas.html#higher-order-functions)

Happy Coding, Thanks!

**Sudesh Kumar**

[www.codexorbit.com](https://www.codexorbit.com)