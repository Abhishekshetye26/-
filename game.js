
let score;


function increase() {

        score = score + '+' + '1';
        score = eval(score);
}


let value = document.querySelector(".myscore");
let value2 = document.querySelector(".submain2");
let value6 = document.querySelector(".displayh2");



function inscreaseUserScore(){

        score = value.textContent;

        increase();

        value.innerHTML = score;
        res2 = score;

}









let value5 = document.querySelector(".myscore1");


let res1 ,res2;

function increaseComputerScore(){

        score = value5.textContent;

        increase();


        value5.innerHTML = score;
         
        
     
}


let value8 =  document.querySelector(".submain4");
let value7 =  document.querySelector(".submain5");


value8.addEventListener("click" , function(){

        let randome = Math.floor( Math.random()*3);
        console.log(randome);
        console.log("user choose paper");
        let userScore = 1;

        let computerScore;
        if(randome > 0 && randome <= 1 ){

                // increaseComputerScore();
                // value6.innerHTML = "Computer Won"

                computerScore = randome;
        }else{
        
                if(randome > 1 && randome <= 2){

                // inscreaseUserScore();
                // value6.innerHTML = "user Won"
                computerScore = randome ;
                }else{

                        
                        computerScore = randome;
                }
        }

        
        if(computerScore === userScore){

                console.log("computer choose PAPER")

                value6.innerHTML = "match tie"
        }else{

                if(computerScore > userScore && computerScore <= 2  ){
                        console.log("computer choose SCISSORS")
                increaseComputerScore();
                value6.innerHTML = "Computer Won"
                }else{
                        console.log("computer choose rock")
                inscreaseUserScore();
                value6.innerHTML = "user Won"

                }
        }
});

value7.addEventListener("click" , function(){

        let randome = Math.floor( Math.random()*3);
        console.log(randome);
        console.log("user choose scissors");
        let userScore = 2;

        let computerScore;
        if(randome > 0 && randome <= 1 ){

                // increaseComputerScore();
                // value6.innerHTML = "Computer Won"

                computerScore = randome;
        }else{
        
                if(randome > 1 && randome <= 2){

                // inscreaseUserScore();
                // value6.innerHTML = "user Won"
                computerScore = randome ;
                }else{

                        
                        computerScore = randome;
                }
        }

        
        if(computerScore === userScore){

                console.log("computer choose scissors")

                value6.innerHTML = "match tie"
        }else{

                if(computerScore < userScore && computerScore === 0 ){
                        console.log("computer choose rock")
                increaseComputerScore();
                
                value6.innerHTML = "Computer Won"
                }else{
                        console.log("computer choose paper")
                inscreaseUserScore();
                value6.innerHTML = "user Won"

                }
        }
});

value2.addEventListener("click" , function(){

        let randome = Math.floor( Math.random()*3);
        console.log(randome);
        console.log("user choose rock");
        let userScore = 0;

        let computerScore;
        if(randome > 0 && randome <= 1 ){

                // increaseComputerScore();
                // value6.innerHTML = "Computer Won"

                computerScore = randome;
        }else{
        
                if(randome > 1 && randome <= 2){

                // inscreaseUserScore();
                // value6.innerHTML = "user Won"
                computerScore = randome ;
                }else{

                        
                        computerScore = randome;
                }
        }

        
        if(computerScore === userScore){

                console.log("computer choose rock")

                value6.innerHTML = "match tie"
        }else{

                if(computerScore > userScore && computerScore <= 1 ){
                        console.log("computer choose paper")
                increaseComputerScore();
                value6.innerHTML = "Computer Won"
                }else{
                        console.log("computer choose scissors")
                inscreaseUserScore();
                value6.innerHTML = "user Won"

                }
        }
});




let time = 60;

let val = setInterval(function(){

        if(time > 0){
        time--;
        document.querySelector(".timelelo").textContent = time;
        

        }else{



                

        let ans = value5.textContent;
        let ans2 = value.textContent;
        let val1 ,val2;

        if(ans === ans2){

          val1 = "match tie";
        }else{

        if(ans < ans2 && ans !== ans2){

        val1 ="You win";
        }else{
        
        val1 = "computer win"

        }
}

        

       
        console.log(`final computer score is ${ans}`);
        console.log(`final user score is ${ans2}`);
        clearInterval(val);

      
        document.querySelector(".main").innerHTML = `<h1 style = " color : rgb(30, 30, 58); ; padding-top : 20vw ; text-align : center" >computer score is ${ans}  - and  - user score is ${ans2} <br><span style = "color : blue"> ${val1}</span><br> end game <br>   <a href="index.html">restart</a></h1>`; 
        


                

        }

},1000);




// let scoreValue;
// let randomeNumber;
// let userClickRock = () => {
//         randomeNumber = (Math.floor(Math.random() * 3));
//         console.log(randomeNumber);

//         if(randomeNumber === 0){
//                 console.log('Match tie')
//         }else{
//                 if(randomeNumber === 1){
//                         console.log('computer win');
//                         scoreValue = document.querySelector(".displayContent").textContent;
//                         increaseScore();
//                         document.querySelector(".displayContent").textContent = scoreValue;
//                 }else{
//                         console.log('user win');
//                         scoreValue = document.querySelector(".displayContent").textContent;
//                         increaseScore();
//                         document.querySelector(".displayContent").textContent = scoreValue;   
//                 }
//         }
// }
// let userClickRock = () => {
//         randomeNumber = (Math.floor(Math.random() * 3));
//         console.log(randomeNumber);

//         if(randomeNumber === 0){
//                 console.log('Match tie')
//         }else{
//                 if(randomeNumber === 1){
//                         console.log('computer win');
//                         scoreValue = document.querySelector(".displayContent").textContent;
//                         increaseScore();
//                         document.querySelector(".displayContent").textContent = scoreValue;
//                 }else{
//                         console.log('user win');
//                         scoreValue = document.querySelector(".displayContent").textContent;
//                         increaseScore();
//                         document.querySelector(".displayContent").textContent = scoreValue;   
//                 }
//         }
// }
// let userClickRock = () => {
//         randomeNumber = (Math.floor(Math.random() * 3));
//         console.log(randomeNumber);

//         if(randomeNumber === 0){
//                 console.log('Match tie')
//         }else{
//                 if(randomeNumber === 1){
//                         console.log('computer win');
//                         scoreValue = document.querySelector(".displayContent").textContent;
//                         increaseScore();
//                         document.querySelector(".displayContent").textContent = scoreValue;
//                 }else{
//                         console.log('user win');
//                         scoreValue = document.querySelector(".displayContent").textContent;
//                         increaseScore();
//                         document.querySelector(".displayContent").textContent = scoreValue;   
//                 }
//         }
// }


// document.querySelector(".clickonRock").addEventListener("click" , function(){
//         userClickRock();
// })
// document.querySelector(".clickonPaper").addEventListener("click" , function(){
//         userClickRock();
// })
// document.querySelector(".clickonRock").addEventListener("click" , function(){
//         userClickRock();
// })

// console.log(userClickRock());

