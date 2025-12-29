interface NeonButtonProps {
  children: React.ReactNode;
  variant?: 'blue' | 'pink';
  onClick?: () => void;
  className?: string;
}

export function NeonButton({ 
  children, 
  variant = 'blue', 
  onClick,
  className = ''
}: NeonButtonProps) {
  const colors = {
    blue: 'border-[#17A7FF] text-[#17A7FF] hover:shadow-[0_0_20px_rgba(23,167,255,0.3)]',
    pink: 'border-[#DE3484] text-[#DE3484] hover:shadow-[0_0_20px_rgba(222,52,132,0.3)]'
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl bg-white/[0.08] border-[1.5px] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.12] ${colors[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
