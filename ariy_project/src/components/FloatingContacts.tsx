
import { MessageCircle, Phone } from "lucide-react";

const FloatingContacts = () => {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col space-y-2 z-40">
      <a
        href="https://t.me/your_telegram"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Написати в Telegram"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href="https://wa.me/380123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Написати в WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href="tel:+380123456789"
        className="bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Зателефонувати"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingContacts;
