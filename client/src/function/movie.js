// Fetch all movies
export const fetchAllMovies = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/movie`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        if (response.ok) {
            return { success: true, movies: result };
        } else {
            return { success: false, error: result.error };
        }
    } catch (error) {
        return { success: false, error: "Something went wrong!" };
    }
};

// Fetch a movie by ID
export const fetchMovieById = async (id) => {
    try {
        const movieResponse = await fetch(`${process.env.REACT_APP_BACKEND_API}/movie/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const movieResult = await movieResponse.json();
        if (!movieResponse.ok) {
            return { success: false, error: movieResult.error };
        }

        // Extract the movie ID and genre ID
        const { movie_id, genre_id } = movieResult;

        // Fetch the crew members for the movie
        const crewResponse = await fetch(`${process.env.REACT_APP_BACKEND_API}/movie/${movie_id}/crew`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const crewResult = await crewResponse.json();
        if (!crewResponse.ok) {
            return { success: false, error: crewResult.error };
        }

        // Fetch the genre name using the genre ID
        const genreResponse = await fetch(`${process.env.REACT_APP_BACKEND_API}/genre/${genre_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const genreResult = await genreResponse.json();
        if (!genreResponse.ok) {
            return { success: false, error: genreResult.error };
        }

        // Filter and format the crew members
        const cast = crewResult.filter(member => member.crew_role === 'Actor');
        const crew = crewResult.filter(member => member.crew_role !== 'Actor');

        // Format the movie details
        const formattedMovie = {
            wideposter: movieResult.wide_poster_url,
            portraitposter: movieResult.potrait_poster_url,
            title: movieResult.title,
            ageLimit: movieResult.age_limit,
            type: movieResult.type,
            formats: movieResult.formats,
            duration: `${movieResult.duration} phút`,
            genre: genreResult.name,
            releasedate: movieResult.release_date,
            trailer_url: movieResult.trailer_url,
            cast: cast.map(member => ({
                _id: member.crew_id,
                name: member.crew_name,
                role: member.crew_role,
                imageUrl: member.imageUrl // Assuming imageUrl is part of the crew member data
            })),
            crew: crew.map(member => ({
                _id: member.crew_id,
                name: member.crew_name,
                role: member.crew_role,
                imageUrl: member.imageUrl // Assuming imageUrl is part of the crew member data
            })),
            about: movieResult.description
        };

        return { success: true, movie: formattedMovie };
    } catch (error) {
        return { success: false, error: "Something went wrong!" };
    }
};
// Fetch a movie by name
export const fetchMovieByName = async (name) => {
    try {
        // Fetch the movie details by name
        const movieResponse = await fetch(`${process.env.REACT_APP_BACKEND_API}/movie/name/${name}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const movieResult = await movieResponse.json();
        if (!movieResponse.ok) {
            return { success: false, error: movieResult.error };
        }

        // Extract the movie ID and genre ID
        const { movie_id, genre_id } = movieResult;

        // Fetch the crew members for the movie
        const crewResponse = await fetch(`${process.env.REACT_APP_BACKEND_API}/movie/${movie_id}/crew`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const crewResult = await crewResponse.json();
        if (!crewResponse.ok) {
            return { success: false, error: crewResult.error };
        }

        // Fetch the genre name using the genre ID
        const genreResponse = await fetch(`${process.env.REACT_APP_BACKEND_API}/genre/${genre_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const genreResult = await genreResponse.json();
        if (!genreResponse.ok) {
            return { success: false, error: genreResult.error };
        }

        // Filter and format the crew members
        const cast = crewResult.filter(member => member.crew_role === 'Actor');
        const crew = crewResult.filter(member => member.crew_role !== 'Actor');

        // Format the movie details
        const formattedMovie = {
            wideposter: movieResult.wide_poster_url,
            portraitposter: movieResult.potrait_poster_url,
            title: movieResult.title,
            ageLimit: movieResult.age_limit,
            type: movieResult.type,
            formats: movieResult.formats,
            duration: `${movieResult.duration} phút`,
            genre: genreResult.name,
            releasedate: movieResult.release_date,
            trailer_url: movieResult.trailer_url,
            cast: cast.map(member => ({
                _id: member.crew_id,
                name: member.crew_name,
                role: member.crew_role,
                imageUrl: member.imageUrl // Assuming imageUrl is part of the crew member data
            })),
            crew: crew.map(member => ({
                _id: member.crew_id,
                name: member.crew_name,
                role: member.crew_role,
                imageUrl: member.imageUrl // Assuming imageUrl is part of the crew member data
            })),
            about: movieResult.description
        };

        return { success: true, movie: formattedMovie };
    } catch (error) {
        return { success: false, error: "Something went wrong!" };
    }
};