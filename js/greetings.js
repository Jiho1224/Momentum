const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const UserName_Key = "username";
const savedUserName = localStorage.getItem(UserName_Key);

function onLoginSubmit(event){

    event.preventDefault();

    const userName = loginInput.value;
    loginForm.classList.add("hidden");
    localStorage.setItem(UserName_Key,userName); //(key,value)

    paintGreetings(userName);
    
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}



//localStorage에 이전에 저장한 이름 정보가 들어있을 경우 해당 이름을 출력하고
//없을 경우 입력받는다.
if(savedUserName == null){
    //show the form
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    //show the greeting
    paintGreetings(savedUserName);
}
