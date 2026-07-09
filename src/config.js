import { toast } from "@/hooks/use-toast";

// Booking runs through Boulevard's self-booking overlay. The injector snippet
// lives in index.html (businessId from the client's July 2026 email) and
// exposes window.blvd. "#book-now" is Boulevard's magic hash: the injector
// intercepts links pointing at it, so booking anchors work even without the
// click handler below.
export const BOOKING_URL = "#book-now";

// Open the Boulevard booking flow without leaving the site. Desktop shows the
// in-page overlay; on phones Boulevard routes to its mobile-optimized flow.
// Falls back to a notice if the injector was blocked and never loaded.
export function handleBookingClick(e) {
  if (e) e.preventDefault();
  if (window.blvd && typeof window.blvd.openBookingWidget === "function") {
    window.blvd.openBookingWidget();
    return;
  }
  const t = toast({
    title: "Booking window unavailable",
    description:
      "Online booking could not load. Please call or text (949) 281-1440.",
  });
  setTimeout(() => t.dismiss(), 3500);
}
