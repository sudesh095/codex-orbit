import { useState, useMemo } from "react";
import { BlogCard } from "../components/BlogCard";
import { GlassCard } from "../components/GlassCard";
import { Search } from "lucide-react";
import { blogs } from "../data/blogs";

/** Category type (keep in sync with Blog.category) */
type Category =
  | "all"
  | "android"
  | "kotlin"
  | "architecture"
  | "performance";
// | "security"
// | "tutorial"

export function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: Category[] = [
    "all",
    "android",
    "kotlin",
    "architecture",
    "performance"
  ];

  /** Filter blogs (memoized for performance) */
  const filteredBlogs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return blogs.filter(blog => {
      const matchesCategory =
        selectedCategory === "all" || blog.category === selectedCategory;

      const matchesSearch =
        query === "" ||
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
      {/* Search + Filters */}
      <div className="mb-10 space-y-4">
        {/* Search */}
        <GlassCard className="p-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:border-[#DE3484]/50 transition-colors text-white placeholder-gray-500"
            />
          </div>
        </GlassCard>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                selectedCategory === category
                  ? "bg-[#DE3484]/20 text-[#DE3484] border border-[#DE3484]/50"
                  : "bg-white/[0.08] text-gray-400 border border-white/10 hover:border-white/20"
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
          {filteredBlogs.map(blog => (
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
          <p className="text-gray-400">
            No articles found matching your criteria.
          </p>
        </GlassCard>
      )}

      {/* Footer CTA */}
      <GlassCard className="p-8 mt-16 text-center border-[#17A7FF]/30">
        <h3 className="text-[#17A7FF] mb-3">Keep Visiting for More</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Codex Orbit shares hands-on Android development knowledge from real
          production experience. Bookmark this site and check back often for new
          blogs, tips, and tutorials.
        </p>
      </GlassCard>
    </div>
  );
}
