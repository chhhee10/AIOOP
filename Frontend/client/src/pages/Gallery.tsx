import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";

// Using static Unsplash images for the gallery as requested in notes for stock images
const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1571570535948-c2b622c7b508?w=800&h=600&fit=crop", // Elderly group meeting happy
    alt: "Annual General Meeting 2024",
    caption: "Annual General Meeting 2024"
  },
  {
    url: "https://images.unsplash.com/photo-1516307073071-0bc43b75a9a1?w=800&h=600&fit=crop", // Seniors laughing together
    alt: "Diwali Celebration",
    caption: "Diwali Celebration"
  },
  {
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop", // Yoga for seniors
    alt: "Weekly Health Workshop",
    caption: "Weekly Health Workshop"
  },
  {
    url: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop", // Group discussing
    alt: "Committee Planning Session",
    caption: "Committee Planning Session"
  },
  {
    url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop", // Camping/Nature
    alt: "Community Picnic",
    caption: "Community Picnic"
  },
  {
    url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop", // Meeting room
    alt: "Pension Grievance Camp",
    caption: "Pension Grievance Camp"
  }
];

export default function Gallery() {
  return (
    <div className="container-wide py-12 md:py-16">
      <SectionHeader 
        title="Photo Gallery" 
        subtitle="Moments of togetherness and service captured from our various events."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {GALLERY_IMAGES.map((img, index) => (
          <Card key={index} className="overflow-hidden border-border bg-card shadow-sm hover:shadow-lg transition-all rounded-2xl group">
            <div className="aspect-[4/3] overflow-hidden relative">
              {/* HTML comments for image replacement if needed */}
              {/* {img.caption} */}
              <img 
                src={img.url} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-lg font-medium">{img.caption}</span>
              </div>
            </div>
            <div className="p-4 md:hidden">
              <p className="text-lg font-medium text-foreground">{img.caption}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
