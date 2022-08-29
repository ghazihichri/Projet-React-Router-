import {Link} from 'react-router-dom'

const Filmbar = ()=>{
    return(
     <div className='filmnav'>
         <div className='logo'>
           <Link to ='/'className='NotLigne'><img src='/logo.jpg' alt='PlayMovies' className='imgLogo'/></Link> 
           <Link to ='/'className='NotLigne'><h2>PlayMovies</h2></Link> 
         </div>
             {/* <Link to ='/Add' ><li>Addfilm</li> </Link> */}
            <Link to = '/FilmL'className='NotLigne'><div className='LF'>Listefilm</div></Link> 
            
          

      </div>
    )
}
export default Filmbar