import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactSubmission } from "@shared/routes";
import { useSubmitContact } from "@/hooks/use-ngo-data";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const mutation = useSubmitContact();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: InsertContactSubmission) {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent Successfully",
          description: "We will contact you shortly.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Error Sending Message",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  }

  return (
    <div className="container-wide py-12 md:py-16">
      <SectionHeader 
        title="Contact Us" 
        subtitle="We are here to help. Reach out to us for any assistance or information."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
            <h3 className="text-2xl font-bold font-display text-foreground mb-6">Office Address</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Baroda Association</h4>
                  <p className="text-lg text-muted-foreground">
                    123 Pensioner Lane, Civic Center<br />
                    Baroda, Gujarat 390001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Phone</h4>
                  <p className="text-lg text-muted-foreground">+91 265 123 4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Email</h4>
                  <p className="text-lg text-muted-foreground">help@baroda-pensioners.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Office Hours</h4>
                  <p className="text-lg text-muted-foreground">
                    Monday - Friday: 10:00 AM - 5:00 PM<br />
                    Saturday: 10:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map placeholder */}
          <div className="h-64 bg-muted rounded-3xl overflow-hidden border border-border">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.71280312519!2d73.10308003666875!3d22.322042456456487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709825421096!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            />
          </div>
        </div>

        {/* Form */}
        <div>
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border">
            <h3 className="text-2xl font-bold font-display text-foreground mb-2">Send us a message</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Fill out the form below and we will get back to you as soon as possible.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium text-foreground">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          className="h-14 text-lg px-4 bg-muted/20 border-border focus:border-primary focus:ring-primary/20" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-base" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium text-foreground">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your mobile number" 
                          className="h-14 text-lg px-4 bg-muted/20 border-border focus:border-primary focus:ring-primary/20" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-base" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-medium text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="min-h-[160px] text-lg p-4 bg-muted/20 border-border focus:border-primary focus:ring-primary/20 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-base" />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-md transition-all mt-4"
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
