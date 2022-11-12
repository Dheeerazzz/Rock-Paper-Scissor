rock=document.getElementById("rock")
paper=document.getElementById("paper")
scissor=document.getElementById("scissor")
printer=document.getElementById("printer")
comse=document.getElementById("comse")
comsi=document.getElementById("comsi")
function compchoice(){

    const list=['rock','paper','scissor']
    
    let no= Math.floor(Math.random()*3)
    
    let choice=list[no]

     return choice
     }
function rocked(){
   krik=compchoice()
   console.log(krik)
   if(krik=="paper"){
      comsi.innerHTML="you chose ROCK"
      comse.innerHTML="computer chose PAPER"
       printer.innerHTML="You Lose &#x1F62D"
   }
   else if(krik=="scissor"){
      comsi.innerHTML="you chose ROCK"
       comse.innerHTML="computer chose SCISSORS"
       printer.innerHTML="You Win!&#x1F60E"
   }
   else {
      comsi.innerHTML="you chose ROCK"
      comse.innerHTML="computer chose ROCK"
      printer.innerHTML="It's a Tie &#x1F927"
   }
}
function papered(){
   krik=compchoice()
   console.log(krik)
   if(krik=="paper"){
      comsi.innerHTML="you chose PAPER"
       comse.innerHTML="computer chose PAPER"
       printer.innerHTML="It's a Tie &#x1F927"
   }
   else if(krik=="scissor"){
      comsi.innerHTML="you chose PAPER"
       comse.innerHTML="computer chose SCISSORS"
       printer.innerHTML="You Lose &#x1F62D"
   }
   else {
      comsi.innerHTML="you chose PAPER"
      comse.innerHTML="computer chose ROCK"
      printer.innerHTML="You Win!&#x1F60E"
   }
}
function scissored(){
   krik=compchoice()
   console.log(krik)
   if(krik=="paper"){
      comsi.innerHTML="you chose SCISSORS"
       comse.innerHTML="computer chose PAPER"
       printer.innerHTML="You Win!&#x1F60E"
   }
   else if(krik=="scissor"){
      comsi.innerHTML="you chose SCISSORS"
       comse.innerHTML="computer chose SCISSORS"
       printer.innerHTML="It's a Tie &#x1F927"
   }
   else {
      comsi.innerHTML="you chose SCISSORS"
      comse.innerHTML="computer chose ROCK"
      printer.innerHTML="You Lose &#x1F62D"
   }
}
    
