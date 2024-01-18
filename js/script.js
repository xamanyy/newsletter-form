const emailAddress = document.querySelector('#email');
const submit_Button = document.querySelector('#submitButton');
const errorElement = document.querySelector('.error-msg');
const successPopup = document.querySelector('.success');
const newsletterForm = document.querySelector('.newsletter');
const successButton  = document.querySelector('.success-btn');
const putEmail = document.querySelector('.fake-email');

successPopup.style.display = 'none';

submit_Button.addEventListener('click',(e)=>{
   
    let messages = [];
    if(emailAddress.value.trim() === ' ' || emailAddress === null || !validateEmail(emailAddress.value)){
            messages.push("Vaild Email Address Required!");

    }
    else{
        newsletterForm.style.display = 'none';
        successPopup.style.display = 'flex'; 
        putEmail.textContent = emailAddress.value;
        
        successButton.addEventListener('click',() =>{
            successPopup.style.display = 'none';
            newsletterForm.style.display = 'flex';
            emailAddress.value =' '

        })    
    }    

    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerHTML= messages.join(", ");
        emailAddress.classList.add("email-error");
    }

})

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

console.log("hello world")








