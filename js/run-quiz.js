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
    score.textContent = result;
    let rightObject = [answerNb1, answerNb2, answerNb3, answerNb4, answerNb5, answerNb6];
    rightAnswer.push(rightObject);
    
};

/* ====== display quiz end ======== */
// gobal variable // 

let rightAnswer =[];

//       main code  //

let applyAnswer = document.getElementById("submit");
applyAnswer.addEventListener("click", dataPlayer);