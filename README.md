# Redux-Toolkit-Managing-Multiple-Slices
Small application to get an overview on how to manage slices. 
### Redux Store Design   
1.First identify what state exists in our app.
2.How state going to change.
3.Group together common pieces of state.
4.Create a slice for each group.

Apply the steps to our cars project: So inside our car's project we will be having a state for cars(stored/added/modified cars), when adding a car we have 2 inputs: carName and carCost and finally an input to search our stored cars.
Ways that state will change: changeName,changeCost,changeTerm,addCar,deleteCar
Now we group together common pieces of state: name,cost -> state related to adding cars, searchTerm,array of cars-> state related to the list of cars
Now we have 2 slices: slice for adding cars and a slice for the list of cars. -> Go to src/store/slices to find the whole code on how to create the slices.
Each slice should have a name, initialState and reducers ( combined reducers) after then we export the mini reducers and the whole reducer
