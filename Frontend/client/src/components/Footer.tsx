import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border mt-auto">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary font-display">Baroda Association</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-sm">
              Dedicated to serving the welfare of pensioners through advocacy, support, and community building.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground font-display">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/activities" className="text-lg text-muted-foreground hover:text-primary transition-colors hover:underline">Our Activities</Link>
              <Link href="/notices" className="text-lg text-muted-foreground hover:text-primary transition-colors hover:underline">Latest Notices</Link>
              <Link href="/facilities" className="text-lg text-muted-foreground hover:text-primary transition-colors hover:underline">Facilities</Link>
              <Link href="/contact" className="text-lg text-muted-foreground hover:text-primary transition-colors hover:underline">Contact Us</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground font-display">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span className="text-lg text-muted-foreground">
                  123 Pensioner Lane, Civic Center,<br />
                  Baroda, Gujarat 390001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-primary shrink-0" />
                <span className="text-lg text-muted-foreground">+91 265 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary shrink-0" />
                <span className="text-lg text-muted-foreground">help@baroda-pensioners.org</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Baroda Association for Pensioners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
