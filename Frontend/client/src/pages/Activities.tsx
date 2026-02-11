import { useActivities } from "@/hooks/use-ngo-data";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDays, MapPin } from "lucide-react";

export default function Activities() {
  const { data: activities, isLoading, error } = useActivities();

  return (
    <div className="container-wide py-12 md:py-16">
      <SectionHeader 
        title="Our Activities" 
        subtitle="We organize regular events, workshops, and gatherings to keep our community active and engaged."
      />

      {error && (
        <div className="p-6 bg-destructive/10 text-destructive rounded-xl border border-destructive/20 text-lg">
          Unable to load activities at this time. Please try again later.
        </div>
      )}

      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-64 rounded-2xl w-full" />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities?.map((activity) => (
            <Card key={activity.id} className="card-hover border-border shadow-sm bg-card h-full flex flex-col overflow-hidden rounded-2xl">
              <div className="h-3 bg-primary/20 w-full" />
              <CardHeader className="pb-3 pt-6 px-6">
                <CardTitle className="text-2xl font-bold font-display text-primary leading-tight">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 flex-grow">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
                <div className="mt-6 pt-4 border-t border-border/50 flex flex-col gap-2">
                  <div className="flex items-center text-foreground/80 font-medium">
                    <CalendarDays className="h-5 w-5 mr-3 text-primary" />
                    <span>Regular Schedule</span>
                  </div>
                  <div className="flex items-center text-foreground/80 font-medium">
                    <MapPin className="h-5 w-5 mr-3 text-primary" />
                    <span>Community Hall</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {activities?.length === 0 && (
            <div className="col-span-full py-12 text-center text-muted-foreground text-xl bg-muted/30 rounded-2xl">
              No activities currently scheduled. Check back soon.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
