let btnCarritoo = document.getElementById("btnCarritoo")

btnCarritoo.addEventListener('click',function(){
localStorage.getItem('carrito') 
let token = document.getElementsByName('csrfmiddlewaretoken')[0].value;

fetch('/carritoo',{
    method:'POST',
    headers:{
        'Content-type':'application/json',
        'X-CSRFToken':token
    },
    body:JSON.stringify('carrito')
})

})