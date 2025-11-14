interface SkillCardProps {
  name: string;
}

export function SkillCard({ name }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 min-w-[120px] group">
      <div className="w-16 h-16 rounded-full bg-[#17A7FF] flex items-center justify-center shadow-[0_6px_20px_rgba(23,167,255,0.45)] group-hover:shadow-[0_8px_30px_rgba(23,167,255,0.6)] transition-all duration-300 group-hover:scale-110">
        <div className="w-8 h-8 rounded-full bg-white/20"></div>
      </div>
      <span className="text-xs text-white text-center">{name}</span>
    </div>
  );
}
