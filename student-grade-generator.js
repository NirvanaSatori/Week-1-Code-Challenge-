function Grades (){
    let marks = prompt("Enter marks (0-100)");  //prompt the user to input student marks
    console.log(marks);//Switch case and output results in the console
    switch(true){
        case marks > 79:    // over 79
            return 'A';
            break
        case marks >= 60:   //60 to 79
            return 'B';
            break
        case marks >= 49:   //49 to 59
            return 'C';
            break
        case marks >= 40:   //40 to 48
            return 'D';
            break
        case marks < 40:   //<40
            return 'E';
            break
        default :
        return 'Invalid input'
        break
    }


}
Grades();