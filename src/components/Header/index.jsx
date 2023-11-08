import Logo from '../../assets/logo-sportsee.svg'

function Header() {
  return (
    <header className=" flex items-center justify-evenly bg-noir-header h-24">
      <nav className="  text-white flex items-center  justify-between w-full  mr-24 ml-7  text-2xl font-medium">
        <img src={Logo} alt="Logo Sportsee" className=" w-44" />
        <span>Acceuil</span>
        <span>Accueil</span>
        <span>Accueil</span>
        <span>Accueil</span>
      </nav>
    </header>
  )
}

export default Header
