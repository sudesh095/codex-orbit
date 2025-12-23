import { useState } from 'react';
import { BlogCard } from '../components/BlogCard';
import { GlassCard } from '../components/GlassCard';
import { Search, TrendingUp } from 'lucide-react';
import { blogs } from "../data/blogs";

export function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'android', 'kotlin', 'architecture', 'performance'];  //, 'security', 'tutorial'

  // const blogs = [
  //   {
  //     title: 'Mastering Kotlin Coroutines: From Basics to Advanced Patterns',
  //     excerpt: 'Deep dive into Kotlin Coroutines, exploring structured concurrency, flow operators, and best practices for building responsive Android applications.',
  //     date: 'Oct 10, 2025',
  //     readTime: '12 min read',
  //     category: 'kotlin'
  //   },
  //   {
  //     title: 'Building Scalable Android Apps with Clean Architecture',
  //     excerpt: 'A comprehensive guide to implementing Clean Architecture in Android applications. Learn how to structure your code for maintainability and testability.',
  //     date: 'Oct 5, 2025',
  //     readTime: '15 min read',
  //     category: 'architecture'
  //   },
  //   {
  //     title: 'Jetpack Compose Performance Optimization Techniques',
  //     excerpt: 'Discover proven techniques to optimize Jetpack Compose apps. From recomposition strategies to performance profiling tools.',
  //     date: 'Sep 28, 2025',
  //     readTime: '10 min read',
  //     category: 'performance'
  //   },
  //   {
  //     title: 'Securing Android Apps: A Complete Guide',
  //     excerpt: 'Learn how to implement security best practices in Android development, including encryption, secure storage, and certificate pinning.',
  //     date: 'Sep 22, 2025',
  //     readTime: '18 min read',
  //     category: 'security'
  //   },
  //   {
  //     title: 'Getting Started with Kotlin Multiplatform Mobile',
  //     excerpt: 'Step-by-step tutorial on building your first KMP application. Share business logic between Android and iOS while maintaining native UI.',
  //     date: 'Sep 15, 2025',
  //     readTime: '20 min read',
  //     category: 'tutorial'
  //   },
  //   {
  //     title: 'State Management in Jetpack Compose: A Deep Dive',
  //     excerpt: 'Exploring different state management approaches in Compose, from remember and mutableStateOf to ViewModel integration.',
  //     date: 'Sep 8, 2025',
  //     readTime: '14 min read',
  //     category: 'android'
  //   },
  //   {
  //     title: 'Advanced Flow Patterns for Android Developers',
  //     excerpt: 'Master advanced Kotlin Flow patterns including StateFlow, SharedFlow, and custom operators for reactive programming.',
  //     date: 'Sep 1, 2025',
  //     readTime: '16 min read',
  //     category: 'kotlin'
  //   },
  //   {
  //     title: 'Dependency Injection with Hilt: Best Practices',
  //     excerpt: 'Complete guide to using Hilt for dependency injection in Android. Learn scoping, modules, and advanced testing techniques.',
  //     date: 'Aug 25, 2025',
  //     readTime: '11 min read',
  //     category: 'android'
  //   },
  //   {
  //     title: 'Room Database: Advanced Queries and Migrations',
  //     excerpt: 'Go beyond basic Room usage. Learn complex queries, database migrations, and performance optimization strategies.',
  //     date: 'Aug 18, 2025',
  //     readTime: '13 min read',
  //     category: 'android'
  //   },
  //   {
  //     title: 'Testing Strategies for Android Applications',
  //     excerpt: 'Comprehensive testing approach covering unit tests, integration tests, and UI tests using JUnit, MockK, and Espresso.',
  //     date: 'Aug 10, 2025',
  //     readTime: '17 min read',
  //     category: 'tutorial'
  //   },
  //   {
  //     title: 'Memory Management and Leak Prevention in Android',
  //     excerpt: 'Identify and fix memory leaks in Android apps. Learn about profiling tools, common pitfalls, and prevention strategies.',
  //     date: 'Aug 3, 2025',
  //     readTime: '12 min read',
  //     category: 'performance'
  //   },
  //   {
  //     title: 'Building Custom Compose UI Components',
  //     excerpt: 'Learn how to create reusable, customizable UI components in Jetpack Compose. From basic modifiers to complex animations.',
  //     date: 'Jul 27, 2025',
  //     readTime: '15 min read',
  //     category: 'android'
  //   },
  //   {
  //     title: 'Kotlin DSLs: Writing Expressive Code',
  //     excerpt: 'Master the art of creating type-safe builders and DSLs in Kotlin. Make your APIs more intuitive and expressive.',
  //     date: 'Jul 20, 2025',
  //     readTime: '10 min read',
  //     category: 'kotlin'
  //   },
  //   {
  //     title: 'App Startup Optimization: Reducing Launch Time',
  //     excerpt: 'Practical techniques to improve Android app startup performance. From lazy initialization to startup profiling.',
  //     date: 'Jul 13, 2025',
  //     readTime: '14 min read',
  //     category: 'performance'
  //   },
  //   {
  //     title: 'MVVM vs MVI: Choosing the Right Architecture',
  //     excerpt: 'Compare MVVM and MVI architecture patterns. Understand when to use each and how to implement them effectively.',
  //     date: 'Jul 6, 2025',
  //     readTime: '16 min read',
  //     category: 'architecture'
  //   }
  // ];

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = blogs[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
      {/* Header */}
      {/* <div className="mb-12">
        <h1 className="text-[#DE3484] mb-4">Tech Blog</h1>
        <p className="text-gray-400 max-w-3xl">
          Sharing knowledge about Android development, Kotlin, architecture patterns, and mobile engineering best practices. 
          Learn from real-world experiences and stay updated with the latest trends.
        </p>
      </div> */}

      {/* Featured Post */}
      {/* <GlassCard className="p-8 mb-12 border-[#DE3484]/30 bg-gradient-to-br from-[#DE3484]/5 to-[#17A7FF]/5">
        <div className="flex items-center gap-2 text-[#DE3484] mb-4">
          <TrendingUp size={20} />
          <span className="text-sm">Featured Post</span>
        </div>
        <h2 className="mb-4">{featuredBlog.title}</h2>
        <p className="text-gray-400 mb-6">{featuredBlog.excerpt}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{featuredBlog.date}</span>
          <span>•</span>
          <span>{featuredBlog.readTime}</span>
          <span>•</span>
          <span className="px-2 py-1 rounded-md bg-[#DE3484]/10 text-[#DE3484]">
            {featuredBlog.category}
          </span>
        </div>
      </GlassCard> */}

      {/* Search and Categories */}
      <div className="mb-8 space-y-4">
        <GlassCard className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:border-[#DE3484]/50 transition-colors text-white placeholder-gray-500"
            />
          </div>
        </GlassCard>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-[#DE3484]/20 text-[#DE3484] border border-[#DE3484]/50'
                  : 'bg-white/[0.08] text-gray-400 border border-white/10 hover:border-white/20'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {filteredBlogs.map((blog) => (
                  <BlogCard
                   key={blog.id}
                       id={blog.id}
                        title={blog.title}
                    excerpt={blog.excerpt}
                     date={blog.date}
                     readTime={blog.readTime}
                  category={blog.category}
                        image={blog.image}
                      />
                              ))}
            
        </div>
      ) : (
        <GlassCard className="p-12 text-center">
          <p className="text-gray-400">No articles found matching your criteria.</p>
        </GlassCard>
      )}

      {/* Newsletter CTA */}
      <GlassCard className="p-8 mt-16 text-center border-[#17A7FF]/30">
  <h3 className="text-[#17A7FF] mb-3">Keep Visiting for More</h3>
  <p className="text-gray-400 max-w-2xl mx-auto">
    Codex Orbit shares hands-on Android development knowledge from
    real production experience. Bookmark this site and check back
    often for new blogs, tips, and tutorials.
  </p>
</GlassCard>
      {/* <GlassCard className="p-8 mt-16 text-center border-[#17A7FF]/30">
        <h3 className="text-[#17A7FF] mb-3">Subscribe to Newsletter</h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Get the latest articles, tutorials, and Android development tips delivered to your inbox. 
          Join 5000+ developers who are already subscribed.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your.email@example.com"
            className="flex-1 px-4 py-2 bg-white/[0.08] border border-white/10 rounded-lg focus:outline-none focus:border-[#17A7FF]/50 transition-colors text-white placeholder-gray-500"
          />
          <button className="px-6 py-2 bg-[#17A7FF]/20 text-[#17A7FF] border border-[#17A7FF]/50 rounded-lg hover:bg-[#17A7FF]/30 transition-all">
            Subscribe
          </button>
        </div>
      </GlassCard> */}
    </div>
  );
}
