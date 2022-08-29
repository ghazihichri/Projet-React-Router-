import {Link} from 'react-router-dom'
import FilmAdd from './FilmAdd'
import MovieFilter from './MovieFilter'
const Listefilm = ({films,setFilms,searchM,setSearchM}) =>{
    return (
        <div className='list'>
            
            <FilmAdd films={films} setFilms={setFilms} className='FilMaDD' />
            <MovieFilter searchM={searchM} setSearchM={setSearchM} className='FilMsearch' />

            <div  className='mou3aw' >
         {
            films
            .filter(el => el.titre.toLowerCase().includes(searchM.toLowerCase()))
            .map (  film=> <Link to ={`/Description/${film.id}`} > <img className='imageFilm' src={film.image} alt='film.titre'/> </Link>  )
         }
         </div>
        </div>
    )
}
export default Listefilm

