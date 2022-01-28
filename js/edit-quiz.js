
//  Note : Code refactored by RONAN

// __________DATA    _________________________________________________________

//  A question is composed of :
//  title		    string
//  answers		     array of string
//  correctAnswer	integer
//
let listOfquestions = [];


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
    let correct = document.getElementById('correct').value;

    let isValid = question.length > 0 && answer1.length > 0 && answer2.length > 0 && answer3.length > 0 && answer4.length > 0
    if (isValid) {

        // 1- Create a new question
        let newQuestion = {}

        let answers = [];
        newQuestion.answers = [answer1, answer2, answer3, answer4]
        newQuestion.title = title;
        newQuestion.correctAnswer = 0;      // TODO temporary

        // 2- Add the question
        listOfquestions.push(newQuestion);

        // 3- Refresh the DOM
        displayQuestion();

    } else {
        // itnot valid display error
        // TODO
    }
};

//
//
//
function removedata(event) {
    let titleOfQuestionToRemove = event.target.parentElement.firstChild.textContent;
    for (let index in listOfquestions) {
        if (listOfquestions[index].title === titleOfQuestionToRemove) {
            listOfquestions.splice(val, 1);
        }
    }
    displayQuestion();
};


// --------------------------------------------

// 1- Display the list of quetions
displayQuestion();



let addButton = document.getElementById("add");
addButton.addEventListener("click", addQuestion);


