let string ="";
let buttons = document.querySelectorAll('.button');
const input = document.querySelector('input');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.currentTarget.innerHTML === '=') {
            try {
                string = eval(string);
                if (isNaN(string) || !isFinite(string)) {
                    input.value ='Error'
                    string= "";
                 
                }
                input.value =string;
            } catch (error) {
                input.value ='Error';
                string = "";
            }
        }
        else if(e.currentTarget.innerHTML == 'AC')
        {
            string = "";
           input.value=string;
        }
        else if(e.currentTarget.innerHTML == 'DEL'){
            string= string.slice(0,-1);
           input.value =string;
        }
        else{
            console.log(e.target)
            string= string + e.target.innerHTML;
            input.value =string;
        }
    })
})

