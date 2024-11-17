import React, { useState } from 'react';
import "./Tickets.css";

const Tickets = () => {
  const cinema = {
    name: "Cinema 1",
    location:
      "Tầng 4 & 5, TTTM The Garden, khu đô thị The Manor, đường Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm, Hà Nội",
    timeslots: [
      {
        time: "10:00 AM",
        seats: [
          {
            // platinum
            type: "platinum",
            rows: [
              {
                // row 2
                rowname: "H",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "G",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "F",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 300000,
          },
          {
            // gold
            type: "gold",
            rows: [
              {
                // row 2
                rowname: "E",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "D",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "C",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 130000,
          },
          {
            // silver - 20 objects
            type: "silver",
            rows: [
              {
                rowname: "B",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "A",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 70000,
          },
        ],
      },
      {
        time: "1:30 PM",
        seats: [
          {
            // platinum
            type: "platinum",
            rows: [
              {
                // row 2
                rowname: "H",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "G",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "F",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 300000,
          },
          {
            // gold
            type: "gold",
            rows: [
              {
                // row 2
                rowname: "E",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "D",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "C",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 130000,
          },
          {
            // silver - 20 objects
            type: "silver",
            rows: [
              {
                rowname: "B",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "A",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 70000,
          },
        ],
      },
      {
        time: "4:00 PM",
        seats: [
          {
            // platinum
            type: "platinum",
            rows: [
              {
                // row 2
                rowname: "H",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "G",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "F",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 300000,
          },
          {
            // gold
            type: "gold",
            rows: [
              {
                // row 2
                rowname: "E",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "D",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "C",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 130000,
          },
          {
            // silver - 20 objects
            type: "silver",
            rows: [
              {
                rowname: "B",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "A",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 70000,
          },
        ],
      },
      {
        time: "8:30 PM",
        seats: [
          {
            // platinum
            type: "platinum",
            rows: [
              {
                // row 2
                rowname: "H",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "G",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "F",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 300000,
          },
          {
            // gold
            type: "gold",
            rows: [
              {
                // row 2
                rowname: "E",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                rowname: "D",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "C",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 130000,
          },
          {
            // silver - 20 objects
            type: "silver",
            rows: [
              {
                rowname: "B",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
              {
                // row 2
                rowname: "A",
                cols: [
                  // col 1
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "10",
                      },
                    ],
                  },
                  // col 2
                  {
                    seats: [
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "1",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "2",
                      },

                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "3",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "4",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "5",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "6",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "7",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "8",
                      },
                      {
                        type: "seat",
                        status: "available",
                        seat_id: "9",
                      },
                      {
                        type: "seat",
                        status: "not-available",
                        seat_id: "10",
                      },
                    ],
                  },
                ],
              },
            ],
            price: 70000,
          },
        ],
      },
    ],
  };

  const movie = {
    title: "VENOM: THE LAST DANCE: KÈO CUỐI",
    formats: ["2D", "3D"],
    genre: "Action",
    date: new Date(),
    cinemas: [
      {
        name: "Cinema 1",
        location:
          "Tầng 4 & 5, TTTM The Garden, khu đô thị The Manor, đường Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm, Hà Nội",
      },
      {
        name: "Cinema 2",
        location:
          "Tầng 8 của TTTM Vincom, số 2 Phạm Ngọc Thạch, Đống Đa, Hà Nội",
      },
      {
        name: "Cinema 3",
        location: "Tầng 8, TTTM Discovery - 302 Cầu Giấy , Hà Nội",
      },
    ],
  };

  const [selectedTime, setSelectedTime] = useState(cinema.timeslots[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);

    const generateSeatLayout = () => {
        const timeSlotIndex = cinema.timeslots.findIndex((t) => t.time === selectedTime.time);
        return cinema.timeslots[timeSlotIndex].seats.map((seatType, index) => (
            <div className="seat-type" key={index}>
                <h2>{seatType.type} - {seatType.price} ₫</h2>
                <div className='seat-rows'>
                    {seatType.rows.map((row, rowIndex) => (
                        <div className="seat-row" key={rowIndex}>
                            <p className="rowname">{row.rowname}</p>
                            <div className="seat-cols">
                                {row.cols.map((col, colIndex) => (
                                    <div className="seat-col" key={colIndex}>
                                        {col.seats.map((seat, seatIndex) => (
                                            <div key={seatIndex}>
                                                {seat.status === 'available' &&
                                                    <span className={
                                                        selectedSeats.find((s) => {
                                                            return s.row === row.rowname && s.seat_id === seat.seat_id && s.col === colIndex;
                                                        }) ? "seat-selected" : "seat-available"
                                                    }
                                                        onClick={() => selectDeselectSeat({
                                                            row: row.rowname,
                                                            col: colIndex,
                                                            seat_id: seat.seat_id,
                                                            price: seatType.price
                                                        })}
                                                    >{seatIndex + 1}</span>
                                                }
                                                {seat.status === 'not-available' &&
                                                    <span className="seat-unavailable">
                                                        {seatIndex + 1}
                                                    </span>
                                                }
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <br /> <br /> <br />
                        </div>
                    ))}
                </div>
            </div>
        ));
    };

    const selectDeselectSeat = (seat) => {
        const isSelected = selectedSeats.find((s) => {
            return s.row === seat.row && s.seat_id === seat.seat_id && s.col === seat.col;
        });
        if (isSelected) {
            setSelectedSeats(selectedSeats.filter((s) => s.seat_id !== seat.seat_id));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

  return (
    <div className="ticket-page">
      <div className="movie">
        <div className="head">
          <h1>
            {movie.title}
          </h1>
          <h3>{movie.genre}</h3>
        </div>
      </div>

      <div className="select-seat">
        <div className="time-cont">
          {cinema.timeslots.map((time, index) => (
            <h3
              className={
                selectedTime.time === time.time ? "time selected" : "time"
              }
              onClick={() => {
                setSelectedTime(time);
                setSelectedSeats([]);
              }}
              key={index}
            >
              {time.time}
            </h3>
          ))}
        </div>
        <div className="indicators">
          <div>
            <span className="seat-unavailable"></span>
            <p>Not available</p>
          </div>
          <div>
            <span className="seat-available"></span>
            <p>Available</p>
          </div>
          <div>
            <span className="seat-selected"></span>
            <p>Selected</p>
          </div>
        </div>
        {generateSeatLayout()}
        <div className="total-cont">
          <div className="total">
            <h2>Total</h2>
            <h3>
              {selectedSeats.reduce((acc, seat) => acc + seat.price, 0)} ₫
            </h3>
          </div>

          <a href={`/payment/`} className="theme-btn1 linkstylenone">
            Continue
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
