import { useNotices } from "@/hooks/use-ngo-data";
import { SectionHeader } from "@/components/SectionHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Bell } from "lucide-react";
import { format } from "date-fns";

export default function Notices() {
  const { data: notices, isLoading, error } = useNotices();

  return (
    <div className="container-wide py-12 md:py-16">
      <SectionHeader 
        title="Notices & Updates" 
        subtitle="Stay informed about the latest news, meetings, and important announcements."
      />

      {error && (
        <div className="p-6 bg-destructive/10 text-destructive rounded-xl border border-destructive/20 text-lg">
          Unable to load notices. Please refresh the page.
        </div>
      )}

      {isLoading ? (
        <div className="space-y-6 max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-40 rounded-2xl w-full" />
          ))}
        </div>
      ) : (
        <div className="space-y-6 max-w-4xl mx-auto">
          {notices?.map((notice) => (
            <div 
              key={notice.id} 
              className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary group-hover:bg-primary/80 transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 ml-3">
                <div className="flex-shrink-0 bg-primary/10 text-primary p-4 rounded-xl flex flex-col items-center justify-center min-w-[100px] text-center">
                  <span className="text-3xl font-bold font-display leading-none">
                    {notice.date ? format(new Date(notice.date), 'dd') : '--'}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-wider mt-1">
                    {notice.date ? format(new Date(notice.date), 'MMM') : ''}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {notice.date ? format(new Date(notice.date), 'yyyy') : ''}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                      <Bell className="w-3 h-3 mr-1" />
                      Notice
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    {notice.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {notice.content}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {notices?.length === 0 && (
            <div className="py-16 text-center text-muted-foreground text-xl bg-muted/30 rounded-2xl">
              No recent notices to display.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
