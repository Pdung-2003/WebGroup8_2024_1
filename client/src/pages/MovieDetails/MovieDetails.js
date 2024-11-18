import React from "react";
import MovieSchedule from "./MovieSchedule";
import "./MovieDetails.css";

const MovieDetails = () => {
  const movie = {
    wideposter:
      "https://bhdstar.vn/wp-content/uploads/2024/10/referenceSchemeHeadOfficeallowPlaceHoldertrueheight1069ldapp-17.jpg",
    portraitposter:
      "https://bhdstar.vn/wp-content/uploads/2024/10/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-21.jpg", // No separate portrait poster found, using the same image
    title: "VENOM: THE LAST DANCE: KÈO CUỐI",
    ageLimit: "T13",
    type: "Phụ đề",
    formats: ["2D", "3D"],
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
    <div className="movie-page container bg-base-100">
      <div
        className="top"
        style={{
          backgroundImage: `url(${movie.wideposter})`,
        }}
      >
        <div className="overlay md:py-12 p-4">
          <div className="md:px-24">
            <div className="banner">
              <div className="left flex md:flex-row flex-col">
                <div
                  className="movie-poster md:basis-1/3"
                >
                  <img src={movie.portraitposter} alt={movie.title} className="h-full"></img>
                </div>
                <div className="movie-details min-h-full h-full md:basis-2/3">
                  <p className="title be-vietnam-pro-black text-primary">
                    {movie.title}
                  </p>
                  <div className="movie-formats">
                    <p className="formats">
                      { movie.ageLimit && <span class="badge badge-lg badge-primary mr-1">{movie.ageLimit}</span> }
                      { movie.type && <span class="badge badge-lg badge-neutral mr-1">{movie.type}</span> }
                      { movie.formats.map((format, index) => {
                        return (
                          <span
                            className="badge badge-outline badge-lg mr-1"
                            key={index}
                          >
                            {format}{" "}
                          </span>
                        );
                      })}
                    </p>
                  </div>
                  <div className="movie-info flex flex-col">
                    <p className="about italic">{movie.about}</p>
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
                    <p className="release-date">
                      Khởi chiếu: {movie.releasedate}
                    </p>
                  </div>
                  <a href="#movie-schedule" className="sm:max-sm:flex sm:max-sm:items-center sm:max-sm:justify-center">
                    <button className="btn btn-lg btn-primary text-white md:px-10 px-40 h-12 min-h-12 ">
                      Đặt vé
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="trailer pt-12">
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/iwaU3a_zD2o?si=CBVAzO0OPj-EbgfA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div id="movie-schedule">
        <MovieSchedule />
      </div>
    </div>
  );
};

export default MovieDetails;
