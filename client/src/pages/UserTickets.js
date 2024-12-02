import React, { useState, useEffect } from "react";
import { fetchTicketsByUserId } from "../function/ticket";
import { getUserInfo } from "../function/auth";
import { Table, message } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const UserTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState(null);
  const userInfo = getUserInfo();

  useEffect(() => {
    const getTickets = async () => {
      const result = await fetchTicketsByUserId();
      if (result.success) {
        setTickets(result.tickets);
      } else {
        setError(result.error);
      }
    };

    getTickets();
  }, []);

  const handleCancel = async (ticketId) => {
    try {
      console.log(ticketId)
      // Gửi yêu cầu PUT đến API
      const response = await fetch(`http://localhost:3001/ticket/${ticketId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "cancelled" }),
      });
  
      // Kiểm tra phản hồi từ API
      if (response.ok) {
        const updatedTicket = await response.json();
        
        // Cập nhật trạng thái vé trong state
        setTickets((prevTickets) =>
          prevTickets.map((ticket) =>
            ticket.ticket_id === updatedTicket.ticket_id ? updatedTicket : ticket
          )
        );
        message.success("Vé đã được hủy thành công!");
      } else {
        const errorData = await response.json();
        message.error(errorData.error || "Không thể hủy vé, vui lòng thử lại sau!");
      }
    } catch (error) {
      console.error("Error cancelling ticket:", error);
      message.error("Đã xảy ra lỗi khi hủy vé!");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (tickets.length === 0) {
    return <div>No tickets found</div>;
  }

  const columns = [
    {
      title: 'STT',
      key: 'index',
      render: (text, record, index) => index + 1, // Tăng giá trị index bắt đầu từ 1
    },
    { title: 'Tên phim', dataIndex: 'movie_name', key: 'movie_name' },
    {
      title: 'Thời gian chiếu',
      dataIndex: 'schedule_start_time',
      key: 'schedule_start_time',
      render: (time) => new Date(time).toLocaleString(),
    },
    { title: 'Rạp', dataIndex: 'cinema_name', key: 'cinema_name' },
    { title: 'Phòng', dataIndex: 'room_name', key: 'room_name' },
    { title: 'Ghế', dataIndex: 'seat_name', key: 'seat_name' },
    { title: 'Giá vé', dataIndex: 'price', key: 'price', render: (price) => `${price} VND` },
    {
      title: 'Hành động',
      key: 'action',
      render: (text, record) => {
        if (record.status === "Available") {
          return (
            <button
              onClick={() => handleCancel(record.ticket_id)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#ff4d4f',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Hủy vé
            </button>
          );
        } else if (record.status === "cancelled") {
          return (
            <button
              disabled
              style={{
                padding: '5px 10px',
                backgroundColor: '#d9d9d9',
                color: '#595959',
                border: 'none',
                borderRadius: '4px',
              }}
            >
              Đã hủy
            </button>
          );
        } else {
          return null;
        }
      },
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2} style={{ textAlign: 'center' }}>Danh sách vé đã đặt</Title>
      <Table
        dataSource={tickets}
        columns={columns}
        rowKey="ticket_id"
        bordered
        pagination={{ pageSize: 5 }}
        locale={{ emptyText: 'Không có vé nào được đặt' }}
      />
    </div>
  );
};

export default UserTickets;
