import React from "react"
import { Tilt } from "react-tilt"
import * as Assets from "../../../../Assets/Images"

function Services() {
  return (
    <section className="w-full h-auto py-24 bg-primary-green-darker">
      <div className="w-full h-full p-4 flex-col md:flex-row flex justify-evenly items-baseline gap-24 md:gap-0 text-primary-white text-center">
        <Tilt options={{ scale: 1 }}>
          <div className="w-[24rem]">
            <div className="w-full aspect-square overflow-hidden">
              <img className="w-full h-full object-cover object-center" src={Assets.Service1} alt="" />
            </div>
            <h3 className="mt-4 text-3xl font-bold">The Ultimate Shaving Experience</h3>
            <p className="text-xl mt-2 leading-relaxed">
              Our barbers are masters of the blade, providing a relaxing and rejuvenating
              experience that will leave your skin smooth, refreshed, and revitalized. We use top-quality shaving creams and hot towels to soften your
              beard, open your pores, and ensure a close and comfortable shave.
            </p>
          </div>
        </Tilt>

        <Tilt options={{ scale: 1 }}>
          <div className="w-[24rem]">
            <div className="w-full aspect-square overflow-hidden">
              <img className="w-full h-full object-cover object-center" src={Assets.Service2} alt="" />
            </div>
            <h3 className="mt-4 text-3xl font-bold">Timeless Style, Expertly Executed</h3>
            <p className="text-xl mt-2 leading-relaxed">
              Our skilled barbers are trained in the art of classic men's haircuts. Whether you're looking for a sharp and clean fade, a dapper gentleman's cut,
              or a classic pompadour, our barbers will carefully craft a haircut that suits your style and enhances your features. 
            </p>
          </div>
        </Tilt>

        <Tilt options={{ scale: 1 }}>
          <div className="w-[24rem]">
            <div className="w-full aspect-square overflow-hidden">
              <img className="w-full h-full object-cover object-center" src={Assets.Service3} alt="" />
            </div>
            <h3 className="mt-4 text-3xl font-bold">Customer Happiness</h3>
            <p className="text-xl mt-2 leading-relaxed">
              We are dedicated to making our customers happy, and it shows in everything we do. From providing exceptional service to offering top-quality
              products, we go above and beyond to ensure that our customers are not just satisfied, but truly delighted.
            </p>
          </div>
        </Tilt>
      </div>
    </section>
  )
}

export default Services
