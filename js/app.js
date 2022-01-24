// -----------------------------------------------//
/* To store information from user */
// -----------------------------------------------//
function storeData(){
    // get question //
    question = document.getElementById('question').value;
    // get answer1 //
    let answer1 = document.getElementById('answer1').value;
    // get answer2 //
    let answer2 = document.getElementById('answer2').value;
    // get answer3 //
    let answer3 = document.getElementById('answer3').value;
    // get answer3 //
    let answer4 = document.getElementById('answer4').value;
    // store data //
    let object = {Question: question, Choice: [answer1, answer2, answer3, answer4], Answer: answer1};
    data.push(object);  
};

// gobal variable // 
let data =[
    
];

let addButton = document.getElementById("add");
addButton.addEventListener("click", storeData);