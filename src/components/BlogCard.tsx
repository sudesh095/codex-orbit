import { GlassCard } from './GlassCard';
import { Calendar, Clock } from 'lucide-react';
import { Link } from "react-router-dom";

interface BlogCardProps {
  id:string,
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

export function BlogCard({ id,title, excerpt, date, readTime, category, image }: BlogCardProps) {
  return (
     <Link to={`/blog/${id}`} className="h-full">
    <GlassCard 
       className="p-6 hover:border-[#DE3484]/50 transition-all duration-300 cursor-pointer group h-full flex flex-col">
      <div className="aspect-video bg-gradient-to-br from-[#17A7FF]/20 to-[#DE3484]/20 rounded-lg mb-4 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">📝</span>
          </div>
        )}
      </div>
      
      <span className="text-xs px-2 py-1 rounded-md bg-[#DE3484]/10 text-[#DE3484] border border-[#DE3484]/20 self-start mb-3">
        {category}
      </span>
      
      <h3 className="mb-2 group-hover:text-[#DE3484] transition-colors">{title}</h3>
      <p className="text-sm text-gray-400 mb-4 flex-grow">{excerpt}</p>
      
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} />
          {readTime}
        </span>
      </div>
    </GlassCard>
      </Link>
  );
}
