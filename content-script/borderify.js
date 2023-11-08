
// Select the <form> elements
const form = document.querySelector('form');
// select all input areas in google field in google forms
const divs= document.querySelectorAll('div[role="listitem"]');
let formElements=""
if (form) {
  // Select all input fields elements within the form
  formElements = form.querySelectorAll('input[type="text"], input[type="email"]');
  console.log('formElements=',formElements.length)
  // Iterate through the form elements
  formElements.forEach(element => {
    // Check if the placeholder attribute contains the text "search" (case-insensitive)
    if (element.placeholder.toLowerCase().includes("search")) {
      // Exclude this element from the styling
      return;
    }

    // Apply the style to elements that don't have "search" in their placeholder
    element.style.border = "2px solid red";
  });
}

let copy =formElements[1];

//console.log('span=',divs);
let labels=[]
divs.forEach(divElement => {
 
  const firstSpan = divElement.querySelector('span');
  if (firstSpan) {
    const textContent = firstSpan.textContent;
    //console.log('span=',firstSpan)
    labels.push(textContent)
  }
  
  
});

let types=[];
let form_element={label:"test",type:"test"}
console.log('formLabels= ',labels)

labels.forEach( (label,index)=>

{
    //console.log('index=',index)
    if (index < formElements.length)
    {
     form_element={ label: label, type: formElements[index].type }
     types.push(form_element)
    }
}

)
console.log('types=', types)
//sending the types array away
browser.runtime.sendMessage({type:'log',message: types});

