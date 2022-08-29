
import { Button } from 'react-bootstrap';

const MovieFilter =({setSearchM,  searchM,})=>{
    const handleRest=()=>{
        setSearchM('')
       
    }
    return(
        <>
        <div className='rech'>
        <Button onClick={handleRest}>Reset</Button>
             <input value={searchM} type="text" onChange={(e)=>setSearchM(e.target.value)}/>
                    
              
        </div>
        </>
    )
}
export default MovieFilter