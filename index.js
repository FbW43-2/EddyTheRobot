
class Robot {
    constructor(){
        this.posX = 0;
        this.posY = 0;
        this.direction = 'NORTH';
    }

    followInstruction = (instruction) => {
        try {
            switch(instruction){
                case "L": this.turnLeft(this.direction); break;
                case "R": this.turnRight(this.direction);; break;
                case "G": this.moveForward(this.direction); break;
                default: null; break;
            }
        } catch (error) {
            console.log(error);
        }
    }

    turnLeft = (direction) => {
        switch(direction){
            case "NORTH": this.direction = "WEST"; break;
            case "EAST": this.direction = "NORTH"; break;
            case "SOUTH": this.direction = "EAST"; break;
            case "WEST": this.direction = "SOUTH"; break;
            default: null;
        }
    }

    turnRight = (direction) => {
        switch(direction){
            case "NORTH": this.direction = "EAST"; break;
            case "EAST": this.direction = "SOUTH"; break;
            case "SOUTH": this.direction = "WEST"; break;
            case "WEST": this.direction = "NORTH"; break;
            default: null;
        }
    }

    moveForward = (direction) => {
        switch(direction){
            case "NORTH": this.posY++; break;
            case "EAST": this.posX++; break;
            case "SOUTH": this.posY--; break;
            case "WEST": this.posX--; break;
            default: null;
        }
    }

    printOutPosition = () => {
        let position = {
            posX: this.posX,
            posY: this.posY,
        }
        console.log(position);
    }

    refuseInstructions = () => {
        console.log("Eddy does not understand that");
    } 
}

// load instructions from the command input argument
const instructions = process.argv[2] || "";
// regex to allow only the letters 'G', 'L, and 'R'
const regex = /^[GLR]*$/;

// instanciate Eddy as an object of the class Robot
let Eddy = new Robot();

if(instructions.match(regex)){
    //instructions are valid
    for(let i=0; i<instructions.length; i++){
        Eddy.followInstruction(instructions[i]);
    }
    Eddy.printOutPosition();
} else {
    // instructions are not valid
   Eddy.refuseInstructions();
}
