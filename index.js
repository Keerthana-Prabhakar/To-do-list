

const btnClick = document.getElementById("submit");
const todolistItems = document.getElementById("listTaks");
const inputbox = document.getElementById("input-box");

var close = document.getElementsByClassName("close");
var myNodelist = document.getElementsByTagName("LI");



const mydata = [];

// Click event by click on button
btnClick.addEventListener("click",e => {
    e.preventDefault();
    updateArray();
    makemylist();
})

// Array showing in li List
function makemylist(){
   todolistItems.innerHTML = ""

    for (i=0; i< mydata.length ; i++){
        var li = document.createElement('li');
        li.innerText = mydata[i];
        todolistItems.appendChild(li);

        // Create a "close" button and append it to each list item

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);

        // Click on a close button to hide the current list item
       
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        
      }

        // Add a "checked" symbol when clicking on a list item
        var list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
            console.log("yupp")  
        }
        }, false);

         console.log("printing makemylist array",mydata)
    }
  
}

//when I press on button I want to add element in my array

function updateArray(){
    if(inputbox.value === ''){
        alert("you must write something!");
    } else {
        //adding value in box
        boxvalue = document.getElementById("input-box").value
        mydata.push(boxvalue);
        console.log("printing updateArray",mydata)
    }
    inputbox.value='';
}

