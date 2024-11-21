import React, { useEffect, useState } from "react";
import { fetchAllCinemas } from "../../function/cinema";
import { fetchAllSchedules } from "../../function/schedule";
import DatePicker from "react-horizontal-datepicker";
import "./MovieSchedule.css";

const MovieSchedule = ({ movieId }) => {
  const [cinemas, setCinemas] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Fetch cinemas and schedules from backend
  useEffect(() => {
    const getCinemasAndSchedules = async () => {
      const cinemaResult = await fetchAllCinemas();
      const scheduleResult = await fetchAllSchedules();

      if (cinemaResult.success) {
        setCinemas(cinemaResult.cinemas);
      } else {
        console.error(cinemaResult.error);
      }

      if (scheduleResult.success) {
        setSchedules(scheduleResult.schedules);
      } else {
        console.error(scheduleResult.error);
      }
    };

    getCinemasAndSchedules();
  }, []);

  // Filter schedules by selected date and movie ID
  const filterSchedulesByDateAndMovie = (date, movieId) => {
    return schedules.filter(
      (schedule) =>
        new Date(schedule.start_time).toDateString() === date.toDateString() &&
        schedule.movie_id === movieId
    );
  };

  const handleDateSelect = (date) => {
    setSelectedDate(new Date(date));
  };

  const schedulesForSelectedDateAndMovie = filterSchedulesByDateAndMovie(
    selectedDate,
    movieId
  );

  return (
    <div className="schedule-section md:px-24">
      <h2 className="schedule-title be-vietnam-pro-bold text-primary">Lịch chiếu</h2>
      <div className="schedule-date-picker">
        <DatePicker
          getSelectedDay={handleDateSelect}
          endDate={100}
          selectDate={new Date()}
          labelFormat={"MMMM"}
          color={"#d1082a"}
        />
      </div>
      <div className="schedule-container">
        {cinemas.map((cinema) => {
          const cinemaSchedules = schedulesForSelectedDateAndMovie.filter(
            (schedule) => schedule.cinema_id === cinema.cinema_id
          );

          return (
            <div className="schedule-item" key={cinema.cinema_id}>
              <div>
                <h3 className="be-vietnam-pro-semibold">{cinema.name}</h3>
                <p>{cinema.location}</p>
              </div>
              <div className="schedule-times">
                {cinemaSchedules.length > 0 ? (
                  cinemaSchedules.map((schedule) => (
                    <div key={schedule.schedule_id}>
                      <p>
                        {new Date(schedule.start_time).toLocaleTimeString()} -{" "}
                        {new Date(schedule.end_time).toLocaleTimeString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>Không có lịch chiếu</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieSchedule;
