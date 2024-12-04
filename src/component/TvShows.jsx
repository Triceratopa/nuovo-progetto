import React, { useEffect,useState } from "react";
import { Dropdown } from "react-bootstrap";
import SingleFilm from "./SingleFilm";
import Slider from "react-slick";


const TvShows=({searchQuery})=>{
   // console.log('tv shows esiste')
   const [tvShows, setTvShows]=useState([])
   const [isLoading,setIsLoading]=useState(true)

   const settings = {
    speed: 400,
    slidesToShow: 7,
    slidesToScroll: 6,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
    ],
  }
  useEffect (()=> {
    const MyLink = `http://www.omdbapi.com/?apikey=287c54b8&s=${searchQuery}&type=series`;
    const fetchSeries = async()=>{
        try {
            const res = await fetch (MyLink)
            if (!res.ok) throw new Error('Errore no res')
                const data =await res.json()
            setTvShows(data.Search || []);
                setIsLoading(false)        
        }
        catch(err){
            setIsLoading(false)
        }
    }
    fetchSeries()
  },[searchQuery])
    return(
        <>
        <div className="d-flex ms-5 gap-3"><h1 className="text-white">Tv Shows</h1>
      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Geners
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Horror</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Fantasy</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Commedy</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown></div>
        <Slider {...settings} className={searchQuery}>
        {isLoading ? (
          <p>Caricamento in corso...</p>
        ) : (
          tvShows.map((tvShows) => (
            <div key={tvShows.imdbID}>
              <SingleFilm img={tvShows.Poster} movie={tvShows} />
            </div>
          ))
        )}
      </Slider>
    </>)
}
export default TvShows