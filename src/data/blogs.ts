const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`


export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  subtitle: string;
  category: 'android' | 'kotlin' | 'architecture' | 'performance' | 'security' | 'tutorial';
  date: string;
  readTime: string;
  image: string;
  file: string;
}

export const blogs: Blog[] = [
  {
    id: 'viewmodel',
    title: 'ViewModel and Its Working',
    excerpt:
      'Learn how Android ViewModel survives configuration changes and manages UI-related data safely using StateFlow and SavedStateHandle.',
    subtitle:
      'Android’s ViewModel is a powerful component that keeps your app’s UI data alive even when the screen rotates, dark mode changes, or the system recreates your Activity. It helps separate UI logic from UI elements, making your code cleaner and more reliable. In this blog, you’ll learn how ViewModel works, how it survives configuration changes, and how tools like StateFlow and SavedStateHandle make managing state easier and safer in modern Android apps.',
    category: 'android',
    date: 'Oct 12, 2025',
    readTime: '12 min read',
    image: 'https://github.com/user-attachments/assets/dc5233c4-5ae3-44f2-b013-543bc773c310',
    file: withBase('blogs/viewmodel.md')
  },

  {
    id: 'android-memory-leaks',
    title: 'Android Memory Leaks',
    excerpt:
      'Understand what causes memory leaks in Android, how to detect them, and proven strategies to prevent crashes and slowdowns.',
    subtitle:
      'Memory leaks are one of the most common problems in Android development. They can lead to slow performance, app crashes, and frustrating user experiences. To help developers understand and prevent them.',
    category: 'performance',
    date: 'Oct 6, 2025',
    readTime: '13 min read',
    image: 'https://github.com/user-attachments/assets/df428ada-73e7-4411-a2f4-7d5a056d2612',
    file: withBase('blogs/android-memory-leaks.md')
  },

  {
    id: 'anr-and-strictmode',
    title: 'Android ANR and StrictMode Policy',
    excerpt:
      'Learn why ANRs happen, how StrictMode helps catch issues early, and best practices to keep your main thread responsive.',
    subtitle:
      'If you have worked on Android apps for some time, you might have faced the scary ANR dialog: App isn’t responding. It usually means your main thread is blocked for too long. Catching these issues early can save you (and your users) a lot of pain.',
    category: 'performance',
    date: 'Oct 1, 2025',
    readTime: '14 min read',
    image: 'https://github.com/user-attachments/assets/8ed868fd-fdc6-4be4-99aa-f795d41d0b4c',
    file: withBase('blogs/anr-and-strictmode.md')
  },

  {
    id: 'out-of-memory-in-android',
    title: 'Out Of Memory in Android: Causes, Examples & Fixes',
    excerpt:
      'Deep dive into OutOfMemory errors in Android, common causes, real examples, and practical fixes.',
    subtitle:
      'Out Of Memory (OOM) errors are common in Android development when an app exceeds available memory. Learn the most common causes like large bitmaps, memory leaks, and static references. This blog provides simple Kotlin examples, practical fixes, and tips to optimize your app performance.',
    category: 'performance',
    date: 'Sep 25, 2025',
    readTime: '15 min read',
    image: 'https://github.com/user-attachments/assets/a84540cf-a436-48f3-97a5-d8cc348d0924',
    file: withBase('blogs/out-of-memory-in-android.md')
  },

  {
    id: 'xml-to-compose',
    title: 'From XML to Jetpack Compose',
    excerpt:
      'A personal journey of moving from XML layouts to Jetpack Compose and how it changed Android UI development.',
    subtitle:
      'After 7 years of building Android UIs with XML, I decided to switch to Jetpack Compose — and it completely changed how I think about UI development. In this post, I share my personal experience, what motivated the change, and how Compose made my code cleaner, faster, and more fun to build. If you’re still working with XML layouts, this post will help you understand why the switch is absolutely worth it.',
    category: 'android',
    date: 'Sep 18, 2025',
    readTime: '14 min read',
    image: 'https://github.com/user-attachments/assets/443c6440-7419-4091-b588-b539e3edb2ea',
    file: withBase('blogs/xml-to-compose.md')
  },

  {
    id: 'janky-frames-android-compose',
    title: 'Janky Frames and Rendering Issues in Android',
    excerpt:
      'Identify janky frames using Perfetto and learn Compose optimization techniques for smooth UI rendering.',
    subtitle:
      'Learn how to identify and fix janky frames using Perfetto’s frame timeline and smart Compose optimizations. This guide breaks down real examples, performance traps, and practical fixes — so your Android app always feels fast, fluid, and professional.',
    category: 'performance',
    date: 'Sep 10, 2025',
    readTime: '16 min read',
    image: 'https://github.com/user-attachments/assets/a14f12e6-67c7-469d-9a2c-ac0e0b1a27ca',
    file: withBase('blogs/janky-frames-android-compose.md')
  },

  {
    id: 'inline-reified-noinline',
    title: 'Inline, Reified & Noinline in Kotlin',
    excerpt:
      'Understand inline, noinline, crossinline, and reified with real-world Kotlin examples.',
    subtitle:
      'Kotlin has a few special keywords that often confuse developers at first: inline, noinline, crossinline, and reified. They’re not just fancy language features – they help improve performance, make generic code safer, and give us more flexibility with lambdas. In this post, I’ll explain them in plain English, with examples you can actually use in real projects.',
    category: 'kotlin',
    date: 'Sep 2, 2025',
    readTime: '11 min read',
    image: 'https://github.com/user-attachments/assets/379398a1-b384-4d2d-aaca-6c90c0880230',
    file: withBase('blogs/inline-reified-noinline.md')
  },

  {
    id: 'higher-order-functions',
    title: 'Higher Order Functions in Kotlin',
    excerpt:
      'Learn what higher-order functions are, why they matter, and how to use them effectively in Kotlin.',
    subtitle:
      'Kotlin is a modern and expressive language that gives developers a lot of powerful tools to write better code. One of those tools—though it might sound a bit fancy at first—is the higher-order function. If you have come across this term but never really taken the time to explore it, don’t worry. This blog is here to break it down in a simple, easy-to-understand way.',
    category: 'kotlin',
    date: 'Aug 26, 2025',
    readTime: '10 min read',
    image: 'https://github.com/user-attachments/assets/51df4533-8249-4080-8c04-62e867212440',
    file: withBase('blogs/higher-order-functions.md')
  },

  {
    id: 'api-vs-implementation',
    title: 'API vs Implementation',
    excerpt:
      'Understand the difference between API and implementation and why it matters for clean, scalable architecture.',
    subtitle:
      'An API (short for Application Programming Interface) is basically a set of rules or promises a class or module makes about what it can do. You don’t need to know how it works behind the scenes—you just need to know what’s available to use.',
    category: 'architecture',
    date: 'Aug 18, 2025',
    readTime: '9 min read',
    image: 'https://github.com/user-attachments/assets/349babe3-9b53-44ad-9f79-f37926786e34',
    file: withBase('blogs/api-vs-implementation.md')
  }
];
