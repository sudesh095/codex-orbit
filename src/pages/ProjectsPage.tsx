import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { GlassCard } from '../components/GlassCard';
import { Search } from 'lucide-react';

export function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['all', 'android', 'kmp', 'web', 'open-source'];

  const projects = [
    {
      title: 'HealthTrack Pro',
      description: 'A comprehensive health and fitness tracking application with real-time data synchronization, workout plans, and nutrition tracking. Built with Jetpack Compose and Firebase.',
      tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'MVVM'],
      category: 'android',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'SecureVault',
      description: 'Enterprise-grade password manager with AES-256 encryption, biometric authentication, and secure cloud backup. Implements zero-knowledge architecture.',
      tags: ['Kotlin', 'Security', 'Encryption', 'Room'],
      category: 'android',
      githubUrl: '#'
    },
    {
      title: 'ShopEase KMP',
      description: 'Cross-platform e-commerce application built with Kotlin Multiplatform. Shared business logic across Android, iOS, and web with platform-specific UI.',
      tags: ['KMP', 'Compose Multiplatform', 'Ktor', 'SQLDelight'],
      category: 'kmp',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'ChatSync',
      description: 'Real-time messaging application with end-to-end encryption, group chats, media sharing, and push notifications using FCM and Socket.IO.',
      tags: ['Kotlin', 'Socket.IO', 'Firebase', 'Coroutines'],
      category: 'android',
      githubUrl: '#'
    },
    {
      title: 'Budget Master',
      description: 'Personal finance management app with expense tracking, budget planning, and financial insights. Features offline-first architecture with Room database.',
      tags: ['Kotlin', 'Room', 'WorkManager', 'Charts'],
      category: 'android',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'DevTools KMP',
      description: 'Developer productivity toolkit with code snippets, API testing, and regex validator. Built as a KMP library with sample apps for multiple platforms.',
      tags: ['KMP', 'Kotlin', 'Compose', 'Open Source'],
      category: 'kmp',
      githubUrl: '#'
    },
    {
      title: 'FoodieHub',
      description: 'Restaurant discovery and food ordering platform with real-time order tracking, payment integration, and restaurant management dashboard.',
      tags: ['Kotlin', 'Google Maps', 'Payments', 'Firebase'],
      category: 'android',
      liveUrl: '#'
    },
    {
      title: 'TaskFlow Pro',
      description: 'Project management and team collaboration tool with kanban boards, time tracking, and team analytics. Supports offline mode with sync.',
      tags: ['Kotlin', 'Compose', 'Room', 'WorkManager'],
      category: 'android',
      githubUrl: '#'
    },
    {
      title: 'Weather Wizard',
      description: 'Beautiful weather application with detailed forecasts, weather alerts, and interactive maps. Features animated weather backgrounds.',
      tags: ['Kotlin', 'Retrofit', 'Compose', 'Animation'],
      category: 'android',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Portfolio CMS',
      description: 'Full-stack portfolio management system with Next.js frontend and Node.js backend. Features admin dashboard, blog management, and analytics.',
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
      category: 'web',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Kotlin Extensions Library',
      description: 'Open-source collection of useful Kotlin extension functions and utilities. Over 1000+ stars on GitHub with active community contributions.',
      tags: ['Kotlin', 'Open Source', 'Library', 'Android'],
      category: 'open-source',
      githubUrl: '#'
    },
    {
      title: 'Compose UI Kit',
      description: 'Comprehensive Jetpack Compose UI component library with 50+ customizable components, theming support, and extensive documentation.',
      tags: ['Compose', 'UI Library', 'Open Source', 'Kotlin'],
      category: 'open-source',
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = selectedFilter === 'all' || project.category === selectedFilter;
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-[#DE3484] mb-4">Projects</h1>
        <p className="text-gray-400 max-w-3xl">
          A showcase of my professional work, side projects, and open-source contributions. 
          Each project represents a unique challenge solved with modern technology and best practices.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <GlassCard className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-transparent border border-white/10 rounded-lg focus:outline-none focus:border-[#17A7FF]/50 transition-colors text-white placeholder-gray-500"
            />
          </div>
        </GlassCard>

        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                selectedFilter === filter
                  ? 'bg-[#17A7FF]/20 text-[#17A7FF] border border-[#17A7FF]/50'
                  : 'bg-white/[0.08] text-gray-400 border border-white/10 hover:border-white/20'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      ) : (
        <GlassCard className="p-12 text-center">
          <p className="text-gray-400">No projects found matching your criteria.</p>
        </GlassCard>
      )}

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        <GlassCard className="p-6 text-center">
          <div className="text-3xl mb-2 text-[#17A7FF]">{projects.length}</div>
          <div className="text-sm text-gray-400">Total Projects</div>
        </GlassCard>
        <GlassCard className="p-6 text-center">
          <div className="text-3xl mb-2 text-[#DE3484]">50K+</div>
          <div className="text-sm text-gray-400">Lines of Code</div>
        </GlassCard>
        <GlassCard className="p-6 text-center">
          <div className="text-3xl mb-2 text-[#17A7FF]">2K+</div>
          <div className="text-sm text-gray-400">GitHub Stars</div>
        </GlassCard>
        <GlassCard className="p-6 text-center">
          <div className="text-3xl mb-2 text-[#DE3484]">15+</div>
          <div className="text-sm text-gray-400">Tech Stack</div>
        </GlassCard>
      </div>
    </div>
  );
}
