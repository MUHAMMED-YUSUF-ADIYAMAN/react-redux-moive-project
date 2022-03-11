import React,{useEffect,useState} from 'react'
import {
    Col,
    Container,
    Row
  } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Movie.css";

const MainMovie = () => {

    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    let { id } = useParams();
    console.log(id);
  useEffect(() => {
    const getMovies = async () => {
      const users = await axios.get(
       `https://api.themoviedb.org/3/movie/${id}?api_key=1335239b0b917f23ccc8492fb3fecd4f&language=en-US`
      );
      setMovie(users.data);
      setLoading(false);
      console.log(movie);
    };
    getMovies();
  }, []);
  if(loading)
  return <div>loading</div>

 console.log(movie);
  return (
    <Container fluid>
  <Row  style={{"height": "30rem",wight:"inherit",padding:"0",backgroundColor: "rgba(0, 0, 0, 0.8)", backgroundImage: `url(${"https://image.tmdb.org/t/p/original"+movie?.backdrop_path})`/* ,filter: "grayscale(100%)" */ , backgroundRepeat:" no-repeat" ,backgroundSize: "cover" ,backgroundPosition:"center top"}}>
    <Col style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
    <Row style={{   }}>
    <Col md={{ span: 2}} ></Col>
    <Col md={{ span: 4 }} style={{}} >
        {<img src={"https://image.tmdb.org/t/p/w300"+ movie?.poster_path} alt="" style={{ marginTop:"1rem" }} />}
        </Col>
  <Col md={{ span: 6 }}  /* style={{"marginLeft":"10px"}} */>   
    <h2 style={{ color:"white" ,marginTop:"1rem" }}>{movie.title}</h2>
  </Col>
  </Row>
    </Col>
  </Row>
  <Row>

  </Row>
  
</Container>
  )
}

export default MainMovie