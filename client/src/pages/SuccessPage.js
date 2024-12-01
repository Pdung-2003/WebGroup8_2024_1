import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Success/success.css"; // Import file CSS cho trang SuccessPage

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="success-container">
      <div className="success-content">
        <img
          className="success-icon"
          src="https://img.icons8.com/ios/452/checked.png"
          alt="Success"
        />
        <h1>Đặt vé thành công!</h1>
        <p>Cảm ơn bạn đã thanh toán. Vé của bạn đã được xác nhận.</p>
        <button className="back-button" onClick={handleBackToHome}>
          Quay lại trang chủ
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
