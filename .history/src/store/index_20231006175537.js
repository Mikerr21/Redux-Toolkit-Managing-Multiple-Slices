import { configureStore } from "@reduxjs/toolkit";
import { carReducer, addCar,removeCar,changeSearchTerm } from "./slices/carSlice";
import { formReducer, changeCost, changeName  } from "./slices/formSlice";
import { configure } from "@testing-library/react";

const store=configureStore({
    reducers:{
        cars:carReducer,
        form:formReducer
    }
});

export  {store, addCar, removeCar, changeSearchTerm, changeCost,changeName};