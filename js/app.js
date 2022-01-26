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

/* ====== display quiz start ======== */
/*   function store data of player   */
function dataPlayer(){
    // right aswers nb1 //
    let answerNb1 = document.getElementById('answerNb1');
    // right aswers nb2 //
    let answerNb2 = document.getElementById('answerNb2');
    // right aswers nb3//
    let answerNb3 = document.getElementById('answerNb3');
    // right aswers nb4 //
    let answerNb4 = document.getElementById('answerNb4');
    // right aswers nb5 //
    let answerNb5 = document.getElementById('answerNb5');
    // right aswers nb6 //
    let answerNb6 = document.getElementById('answerNb6');
    // score //
    let score = document.getElementById('score'),
    
    result = 0;
    if(answerNb1.checked){
        result += 10;
    }
    if(answerNb2.checked){
        result += 10;
    }
    if(answerNb3.checked){
        result += 10;
    }
    if(answerNb4.checked){
        result += 10;
    }
    if(answerNb5.checked){
        result += 10;
    }
    if(answerNb6.checked){
        result += 10;
    }
    if(answerNb7.checked){
        result += 10;
    }
    if(answerNb8.checked){
        result += 10;
    }
    if(answerNb9.checked){
        result += 10;
    }
    if(answerNb10.checked){
        result += 10;
    }

    console.log(result);
    console.log(result);

    
    score.textContent = result;

    
    let rightObject = [answerNb1, answerNb2, answerNb3, answerNb4, answerNb5, answerNb6];
    rightAnswer.push(rightObject);
    
};

/* ====== display quiz end ======== */

// gobal variable // 
let data =[
    
];

let rightAnswer =[

];


let applyAnswer = document.getElementById("submit");
applyAnswer.addEventListener("click", dataPlayer);