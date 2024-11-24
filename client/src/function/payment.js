export const fetchPaymentData = () => {
    const data = JSON.parse(localStorage.getItem("paymentData"));
    return data;
  };
  
  export const createPaymentIntent = async (amount) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/payment/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to create payment intent");
    }
  
    const { clientSecret } = await response.json();
    return clientSecret;
  };
  
  export const createBooking = async (paymentData) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cinema: paymentData.cinema,
        schedule: paymentData.schedule,
        movie: paymentData.movie,
        seats: paymentData.seats,
        totalPrice: paymentData.totalPrice,
      }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to create booking");
    }
  
    const result = await response.json();
    return result;
  };