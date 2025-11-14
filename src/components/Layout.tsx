import { ReactNode, useState } from 'react';
import { GlassCard } from './GlassCard';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: 'home' },
    { name: 'Projects', path: 'projects' },
    { name: 'Blogs', path: 'blogs' },
    // { name: 'Achievements', path: 'achievements' },
    { name: 'Contact', path: 'contact' }
  ];

  const handleNavigate = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080A0F] to-[#030507] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <GlassCard className="my-4 px-6 py-4">
            <div className="flex items-center justify-between">
              <button onClick={() => handleNavigate('home')}>
                <h1 className="text-[#DE3484] cursor-pointer hover:opacity-80 transition-opacity">
                  Codex Orbit
                </h1>
              </button>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-6">
                {menuItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className={`text-sm transition-colors ${
                      currentPage === item.path
                        ? 'text-[#17A7FF]'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                {menuItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleNavigate(item.path)}
                    className={`text-sm transition-colors text-left ${
                      currentPage === item.path
                        ? 'text-[#17A7FF]'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </GlassCard>
        </div>
      </nav>

      {/* Page Content */}
      <main className="min-h-[calc(100vh-200px)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#030507] py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2025 Codex Orbit — Sudesh Kumar
            </p>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/sudesh095" target="_blank" rel="noopener noreferrer" className="text-[#17A7FF] hover:text-[#17A7FF]/80 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sudesh-kumar-android/" target="_blank" rel="noopener noreferrer" className="text-[#17A7FF] hover:text-[#17A7FF]/80 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:itsudesh95@gmail.com" className="text-[#17A7FF] hover:text-[#17A7FF]/80 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
