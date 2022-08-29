import { useState } from "react";
import {Modal,Button,Form} from 'react-bootstrap'
import Rating from '@mui/material/Rating';


const FilmAdd =({films,setFilms})=> {
    
          const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //Since:2017, genre:"Action,Drame,Policier,Turc", video:"https://w.esseq.news/video/tag/cukur/",},
    const [titre,setTitre] = useState('movie.titre');
    const [image,setImage] = useState('');
    const [rating,setRating] = useState(0);
    const [Since,setSince] = useState (0);
    const [genre,setGenre] = useState('');
    const [description,setDescription] = useState('');
    const [video,setVideo] = useState('')
    const handleAdd=()=>{
        setFilms([{image,rating,titre,Since,genre, video,description,id:Math.random()},...films])
        handleClose()
    }
    return(
        <div>
        <Button variant="primary" className="btnadd" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Titre</Form.Label>
        <Form.Control  onChange={(e)=> setTitre(e.target.value)} type="text" placeholder="Entrer titre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Since</Form.Label>
        <Form.Control  onChange={(e)=> setSince(e.target.value)} type="text" placeholder="Entrer Date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control  onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Entrer Description.." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control  onChange={(e)=> setImage(e.target.value) } type="text" placeholder="Enter l'URL d'image" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Video</Form.Label>
        <Form.Control  onChange={(e)=> setVideo(e.target.value) } type="text" placeholder="Enter l'URL du video" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <br/>
        <Rating  name="simple-controlled" onChange={(e)=> setRating(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Genre</Form.Label>
        <Form.Control  onChange={(e)=> setGenre(e.target.value)} type="text" placeholder="Entrer Date" />
      </Form.Group>

    </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    )
}
export default FilmAdd