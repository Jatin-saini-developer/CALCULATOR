let str = ""
let button = document.querySelectorAll('#button');
Array.from(button).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            str = eval(str);
            document.querySelector('.inputs').value = str;

        }else if(e.target.innerHTML == 'C') {
            str = ''
            document.querySelector('.inputs').value = str;
            console.log('c was clicked')

        }else{
            console.log(e.target);
        str = str + e.target.innerHTML;
        document.querySelector('.inputs').value = str;
        }


        
    })
})
