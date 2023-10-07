import { useDispatch,useSelector } from "react-redux" // useSelector to get access to state
import { changeName,changeCost } from "../store"

function CarForm() {
    const dispatch=useDispatch();

    const {name,cost}=useSelector((state)=>{
        return {state.form.name,state.form.cost}
    })

    
    const handleNameChange=(event)=>{
        dispatch(changeName(event.target.value));
    }

    const handleCostChange=(event)=>{
        const carCost= parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    }
  return (
    <div className="car-form panel">
        <h4 className="subtitle is-3">Add Car</h4>
        <form>
            <div className="field-group">
                <div className="field">
                  <label>Name</label>
                  <input  value={name} onChange={handleNameChange} />
                </div>
                <div className="field">
                  <label>Cost</label>
                  <input  value={cost} onChange={handleCostChange} type="number" />
                </div>
            </div>
        </form>
      
    </div>
  )
}

export default CarForm
