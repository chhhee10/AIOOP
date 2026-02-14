interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="py-12 md:py-16 lg:py-24 mb-4 md:mb-6 lg:mb-8">
      <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-display-lg xl:text-display-xl text-foreground mb-4 md:mb-6">
        <span className="border-b-4 border-primary pb-2 md:pb-3">{title}</span>
      </h1>
      <p className="text-muted-foreground text-base md:text-lg lg:text-body-lg mt-6 md:mt-8 max-w-3xl leading-relaxed">{description}</p>
    </div>
  );
}
