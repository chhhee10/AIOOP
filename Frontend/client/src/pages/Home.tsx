import { Link } from "wouter";
import { ArrowRight, Calendar, Users, HeartHandshake, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary/50 py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Abstract decorative shape */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent rounded-full blur-3xl" />

        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Honoring Experience, <br />
              <span className="text-primary">Supporting Your Journey.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              We are dedicated to the welfare, dignity, and community of pensioners in Baroda. Join us for support, connection, and assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/activities">
                <Button size="lg" className="text-lg h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                  View Our Activities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-lg h-14 px-8 rounded-full border-2 bg-background hover:bg-secondary/50">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Mission</h2>
                <p className="text-xl text-foreground/80 leading-relaxed mb-6">
                  To provide a strong support system for retired employees, ensuring they live with dignity, security, and joy. We strive to solve grievances, provide medical assistance, and foster a vibrant community.
                </p>
                <div className="flex gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-border flex-1 text-center">
                    <span className="block text-3xl font-bold text-primary font-display mb-1">25+</span>
                    <span className="text-sm text-muted-foreground uppercase tracking-wide font-semibold">Years Service</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-border flex-1 text-center">
                    <span className="block text-3xl font-bold text-primary font-display mb-1">5000+</span>
                    <span className="text-sm text-muted-foreground uppercase tracking-wide font-semibold">Members</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                <h3 className="text-2xl font-display font-bold mb-6">Quick Actions</h3>
                <div className="grid grid-cols-1 gap-4">
                  <Link href="/notices" className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors border border-transparent hover:border-secondary group">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-700 group-hover:bg-blue-200 transition-colors">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-lg font-bold text-foreground">Latest Notices</span>
                      <span className="text-muted-foreground">Check important updates</span>
                    </div>
                    <ArrowRight className="ml-auto text-muted-foreground group-hover:text-primary" />
                  </Link>

                  <Link href="/facilities" className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors border border-transparent hover:border-secondary group">
                    <div className="bg-green-100 p-3 rounded-full text-green-700 group-hover:bg-green-200 transition-colors">
                      <HeartHandshake className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-lg font-bold text-foreground">Medical Support</span>
                      <span className="text-muted-foreground">View healthcare facilities</span>
                    </div>
                    <ArrowRight className="ml-auto text-muted-foreground group-hover:text-primary" />
                  </Link>

                  <Link href="/activities" className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors border border-transparent hover:border-secondary group">
                    <div className="bg-purple-100 p-3 rounded-full text-purple-700 group-hover:bg-purple-200 transition-colors">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block text-lg font-bold text-foreground">Upcoming Events</span>
                      <span className="text-muted-foreground">Join our next gathering</span>
                    </div>
                    <ArrowRight className="ml-auto text-muted-foreground group-hover:text-primary" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-wide text-center">
          <blockquote className="text-2xl md:text-3xl font-display italic leading-relaxed max-w-4xl mx-auto">
            "The afternoon of life is just as full of meaning as the morning; only, its meaning and purpose are different."
          </blockquote>
          <cite className="block mt-6 text-lg font-medium opacity-80 not-italic">— Carl Jung</cite>
        </div>
      </section>
    </div>
  );
}
