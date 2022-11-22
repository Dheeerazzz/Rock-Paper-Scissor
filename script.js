rock=document.getElementById("rock")
paper=document.getElementById("paper")
scissor=document.getElementById("scissor")
printer=document.getElementById("printer")
comse=document.getElementById("comse")
comsi=document.getElementById("comsi")
uscore=document.getElementById("userscore")
cscore=document.getElementById("compscore")
rest=document.getElementById("reset")
user=0
comp=0
function compchoice(){

    const list=['rock','paper','scissor']
    
    let no= Math.floor(Math.random()*3)
    
    let choice=list[no]

     return choice
     }
function reset(){
   user=0;
   comp=0;
   uscore.innerHTML="Your Score :  "+user;
   cscore.innerHTML="Computer score :  "+comp;
}
function rocked(){
   krik=compchoice()
   console.log(krik)
   if(krik=="paper"){
      comsi.innerHTML="you chose ROCK"
      comse.innerHTML="computer chose PAPER"
      printer.innerHTML=">> You Lose &#x1F62D <<"
       comp=comp+1
       uscore.innerHTML="Your Score :  "+user;
       cscore.innerHTML="Computer score :  "+comp;
   }
   else if(krik=="scissor"){
      comsi.innerHTML="you chose ROCK"
       comse.innerHTML="computer chose SCISSORS"
       printer.innerHTML=">> You Win!&#x1F60E <<"
       user=user+1
       uscore.innerHTML="Your Score :  "+user;
       cscore.innerHTML="Computer score :  "+comp;
   }
   else {
      comsi.innerHTML="you chose ROCK"
      comse.innerHTML="computer chose ROCK"
      printer.innerHTML=">> It's a Tie &#x1F927 <<"
      uscore.innerHTML="Your Score :  "+user;
      cscore.innerHTML="Computer score :  "+comp;
   }
}
function papered(){
   krik=compchoice()
   console.log(krik)
   if(krik=="paper"){
      comsi.innerHTML="you chose PAPER"
       comse.innerHTML="computer chose PAPER"
       printer.innerHTML=">> It's a Tie &#x1F927 <<"
       uscore.innerHTML="Your Score :  "+user;
       cscore.innerHTML="Computer score :  "+comp;
   }
   else if(krik=="scissor"){
      comsi.innerHTML="you chose PAPER"
       comse.innerHTML="computer chose SCISSORS"
       printer.innerHTML=">> You Lose &#x1F62D <<"
       comp=comp+1
       uscore.innerHTML="Your Score :  "+user;
       cscore.innerHTML="Computer score :  "+comp;
   }
   else {
      comsi.innerHTML="you chose PAPER"
      comse.innerHTML="computer chose ROCK"
      printer.innerHTML=">> You Win!&#x1F60E <<"
      user=user+1
      uscore.innerHTML="Your Score :  "+user;
      cscore.innerHTML="Computer score :  "+comp;
   }
}
function scissored(){
   krik=compchoice()
   console.log(krik)
   if(krik=="paper"){
      comsi.innerHTML="you chose SCISSORS"
       comse.innerHTML="computer chose PAPER"
       printer.innerHTML=">> You Win!&#x1F60E <<"
       user=user+1
       uscore.innerHTML="Your Score :  "+user;
       cscore.innerHTML="Computer score :  "+comp;
   }
   else if(krik=="scissor"){
      comsi.innerHTML="you chose SCISSORS"
       comse.innerHTML="computer chose SCISSORS"
       printer.innerHTML=">> It's a Tie &#x1F927 <<"
       uscore.innerHTML="Your Score :  "+user;
       cscore.innerHTML="Computer score :  "+comp;
   }
   else {
      comsi.innerHTML="you chose SCISSORS"
      comse.innerHTML="computer chose ROCK"
      printer.innerHTML=">> You Lose &#x1F62D <<"
      comp=comp+1
      uscore.innerHTML="Your Score :  "+user;
      cscore.innerHTML="Computer score :  "+comp;
   }
}
    
