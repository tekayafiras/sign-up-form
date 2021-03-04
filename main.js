
const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const email = document.querySelector('.email')
const password = document.querySelector('.password')

// const firstInput = document.querySelector('.firstName');
// const lastInput = document.querySelector('.lastName');
// const emailInput = document.querySelector('.emailI');
// const passwordInput = document.querySelector('.pwd-input');




document.querySelector('form').addEventListener('submit',function(e){

    e.preventDefault();

    
    addAlert(firstName);
    addAlert(lastName);
    addAlert(email);
    addAlert(password);
    

})

function addAlert(a){
    
    if(a.value == ''){
        
        if(a.parentElement.childElementCount == 1){
            const error = document.createElement('p')
            const errorSign = document.createElement('i')
            error.className = 'error';
            error.appendChild(document.createTextNode(`${a.className} cannot be empty`))
            errorSign.className ='fas fa-exclamation-circle error-sign';
            a.parentElement.appendChild(error)
            a.parentElement.appendChild(errorSign)

            
        }
        if(!a.classList.contains('outline')){
            document.querySelector('.'+a.className).classList.add('outline');
        }
        
        
        
        
    }
    else{
        
        if(a.classList.contains('outline')){
            document.querySelector('.'+a.className).classList.remove('outline');
        }
        else{
            console.log('didnt')
        }
        
        if(a.parentElement.childElementCount == 3){
            
            a.parentElement.children[1].remove();
            a.parentElement.children[1].remove();
        }
        
    }
    
}