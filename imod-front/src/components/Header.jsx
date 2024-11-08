import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoend from '../assets/logoend.png';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';
import ThemeCahnger from './ThemeChanger';

const Header = ({handleChangeLanguage, language}) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const dropdownRef = useRef(null);

  const { i18n, t } = useTranslation();


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    const handleClickOutside = (e) => {
      closeDropdown(e);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isRootPage = location.pathname === '/';

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`bg-white dark shadow-md ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
      

      {isRootPage && !isSticky && (
        <div className="bg-white dark border-b hidden md:block">
          <div className="container mx-auto flex items-center justify-between py-4">
            <a href="/" className="flex">
              <img className="h-12 ml-8" src={logo} alt="ТГЕМ лого" />
            </a>
            <div className="hidden lg:flex space-x-10">
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700">{t('phone')}</span>
                <a href="tel:+9922381111" className="text-blue-600 hover:underline">
                  (+992) 4411116666
                </a>
              </div>
              <div className="border-l-2 border-gray-300 pl-4 flex flex-col">
                <span className="font-semibold text-gray-700">ПН - ПТ:</span>
                <span className="text-black font-medium">08:00 - 18:00</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-700">ул. Н. Хувайдуллоева 377/1</span>
                <a href="/contacts/our_contacts" className="text-blue-600 hover:underline">
                  734060 г. Душанбе
                </a>
              </div>
             
            </div>
            <div>
             
                </div>
          </div>
        </div>
      )}

      <div className={`container dark mx-auto px-4 py-4 flex items-center ${isSticky || !isRootPage ? 'justify-between' : 'justify-center'} ${isSticky ? 'pt-5' : ''}`}>
      {isSticky && (
          <a href="/" className="hidden md:flex items-center">
          <img className="h-8" src={logo} alt="IMOD лого" />
        </a>
        )}
        {!isRootPage && !isSticky && (
          <a href="/" className="flex items-center">
            <img className="h-8" src={logo} alt="ТГЕМ лого" />
          </a>
        )}
        <div className="flex md:hidden w-full items-center justify-between">
        <a href="/" className="flex items-center">
            <img className="h-8" src={logo} alt="ТГЕМ лого" />
          </a>
        <select
          value={language}
          onChange={handleChangeLanguage}
          className="mx-auto bg-white border border-gray-300 rounded-md px-2 py-1"
        >
          <option value="tg">Таджикский</option>
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
        <button className="text-2xl p-3" onClick={toggleMobileMenu}>
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

        <nav className={`hidden md:flex items-center space-x-8 text-lg ${isSticky ? 'ml-20' : ''}`}>
  <Link
    to="/"
    className={`hover:text-blue-500 ${isActive('/') ? 'bg-blue-100 rounded-md px-3 py-1' : ''}`}
  >
    {t('main')}
  </Link>

  

  <Link to="/products" className={`hover:text-blue-500 ${isActive('/products') ? 'bg-blue-100 rounded-md px-3 py-1' : ''}`}>
    {t('products')}
  </Link>

  <Link to="/vacancy" className={`hover:text-blue-500 ${isActive('/vacancy') ? 'bg-blue-100 rounded-md px-3 py-1' : ''}`}>
    {t('vacancies')}
  </Link>
  <div className="relative dark" ref={dropdownRef}>
    <button
      className="hover:text-blue-500 inline-flex items-center"
      onClick={toggleDropdown}
    >
      {t('about')}
      <svg
        className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isDropdownOpen && (
      <div  className="absolute dark left-0 w-40 bg-white shadow-lg z-50">
        <ul className="py-2 text-gray-700">
          <li>
            <Link to="/news" className={`block px-4 py-2 hover:bg-gray-100 hover:text-blue-500 ${isActive('/news') ? 'bg-blue-100' : ''}`}>
              {t('news')}
            </Link>
          </li>
          <li>
            <Link to="/history" className={`block px-4 py-2 hover:bg-gray-100 hover:text-blue-500 ${isActive('/history') ? 'bg-blue-100' : ''}`}>
              {t('history')}
            </Link>
          </li>
          <li>
            <Link to="/gallery" className={`block px-4 py-2 hover:bg-gray-100 hover:text-blue-500 ${isActive('/gallery') ? 'bg-blue-100' : ''}`}>
              {t('gallery')}
            </Link>
          </li>
        </ul>
      </div>
    )}
  </div>
  {/* Language Selector */}
  <select
    value={language}
    onChange={handleChangeLanguage}
    className=" bg-white text-gray-700 px-4"
  >
    <option value="tg">Таджикский</option>
    <option value="ru">Русский</option>
    <option value="en">English</option>
  </select>
</nav>

      </div>

      {isMobileMenuOpen && (
        <nav className="bg-gray-100 dark md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg">
            <li>
              <Link to="/" className={`hover:text-blue-500 ${isActive('/') ? 'bg-blue-100 px-3 py-1 rounded-md' : ''}`} onClick={toggleMobileMenu}>
                Главное
              </Link>
            </li>
            <li>
              <Link to="/news" className={`hover:text-blue-500 ${isActive('/news') ? 'bg-blue-100 px-3 py-1 rounded-md' : ''}`} onClick={toggleMobileMenu}>
                Новости
              </Link>
            </li>
            <li>
              <Link to="/history" className={`hover:text-blue-500 ${isActive('/history') ? 'bg-blue-100 px-3 py-1 rounded-md' : ''}`} onClick={toggleMobileMenu}>
                История
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={`hover:text-blue-500 ${isActive('/gallery') ? 'bg-blue-100 px-3 py-1 rounded-md' : ''}`} onClick={toggleMobileMenu}>
                Галерея
              </Link>
            </li>
            <li>
              <Link to="/products" className={`hover:text-blue-500 ${isActive('/products') ? 'bg-blue-100 px-3 py-1 rounded-md' : ''}`} onClick={toggleMobileMenu}>
                Продукты
              </Link>
            </li>
            <li>
              <Link to="/vacancy" className={`hover:text-blue-500 ${isActive('/vacancy') ? 'bg-blue-100 px-3 py-1 rounded-md' : ''}`} onClick={toggleMobileMenu}>
                Вакансии
              </Link>
            </li>
            
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
