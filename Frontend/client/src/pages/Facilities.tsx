import { useFacilities } from "@/hooks/use-ngo-data";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import * as Icons from "lucide-react";

export default function Facilities() {
  const { data: facilities, isLoading, error } = useFacilities();

  // Helper to render dynamic icons
  const renderIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName] || Icons.HelpCircle;
    return <Icon className="h-10 w-10 text-primary" />;
  };

  return (
    <div className="container-wide py-12 md:py-16">
      <SectionHeader 
        title="Facilities & Support" 
        subtitle="Services and assistance programs available to all our members."
      />

      {error && (
        <div className="p-6 bg-destructive/10 text-destructive rounded-xl border border-destructive/20 text-lg">
          Unable to load facilities data.
        </div>
      )}

      {isLoading ? (
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-48 rounded-2xl w-full" />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {facilities?.map((facility) => (
            <Card key={facility.id} className="bg-card border-border shadow-sm hover:shadow-md transition-all rounded-2xl overflow-hidden group">
              <CardContent className="p-0 flex flex-col sm:flex-row h-full">
                <div className="bg-primary/5 p-8 flex items-center justify-center sm:w-1/3 group-hover:bg-primary/10 transition-colors border-r border-border/50">
                  {renderIcon(facility.icon)}
                </div>
                <div className="p-8 sm:w-2/3 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold font-display text-foreground mb-3 group-hover:text-primary transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}

          {facilities?.length === 0 && (
            <div className="col-span-full py-12 text-center text-muted-foreground text-xl bg-muted/30 rounded-2xl">
              Facilities information is being updated.
            </div>
          )}
        </div>
      )}
      
      <div className="mt-16 bg-accent rounded-3xl p-8 md:p-12 text-center">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
          Need assistance with these facilities?
        </h3>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Our volunteers are ready to help you navigate these services. 
          Contact us for personal guidance.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg"
        >
          Get Help Now
        </a>
      </div>
    </div>
  );
}
