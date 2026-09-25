import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    setBookings(data);
    setLoading(false);
  }

  if (loading) {
    return (
      <main className="history-page">
        <h1>Booking History</h1>
        <p>Loading bookings...</p>
      </main>
    );
  }

  return (
    <main className="history-page">
      <h1>Booking History</h1>

      {bookings.length === 0 ? (
        <p>No bookings available yet.</p>
      ) : (
        <div className="booking-list">
          {bookings.map((booking) => (
            <div className="booking-card" key={booking.id}>
              <h3>{booking.name}</h3>
              <p>Tickets: {booking.tickets}</p>
              <p>Stand: {booking.stand}</p>
              <p>Venue: {booking.venue}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default BookingHistory;