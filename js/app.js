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
    displayQuestions()
};

// function displayQuestions------------
function displayQuestions(){
    for (let val of data){
        let p = document.createElement("p");
        p.className = "question";
        p.textContent = val.question;
        form.appendChild(p);
        
        let containAnswer = document.createElement("div")
        containAnswer.className = "containAnswer";

        // answer 1
        let input1 = document.createElement("input");
        input1.type = "radio";
        input1.name = "answer1";
        input1.id = "answer1";
        input1.textContent = val.Choice[0];
        containAnswer.appendChild(input1);

        // answer2 
        let input2 = document.createElement("input");
        input2.type = "radio";
        input2.name = "answer2";
        input2.id = "answer2";
        input2.textContent = val.Choice[1];
        containAnswer.appendChild(input2);

        // answer3
        let input3 = document.createElement("input");
        input3.type = "radio";
        input3.name = "answer3";
        input3.id = "answer3";
        input3.textContent = val.Choice[2];
        containAnswer.appendChild(input3);
        
        // answer4 
        let input4 = document.createElement("input");
        input4.type = "radio";
        input4.name = "answer4";
        input4.id = "answer4";
        input4.textContent = val.Choice[0];
        containAnswer.appendChild(input4)

        containQuestion.appendChild(formContain);
        feature.appendChild(containQuestion);
    }
}

// gobal variable // 
let data =[
    
];

let addButton = document.getElementById("add");
addButton.addEventListener("click", storeData);