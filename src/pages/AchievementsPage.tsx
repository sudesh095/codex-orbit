import { GlassCard } from '../components/GlassCard';
import { Award, Trophy, Star, Target, BookOpen, Users, Code2, Zap } from 'lucide-react';

export function AchievementsPage() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Google Android Developer Challenge Winner',
      year: '2024',
      description: 'Won first place in the nationwide Android Developer Challenge for building an innovative accessibility solution using Jetpack Compose.',
      category: 'Award'
    },
    {
      icon: Star,
      title: 'Kotlin Community Contributor of the Year',
      year: '2023',
      description: 'Recognized by JetBrains for significant contributions to the Kotlin ecosystem and open-source libraries with 2000+ GitHub stars.',
      category: 'Recognition'
    },
    {
      icon: Award,
      title: 'Google Developer Expert (GDE) - Android',
      year: '2023',
      description: 'Selected as a Google Developer Expert in Android development, joining an elite group of 100+ experts worldwide.',
      category: 'Certification'
    },
    {
      icon: BookOpen,
      title: 'Published Technical Author',
      year: '2023',
      description: 'Published comprehensive guide "Mastering Kotlin Multiplatform" with 500+ sales and 4.8/5 rating on major platforms.',
      category: 'Publication'
    },
    {
      icon: Users,
      title: 'Lead Architect - Enterprise App (10M+ Downloads)',
      year: '2022',
      description: 'Led architecture redesign resulting in 40% performance improvement and 60% crash rate reduction for major fintech app.',
      category: 'Professional'
    },
    {
      icon: Code2,
      title: 'Open Source Maintainer - 5K+ Stars',
      year: '2022',
      description: 'Maintain popular Android libraries with combined 5000+ GitHub stars and 100+ contributors from the community.',
      category: 'Open Source'
    },
    {
      icon: Zap,
      title: 'Hackathon Champion - Mobile Innovation',
      year: '2022',
      description: 'Won first place in 48-hour hackathon by building AI-powered health monitoring app using Kotlin Multiplatform.',
      category: 'Competition'
    },
    {
      icon: Target,
      title: 'Performance Optimization - 70% Improvement',
      year: '2021',
      description: 'Achieved 70% reduction in app startup time and 50% memory footprint reduction for high-traffic e-commerce platform.',
      category: 'Professional'
    },
    {
      icon: Award,
      title: 'Speaker at DroidCon & KotlinConf',
      year: '2021-2024',
      description: 'Delivered talks at major Android conferences including DroidCon, KotlinConf, and Android Dev Summit on KMP and Compose.',
      category: 'Speaking'
    },
    {
      icon: Star,
      title: 'Mentor - 50+ Developers',
      year: '2020-2025',
      description: 'Mentored over 50 junior developers through bootcamps and one-on-one sessions, helping them advance their Android careers.',
      category: 'Mentorship'
    }
  ];

  const certifications = [
    {
      name: 'Google Associate Android Developer',
      issuer: 'Google',
      year: '2023',
      icon: '📱'
    },
    {
      name: 'Kotlin Certified Developer',
      issuer: 'JetBrains',
      year: '2023',
      icon: '⚡'
    },
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2022',
      icon: '☁️'
    },
    {
      name: 'Firebase Certified Developer',
      issuer: 'Google Cloud',
      year: '2022',
      icon: '🔥'
    },
    {
      name: 'Jetpack Compose Certification',
      issuer: 'Google',
      year: '2021',
      icon: '🎨'
    },
    {
      name: 'Security+ Certification',
      issuer: 'CompTIA',
      year: '2021',
      icon: '🔒'
    }
  ];

  const stats = [
    { icon: Trophy, label: 'Awards Won', value: '15+' },
    { icon: BookOpen, label: 'Technical Articles', value: '80+' },
    { icon: Users, label: 'Conference Talks', value: '12' },
    { icon: Star, label: 'GitHub Stars', value: '5K+' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-[#DE3484] mb-4">Achievements & Recognition</h1>
        <p className="text-gray-400 max-w-3xl">
          A collection of professional milestones, awards, certifications, and community contributions 
          that showcase my commitment to excellence in mobile development.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <GlassCard key={index} className="p-6 text-center hover:border-[#17A7FF]/50 transition-all">
              <Icon className="w-8 h-8 mx-auto mb-3 text-[#17A7FF]" />
              <div className="text-2xl mb-1 text-[#DE3484]">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </GlassCard>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="mb-16">
        <h2 className="text-[#DE3484] mb-8">Career Highlights Timeline</h2>
        <div className="space-y-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <GlassCard 
                key={index} 
                className="p-6 hover:border-[#17A7FF]/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#17A7FF] to-[#DE3484] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-start gap-4 pl-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#17A7FF]/20 to-[#DE3484]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="text-[#17A7FF]" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="group-hover:text-[#17A7FF] transition-colors">{achievement.title}</h3>
                      <span className="text-sm px-3 py-1 rounded-full bg-[#DE3484]/10 text-[#DE3484] border border-[#DE3484]/20">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{achievement.description}</p>
                    <span className="text-xs px-2 py-1 rounded-md bg-[#17A7FF]/10 text-[#17A7FF] border border-[#17A7FF]/20">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-[#DE3484] mb-8">Professional Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <GlassCard key={index} className="p-6 hover:border-[#17A7FF]/50 transition-all group text-center">
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h4 className="mb-2 group-hover:text-[#17A7FF] transition-colors">{cert.name}</h4>
              <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
              <span className="text-xs text-gray-500">{cert.year}</span>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Recognition CTA */}
      <GlassCard className="p-8 mt-16 text-center border-[#DE3484]/30 bg-gradient-to-br from-[#DE3484]/5 to-[#17A7FF]/5">
        <Award className="w-12 h-12 mx-auto mb-4 text-[#DE3484]" />
        <h3 className="text-[#DE3484] mb-3">Always Learning & Growing</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Continuous learning and community contribution are at the core of my professional journey. 
          From speaking at conferences to mentoring developers, I'm committed to giving back to the tech community.
        </p>
      </GlassCard>
    </div>
  );
}
