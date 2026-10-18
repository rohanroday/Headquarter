import { whatsappLink } from "@/lib/site";
import { WhatsApp } from "./Icons";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hi Headquarter! I found you on your website.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Headquarter on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-110"
    >
      <WhatsApp className="h-7 w-7" />
    </a>
  );
}
