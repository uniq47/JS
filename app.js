const phoneInput = document.getElementById('phone');
const postalInput = document.getElementById('postal');
console.log(phoneInput)

phoneInput.addEventListener('blur', function(){
    const phoneValue = phoneInput.value.trim();
    const postalCode= postalInput.value.trim();
    //REGEX for phone number
    const regex = /^\d{10}$/;
    if(phoneValue === ''){
        
        phoneInput.nextElementSibling.innerText = 'Please enter a phone number';
    }
    else if(!regex.test(phoneValue)){
        phoneInput.nextElementSibling.innerText = 'Please enter a valid phone number';
    }
    else{
        phoneInput.nextElementSibling.innerText = 'yo';
    }
    const postalregex = /^\d{5}$/;
    if(postalValue === ''){
        
        postalInput.nextElementSibling.innerText = 'Please enter thhe  zip code';
    }
    else if(!regex.test(postalValue)){
        postalInput.nextElementSibling.innerText = 'Please enter a valid zip code';
    }
    else{
        postalInput.nextElementSibling.innerText = 'yo';
    }
})

