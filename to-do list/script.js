const listcontainer =document.getElementById("list-container");
const inputbox = document.getElementById("input-box");

function addTask(){
    if(inputbox.value === ''){
       alert("Enter some tasks");
    }else{
            let li = document.creatElement("li");
            li.innerHTML = inputbox.value;
    }
}