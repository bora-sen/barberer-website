import { uuidv4 } from "@firebase/util"
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"
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

export async function getBookingsByDate(bookingDate) {
  try {
    const books = []
    const snapShot = await getDocs(query(collection(db, "bookings"), where("bookingDate", "==", bookingDate)))
    snapShot.forEach((snap) => {
      books.push(snap.data())
    })
    return books
  } catch (error) {
    console.log(error)
  }
}

export async function getAvailableBookingHoursByDate(bookingDate) {
  try {
    const allHours = ["11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"]
    const bookedHours = []

    const bookings = await getBookingsByDate(bookingDate)
    bookings.forEach((booking) => {
      bookedHours.push(booking.bookingHour)
    })

    const bookableHours = allHours.filter((hour) => !bookedHours.includes(hour))
    return bookableHours
  } catch (error) {
    console.log(error)
  }
}
