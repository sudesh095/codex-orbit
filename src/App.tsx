import { useState } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogsPage } from './pages/BlogsPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { ContactPage } from './pages/ContactPage';

// type Page = 'home' | 'projects' | 'blogs' | 'achievements' | 'contact';
type Page = 'home' | 'projects' | 'blogs' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'projects':
        return <ProjectsPage />;
      case 'blogs':
        return <BlogsPage />;
      // case 'achievements':
      //   return <AchievementsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
}
