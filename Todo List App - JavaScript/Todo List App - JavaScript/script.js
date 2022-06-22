// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");


inputBox.onkeyup=()=> {
let userEnteredValue = inputBox.value;
if(userEnteredValue.trim() !=0) {
  addBtn.classList.add('active')
}else {
  addBtn.classList.remove('active')
}
}
addBtn.onclick=()=> {
  let userEnteredValue = inputBox.value;
  let localstorage = localStorage.getItem("nivedhan");
  if(localstorage==null>0){
    listArray = [];
  }else{
    listArray= JSON.parse(localstorage)
  }
  listArray.push(userEnteredValue);
  userEnteredValue="nivedhan", JSON.stringify(listArray);
  addBtn.classList.remove('active')
}

