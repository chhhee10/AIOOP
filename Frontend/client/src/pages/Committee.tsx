import { useMembers } from "@/hooks/use-ngo-data";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { User, Phone, Briefcase } from "lucide-react";

export default function Committee() {
  const { data: members, isLoading, error } = useMembers();

  return (
    <div className="container-wide py-12 md:py-16">
      <SectionHeader 
        title="Committee Members" 
        subtitle="Meet the dedicated individuals who volunteer their time to serve our association."
      />

      {error && (
        <div className="p-6 bg-destructive/10 text-destructive rounded-xl border border-destructive/20 text-lg">
          Unable to load committee members.
        </div>
      )}

      {isLoading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-40 rounded-2xl w-full" />
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members?.map((member) => (
            <Card key={member.id} className="border-border shadow-sm hover:shadow-md transition-all rounded-xl bg-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 text-primary">
                    <User className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-foreground mb-1">
                      {member.name}
                    </h3>
                    
                    <div className="flex items-center text-primary font-medium mb-3">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>{member.role}</span>
                    </div>
                    
                    {member.contactInfo && (
                      <div className="flex items-center text-muted-foreground text-base bg-muted/30 py-1.5 px-3 rounded-lg inline-flex">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>{member.contactInfo}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {members?.length === 0 && (
            <div className="col-span-full py-12 text-center text-muted-foreground text-xl bg-muted/30 rounded-2xl">
              Committee member list is being updated.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
