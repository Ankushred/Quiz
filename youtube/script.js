const Questions=[
    {
        question :`Who is the CEO of YouTube?`,
        answer :[
            {text:"Mark Zuckerberg",correct: false},
            {text:"Sundar Pichai",correct: false},
            {text:"Susan Wojcicki",correct: true},
            {text:"Jeff Bezos",correct: false}
        ]
    },
    {
        question :`When was YouTube founded?`,
        answer :[
            {text:"2003",correct: false},
            {text:"2005",correct: true},
            {text:"2007",correct: false},
            {text:"2010",correct: false}
        ]
    },
    {
        question :`What was the first video ever uploaded on YouTube?`,
        answer :[
            {text:"Charlie Bit My Finger",correct: false},
            {text:"Evolution of Dance",correct: false},
            {text:"Me at the zoo",correct: true},
            {text:"Gangnam Style",correct: false}
        ]
    },
    {
        question :`Which company acquired YouTube in 2006?`,
        answer :[
            {text:"Google",correct: true},
            {text:"Facebook",correct: false},
            {text:"Apple",correct: false},
            {text:"Microsoft",correct: false}
        ]
    },
    {
        question :`What is the maximum video length for a standard YouTube upload?`,
        answer :[
            {text:"10 minutes",correct: false},
            {text:"15 minutes",correct: true},
            {text:"30 minutes",correct: false},
            {text:"60 minutes",correct: false}
        ]
    },
    {
        question :`How many hours of video are uploaded to YouTube every minute?`,
        answer :[
            {text:"100 hours",correct: false},
            {text:"300 hours",correct: false},
            {text:"500 hours",correct: true},
            {text:"1000 hours",correct: false}
        ]
    },
    {
        question :`What is the highest viewed video on YouTube as of now?`,
        answer :[
            {text:"Baby Shark Dance",correct: true},
            {text:"Despacito",correct: false},
            {text:"Gangnam Style",correct: false},
            {text:"See You Again",correct: false}
        ]
    },
    {
        question :`How many subscribers are needed to become a YouTube Partner and monetize videos?`,
        answer :[
            {text:"1000 subscribers",correct: true},
            {text:"10,000 subscribers",correct: false},
            {text:"100,000 subscribers",correct: false},
            {text:"1,000,000 subscribers",correct: false}
        ]
    },
    {
        question :`Which YouTube feature allows creators to interact with their audience in real-time?`,
        answer :[
            {text:"YouTube Stories",correct: false},
            {text:"YouTube Live",correct: true},
            {text:"YouTube Premiere",correct: false},
            {text:"YouTube Shorts",correct: false}
        ]
    },
    {
        question :`What is the highest resolution available for video playback on YouTube?`,
        answer :[
            {text:"720p",correct: false},
            {text:"1080p",correct: false},
            {text:"4K",correct: false},
            {text:"8K",correct: true}
        ]
    }
];
const nums = new Set();
while (nums.size !== Questions.length) {
  nums.add(Math.floor(Math.random() * Questions.length));
}
let rand=Array.from(nums);
function startQuiz(){
let opt_Box=document.querySelector(".btn");
let Heading=document.getElementById("head");
let Ques_Box=document.getElementById("Question");
let Next=document.getElementById("Next");
let Main_Box=document.getElementById("app");
let index=0;
let score=0;
let userAns="";
var count=false;
const collection=opt_Box.children;
opt_Box.addEventListener("click",(dets)=>{
  if(count){
      for(i=0;i<(Questions[rand[index]].answer.length);i++){
           userAns=dets.target.textContent;
          if(userAns===collection[i].textContent){
              collection[i].style.background="black";
              collection[i].style.color="white";
              Next.style.display="block";
              count=false;
          }
      }
      compare();
      index++;
  }

});
function showQuestion(){
  let currIndex=rand[index];
  Ques_Box.innerHTML=`<h3>${Questions[currIndex].question}<h3>`;
  Heading.innerHTML=`Question No.${index+1}`
  let opt="";
  for(let i=0;i<(Questions[currIndex].answer.length);i++){
      opt+=`<button id="bt" >${Questions[currIndex].answer[i].text}</button>`
  }
  opt_Box.innerHTML=opt;
}
function compare(){
  for(let k=0;k<collection.length;k++){
      if(Questions[rand[index]].answer[k].correct){
          if(Questions[rand[index]].answer[k].text===userAns){
              score++;
          }
      }
  }
}
Next.addEventListener("click",function(){   
  if(index<Questions.length){
  Heading.style.display="flex";
  Main_Box.style.display="flex";
  opt_Box.style.display="flex";
  Ques_Box.style.display="flex";
  showQuestion();
  Next.innerHTML="Next";
  Next.style.display="none";
  }
  else{
      Main_Box.style.height="90%";
      Main_Box.innerHTML=`You Have Scored ${score} out of ${Questions.length} <a href="yt.html" id="restart"><h3>Restart</h3></a>`;
      Heading.remove();
      document.querySelector("#Question").remove();
      document.getElementById("Next").remove();
  }
  console.log(score);
  count=true;
});
}
startQuiz();