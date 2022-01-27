// -----------------------------------------------//
/* To store information from user */
// -----------------------------------------------//
// contain Menu______________________________________________

 
// function display Question ==================================

function displayQuestion(){
    let Questiondelet = document.querySelectorAll("#containQuestion");
    for(let questions of Questiondelet){
        questions.parentNode.removeChild(questions);
    }
    let container2=document.createElement("div");
    container2.className = "container2"
    let containQuestion = document.createElement('div');
    containQuestion.setAttribute('id','containQuestion');

    for (let val of data){

        // Create form and add class name==========================

        let formContain = document.createElement("form");
        formContain.className="form";

        // creat p for question and append to form================================

        let p = document.createElement("p");
        p.className="question";
        p.textContent= val.Question;
        formContain.appendChild(p);
        // create element parent of input =================================

        let contentAnswer= document.createElement("div");
        contentAnswer.className = "contentAnswer";

        // create ol , li and inpuit and appened li and input to ol  
        //and appened ol to containAnswer that contain answer===============================
        
        // answer1 //
        let ol1=document.createElement('ol');
        let li1=document.createElement('li');

        let input1 = document.createElement("input");
        li1.textContent=val.Choice[0];
        input1.type = "radio";
        input1.name = "answer";
        input1.checked
        input1.id = "answer1";
        ol1.appendChild(input1)
        ol1.appendChild(li1)
        contentAnswer.appendChild(ol1);

        let br1 = document.createElement("br");
        contentAnswer.appendChild(br1);

      
        // answer2 //
        let ol2=document.createElement('ol');
        let li2=document.createElement('li');

        let input2 = document.createElement("input");
        li2.textContent = val.Choice[1];
        input2.type = "radio";
        input2.name = "answer";
        input2.checked
        input2.id = "answer2";

        ol2.appendChild(input2);
        ol2.appendChild(li2);
        contentAnswer.appendChild(ol2);

        let br2 = document.createElement("br");
        contentAnswer.appendChild(br2);
       
    
        //answer3 //
        let ol3 = document.createElement("ol");
        let li3 = document.createElement("li");

        let input3 = document.createElement("input");
        li3.textContent = val.Choice[2];
        input3.type = "radio";
        input3.name = "answer";
        input3.checked
        input3.id = "answer3";
       ol3.appendChild(input3);
       ol3.appendChild(li3);
        contentAnswer.appendChild(ol3);
        let br3 = document.createElement("br");
        contentAnswer.appendChild(br3);
        

        // answer4 //
        let ol4 = document.createElement("ol");
        let li4 = document.createElement("li");

        let input4 = document.createElement("input");
        li4.textContent = val.Choice[3];
        input4.type = "radio";
        input4.name = "answer";
        input4.checked
        input4.id = "answer";
        ol4.appendChild(input4);
        ol4.appendChild(li4);
        contentAnswer.appendChild(ol4);
        formContain.appendChild(contentAnswer);

        // get element that display on browser and appened child===========================

        containQuestion.appendChild(formContain); 

        // create btn for edit and btn delete and parent of btn edit and delete___________________________________
        let btndelete = document.createElement("button")  
        btndelete.className = "remove";
        btndelete.textContent = "Remove";
        // appened parent of btnedit and btndelete to form________________________________________
        
        formContain.appendChild(btndelete);

        container2.appendChild(containQuestion);
        document.body.appendChild(container2);
        
        //console.log(btndelete.parentElement.firstChild);
    }
    //console.log(Questiondelet);
    
}
function storeData(){
    // get question //________________________________________
    let question = document.getElementById('question').value;

    // get answer1 //
    let answer1 = document.getElementById('answer1').value;

    // get answer2 //
    let answer2 = document.getElementById('answer2').value;

    // get answer3 //
    let answer3 = document.getElementById('answer3').value;

    // get answer3 //
    let answer4 = document.getElementById('answer4').value;

    // store data //
    // it doesn't display if we don't input data___________________________________________

    if (question.length > 0 && answer1.length > 0 && answer2.length > 0 && answer3.length > 0 && answer4.length > 0){
        let object = {}
        let arrayChoich=[]
        arrayChoich.push(answer1);
        arrayChoich.push(answer2);
        arrayChoich.push(answer3);
        arrayChoich.push(answer4);
        object.Question = question;
        object.Choice=arrayChoich;
        data.push(object);  
        displayQuestion();
    };
};

// function for removedata________________________________________________
function removedata(event){
    if (event.target.className ==="remove"){
        let remove = event.target.parentElement.firstChild.textContent;
        for (let val in data){
            if (data[val].Question === remove){
                data.splice(val,1);
                console.log(data);
            }
            displayQuestion();
        }
    }

}
// funtion for check the answer__________________________________________

// gobal variable // _________________________________________________________
let data =[
    {Question : '1, How are you ?' , Choice:['a. good','b. thanks','c. bad','d. not bad']},
];

//console.log(data);
displayQuestion();
let addButton = document.getElementById("add");
addButton.addEventListener("click", storeData);

document.addEventListener("click", removedata);