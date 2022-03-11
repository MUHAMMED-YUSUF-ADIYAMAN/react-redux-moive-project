import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardGroup, Card, Figure, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Movies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const users = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=1335239b0b917f23ccc8492fb3fecd4f&language=en-US&page=1"
      );
      setPopularMovies(users.data.results);
      console.log(popularMovies);
    };
    getMovies();
  }, []);
  return (
    <div>
      <h1>Popular Movies</h1>

      <Container fluid className="App py-2 overflow-hidden">
        <Row className="card-example d-flex flex-row flex-wrap">
          {popularMovies.map((movie) => (
            <Card
              key={movie.id}
              className="estates m-3"
              style={{ width: "20rem" }}
            >
              <Link to={`/Movie/${movie.id}`}>
                <Card.Img
                  className="imageList"
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500` + movie.backdrop_path}
                />
              </Link>
              <Card.Body>
                <Card.Title id="price">{movie.original_title}</Card.Title>
                {/* <Card.Text id="category">
                    {estate.category} / {estate.subcategory}
                    <br />
                    <span>
                      {estate.province}/{estate.district}/{estate.neighborhood}
                    </span>
                  </Card.Text> */}
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
