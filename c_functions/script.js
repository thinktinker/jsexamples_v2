
/* 
  ftnSalutation is a conventional JS function
  it returns an array of strings where each
  element (or index) of the array consists
  of the salutations to pupulate inputSelect
  found in index.html
*/
// [0] [1] [2] [3]
function ftnSalutation(){
    return new Array("Mr.", "Mrs.", "Ms.");
}


/* 
  ftnSalutation written as an ARROW function
  it uses the passed-in parameters to form
  a greeting to be returned to the function that
  calls it
*/
const ftnGreeting = (salutation, user) => {
    //  implement your statement(s) here
    const msg =`Hi, ${salutation} ${user}!`;
    return msg;
}

/*
Complete the challenge statement below
Create the function validateInputs below
Hint: 
- validateInputs accepts two arguments (choice, name)
- name should include a default value name=""
- validateInputs returns false if either choice or name is incorrectly filled
- validateInputs returns true if both choice and name are correctly filled
*/



//function validateInputs(choice = "", name = ""){

//  if(choice === "")
//    return;

//  if(name === "")
//    return;

  // otherwise, return true
//  return true;
//}
//Option 2:
//function validateInputs(choice = "", name = ""){

//  if(choice === "" || name === "")
    return;

  // otherwise, return true
//  return true;
//}
//Option 3:
//function validateInputs(choice = "", name = ""){

//  return choice !== "" && name !== "";

//}
//


function validateInputs(){
    // verify if selectedChoice was chosen
    // check if uName is chosen
    if (selectedChoice !==0 && uName !==null){  
        validated = true
    }else{
        alert("we did not receive your name");
    }


}
