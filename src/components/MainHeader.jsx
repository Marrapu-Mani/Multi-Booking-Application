import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Menu, X } from 'lucide-react';

const MainHeader = ({ onAboutClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(isMobileMenuOpen => !isMobileMenuOpen);
  }

  const handleItemClick = () => {
    setIsOpen(false); 
  }

  const toggleDropdownMenu = () => {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
         
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                height="40px" 
                width="40px" 
                viewBox="0 -960 960 960" 
                fill="#e76f51"
              >
                <path d="M480-840.67 920-512l-38.67 52.67L800-520.67V-120H160v-400.67l-81.33 61.34L40-512l440-328.67ZM304.67-478q0 49.67 53.66 110.33Q412-307 480-246q68-61 121.67-121.67 53.66-60.66 53.66-110.33 0-40.67-27-67.33-27-26.67-67-26.67-24 0-45.16 11.17Q495-549.67 480-533.33q-15-16.34-36.5-27.5Q422-572 398.67-572q-40 0-67 26.67-27 26.66-27 67.33Zm428.66 291.33V-568L480-757.33 226.67-568v381.33h506.66Zm0 0H226.67h506.66Z"/>
              </svg>
              <span className="ml-2 text-2xl font-bold text-[#e76f51]">Fine<span className='text-[#231942]'>Venue</span></span>
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
              <button variant="outline" size="icon" aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
              </button>
          </div>

          <nav className="hidden md:flex space-x-10">
            <button
              onClick={onAboutClick}
              className="text-base font-medium text-[#231942] hover:text-[#5e548e]"
            >
              About Us
            </button>
            
            <div
              className="dropdown dropdown-hover text-base font-medium text-[#231942] hover:text-[#5e548e] cursor-pointer"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div tabIndex={0} onClick={toggleDropdownMenu}>Services</div>
              <ul
                tabIndex={0}
                className={`dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow ${isOpen ? 'block' : 'hidden'}`}
              >
                <li>
                  <Link to="/function-halls" onClick={handleItemClick}>
                    Function Halls
                  </Link>
                </li>
                <li>
                  <Link to="/sports-facilities" onClick={handleItemClick}>
                    Sports Facilities
                  </Link>
                </li>
                <li>
                  <Link to="/wellness-services" onClick={handleItemClick}>
                    Wellness Services
                  </Link>
                </li>
              </ul>
            </div>
              
            <button 
              onClick={onAboutClick}
              className="text-base font-medium text-[#231942] hover:text-[#5e548e]"
            >
              Contact Us
            </button>
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button className="px-2 py-2 bg-[#e76f51] hover:bg-[#f4a261] text-[#eee] rounded-lg font-semibold focus:outline-none">
              <LogIn className="inline h-6 w-6" /> Login
            </button>
          </div>
        
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pb-3 space-y-1 sm:px-3">

          <button 
            className="block px-3 py-2 text-base font-medium text-[#231942] hover:text-[#5e548e]"
            onClick={onAboutClick}
          >
            About Us
          </button>
          
          <div
            className="dropdown dropdown-hover block px-3 py-2 rounded-md text-base font-medium text-[#231942] hover:text-[#5e548e]"
            onClick={toggleDropdownMenu}
          >
            <div tabIndex={0}>Services</div>
            <ul
              tabIndex={0}
              className={`dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow ${isOpen ? 'block' : 'hidden'}`}
            >
              <li>
                <Link to="/function-halls" onClick={toggleMobileMenu}>
                  Function Halls
                </Link>
              </li>
              <li>
                <Link to="/sports-facilities" onClick={toggleMobileMenu}>
                  Sports Facilities
                </Link>
              </li>
              <li>
                <Link to="/wellness-services" onClick={toggleMobileMenu}>
                  Wellness Services
                </Link>
              </li>
            </ul>
          </div>

          <Link 
            href="#" 
            className="block px-3 py-2 text-base font-medium text-[#231942] hover:text-[#5e548e]"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </Link>

          <div className="mt-4 px-3">
            <button 
              className="w-full bg-[#e76f51] hover:bg-[#f4a261] text-[#eee] font-bold py-2 px-4 rounded"
              onClick={toggleMobileMenu}
            >
              <LogIn className="inline mr-2 h-5 w-5" /> Login
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default MainHeader;
