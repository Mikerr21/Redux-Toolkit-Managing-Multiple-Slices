import { useDispatch } from "react-redux"
import { changeName } from "../store"

function CarForm() {
    const dispatch=useDispatch();
    
    const handleNameChange=(event)=>{
        dispatch(changeName(event.target.value));
    }
  return (
    <div>
      carForm
    </div>
  )
}

export default carForm
