import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <section className="  h-2/3 flex flex-col w-full justify-center p-20 gap-11 items-center text-4xl font-bold">
      <h2 className=' text-red-SportSee text-7xl'>404</h2>
      <p>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/acceuil" className=' text-xl font-medium text-red-SportSee underline' >Retourner sur la page d’accueil</NavLink>{' '}
    </section>
  )
}

export default Error
