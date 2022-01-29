function dataPlayer(){
    let answerNb1 = document.getElementById('answerNb1');
    let answerNb2 = document.getElementById('answerNb2');
    let answerNb3 = document.getElementById('answerNb3');
    let answerNb4 = document.getElementById('answerNb4');
    let answerNb5 = document.getElementById('answerNb5');
    let answerNb6 = document.getElementById('answerNb6');
    let answerNb7 = document.getElementById('answerNb7');
    let answerNb8 = document.getElementById('answerNb8');
    let answerNb9 = document.getElementById('answerNb9');
    let answerNb10 = document.getElementById('answerNb10');
    let score = document.getElementById('score');
    
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
    let rightObject = [answerNb1, answerNb2, answerNb3, answerNb4, answerNb5, answerNb6, answerNb7, answerNb8, answerNb9, answerNb10];
    rightAnswer.push(rightObject);
    
};

/* ====== display quiz end ======== */
// gobal variable // 
let rightAnswer =[];

//       main code  //
let applyAnswer = document.getElementById("submit");
applyAnswer.addEventListener("click", dataPlayer);