function displayPoem(response){
 //Display the generated poem 

new Typewriter('.poem', {
  strings: response.data.answer,
  autoStart: true,
  delay:1,
  cursor:"",
});

}
function generatePoem(event){
event.preventDefault();

//Build the API URL 
let instructionInput= document.querySelector('#instructionInput');
let apiKey= "46a3a2bt13e461baff9od195b7a890f2";
let prompt=  `User instruction: Generate a poem about the ${instructionInput.value}`; 
let context=   " You are  a romantic poem expect and love to write short poem. Your mission is to genetate a poem in without a heading and break each line with <br /> .Make sure to follow the instruction.with a maximum of 8 lines and sign at the end of the poem with <strong> YB</strong> ";
let apiURL= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement= document.querySelector('.hidden');
poemElement.classList.remove('hidden');
poemElement.innerHTML=`<div class="generating">Generating something about ${instructionInput.value} </div>`;

console.log("Generating something")
console.log(context);
console.log(prompt)
//Make a call to the API 
axios.get(apiURL).then(displayPoem);

}
let poemFormElement= document.querySelector('#poem-generator');
poemFormElement.addEventListener("submit", generatePoem);