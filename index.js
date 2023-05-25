// BEFORE CHANGING ANYTHING GO TO THE README.md FILE.
// Hello mark, this are the instructions, you can change any wording of the document here if it is between quotation marks.
// You will see that they have this format {ItemName: "Your Text to be shown"}
// You cannot change the ItemName before the : but you can change any text between the Quotation Marks
// "This is an example of a text between quotation marks."
// There is a warning way below, please do not touch any code that comes after that warning.
// As you can see, each item is inside its section, so you just have to contrast the wording
// agains the page. That way you will know where are you and what to change.
// If you have some questions, you can ask me through fiverr with no charge,
// I know that coding can be hard.

const Header = { pageTitle: "Team Abundance 5 Days Free Trial!" };

const FirstStep = {
  title: " STEP 1",
  h3: 'Join Our Team Abundance Trading Facebook Group called "Discover A New Way"',
  button: "Click to Join The facebook Group",
};

const SecondStep = {
  title: "STEP 2",
  h3: "Watch the Two Training Videos below: ",
  strong: "Make Sure",
  text: "to Watch The 1st and 2nd Videos before you watch the live recorded session on the 5 day free training.",
  button: "Abundance Trade House Training Videos",
  strong2: "Again, please make sure you watch the videos above because they lay the entire groundwork for our strategy",
  text2:
    "and your free training week. If you skip the videos above, you may get lost the rest of the week when we go over trading charts.",
};

const ThirdStep = {
  title: "STEP 3",
  h3: "Register for your free 5 day Live Training Sessions: ",
  text: "Register for LIVE Sessions that allow you to literally see EVERYTHING in the Group Training FREE for 5 days. This Trial Starts Monday May 22 ",
  text2:
    "(The most transparent look at this Trading Group and System you will ever see...)",
  textStrong: " Register Here NOW",
  text3:
    "For the Team Abundance Weekly Training THIS WEEK of Monday May 22nd at 12pm EST Monday - Friday:",
  button: "Register For Live Training",
  text4:
    " If you are late getting started for this week, don't worry! if you click below, enter this password ",
    thisWeekPassword: "79504479",
    nextText:" and you will have access for all the trainings this week recorded:",
  button2: "This Week Recordings",
  text6:"(YES, you get access to THIS WEEK's Live Trainings as well. Just start by clicking on this week's Monday Recorded session. Most people are ready to join just from the recordings...)",
  strong3:"Next Week's Password",
  text7:"for missed live session recording is: ",
  nextWeekPassword:"5702038 ",
  warningTet:"(Will not work until next Monday, May 22nd)"
};




// WARNING!
// WARNING! WARNING!
// WARNING! WARNING! WARNING!
// WARNING! WARNING! WARNING! WARNING!
// WARNING! WARNING! WARNING! WARNING! WARNING!

// DO NOT CHANGE ANY CODE BELOW.

// WARNING! WARNING! WARNING! WARNING! WARNING!
// WARNING! WARNING! WARNING! WARNING!
// WARNING! WARNING! WARNING!
// WARNING! WARNING!
// WARNING!


const addTextFirstPart=(()=>{
let theHeader=document.getElementById('Page-Title')
let title=document.getElementById('Title-1')
let h3=document.getElementById('h3-1')
let button=document.getElementById('button-1')

title.innerText=FirstStep.title
h3.innerText=FirstStep.h3
button.innerText=FirstStep.button
theHeader.innerText=Header.pageTitle
})();

const addTextSecondPart=(()=>{

let title=document.getElementById('title-2')
let h3=document.getElementById('h3-2')
let strong2=document.getElementById('strong-2')
let text2=document.getElementById('text-2');
let button2=document.getElementById('button-2')
let strong22=document.getElementById('strong2-2')
let text22=document.getElementById('text2-2')

title.innerText=SecondStep.title
h3.innerText=SecondStep.h3
strong2.innerText=SecondStep.strong 
text2.innerText=SecondStep.text
button2.innerText=SecondStep.button 
strong22.innerText=SecondStep.strong2
text22.innerText=SecondStep.text2

})();



const addTextThirdPart=(()=>{

let title=document.getElementById('title-3')
let h3=document.getElementById('h3-3')
let text=document.getElementById('text-3')
let strong=document.getElementById('strong-3')
let text2=document.getElementById('text2-3')
let button=document.getElementById('button-3')
let text3=document.getElementById('text3-3')
let password=document.getElementById('actual-password')
let text32=document.getElementById('text32-3')
let button2=document.getElementById('button2-3');
let text4=document.getElementById('text5-3')
let strong3=document.getElementById('strong2-3')
let text5=document.getElementById('text6-3')
let nextWeekPassword=document.getElementById('next-week-password')
let text6 = document.getElementById('lasttext')

title.innerText=ThirdStep.title
h3.innerText=ThirdStep.h3
text.innerText=ThirdStep.text + ' ' + ThirdStep.text2
strong.innerText=ThirdStep.textStrong 
text2.innerText=ThirdStep.text3
button.innerText=ThirdStep.button
text3.innerText=ThirdStep.text4
password.innerText=ThirdStep.thisWeekPassword
text32.innerText=ThirdStep.nextText
button2.innerText=ThirdStep.button2
text4.innerText=ThirdStep.text6
strong3.innerText=ThirdStep.strong3
nextWeekPassword.innerText=ThirdStep.nextWeekPassword
text6.innerText=ThirdStep.warningTet
text5.innerText=ThirdStep.text7
})();


const div1=document.getElementById('step-1')
const div2=document.getElementById('step-2')
const div3=document.getElementById('step-3')


