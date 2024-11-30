// let elements = document.getElementsByTagName('p'); // Selects all <p> elements
// console.log(elements);

// let h1 = document.querySelector('h1');

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor('red', 1000, () => {
//     changeColor('orange', 1000, () => {
//         changeColor('green', 1000, () => {
//             changeColor('yellow', 1000, () => {
//                 changeColor('blue', 1000);
//             });
//         });
//     });
// });


// let elements = document.getElementsByTagName('p'); // Selects all <p> elements
// console.log(elements);

// let h1 = document.querySelector('h1');

// function changeColor(color, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve();
//         }, delay);
//     });
// }

// async function show() {
//     await changeColor("violet", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("green", 1000);
// }

// show();

// async function greet() {
//     return "hello world";
// }
// let hello = async () => { }; //returns a promise

// // Function to fetch a random cat fact
// async function fetchCatFact() {
//     try {
//         const response = await fetch('https://cat-fact.herokuapp.com/facts/random');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data.text; // Return the cat fact text
//     } catch (error) {
//         console.error('Error fetching cat fact:', error);
//         return null;
//     }
// }

// // Example usage
// fetchCatFact().then(catFact => {
//     if (catFact) {
//         console.log('Random Cat Fact:', catFact);
//     } else {
//         console.log('Failed to fetch a cat fact.');
//     }
// });



// let dat = Date();
// console.log(dat);

// function displayDate() {
//     document.getElementById('demo').innerHTML = dat;
// }


// let newbtn = document.createElement("button");
// newbtn.innerText = "click me!";
// document.querySelector("body").prepend(newbtn); 

// newbtn.addEventListener("click",function(){
//     alert("wish you a good day");
// });


// document.addEventListener('DOMContentLoaded', function() {
//     let para = document.querySelector("p");
//     para.addEventListener("click", function() {
//         para.innerText = "good day";
//         console.log(para);
//     });
// });



var text = document.querySelector("h3");
var addFriend = document.querySelector("button");

var check=0;
addFriend.addEventListener("click", function() {
        if(check == 0){
        text.innerText = "Friend";
        text.style.color = "green";
        addFriend.style.backgroundColor = "#ff7363"; 
        addFriend.style.color = "black"; 
        addFriend.innerHTML="remove Friend";
        check = 1;
        }
        else{
                text.innerText = "Staranger";
                text.style.color = "red";
                addFriend.innerHTML="addFriend";
                addFriend.style.backgroundColor = "green";
                addFriend.style.color = "white";
                alert("your Friend has been removed");
                check = 0;
        };
    });


let con = document.querySelector('.ne');
let btn = document.querySelector('i');

con.addEventListener("dblclick",function(){
    btn.style.transform="scale(1)";
    btn.style.opacity="0.8";
    btn.style.color="red";
    setTimeout(function(){
        btn.style.opacity="0";
    },1000);
    setTimeout(function(){
        btn.style.transform="scale(0)";
    },2000);
});

