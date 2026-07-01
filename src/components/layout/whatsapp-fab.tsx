import { MessageCircle } from "lucide-react";

export const WA_HREF =
  "https://wa.me/21651003216?text=" +
  encodeURIComponent("Hello Webistry, I would like to discuss my project with your team.");

export function WhatsAppFab() {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 end-6 z-40 size-14 rounded-full inline-flex items-center justify-center bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
