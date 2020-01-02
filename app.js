// Form blur event listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("postcode").addEventListener("blur", validatePostcode);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("name").addEventListener("blur", validatePhone);

function validateName(){
  const name = document.getElementById("name");
  const re = /^[A-Z a-z]{2,10}$/;

  if(!re.test(name.value)){
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function validatePostcode(){
  const postcode = document.getElementById("postcode");
  const re = /^[A-Za-z]{1,2}[0-9]{1,2} [1-9]{1}[A-Za-z]{2}$/;

  if(!re.test(postcode.value)){
    postcode.classList.add("is-invalid");
  } else {
    postcode.classList.remove("is-invalid");
  }
}

function validateEmail(){
  const email = document.getElementById("email");
  const re = /^([A-Za-z0-9_\-\.]+)@[a-zA-Z_\-]+\.[a-zA-Z]$/;

  if(!re.test(email.value)){
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

function validatePhone(){
  const phone = document.getElementById("phone");
  const re = /^$/;

  if(!re.test(phone.value)){
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  } 
}
