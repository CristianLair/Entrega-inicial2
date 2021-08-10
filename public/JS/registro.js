const form = document.querySelector('.form-horizontal');
form.addEventListener('submit', (event)=>{
event.preventDefault();

const formData = new FormData(form);
const body = Object.fromEntries(formData);
const stringJson = JSON.stringify(body);


fetch('https://entrega-website.herokuapp.com/registrarse',   {
   
   
    method:'POST',
    body: stringJson,
    headers:{
        'Content-Type': 'application/json'
      }


    }).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

});
