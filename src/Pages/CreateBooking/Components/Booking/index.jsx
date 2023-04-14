import React, { useEffect, useState } from "react"
import { addNewBooking, getAvailableBookingHoursByDate } from "../../../../Firebase/Controller"
import * as Assets from "../../../../Assets/Images"

function Booking() {
  const [bookingDate, setBookingDate] = useState(0)

  const [availableHours, setAvailableHours] = useState([])

  async function handleSubmit(e) {
    e.preventDefault()
    console.log("handled")
    const bookerName = document.getElementById("input_name").value
    const bookerNumber = document.getElementById("input_number").value
    const bookingDate = document.getElementById("input_date").value
    const bookingHour = document.getElementById("input_hour").value
    const newBooking = {
      bookerName,
      bookerNumber,
      bookingDate,
      bookingHour,
    }
    //console.log(newBooking)
    await addNewBooking(newBooking)
  }

  useEffect(() => {
    async function main() {
      try {
        setAvailableHours(await getAvailableBookingHoursByDate(bookingDate))
      } catch (error) {
        console.log(error)
      }
    }
    main()
  }, [bookingDate])

  return (
    <section className="w-full h-screen flex items-center justify-center bg-create-booking bg-cover bg-center">
      <div className="md:w-[60vw] md:h-[50rem] flex md:flex-row flex-col">
        <div className="w-full md:w-3/6">
          <img className="w-full h-full object-center object-cover" src={Assets.Booking} alt="" />
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e)
          }}
          className="text-white p-4 w-full md:w-3/6 bg-gray-300"
        >
          <div className="h-full flex flex-col justify-center gap-12 items-center text-primary-black">
            <div className="grid">
              <label htmlFor="input_name">Name Surname</label>
              <input required className="" id="input_name" type="text" placeholder="Enter Name And Surname" />
            </div>
            <div className="grid">
              <label htmlFor="input_number">Number</label>
              <input required className="" id="input_number" type="tel" placeholder="+90 (5**)" />
            </div>

            <div className="grid">
              <label htmlFor="input_date">Date</label>
              <input
                onChange={(e) => {
                  setBookingDate(e.target.value.toString())
                }}
                className=""
                id="input_date"
                type="date"
              />
            </div>
            <div className="grid">
              <label htmlFor="input_hour">Available Hours</label>

              <select id="input_hour">
                {availableHours.map((hour, index) => {
                  return <option key={index}>{hour}</option>
                })}
              </select>
            </div>
            <button className="bg-primary-white text-primary-black p-4">Book</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Booking
