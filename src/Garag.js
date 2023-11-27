import Car from "./Car";
import Bike from "./Bike";
function Garage(){


    const carDetails={model: "focus",
    brand:"ford",
    color:"red"};

    return(
         <>
         <Car details={carDetails} />
         <Bike color="black"/>
         </>

    );

}

export default Garage;