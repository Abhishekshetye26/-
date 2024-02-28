let value = document.querySelector('.class');
let value1 = document.querySelector('.class1');

let ans;

function myfunction(){
   
ans = Math.floor(Math.random() * 3);

}


let score = 0 ;






value.addEventListener("click" , function(){

    myfunction();
    console.log(ans);
})