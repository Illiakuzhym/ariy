import { MessageCircle, Phone } from "lucide-react";

const FloatingContacts = () => {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col space-y-2 z-40">
      {/* Telegram */}
      <a
        href="https://www.instagram.com/ariygarage.ck?igsh=MW5uOG4xbGVoMTNpNA=="
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-red hover:bg-brand-red-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Написати в Instagram"
      >
        <MessageCircle size={24} />
      </a>
      {/* Phone */}
      <a
        href="tel:+380637543446"
        className="bg-brand-red hover:bg-brand-red-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Зателефонувати"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingContacts;
