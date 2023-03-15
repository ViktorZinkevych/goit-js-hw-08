import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector(".feedback-form");
const formData = {
    email:'',
    message:''
};



const inputEmail = document.querySelector('input[name="email"]');
const messageText = document.querySelector('textarea[name="message"]');

form.addEventListener('submit', handleFormSubmit);

form.addEventListener('input', throttle (e => {
formData[e.target.name] = e.target.value;
handleTextareaInput();
}, 500));

function handleTextareaInput() {
    const message = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, message);
}

function handleFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

populateTextarea()


function populateTextarea(){
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(savedMessage){
        inputEmail.value = savedMessage.email;
        messageText.value = savedMessage.message;
    }
    console.log("email:", inputEmail.value);
    console.log("message:", messageText.value)
}


