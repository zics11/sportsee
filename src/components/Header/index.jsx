import Logo from '../../assets/logo-sportsee.svg'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <header className=" flex items-center justify-evenly bg-noir-header h-24 z-50">
      <nav className="  text-white flex items-center  justify-between w-full  mr-24 ml-7 z-50  text-2xl font-medium">
        <img src={Logo} alt="Logo Sportsee" className=" w-44 z-50" />
        <NavLink to="/acceuil">Acceuil</NavLink>
        <span>Profil</span>
        <span>Réglage</span>
        <span>Communauté</span>
      </nav>
    </header>
  )
}

export default Header
