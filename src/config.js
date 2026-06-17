import { toast } from "@/hooks/use-toast";

// Central place for the third-party booking / scheduling portal.
// Every "Book" / "Book a Consultation" action points here.
// TODO: replace with the real partner CRM booking URL when provided.
export const BOOKING_URL = "https://book.motionrx.co";

// Until the partner booking portal is live, intercept "Book" clicks and
// show a friendly "coming soon" message instead of navigating away.
// When the portal is ready, remove the onClick handlers (or this function)
// and the buttons will navigate to BOOKING_URL.
export function handleBookingClick(e) {
  if (e) e.preventDefault();
  const t = toast({
    title: "Coming soon",
    description: "Online booking launches shortly. Please check back soon.",
  });
  setTimeout(() => t.dismiss(), 3500);
}
