import React from "react";
import { BsShare, BsFillStarFill } from "react-icons/bs";
import MovieSchedule from "./MovieSchedule";
import "./MovieDetails.css";

const MovieDetails = () => {
  const movie = {
    wideposter:
      "https://bhdstar.vn/wp-content/uploads/2024/10/referenceSchemeHeadOfficeallowPlaceHoldertrueheight1069ldapp-17.jpg",
    portraitposter:
      "https://bhdstar.vn/wp-content/uploads/2024/10/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-21.jpg", // No separate portrait poster found, using the same image
    title: "VENOM: THE LAST DANCE: KÈO CUỐI",
    rating: 4.8,
    halls: ["2D", "3D"],
    duration: "109 phút",
    genre: "Action",
    releasedate: "25/10/2024",
    cast: [
      {
        _id: "1",
        name: "Tom Hardy",
        role: "Actor",
        imageUrl: "https://bhdstar.vn/dien-vien/tom-hardy/", // Placeholder actor image URL
      },
      {
        _id: "2",
        name: "Juno Pemple",
        role: "Actor",
        imageUrl: "https://bhdstar.vn/dien-vien/juno-pemple/", // Placeholder actor image URL
      },
    ],
    crew: [
      {
        _id: "1",
        name: "Kelly Marcel",
        role: "Director",
        imageUrl: "https://bhdstar.vn/dao-dien/kelly-marcel/", // Placeholder director image URL
      },
    ],
    about:
      "Eddie và Venom đang chạy trốn. Bị cả hai thế giới truy đuổi, bộ đôi buộc phải đưa ra một quyết định tàn khốc để hạ màn cho điệu nhảy cuối cùng của họ.",
  };

  return (
    <div className="movie-page">
      <div
        className="top"
        style={{
          backgroundImage: `url(${movie.wideposter})`,
        }}
      >
        <div className="banner">
          <div className="left">
            <div
              className="movie-poster"
              style={{
                backgroundImage: `url(${movie.portraitposter})`,
              }}
            >
              <p>Đang chiếu</p>
            </div>
            <div className="movie-details">
              <p className="title">{movie.title}</p>
              <p className="rating">
                <BsFillStarFill className="star" />
                &nbsp;&nbsp;
                {movie.rating}/5
              </p>
              <div className="movie-halls">
                <p className="halls">
                  {movie.halls.map((hall, index) => {
                    return <span key={index}>{hall} </span>;
                  })}
                </p>
              </div>
              <div className="movie-info">
                <p className="about">{movie.about}</p>
                <br />
                <p className="crew">
                  Đạo diễn:{" "}
                  {movie.crew.map((member, index) => (
                    <span key={member._id}>
                      {member.name}
                      {index < movie.crew.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p className="cast">
                  Diễn viên:{" "}
                  {movie.cast.map((actor, index) => (
                    <span key={actor._id}>
                      {actor.name}
                      {index < movie.cast.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p className="duration">Thời lượng: {movie.duration}</p>
                <p className="genre">Thể loại: {movie.genre}</p>
                <p className="release-date">Khởi chiếu: {movie.releasedate}</p>
              </div>
              <a href="#movie-schedule">
                <button className="book-btn">Đặt vé</button>
              </a>
            </div>
          </div>
          <div className="right">
            <button className="share-btn">
              <BsShare className="share-icon" />
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="trailer">
        <iframe width="640" height="360" src="https://www.youtube.com/embed/iwaU3a_zD2o?si=CBVAzO0OPj-EbgfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div id="movie-schedule">
        <MovieSchedule />
      </div>
    </div>
  );
};

export default MovieDetails;
