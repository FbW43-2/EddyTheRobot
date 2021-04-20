// load instructions from the command input argument
const instructions = process.argv[2] || "";
// regex to allow only the letters 'G', 'L, and 'R'
const regex = /^[GLR]*$/;

if(instructions.match(regex)){
    console.log(instructions);
} else {
    console.log("instructions are not valid")
}

// place your code here
