import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import ListLink from "./ListLink";

export default function NavBar() {
  const [bgColor, setBgColor] = useState('');
  const location = useLocation();
  useEffect(() => {
    const locationPath = location.pathname;
    setBgColor('bg-purple-400 shadow');
    if ((locationPath === '/curus') || (locationPath === '/curus/producto')) {
      handleScroll()
      window.addEventListener('scroll', handleScroll)
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname])

  function handleScroll() {
    const valueScroll = window.scrollY;
    const color = verifyLenghtY(valueScroll, 50)
      ? 'bg-purple-400 shadow' : 'transparent';
    setBgColor(color);
  }
  function verifyLenghtY(valueScroll, maxLenght) {
    return valueScroll >= maxLenght;
  }
  return (
    <nav className={` z-50 w-full fixed py-1 top-0 flex justify-between items-center  ${bgColor} text-white px-16 transition-all delay-150 ease-in-out`}>
      <div className="flex items-center">
        <h3 className="font-medium text-lg" style={{ fontFamily: 'Sans-Serif' }}>CURUS</h3>
        <img className="w-5 h-5" src="/feminismo.png" alt="representacion de justicia" />
      </div>
      <ul className="flex text-sm">
        <ListLink path={'/'}>Inicio</ListLink>
        <ListLink path={'/curus/producto'}>Producto</ListLink>
        <ListLink path={'/curus/sobre-nosotros'}>Sobre Nosotros</ListLink>
      </ul>
    </nav>
  )
}