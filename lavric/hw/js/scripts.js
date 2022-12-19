window.addEventListener('DOMContentLoaded', () => {

let form = document.querySelector('.form');
let inputs = form.querySelectorAll('.check');
let paterns = {
    name: /.+/,
    phone: /^\d{7,14}$/,
    email: /^.+@.+\..+$/
}

//    form.addEventListener('submit', (e)=>{
//         inputs.forEach(item=>{
//             if(!(item.value.length > 0)){
//                 item.value = item.value.trim();
//                 item.classList.add('err');
//                 e.preventDefault();
                  
//             }
//             let patern = paterns[item.name];//ОБРАЩЕНИЕ К ОБЪЕКТУ ПО ДИНАМИЧЕСКОМУ КЛЮЧУ
//             console.log(patern)
//         }); 
      
//    });
form.addEventListener('submit', (e)=>{
    inputs.forEach(item=>{
        let patern = paterns[item.name];//ОБРАЩЕНИЕ К ОБЪЕКТУ ПО ДИНАМИЧЕСКОМУ КЛЮЧУ
        console.log(patern)

        if(!(patern.test(item.value))){
            item.value = item.value.trim();
            item.classList.add('err');
            e.preventDefault();    
        }
       
    }); 
  
});

   form.addEventListener('focusin', (e)=>{
    if(e.target.classList.contains('check')){
        e.target.classList.remove('err');
    }
   });
});