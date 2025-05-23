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
    <header className="bg-brand-black text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-white">AG</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-extrabold text-lg text-brand-red leading-tight">ARIY GARAGE</h1>
              <p className="text-xs text-brand-light-gray">Професійний сервіс</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-semibold transition-colors duration-150 ${
                  location.pathname === item.path
                    ? "text-brand-red underline underline-offset-4"
                    : "hover:text-brand-red text-white"
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
              className="hidden sm:flex items-center space-x-2 text-brand-light-gray hover:text-brand-red transition"
            >
              <Phone size={16} />
              <span className="font-semibold">+38 (012) 345-67-89</span>
            </a>
            <Button
              onClick={scrollToBooking}
              className="bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-5 py-2 rounded-xl shadow-xl transition"
            >
              Записатися
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-brand-gray bg-brand-black text-white">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 font-semibold transition-colors duration-150 ${
                  location.pathname === item.path
                    ? "text-brand-red underline underline-offset-4"
                    : "hover:text-brand-red text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-brand-gray mt-4">
              <a
                href="tel:+380123456789"
                className="flex items-center space-x-2 text-brand-light-gray hover:text-brand-red py-2 transition"
              >
                <Phone size={16} />
                <span className="font-semibold">+38 (012) 345-67-89</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
