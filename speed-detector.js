function demeritPoints(){
    let speed = prompt("Input speed of the car"); 
    let countPoints = Math.floor((speed-70)/5);  // Calculate the total number of demerit points.
    if(speed <= 70){  //If speed<70, output "Ok"
        console.log ('Ok')
    }else if (countPoints > 12){ // License suspends if the driver gets more than 12 points
        console.log ("License suspended.");
    }else {   //print the total number of demerit points.
        console.log(`Demerit Points: ${countPoints}`); 
     }
}

demeritPoints()