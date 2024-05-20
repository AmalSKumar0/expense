const inputBox=document.querySelector(".databox1");
const inputBox2=document.querySelector(".databox2");
let listContainer=document.querySelector(".olol");
let count=0;
let totalCost=0;
const h4=document.querySelector("h4");
function addTask(){
    if(inputBox.value === '' || inputBox2.value === ''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML= inputBox.value;
        li.innerHTML+="&nbsp;&nbsp;";
        li.innerHTML+=inputBox2.value;
        li.innerHTML+="$";
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML = "\u00d7";
        span.setAttribute("data",inputBox2.value);
        li.appendChild(span);
        count++;
        totalCost+=parseFloat(inputBox2.value);
        h4.innerHTML=`No of item:${count}  Total price:${totalCost}$`
    }
    savedata();
    inputBox.value="";
    inputBox2.value="";
};

listContainer.addEventListener("click",function(e){
 if(e.target.tagName === "SPAN"){
        totalCost-=e.target.getAttribute('data');
        e.target.parentElement.remove();
        count--;
        h4.innerHTML=`No of item:${count}  Total price:${totalCost}$`
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem('count',count);
    localStorage.setItem('totalCost',totalCost);
    localStorage.setItem('myData',listContainer.innerHTML);
}
document.addEventListener('DOMContentLoaded', () => {
    listContainer.innerHTML=localStorage.getItem('myData');
    h4.innerHTML=`No of item:${localStorage.getItem('count')}  Total price:${localStorage.getItem('totalCost')}$`;
});
function clearData(){
    listContainer.innerHTML="";
    count=0;
    totalCost=0;
    h4.innerHTML=`No of item:0  Total price:0$`;
    savedata();
}