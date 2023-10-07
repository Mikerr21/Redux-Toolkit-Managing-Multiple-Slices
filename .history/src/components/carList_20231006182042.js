import { useSelector } from "react-redux"

function CarList() {
    const cars=useSelector((state)=>{
        return state.cars.cars;
    })

    console.log(cars);
  return (
    <div>
      carForm
    </div>
  )
}

export default CarList
