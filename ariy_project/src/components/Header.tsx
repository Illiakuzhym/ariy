
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Головна", path: "/" },
    { name: "Послуги та ціни", path: "/services" },
    { name: "Портфоліо", path: "/portfolio" },
    { name: "Відгуки", path: "/reviews" },
    { name: "Контакти", path: "/contacts" },
  ];

  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking-form');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">TW</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg">Tire & Wheel</h1>
              <p className="text-xs text-gray-300">Професійний сервіс</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-blue-400 transition-colors ${
                  location.pathname === item.path ? "text-blue-400" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+380123456789"
              className="hidden sm:flex items-center space-x-2 text-blue-400 hover:text-blue-300"
            >
              <Phone size={16} />
              <span>+38 (012) 345-67-89</span>
            </a>
            <Button 
              onClick={scrollToBooking}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Записатися
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 hover:text-blue-400 transition-colors ${
                  location.pathname === item.path ? "text-blue-400" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-700 mt-4">
              <a
                href="tel:+380123456789"
                className="flex items-center space-x-2 text-blue-400 py-2"
              >
                <Phone size={16} />
                <span>+38 (012) 345-67-89</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
