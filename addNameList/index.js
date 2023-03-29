const name = document.getElementById("name");
const age = document.getElementById("age");
const grade = document.getElementById("grade");
const addDetails = document.getElementById("user-button");
const display = document.getElementById("display");
const userCountNode = document.getElementById("total-count");

const errorNametNode = document.getElementById("error-name");
const errorAgeNode = document.getElementById("error-age");
const errorGradeNode = document.getElementById("error-grade");

let userCount = 0;

const isValid = (user) => {

  let error = {};

  resetErrorField();
  
  let hasError = false;
  if (user.name=="") {
    error.name = "*Required Field."
    errorNametNode.innerHTML = error.name;
    hasError = true;
  }
  
  else if (user.name.length < 3) {
    error.name = "*Length should be greater then 3."
    errorNametNode.innerHTML = error.name;
    hasError = true;
  }

  else if (user.name.length > 18) {
    error.name = "*Length should be less then 18."
    errorNametNode.innerHTML = error.name;
    hasError = true;
  }

  if (typeof user.age == "string") {
    error.age = "kindly put valid digit st"
    errorAgeNode.innerHTML = error.age;
    hasError = true;
  }

  else if (user.age < 0) {
    error.age = "*Kindly put valid Age."
    errorAgeNode.innerHTML = error.age;
    hasError = true;
  }

  if(user.grade==""){
    error.grade = "*Required Field."
    errorGradeNode.innerHTML = error.grade;
    hasError = true;
  }

  else if (!["A", "B", "C", "D", "E"].includes(user.grade)) {
    error.grade = "*Grade should be b/w A to E"
    errorGradeNode.innerHTML = error.grade;
    hasError = true;
  }

  return !hasError;
}

const resetFields = () => {
  name.value = "";
  grade.value = "";
  age.value = "";
}

const resetErrorField=()=>{
  errorNametNode.innerHTML="";
  errorAgeNode.innerHTML="";
  errorGradeNode.innerHTML="";
}

const creatUserRow = (user) => {
  const newRow = document.createElement("tr");

  const col1 = newRow.insertCell(0);
  const col2 = newRow.insertCell(1);
  const col3 = newRow.insertCell(2);

  col1.innerHTML = user.name;
  col2.innerHTML = user.age;
  col3.innerHTML = user.grade;

  return newRow;
}

const getUserFromInput = () => {
  const user = {
    name: name.value,
    age: parseInt(age.value),
    grade: grade.value
  }
  return user;
}

const updateUserCount = () => {
  userCount++;
  userCountNode.innerHTML ="Total Entry "+ userCount;
}

const displayUserDetails = () => {
  const user = getUserFromInput();

  if (isValid(user)) {
    display.append(creatUserRow(user));
    updateUserCount();
    resetFields();
    resetErrorField();
  }
  else {

  }
}


addDetails.addEventListener("click", displayUserDetails);

