import {useParams, useNavigate} from 'react-router-dom'
import { Rating } from '@mui/material'
import {Button }  from 'react-bootstrap';
// import VideoY from './VideoY'
const FilmCard = ({films}) => {

    const {id} = useParams()
    const found = films.find(el=> el.id === Number(id))
    const navigate = useNavigate()
    return (
        <div className='cardF'>
            <div className='photo'>
               <img  src={found.image} alt='film.titre'  className='imgFound'/>
            </div>
            <div className='SERfound'>
              <h1  className='TitreFound'>{found.titre}</h1>
              <br/>
              <Rating name="read-only" value={found.rating} readOnly />
              <br/>
              <br/>
              <h3 className='Date'>Date de sortie : {found.Since}</h3>
              <br/>
              <h4 className='Genre'>Genre : {found.genre}</h4>
              <br/>
            </div>
            <div className='desc'>
              <h5 className='description'>Description : {found.description}</h5>
            </div>
            <div className='vidbtn'>
            <div className='vid'>
               
               {/* <VideoY found={found}/> */}
               {/* <iframe width="560" height="315" src={found.video} title="found.titre" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
               <iframe width="560" height="315" src={found.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               <br/>
               <br/>
            </div>
            <br/>
            <br/>
            <Button  onClick={()=>navigate('/')}>Home</Button >
            
            </div>
        </div>
    )
}

export default FilmCard

// rating,titre,Since,genre,video,description