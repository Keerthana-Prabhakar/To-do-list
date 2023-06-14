const inputBox = document.getElementById("input-box");
const listTaks = document.getElementById("listTaks");
const btnsubmit = document.getElementById("submit");

const list = [
    { title: "fun js", isRead: true },
  {title: "cool DOM", isRead: false }
]


//#3
const createListElement = (list) => {
  const listItem = document.createElement("li");
  listTaks.textContent = list.title;
  // conditional styling if the book is read make it red
  listTaks.style.color = list.isRead ? "red" : "green";
  // if we want to interact with each li we need to add event listener on EVERY li
  listTaks.addEventListener("click", (event) => {
    console.log("Hello", event.target.textContent);
  });
  return listTaks;
};

//Click event 

const render = () => {
    // to prevent repeted titles every render we need to clear the list with innerHtml
    listTaks.innerHTML = "";
  
    list.forEach((book) => {
      const item = createListElement(list);
      listTaks.appendChild(item);
    });
};

btnsubmit.addEventListener("add",(event) => {
    event.preventDefault();
    console.log("js is working")

})

render();






