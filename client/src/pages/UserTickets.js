import React, { useState, useEffect } from "react";
import { fetchTicketsByUserId } from "../function/ticket";
import { getUserInfo } from "../function/auth";
import { Table } from 'antd';

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
      render: (text, record) => (
        <button
          onClick={()=>{
            
          }}
          style={{
            padding: '5px 10px',
            backgroundColor: '#1890ff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Xem chi tiết
        </button>
      ),
    }
  ];


  return (
    <div style={{ padding: '20px' }}>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>Danh sách vé đã đặt</Typography.Title>
      <Table
        dataSource={tickets}
        columns={columns}
        rowKey="ticket_id" // Giữ nguyên vì "ticket_id" vẫn là duy nhất
        bordered
        pagination={{ pageSize: 5 }}
        locale={{ emptyText: 'Không có vé nào được đặt' }}
      />
    </div>
  );

};

export default UserTickets;