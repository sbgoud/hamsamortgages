import { IconWhatsApp } from "@/components/icons";
import { DEFAULT_WA_MESSAGE, whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with a Hamsa advisor on WhatsApp"
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-0 rounded-full bg-[#1faa53] p-3.5 text-white shadow-lg shadow-navy-950/25 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:right-7 sm:bottom-7"
    >
      <IconWhatsApp className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-all duration-300 group-hover:ml-2 group-hover:max-w-40">
        Chat with an advisor
      </span>
    </a>
  );
}
