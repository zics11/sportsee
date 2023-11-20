import React from 'react'
import Icon1 from '../../assets/iconVm1.png'

function VerticalMenu() {
  return (
    <section className="  h-auto bg-noir-header  flex flex-col items-center space-y-5">
      <div className=" w-28 flex flex-col items-center space-y-5 mt-24 h-full justify-center">
        <img src={Icon1} alt="icone" className=" h-16 w-16 " />
        <img src={Icon1} alt="icone" className=" h-16 w-16" />
        <img src={Icon1} alt="icone" className=" h-16 w-16" />
        <img src={Icon1} alt="icone" className=" h-16 w-16" />
      </div>
    </section>
  )
}

export default VerticalMenu
