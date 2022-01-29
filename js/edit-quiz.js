
//  Note : Code refactored by RONAN

// __________DATA    _________________________________________________________

//  A question is composed of :
//  title		    string
//  answers		     array of string
//  correctAnswer	integer
//
let listOfquestions = [
    {
        title:'what is your name ?',
        answers:['lida','chaiya','sophy','oun'],
        correctAnswer:'lida',
}
];


//
// Generate the DOM from the  list of question
//
function displayQuestion() {
    let questiondelet = document.querySelectorAll("#containQuestion");
    for (let questions of questiondelet) {
        questions.parentNode.removeChild(questions);
    }


    let container2 = document.createElement("div");
    document.body.appendChild(container2);
    container2.className = "container2"

    let containQuestion = document.createElement('div');
    container2.appendChild(containQuestion);
    containQuestion.setAttribute('id', 'containQuestion');

    for (let question of listOfquestions) {
        let formContain = document.createElement("form");
        containQuestion.appendChild(formContain);
        formContain.className = "form";

        // Create the tile 
        let p = document.createElement("p");
        p.className = "question";
        p.textContent = question.title;
        formContain.appendChild(p);

        let contentAnswer = document.createElement("div");
        contentAnswer.className = "contentAnswer";

        // TODO loop on answers
        for(let val in question.answers){
            let ol = document.createElement("ol");
            let input = document.createElement("input");
            let iofAnswer=document.createElement('li');
            input.type = "radio";
            input.name = "choice";
            let brofAnswer=document.createElement('br');
            iofAnswer.className='answer';
            iofAnswer.textContent=question.answers[val];
            
            if (question.answers[val]===question.correctAnswer){
                input.checked = true;
                ol.style.background='greenyellow';
            };
            ol.appendChild(input);
            ol.appendChild(iofAnswer);
            contentAnswer.appendChild(ol);
            contentAnswer.appendChild(brofAnswer);
        };
        console.log(question);
        formContain.appendChild(contentAnswer);
        // DeElete button
        let btndelete = document.createElement("button")
        btndelete.className = "remove";
        btndelete.textContent = "REMOVE";
        formContain.appendChild(btndelete);
    }
}

//
// Add a question to the list of question
//
function addQuestion() {
    let title = document.getElementById('question').value;
    let answer1 = document.getElementById('answer1').value;
    let answer2 = document.getElementById('answer2').value;
    let answer3 = document.getElementById('answer3').value;
    let answer4 = document.getElementById('answer4').value;
    

    // get option from html__________________________________
    let myoption1 = document.querySelector('#option1');
    myoption1.value=answer1;
    let myoption2 = document.querySelector('#option2');
    myoption2.value=answer2;
    let myoption3 = document.querySelector('#option3');
    myoption3.value=answer3;
    let myoption4 = document.querySelector('#option4');
    myoption4.value=answer4;
    let corected = document.querySelector('#selection').value;

    let isValid = answer1.length > 0 && answer2.length > 0 && answer3.length > 0 && answer4.length > 0
    if (isValid) {

        // 1- Create a new question
        let newQuestion = {}

        newQuestion.answers = [answer1, answer2, answer3, answer4];
        newQuestion.title = title;
        newQuestion.correctAnswer = corected;      // TODO temporary

        // 2- Add the question
        listOfquestions.push(newQuestion);

        // 3- Refresh the DOM
        displayQuestion();

    } else {
        // itnot valid display error
        // TODO
        Swal.fire({
            title: 'You need to complete all data.',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        
    }
};

//
//
//
function removedata(event) {
    // event.preventDefault();
    let titleOfQuestionToRemove = event.target.parentElement.firstChild.textContent;
    console.log(titleOfQuestionToRemove);
    for (let index in listOfquestions) {
        if (listOfquestions[index].title === titleOfQuestionToRemove) {
            listOfquestions.splice(index, 1);
        }
    }
    displayQuestion();
};

// _______________________________funtion for hide Form___________________________

//view.addEventListener("click", hideForm);
// --------------------------------------------

// 1- Display the list of quetions
displayQuestion();

let addButton = document.getElementById("add");
addButton.addEventListener("click", addQuestion);
document.addEventListener('click',removedata);
