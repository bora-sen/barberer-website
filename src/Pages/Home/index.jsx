import React from "react"
import { addNewBooking, getAllBookings } from "../../Firebase/Controller"

function Home() {
  async function handleClick(e) {
    e.preventDefault()
    const dummyBooking = {
      name: "bora",
      surname: "sen",
      address: "ajsldfjs kjfls jflajs dlfj alskdjflksj dffsşlkdf",
    }
    //await addNewBooking(dummyBooking)
    const books = await getAllBookings()
    console.log(books);
  }
  return (
    <div className="bg-primary-black w-full h-screen flex items-center justify-center">
      <button
        onClick={(e) => {
          handleClick(e)
        }}
        className="bg-white p-4"
      >
        Click me
      </button>
    </div>
  )
}

export default Home
