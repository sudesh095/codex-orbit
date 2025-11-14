import { useEffect, useRef } from 'react';
import { NeonButton } from '../components/NeonButton';
import { SkillCard } from '../components/SkillCard';
import { GlassCard } from '../components/GlassCard';
import { Code2, Zap, Shield, Users, Award, TrendingUp } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scroller.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scroller.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const skills = [
    "Kotlin", "Java", "Jetpack Compose", "Coroutines", "Flow", "StateFlow", "SharedFlow", "MVVM",
    "Clean Architecture", "Room", "SQLite", "WorkManager", "Hilt", "Dagger", "Koin", "Retrofit",
    "OkHttp", "Glide", "Coil", "Socket.IO", "Firebase Auth", "Firestore", "FCM", "Crashlytics",
    "Google Maps", "Payment Integrations", "Security", "Encryption", "Kotlin Multiplatform",
    "Compose Multiplatform", "Ktor", "Kamel", "Node.js", "Express", "MongoDB", "AWS S3",
    "Cloud Functions", "React", "Next.js", "Angular", "Tailwind CSS", "Figma", "UX", "Gradle",
    "CI/CD", "Fastlane", "Docker", "Linux", "Git", "GitHub", "JUnit", "MockK", "Espresso", "Turbine"
  ];

  const stats = [
    { number: '8+', label: 'Years Experience', icon: TrendingUp },
    { number: '50+', label: 'Projects Completed', icon: Code2 },
    { number: '30+', label: 'Technologies', icon: Zap },
    { number: '15+', label: 'Awards', icon: Award }
  ];

  const expertise = [
    {
      icon: Code2,
      title: 'Android Development',
      description: 'Expert in native Android development using Kotlin, Java, and Jetpack Compose. Building scalable and performant mobile applications.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Specialized in app performance tuning, memory management, and battery optimization for seamless user experiences.'
    },
    {
      icon: Shield,
      title: 'Security & Encryption',
      description: 'Implementing robust security measures, encryption, and secure data storage for sensitive applications.'
    },
    {
      icon: Users,
      title: 'KMP & Cross-Platform',
      description: 'Building cross-platform solutions with Kotlin Multiplatform, sharing business logic across Android, iOS, and web.'
    }
  ];

  const handleResumeDownload = () => {
    window.open("https://drive.google.com/your-resume-link", "_blank");
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left - Profile */}
          <div className="flex-1 flex flex-col items-center lg:items-start gap-6">
            <div className="w-44 h-44 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-[#17A7FF]/30 to-[#DE3484]/30 flex items-center justify-center border-2 border-[#17A7FF]/50 shadow-[0_0_40px_rgba(23,167,255,0.3)] animate-pulse">
              <div className="w-40 h-40 lg:w-52 lg:h-52 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-4xl lg:text-6xl">👨‍💻</span>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl mb-3">
                Hi, I'm <span className="text-[#DE3484]">Sudesh Kumar</span>
              </h1>
              <p className="text-gray-400 max-w-xl mb-4">
                Senior Android & KMP Developer — Performance, Architecture, Security
              </p>
              <p className="text-sm text-gray-500 max-w-xl">
                Passionate about building high-performance mobile applications with clean architecture. 
                Specialized in Kotlin Multiplatform, Jetpack Compose, and modern Android development practices.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <NeonButton variant="blue" onClick={handleResumeDownload}>
                Download Resume
              </NeonButton>
              <NeonButton variant="pink" onClick={() => onNavigate('contact')}>
                Hire Me
              </NeonButton>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <GlassCard key={index} className="p-6 text-center hover:border-[#17A7FF]/50 transition-all">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-[#17A7FF]" />
                    <div className="text-3xl mb-1 text-[#DE3484]">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-[#DE3484] mb-2">Skills & Technologies</h2>
          <p className="text-gray-400 mb-8">Comprehensive expertise across the mobile development ecosystem</p>
        </div>
        
        <div 
          ref={scrollerRef}
          className="flex gap-8 overflow-x-hidden scrollbar-hide py-4"
          style={{ scrollBehavior: 'auto' }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <SkillCard key={`${skill}-${index}`} name={skill} />
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
        <h2 className="text-[#DE3484] mb-2">Areas of Expertise</h2>
        <p className="text-gray-400 mb-8">Core competencies that drive exceptional results</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <GlassCard key={index} className="p-6 hover:border-[#17A7FF]/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#17A7FF]/20 to-[#DE3484]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="text-[#17A7FF]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* Featured Work CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
        <GlassCard className="p-12 text-center border-[#17A7FF]/30 bg-gradient-to-br from-[#17A7FF]/5 to-[#DE3484]/5">
          <h2 className="text-[#DE3484] mb-4">Ready to See My Work?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore my portfolio of mobile applications, open-source contributions, and technical blog posts. 
            From enterprise solutions to innovative side projects, discover how I solve complex problems.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <NeonButton variant="blue" onClick={() => onNavigate('projects')}>
              View Projects
            </NeonButton>
            <NeonButton variant="pink" onClick={() => onNavigate('blogs')}>
              Read Blogs
            </NeonButton>
          </div>
        </GlassCard>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
