import React from 'react'
import Icon1 from '../../assets/iconVm1.png'
import Icon2 from '../../assets/iconVm2.png'
import Icon3 from '../../assets/iconVm3.png'
import Icon4 from '../../assets/iconVm4.png'

function VerticalMenu() {
  return (
    <section className="  h-auto bg-noir-header  flex flex-col items-center w-28 ">
      <div className=" w-28 flex flex-col items-center space-y-5 mt-24 h-full justify-center">
        <img src={Icon1} alt="icone" className=" h-16 w-16 " />
        <img src={Icon2} alt="icone" className=" h-16 w-16" />
        <img src={Icon3} alt="icone" className=" h-16 w-16" />
        <img src={Icon4} alt="icone" className=" h-16 w-16" />
      </div>
      <div>
        <p className=" text-white text-xs -rotate-90 mb-24 w-36">
          Copiryght, SportSee 2020
        </p>
      </div>
    </section>
  )
}

export default VerticalMenu
