import React from "react"
import * as Assets from "../../../../Assets/Images"

function FollowSocials() {
  return (
    <section id="follow__section" className="w-full h-[50vh] overflow-hidden">
      <div className="w-full h-[50vh] absolute -z-10 bg-gray-300 overflow-hidden">
        <img className="w-full h-full object-cover object-center" src={Assets.FollowSocials} alt="" />
      </div>
      <div className="w-full h-full text-primary-white flex items-center justify-center">
        <h4 className="text-6xl font-bold">Follow Us On Instagram</h4>
      </div>
    </section>
  )
}

export default FollowSocials
