import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';
// import Addfilm from './Components/Addfilm';
import Filmbar from './Components/Filmbar';
import FilmCard from './Components/FilmCard';
import Home from './Components/Home';
import Listefilm from './Components/Listefilm';

function App() {
  
  const [films,setFilms]=useState ( [
    { id: 1, image: '/cukur.jpg',             rating: 5, titre: "Cukur" ,Since:2017, genre:"Action,Drame,Policier,Turc", video:"https://www.youtube.com/embed/g3GoD22e5gM",description:"alooo"},
    { id: 2,  image:'/Fury.jpg',             rating: 2, titre: "Fury"  ,Since:2014, genre :"Drame,Guerre", video:"https://www.youtube.com/watch?v=DNHuK1rteF4", description:"alooo"},
    { id: 3, image:'/Gladiator.jpg',         rating:3, titre: "Gladiator",Since:2000, genre:"Action , Drame", video:"https://www.youtube.com/watch?v=owK1qxDselE",description:"alooo"},
    { id: 4, image:'/inception.jpg',         rating: 4, titre: "Inception" ,Since:2010, genre:"Drame", video:"https://www.youtube.com/watch?v=YoHD9XEInc0",description:"alooo"},
    { id: 5,  image:'/Leon.jpg',             rating: 4, titre: "Leon"  ,Since:1994, genre :"Drame", video:"https://www.youtube.com/watch?v=jawVxq1Iyl0", description:"alooo"},
    { id: 6, image:'/lucy.jpg',              rating:2, titre: "Lucy",Since:2009, genre:"Action , Drame", video:"https://www.youtube.com/watch?v=MVt32qoyhi0",},
    { id: 7, image:'/Mad Max Fury Road.jpg', rating:1, titre: "Mad Max Fury Road",Since:2015, genre:"Action ", video:"https://www.youtube.com/watch?v=eNykS4VlnwE",description:"alooo"},
    { id: 8, image:'/man on fire.jpg',       rating:4, titre: "Man On Fire",Since:2014, genre:"Drame", video:"https://www.youtube.com/watch?v=ALKCTuH79iE",description:"alooo"},
    { id: 9, image:'/shutter island.jpg',    rating:5, titre: "Shutter Island",Since:2010, genre:"Drame ", video:"https://www.youtube.com/watch?v=v8yrZSkKxTA",description:"alooo"},
    { id: 10, image:'/the godfather.jpg',    rating:5, titre: "The GodFather",Since:1972, genre:"Policier, Drame ", video:"https://www.youtube.com/watch?v=UaVTIH8mujA",description:"alooo"},
    { id: 11, image:'/The Shawshank Redemption.jpg', rating:5, titre: "The Shawshank Redemption",Since:1994, genre:"Drame", video:" https://www.youtube.com/watch?v=6hB3S9bIaco",description:"alooo"},
    { id: 12, image:'/the wolf of wall.jpg', rating:2, titre: "The Wolf Of Wall Street",Since:2013, genre:"Crime , Drogue , Comedie", video:"https://www.youtube.com/watch?v=iszwuX1AK6A",description:"alooo"},
    { id: 13, image:'/v for vendetta.jpg',   rating:5, titre: "V For Vendetta",Since:2006, genre:"Révolutionnaire , Drame", video:"https://www.youtube.com/watch?v=lSA7mAHolAw", description:"alooo"},
   
  ]
  )

  const [searchM,setSearchM] = useState('')
  return (
  
  <div>
    <Filmbar/>
   <Routes>
    <Route path='/' element={ <Home/>  } />
    {/* <Route path ='/Add' element ={<Addfilm films={films} setFilms={setFilms} />} /> */}
    <Route path = '/FilmL' element ={<Listefilm films={films} setFilms={setFilms} searchM={searchM}  setSearchM={setSearchM} />}/>
    <Route path ='/Description/:id' element ={ <FilmCard  films={films}/>}/>
   </Routes>


  </div>
  );
}

export default App;
