// const { forwardRef } = require("react");

var username=document.getElementById("name");
var email=document.getElementById("email");
var password=document.getElementById("password");


document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
})


if(!localStorage.getItem("users")){
    localStorage.setItem("users","[]")
}
var users=JSON.parse(localStorage.getItem("users"));


function signUp(){
    
    regex['name'].test(username.value)
    regex['email'].test(email.value)
    regex['password'].test(password.value)
    
}

function varification(that){
    var regex={
        name:/^[a-zA-Z0-9_-]{3,15}$/,
        email:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        password:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    };
    if(that.value==""){
        that.classList.remove("is-invalid");
        that.classList.remove("is-valid");
        that.nextElementSibling.classList.add("d-none");
        return false;
    }
    else if(regex[that.id].test(that.value)){
        that.classList.add("is-valid");
        that.classList.remove("is-invalid");
        that.nextElementSibling.classList.add("d-none");
        return true;
    }
    else{
        that.classList.add("is-invalid");
        that.classList.remove("is-valid");
        that.nextElementSibling.classList.remove("d-none");
        return false;
    }
}

var successmsg=document.getElementById("successmsg")
var req=document.getElementById("req")
function check(){
    console.log(varification(username));
    console.log(varification(email));
    console.log(varification(password));
    
    var user={
        name:username.value,
        email:email.value,
        password:password.value
    }
    for(var i=0;i<users.length;i++){
        if(users[i].email==email.value){
            alert("email arleady has an acount")
            return false;
        }
    }
    if(varification(username)&&varification(email)&&varification(password)){
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
        successmsg.classList.remove("d-none")
        req.classList.add("d-none")
    }
    else if(!username.value||!email.value||!password.value){
        req.classList.remove("d-none")
        successmsg.classList.add("d-none")
    }
}

var loginemail=document.getElementById("loginemail");
var loginpassword=document.getElementById("loginpassword");
var loginbtn=document.getElementById("loginbtn");
var welcomename=document.getElementById("welcomename");
function login(){
    console.log(!loginemail.value==""&&!loginpassword.value=="");
    
    if(!loginemail.value==false&&!loginpassword.value==false){
        for(var i=0;i<users.length;i++){
            if(users[i].email==loginemail.value){
                if(users[i].password==loginpassword.value){
                    localStorage.setItem("current",users[i].name);
                    window.location.href="SmartLogin.html";
                }
            }
            
        }
    }
    else{
    }
}