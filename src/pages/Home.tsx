import { Link } from 'react-router-dom'
import '../styles.css'

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`

const blogs = [
  {
    id: 'viewmodel',
    title: 'Viemodel and Its Working',
    subtitle: ' Android’s ViewModel is a powerful component that keeps your app’s UI data alive even when the screen rotates, dark mode changes, or the system recreates your Activity. It helps separate UI logic from UI elements, making your code cleaner and more reliable. In this blog, you’ll learn how ViewModel works, how it survives configuration changes, and how tools like StateFlow and SavedStateHandle make managing state easier and safer in modern Android apps.',
    image: 'https://github.com/user-attachments/assets/dc5233c4-5ae3-44f2-b013-543bc773c310',
    file: withBase('blogs/viewmodel.md')
  },
  {
    id: 'android-memory-leaks',
    title: 'Android Memory Leaks',
    subtitle: ' Memory leaks are one of the most common problems in Android development. They can lead to slow performance, app crashes, and frustrating user experiences. To help developers understand and prevent them.',
    image: 'https://github.com/user-attachments/assets/df428ada-73e7-4411-a2f4-7d5a056d2612',
    file: withBase('blogs/android-memory-leaks.md')
  },
  {
    id: 'anr-and-strictmode',
    title: 'Android ANR and Strict Mode Policy',
    subtitle: ' If you have worked on Android apps for some time, you might have faced the scary ANR dialog: App isn’t responding. It usually means your main thread is blocked for too long. Catching these issues early can save you (and your users) a lot of pain.',
    image: 'https://github.com/user-attachments/assets/8ed868fd-fdc6-4be4-99aa-f795d41d0b4c',
    file: withBase('blogs/anr-and-strictmode.md')
  },
   {
    id: 'out-of-memory-in-android',
    title: 'Out Of Memory in Android: Causes, Examples & Fixes',
    subtitle: ' Out Of Memory (OOM) errors are common in Android development when an app exceeds available memory. Learn the most common causes like large bitmaps, memory leaks, and static references. This blog provides simple Kotlin examples, practical fixes, and tips to optimize your app performance.',
    image: 'https://github.com/user-attachments/assets/a84540cf-a436-48f3-97a5-d8cc348d0924',
    file: withBase('blogs/out-of-memory-in-android.md')
  },
  {
    id: 'xml-to-compose',
    title: 'XML and Its Growing Pains',
    subtitle: 'After 7 years of building Android UIs with XML, I decided to switch to Jetpack Compose — and it completely changed how I think about UI development. In this post, I share my personal experience, what motivated the change, and how Compose made my code cleaner, faster, and more fun to build. If you’re still working with XML layouts, this post will help you understand why the switch is absolutely worth it.',
    image: 'https://github.com/user-attachments/assets/443c6440-7419-4091-b588-b539e3edb2ea',
    file: withBase('blogs/xml-to-compose.md')
  },
  {
    id: 'janky-frames-android-compose',
    title: 'Janky Frames and Rendering Issues in Android',
    subtitle: 'Learn how to identify and fix janky frames using Perfetto’s frame timeline and smart Compose optimizations. This guide breaks down real examples, performance traps, and practical fixes — so your Android app always feels fast, fluid, and professional.',
    image: 'https://github.com/user-attachments/assets/a14f12e6-67c7-469d-9a2c-ac0e0b1a27ca',
    file: withBase('blogs/janky-frames-android-compose.md')
  },
  {
    id: 'inline-reified-noinline',
    title: 'Inline Reified Noinline',
    subtitle: 'Kotlin has a few special keywords that often confuse developers at first: inline, noinline, crossinline, and reified. They’re not just fancy language features – they help improve performance, make generic code safer, and give us more flexibility with lambdas. In this post, I’ll explain them in plain English, with examples you can actually use in real projects.',
    image: 'https://github.com/user-attachments/assets/379398a1-b384-4d2d-aaca-6c90c0880230',
    file: withBase('blogs/inline-reified-noinline.md')
  },
  {
    id: 'higher-order-functions',
    title: 'High Order Functions',
    subtitle: 'Kotlin is a modern and expressive language that gives developers a lot of powerful tools to write better code. One of those tools—though it might sound a bit fancy at first—is the higher-order function. If you have come across this term but never really taken the time to explore it, don’t worry. This blog is here to break it down in a simple, easy-to-understand way.',
    image: 'https://github.com/user-attachments/assets/51df4533-8249-4080-8c04-62e867212440',
    file: withBase('blogs/higher-order-functions.md')
  },
  {
    id: 'api-vs-implementation',
    title: 'API vs Implementation',
    subtitle: 'An API (short for Application Programming Interface) is basically a set of rules or promises a class or module makes about what it can do. You don’t need to know how it works behind the scenes—you just need to know what’s available to use. It’s kind of like using a remote control: you press a button to change the channel, but you don’t need to know how the remote actually sends the signal to the TV.',
    image: 'https://github.com/user-attachments/assets/349babe3-9b53-44ad-9f79-f37926786e34',
    file: withBase('blogs/api-vs-implementation.md')
  },
]
// https://github.com/user-attachments/assets/e9a9667e-a5c3-402e-8d33-ccbb7c8f8e01
export default function Home() {
  return (
    <div className="container">
      <div className="blog-grid">
        {blogs.map((blog) => (
          <Link to={`blogs/${blog.id}`} key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-subtitle">{blog.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
