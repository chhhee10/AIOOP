import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Activities", href: "/activities" },
  { label: "Notices", href: "/notices" },
  { label: "Facilities", href: "/facilities" },
  { label: "Committee", href: "/committee" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container-wide flex h-20 md:h-24 items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-3">
           <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-xl md:text-2xl shadow-md">
             BA
           </div>
           <div className="flex flex-col">
             <span className="font-display font-bold text-xl md:text-2xl leading-none text-primary">
               Baroda Association
             </span>
             <span className="text-sm text-muted-foreground font-medium">
               Serving Pensioners Since 1995
             </span>
           </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`nav-link ${location === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Button className="ml-4 h-11 px-6 text-lg bg-primary hover:bg-primary/90 shadow-md rounded-full">
            <Phone className="mr-2 h-5 w-5" />
            Help
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <Menu className="h-8 w-8 text-foreground" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`text-2xl font-display font-medium py-3 border-b border-border/50 ${
                    location === item.href ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-8 p-6 bg-secondary rounded-xl">
                <h4 className="text-lg font-bold text-primary mb-2">Need Help?</h4>
                <p className="text-base text-muted-foreground mb-4">Call our support line anytime.</p>
                <Button className="w-full text-lg h-12 rounded-full shadow-sm">
                  <Phone className="mr-2 h-5 w-5" /> 
                  Call Now
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
