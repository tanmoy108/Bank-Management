document.getElementById("login").addEventListener("click",function(){
  let emailInfo = document.querySelector("#email");
  let passwordInfo = document.getElementById("password");

  let email = emailInfo.value;
  let password = passwordInfo.value;
  
  if(email === 'tanmoysharma@gmail.com' && password === 'sharma')
  {
    window.location.href='bank.html';
  }
});