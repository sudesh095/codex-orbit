import { GlassCard } from './GlassCard';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({ title, description, tags, image, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <GlassCard className="p-6 hover:border-[#17A7FF]/50 transition-all duration-300 cursor-pointer group h-full flex flex-col">
      <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg mb-4 flex items-center justify-center group-hover:from-gray-800 group-hover:to-gray-700 transition-all overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-4xl">🚀</span>
        )}
      </div>
      <h3 className="mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-md bg-[#17A7FF]/10 text-[#17A7FF] border border-[#17A7FF]/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-[#17A7FF] transition-colors flex items-center gap-1"
          >
            <Github size={16} />
            Code
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-[#DE3484] transition-colors flex items-center gap-1"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </GlassCard>
  );
}
