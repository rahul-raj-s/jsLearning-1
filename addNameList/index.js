const name=document.getElementById("name");
const age=document.getElementById("age");
const grade=document.getElementById("grade");
const addDetails=document.getElementById("user-button");
const display=document.getElementById("display");

const displayUserDetails = () => {

    const userName=name.value;
    const userAge=age.value;
    const userGrade=grade.value;

    if(!userName || !userAge || !userGrade){
        alert("pls enter all details.")
        return;
    }

    const newRow=document.createElement("tr");

    const col1=newRow.insertCell(0);
    const col2=newRow.insertCell(1);
    const col3=newRow.insertCell(2);

    col1.innerHTML=userName;
    col2.innerHTML=userAge;
    col3.innerHTML=userGrade;

    display.append(newRow);  
    
    name.value="";
    grade.value="";
    age.value="";
}

addDetails.addEventListener("click",displayUserDetails);

