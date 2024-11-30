import React, {Component} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SingleFilm from "./SingleFilm";




class AllFilm extends Component {
    state ={ /*creo l'array vuoto che conterrà i film */
        movies:[],
        isLoading:true,
        /*ho preso le impostazioni del carousel da: https://refine.dev/blog/react-slick/#creating-slides-for-the-carousel e da: https://react-slick.neostack.com/  modificandole un po'*/ 
        settings:{
            speed:400,
            slidesToShow: 7,
            slidesToScroll: 6,
            infinite: true,
            responsive:[
                {
                    breakpoint: 1024,
                    settings:{
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                    }
                },
                { breakpoint: 760,
                    settings:{
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                    }},
                    { breakpoint: 430,
                        settings:{
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                        }}
            ]
        }

    }
    componentDidMount(){  
   const MyLink=`http://www.omdbapi.com/?apikey=287c54b8&s=${this.props.searchQuery}&type=movie`
fetch(MyLink)
.then((res)=>{
if(res.ok){
    return res.json()
}else{
    throw new Error('Nope')
}
})
.then ((data)=>{
    console.log(data)
    this.setState({movies:data})
})
.catch ((err)=>{
    console.log ('Nopeee',err)
})
}
   /* dati ottenuti quindi reinderizzo usando render*/ 
   
    render(){
     const {movies,settings}= this.state
     console.log(movies)
        return(
            <Slider {...settings}className={this.props.searchQuery}>
               
                {movies.Search?.map(movie=>(
                    <div key={movie.imdbID}>
                    <SingleFilm img={movie.Poster} movie={movie}/></div>

                ))}</Slider>
        )
    }
}
export default AllFilm