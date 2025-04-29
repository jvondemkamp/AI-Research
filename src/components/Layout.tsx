
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'References', path: '/references' },
    { name: 'Popular Science Article', path: '/article' },
    { name: 'Science Poster', path: '/poster' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background/95 backdrop-blur-sm shadow-md py-4 sticky top-0 z-50 border-b border-primary/20">
        <div className="page-container flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-heading font-bold text-gradient">
            AI Research
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'nav-link-active' : ''}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-20">
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `text-xl ${isActive ? 'text-primary font-semibold' : 'text-foreground'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-secondary/30 border-t border-primary/20 py-6">
        <div className="page-container text-center">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Jackson Vondemkamp | AI Research Portfolio
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
