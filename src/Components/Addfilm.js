
// import { useState } from "react";
// import {Button,Form} from 'react-bootstrap'
// import Rating from '@mui/material/Rating';
// import {useNavigate} from 'react-router-dom'

// const Addfilm =({setFilms,films})=> {
    
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const navigate = useNavigate()
//     //Since:2017, genre:"Action,Drame,Policier,Turc", video:"https://w.esseq.news/video/tag/cukur/",},
//     const [titre,setTitre] = useState('');
//     const [image,setImage] = useState('');
//     const [rating,setRating] = useState(0);
//     const [Since,setSince] = useState (0);
//     const [genre,setGenre] = useState('')
//     const handleAdd=()=>{
        
//         setFilms([...films,{image,rating,titre,Since,genre,id:Math.random()}])
//         handleClose()
//     }
//     return(
//         <div>
      
  
       
         
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Titre</Form.Label>
//         <Form.Control  onChange={(e)=> setTitre(e.target.value)} type="text" placeholder="Entrer titre" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Since</Form.Label>
//         <Form.Control  onChange={(e)=> setSince(e.target.value)} type="text" placeholder="Entrer Date" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Image</Form.Label>
//         <Form.Control  onChange={(e)=> setImage(e.target.value) } type="text" placeholder="Enter image" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Rating</Form.Label>
//         <br/>
//         <Rating  name="simple-controlled" onChange={(e)=> setRating(e.target.value)} />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Genre</Form.Label>
//         <Form.Control  onChange={(e)=> setGenre(e.target.value)} type="text" placeholder="Entrer Date" />
//       </Form.Group>

       

        
          
//         <Button variant="secondary" onClick={handleClose}>
//               Close
//         </Button>
//         <Button variant="primary" onClick={{handleAdd} && navigate('/FilmL')}>
//               Add Movie
//         </Button>
          
        
//      </div>
//     )
// }
// export default Addfilm