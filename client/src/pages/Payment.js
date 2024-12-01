"use client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isSignedIn } from "../function/auth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { createBooking, createTickets } from "../function/book";
import { fetchPaymentData, createPaymentIntent } from "../function/payment";
import "../components/Payment/payment.css";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`);

// Giao diện chọn ngân hàng
const CardSelection = () => {
  const cards = [
    { id: "visa", name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/2560px-Old_Visa_Logo.svg.png" },
    { id: "mastercard", name: "Mastercard", logo: "https://athgroup.vn/upload/blocks/thumb_1920x0/ATH-kh%C3%A1m-ph%C3%A1-b%E1%BB%99-nh%E1%BA%ADn-di%E1%BB%87n-mastercard-4.png" },
    { id: "amex", name: "American Express", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" },
    { id: "jcb", name: "JCB", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgdFDHUvETEYaCuw22mNfbZPyKLtquCUmV0NGVPKMreGdA5X99ikoHoFbGLpGAzUprdw&usqp=CAU" },
    // { id: "discover", name: "Discover", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDfwKwjbPPz3ANgvVny7M29xGwXXDzdUpwg&sdiscover_logo.png" },
  ];

  return (
    <div className="card-selection">
      <h3>Những loại thẻ được hỗ trợ</h3>
      <div className="cards">
        {cards.map((card) => (
          <div key={card.id} className="card-option">
            <img src={`${card.logo}`} alt={card.name} />
            <span>{card.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
const CheckoutForm = ({ paymentData }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isPaid, setIsPaid] = useState(false);

  if (!isSignedIn()) {
    navigate("/signin");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
    } else {
      const clientSecret = await createPaymentIntent(paymentData.totalPrice);
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });
      if (result.error) {
        setError(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          setIsPaid(true);
          const bookingData = {
            user_id: paymentData.user_id,
            schedule_id: paymentData.schedule.schedule_id,
            total_price: paymentData.totalPrice,
            booking_date: new Date(),
          };
          const bookingResult = await createBooking(bookingData);
          if (bookingResult.success) {
            const ticketsData = paymentData.seats.map((seat) => ({
              booking_id: bookingResult.booking.booking_id,
              seat_id: seat.seat_id,
              cinema_id: paymentData.cinema.cinema_id,
              price: seat.price,
            }));
            const ticketsResult = await createTickets(ticketsData);
            if (ticketsResult.success) {
              setIsPaid(true);
              navigate("/success");
            } else {
              setError(ticketsResult.error);
            }
          } else {
            setError(bookingResult.error);
          }
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSelection /> {/* Thêm giao diện chọn ngân hàng */}
      <CardElement />
      <button type="submit" disabled={!stripe || isPaid} className={`pay-button ${isPaid ? "paid" : ""}`}>
        {isPaid ? "Đã thanh toán" : "Thanh toán ngay"}
      </button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};

export const PaymentPage = () => {
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    const data = fetchPaymentData();
    setPaymentData(data);
  }, []);

  if (!paymentData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="payment-container">
      <div className="payment-header">
        <h1>Thanh toán vé xem phim</h1>
        <p>Hoàn tất đơn hàng của bạn ngay bây giờ</p>
      </div>
      <div className="payment-content">
        <div className="movie-details">
          <h2>Thông tin phim</h2>
          <p>
            <strong>Tên phim:</strong> {paymentData.movie.title}
          </p>
          <p>
            <strong>Ngày chiếu:</strong> {new Date(paymentData.schedule.start_time).toDateString()}
          </p>
          <p>
            <strong>Ngôn ngữ:</strong> {paymentData.movie.language}
          </p>
          <p>
            <strong>Thể loại:</strong> {paymentData.movie.genre}
          </p>
          <p>
            <strong>Giá vé:</strong> {paymentData.totalPrice} ₫
          </p>
        </div>
        <div className="screen-selection">
          <h2>Rạp chiếu phim</h2>
          <div>{paymentData.cinema.name} - {paymentData.cinema.location}</div>
        </div>
        <div className="seats-details">
          {paymentData.seats.map((seat, index) => (
            <p key={index}>
              <strong>Ghế:</strong> {seat.row}{seat.seat_col} - {seat.price} ₫
            </p>
          ))}
        </div>
      </div>
      <div className="payment-footer">
        <Elements stripe={stripePromise}>
          <CheckoutForm paymentData={paymentData} />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentPage;
