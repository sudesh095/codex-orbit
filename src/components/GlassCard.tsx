interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`bg-white/[0.08] backdrop-blur-sm rounded-xl border border-white/10 ${className}`}>
      {children}
    </div>
  );
}
