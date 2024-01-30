
//document.getElementById("history").style="display:none"
var x,winner,color
var p = 0
var c = 0
 document.addEventListener('keydown', function(event){
  var key= event.key
  if(key==='1'){guess(0)}
  if(key==='2'){guess(1)}
  if(key==='3'){guess(2)}
  if(key==='4'){guess(3)}
 })
function guess(g){
document.getElementsByClassName("btn")[0].style="background:gray;"
document.getElementsByClassName("btn")[1].style="background:gray;"
document.getElementsByClassName("btn")[2].style="background:gray;"
document.getElementsByClassName("btn")[3].style="background:gray;"
switch (g){
case 0: x=0; break;
case 1: x=1; break;
case 2: x=2; break;
case 3: x=3; break;
}

var y = Math.floor(Math.random()*4)
 if(x==y){winner = "player"; p+= 1}else{winner = "computer"; c+= 1}
 
 
 var percenage= p/c
 if(c==0&p==1){percenage=2}
 var res=(Math.floor(percenage*=100))/2
document.getElementsByClassName("btn")[x].style="background:red;"
document.getElementsByClassName("btn")[y].style="background:green;"


document.getElementById("demo").innerHTML=("winer is"+ " " + winner)

if(winner=="player")
{document.getElementById("demo").style.color = "green"}
else
{document.getElementById("demo").style.color = "red"}


document.getElementById("score").innerHTML=("Computer Score" + " = " + c + "</br>" + "Player Score"  + " = " + p + " "+ "</br>" +"Win Rate"+" "+"%"+res)
document.getElementById("cguess").innerHTML=("Computer Guess Was" + " = " + y)
var ts= p-c
var testscore= ts*=100
document.getElementById("tests").innerHTML=("Test Progress: " + testscore)

//history log
var para = document.createElement("P")
para.classList.add("hlog")

var his= document.createTextNode("player"+ " = " + x + " " +"computer" + " = " + y + "    " + "winner was" + "   " +winner)


para.appendChild(his)
if(winner=="player")
{para.style.color = "green"}
else
{para.style.color = "red"}


var element = document.getElementById("history")
element.appendChild(para)


}



function history(){
document.getElementById("history").classList.toggle("nblock")}

//menu
var menutgl = document.querySelector('.tmenu')
var sidebar = document.querySelector('.sidebar')
var backtgl = document.querySelector('.tback')
menutgl.addEventListener(('click'),()=>{
sidebar.classList.add("animateopm")})
backtgl.addEventListener(('click'),()=>{
sidebar.classList.remove("animateopm")})

//theme------------------------------------------
 function themeselected(){
 console.log("done")
 var tselect = document.getElementById("theme")
 var tselectedoption = tselect.options[tselect.selectedIndex].value
 if(tselectedoption=="normal"){
  document.body.classList.remove("Waterlilies")
  document.body.classList.remove("Winter")
 document.body.classList.remove("bluehills")
 document.body.classList.remove("Sunset")
 document.body.classList.add("normal")}
 
 if(tselectedoption=="bluehills"){
   document.body.classList.remove("Waterlilies")
  document.body.classList.remove("Winter")
 document.body.classList.remove("normal")
 document.body.classList.remove("Sunset")
 document.body.classList.add("bluehills")}
 
  if(tselectedoption=="Sunset"){
    document.body.classList.remove("Waterlilies")
  document.body.classList.remove("Winter")
 document.body.classList.remove("normal")
 document.body.classList.remove("bluehills")
 document.body.classList.add("Sunset")}
 
  if(tselectedoption=="Waterlilies"){
  document.body.classList.remove("Winter")
 document.body.classList.remove("normal")
 document.body.classList.remove("Sunset")
   document.body.classList.remove("bluehills")
 document.body.classList.add("Waterlilies")}
 
  if(tselectedoption=="Winter"){
 document.body.classList.remove("Waterlilies")
 document.body.classList.remove("normal")
   document.body.classList.remove("Sunset")
 document.body.classList.remove("bluehills")
 document.body.classList.add("Winter")}
 }

 // //language-------------------------------------
 
 // function lngselected(){
 
// const translations_en ={
// "headermenu": "menu"
// }
// const translations_pr ={
// "headermenu": "منو"
// }

// function updateTexts(){
// const selectedLanguage = document.getElementById("lng-text").value
// const elements = [...document.querySelectorAll('[data-translation]')]
// elements.forEach((element)=>{
// const translationKey= element.getAttribute('data-translation')
// element.innerText = translations[selectedLanguage][translationKey]
// })}
// updateTexts()}

 // // var lngselect = document.getElementById("lng")
 // // var lngselectedoption = lngselect.options[lngselect.selectedIndex].value
 // // //english
  // // if(lngselectedoption=="english"){
// // document.querySelector(".sidebar h1").innerHTML="Menu"
// // document.querySelector(".btnh").innerHTML="History"
// // document.getElementById("rstbtn").innerHTML="Reset"
// // document.getElementById("theme-text").innerHTML="theme"
// // document.getElementById("lng-text").innerHTML="Language"
// // document.getElementById("back-text").innerHTML="Back"
// // document.getElementById("menu-text").innerHTML="Menu"
 // // document.getElementById("demo").innerHTML="The Winner..."
// // document.getElementById("cguess").innerHTML="The Computer Guess"
// // document.getElementById("score").innerHTML="Scores"
// // document.getElementById("tests").innerHTML="Test Progress"

 // // var scripttag = document.querySelector("#bigscript")
// // scripttag.setAttribute("src", "translations_en.js")
// // }
 // // //persion
 // // if(lngselectedoption=="persion"){
// // document.querySelector(".sidebar h1").innerHTML="منو"
// // document.querySelector(".btnh").innerHTML="تاریخچه"
// // document.getElementById("rstbtn").innerHTML="بازسازی صحفه"
// // document.getElementById("theme-text").innerHTML="تم ها"
// // document.getElementById("lng-text").innerHTML="زبان"
// // document.getElementById("back-text").innerHTML="برگشتن"
// // document.getElementById("menu-text").innerHTML="منو"
 // // document.getElementById("demo").innerHTML="برنده"
// // document.getElementById("cguess").innerHTML="حدس کامپیوتر"
// // document.getElementById("score").innerHTML="امتیاز ها"
// // document.getElementById("tests").innerHTML="پیشرفت در تست"

 // // var scripttag = document.querySelector("#bigscript")
// // scripttag.setAttribute("src", "translations_pr.js")
 // // }}

 //sidebar container
 var containerbox = document.querySelector(".container")
 var profilebox = document.querySelector(".profile")
 var loginbox = document.querySelector(".login")
 var signupbox = document.querySelector(".signup")
 var aboutbox = document.querySelector(".about")
 var leaderboardbox = document.querySelector(".leaderboard")
  var faqbox = document.querySelector(".faq")
  var feedbackbox = document.querySelector(".feedback")
 var notabuttonbox = document.querySelector(".notabutton")
  var clbtn = document.querySelector(".clbtn")
 
 var profilebtn = document.getElementById("profile-btn")
 var signupbtn = document.getElementById("signup-btn")
 var loginbtn = document.getElementById("login-btn")
 var aboutbtn = document.getElementById("about-btn")
 var leaderboardbtn = document.getElementById("lb-btn")
 var faqbtn = document.getElementById("faq-btn")
 var feedbackbtn = document.getElementById("fb-btn")
 var notabuttonbtn = document.getElementById("nt-btn")
 
profilebtn.addEventListener(('click'),()=>{
containerbox.classList.add("dis-show")
profilebox.classList.add("dis-show")
signupbox.classList.remove("dis-show")
loginbox.classList.remove("dis-show")
aboutbox.classList.remove("dis-show")
leaderboardbox.classList.remove("dis-show")
faqbox.classList.remove("dis-show")
feedbackbox.classList.remove("dis-show")
notabuttonbox.classList.remove("dis-show")
})
 
signupbtn.addEventListener(('click'),()=>{
containerbox.classList.add("dis-show")
signupbox.classList.add("dis-show")
profilebox.classList.remove("dis-show")
loginbox.classList.remove("dis-show")
aboutbox.classList.remove("dis-show")
leaderboardbox.classList.remove("dis-show")
faqbox.classList.remove("dis-show")
feedbackbox.classList.remove("dis-show")
notabuttonbox.classList.remove("dis-show")
})

loginbtn.addEventListener(('click'),()=>{
containerbox.classList.add("dis-show")
loginbox.classList.add("dis-show")
profilebox.classList.remove("dis-show")
signupbox.classList.remove("dis-show")
aboutbox.classList.remove("dis-show")
leaderboardbox.classList.remove("dis-show")
faqbox.classList.remove("dis-show")
feedbackbox.classList.remove("dis-show")
notabuttonbox.classList.remove("dis-show")
})

aboutbtn.addEventListener(('click'),()=>{
containerbox.classList.add("dis-show")
aboutbox.classList.add("dis-show")
profilebox.classList.remove("dis-show")
signupbox.classList.remove("dis-show")
loginbox.classList.remove("dis-show")
leaderboardbox.classList.remove("dis-show")
faqbox.classList.remove("dis-show")
feedbackbox.classList.remove("dis-show")
notabuttonbox.classList.remove("dis-show")
})

 leaderboardbtn.addEventListener(('click'),()=>{
 containerbox.classList.add("dis-show")
leaderboardbox.classList.add("dis-show")
profilebox.classList.remove("dis-show")
signupbox.classList.remove("dis-show")
loginbox.classList.remove("dis-show")
aboutbox.classList.remove("dis-show")
faqbox.classList.remove("dis-show")
feedbackbox.classList.remove("dis-show")
notabuttonbox.classList.remove("dis-show")
})
 
 faqbtn.addEventListener(('click'),()=>{
 containerbox.classList.add("dis-show")
faqbox.classList.add("dis-show")
profilebox.classList.remove("dis-show")
signupbox.classList.remove("dis-show")
loginbox.classList.remove("dis-show")
aboutbox.classList.remove("dis-show")
leaderboardbox.classList.remove("dis-show")
feedbackbox.classList.remove("dis-show")
notabuttonbox.classList.remove("dis-show")
})

feedbackbtn.addEventListener(('click'),()=>{
containerbox.classList.add("dis-show")
feedbackbox.classList.add("dis-show")
profilebox.classList.remove("dis-show")
signupbox.classList.remove("dis-show")
loginbox.classList.remove("dis-show")
aboutbox.classList.remove("dis-show")
leaderboardbox.classList.remove("dis-show")
faqbox.classList.remove("dis-show")
notabuttonbox.classList.remove("dis-show")
})

notabuttonbtn.addEventListener(('click'),()=>{
containerbox.classList.add("dis-show")
notabuttonbox.classList.add("dis-show")
profilebox.classList.remove("dis-show")
signupbox.classList.remove("dis-show")
loginbox.classList.remove("dis-show")
aboutbox.classList.remove("dis-show")
leaderboardbox.classList.remove("dis-show")
faqbox.classList.remove("dis-show")
feedbackbox.classList.remove("dis-show")
})

clbtn.addEventListener(('click'),()=>{
containerbox.classList.remove("dis-show")
profilebox.classList.remove("dis-show")
signupbox.classList.remove("dis-show")
loginbox.classList.remove("dis-show")
aboutbox.classList.remove("dis-show")
leaderboardbox.classList.remove("dis-show")
faqbox.classList.remove("dis-show")
feedbackbox.classList.remove("dis-show")
notabuttonbox.classList.remove("dis-show")
})
