import { uuidv4 } from "@firebase/util"
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore"
import { db } from "./index"

export async function addNewBooking(bookingObj) {
  try {
    const newBookingObj = {
      ...bookingObj,
      createdAt: new Date(),
      _id: uuidv4(),
    }
    await setDoc(doc(db, "bookings", newBookingObj._id), newBookingObj)
    console.log("new booking is added")
  } catch (error) {
    console.log(error)
  }
}

export async function getAllBookings() {
  try {
    const BookingsArr = []
    const BookingQuery = query(collection(db, "bookings"))
    const snapshot = await getDocs(BookingQuery)
    snapshot.forEach((snap) => {
      BookingsArr.push(snap.data())
    })
    return BookingsArr
  } catch (error) {
    console.log(error)
  }
}
