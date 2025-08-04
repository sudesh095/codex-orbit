## About me

Hi! 👋 I’m **Sudesh Kumar**, a results-driven Android Developer with over **8 years** of experience
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

# From XML to Jetpack Compose: How I Made the Switch After 7 Years

After nearly seven years of building Android UIs with XML, moving to Jetpack Compose felt like
diving into a completely new ecosystem. At first, I’ll admit — I was hesitant. XML had been my
comfort zone for years: reliable, predictable, and deeply woven into my development workflow.

But like most developers, curiosity eventually got the better of me. I started exploring Compose bit
by bit… and before I knew it, I was hooked.

Now, I can say this with confidence: I’m not going back.

In this post, I want to share:

What convinced me to give Compose a real shot,

How it’s changed the way I approach UI development,

And the biggest lessons I learned through the transition.

Whether you’re just starting to explore Compose or still clinging to XML (no judgment — I’ve been
there), I hope my journey helps you make sense of this shift in modern Android development.

## TThe Old Way: XML and Its Growing Pains

For a long time, the classic combo — XML for layouts and Java or Kotlin for logic — got the job
done. It was the standard, and we got used to it.

But let’s be honest: as apps became more complex, so did the struggles.

Boilerplate was everywhere — Activities, Fragments, Adapters, ViewHolders… just setting things up
felt like a chore.

Every screen meant juggling multiple files — one for the layout, one for binding, another for the
ViewModel, plus maybe some utils on the side.

Managing UI state? That was its own mini headache. Keeping everything in sync across layers often
turned into a fragile mess.

Even with years of experience, building rich UIs in XML sometimes felt like trying to keep too many
plates spinning at once — and one small change could throw the whole thing off balance.

## The Compose Shift: First Impressions

I dipped my toes into Jetpack Compose back when it was around version 1.6 — just to see what the
hype was about. But it wasn’t until version 1.7 that I fully committed to using it in a production
app.

And honestly, a few things stood out right away:

Code is UI: No more bouncing between XML and Kotlin. Everything lives in one place — it just clicks.

Composable functions: Building UI felt more like composing Lego blocks — modular, reusable, easy to
test, and even easier to preview.

Goodbye findViewById() and view binding: UI logic became cleaner and scoped exactly where it
belonged.

Almost overnight, my UI code became smaller, easier to read, and inherently reactive. No extra
wiring, no boilerplate — just straightforward, modern Android development.

## Why I Never Looked Back

Once I got comfortable with Compose, it quickly became my default for building UIs. Here's why I
made the switch—and stuck with it.

### 1. Declarative Style = Way Less Mental Juggling

In Compose, the UI automatically updates based on the current state. That means I no longer have to
write manual logic to sync views with data—it's handled for me.

This shift was a huge relief. It reduced the mental overhead of keeping everything in sync and let
me focus more on *what* the UI should look like, rather than *how* to update it.

### 2. Previews That Actually Save Time

One of my favorite features? **Compose Previews**.

Instead of constantly rebuilding the app just to see layout tweaks, I could see changes live—right
in Android Studio. I could:

- Preview UI in different screen sizes
- Test light/dark themes
- Quickly iterate without launching an emulator

It made UI development faster, smoother, and honestly, more enjoyable.

### 3. Easier Reusability

With Compose, I started writing UI like building with Lego blocks—small, focused Composables that
are easy to reuse across the app.

This made a huge difference, especially in larger projects where design consistency and code
maintainability really matter. Sharing components like buttons, cards, or headers became effortless.

### 4. One Language, One Toolchain

No more switching between XML and Kotlin. With Compose, everything lives in a single Kotlin file.

That means:

- No layout editor lag
- No mismatched IDs or binding headaches
- And way easier onboarding for new developers—especially juniors who just need to focus on Kotlin

## Real Example: From XML to Compose

Here’s a real-world example that built with XML and rewrote it using Compose.

Not only did the code get shorter, but it also became easier to understand and maintain. Plus,
updates (like adding states, themes, or modifiers) took minutes instead of hours.

> I’ll share both versions below so you can see the difference side by side.

**Old XML Version (Login Button):**

```xml

<Button android:id="@+id/loginButton" android:text="Login" android:layout_width="match_parent"
    android:layout_height="wrap_content" />
```

**Compose Version:**

```kotlin
Button(onClick = { viewModel.onLogin() }) {
    Text("Login")
}
```

No more inflation, binding, or null safety issues.

## To be noted, Compose Isn’t Perfect (Yet)

Now, let’s be real—Compose isn’t without its quirks.

- **The learning curve is real**: Switching to a declarative mindset isn’t instant. It takes a bit
  of unlearning, especially if you’ve been in the XML world for years.
- **State hoisting requires planning**: In larger apps, managing state across multiple Composables
  can get tricky if you don’t structure things carefully.
- **Performance tuning can be a puzzle**: Understanding recomposition, key modifiers, and avoiding
  unnecessary redraws takes some practice.

But here’s the thing: none of these challenges ever outweighed the overall productivity boost I
felt.

Once I got the hang of it, Compose made my workflow faster, my code cleaner, and my UI more
flexible.

## How I Introduced Compose into Existing Projects

I didn’t switch everything overnight. Instead, I took a gradual, low-risk approach that worked
really well:

1. **Started small**: I began with self-contained parts of the app—like the settings screen or
   onboarding flow—where the UI was simple and didn’t depend on too many legacy components.

2. **Used refactors as opportunities**: Whenever I had to touch an old XML-based screen, I took it
   as a chance to rebuild it in Compose. That way, I was improving the codebase without disrupting
   anything.

3. **Built a mini design system**: I created reusable Composables for common UI elements like
   buttons, cards, and input fields. This helped keep things consistent across new screens and sped
   up development.

4. **Kept the ViewModel layer**: I didn’t change my architecture. I continued using existing
   `ViewModel`s and `StateFlow` for managing state, and just plugged them into my new Composables.

This phased approach made adoption smooth and safe—and over time, more of the app naturally shifted
to Compose without needing a big rewrite.

## Conclusion: The Future Is Composable

Jetpack Compose didn’t just change how I build UI—it completely shifted how I *think* about it.

It’s more than just a new toolkit. It’s a modern, declarative way of building Android apps that
feels more intuitive, flexible, and in tune with today’s development needs.

With strong support from Android Studio, powerful live previews, and a vibrant (and growing)
developer community, it’s clear that Compose isn’t just a trend—it’s the future.

Whether you’re working on legacy projects or starting something brand new, I genuinely recommend
giving Compose a real shot. Once it clicks, you’ll wonder how you ever built UI without it.

Your future self will thank you.

## What’s Next?

In my next post, I’ll dive deeper into how I structure real-world Jetpack Compose projects using *
*MVVM with Clean Architecture**. I’ll walk through folder structures, share reusable logic patterns,
and show how it all fits together in Compose.

If you’ve already made the switch to Compose—what was your turning point?  
I’d love to hear your experience. Let’s chat in the comments or feel free to connect with me
on [LinkedIn](https://www.linkedin.com/in/sudesh-kumar-android).

    
