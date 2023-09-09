let string = "";
let buttons = document.querySelectorAll(".btn");
let display = document.querySelector('.input');
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        try{
            if(e.target.innerHTML == "="){
                string = eval(string);
                display.value = string;
            }
            else if(e.target.innerHTML == "AC"){
                string="";
                display.value = string;
            }
            else{
                string = string+e.target.innerHTML;
                display.value = string;
            }
        }
        catch(er){
            display.value="Error";
        }
    });
});


