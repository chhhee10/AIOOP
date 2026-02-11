interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ title, subtitle, className = "", align = 'left' }: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-primary/20 rounded-full"></span>
      </h1>
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mt-4 mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
