let string="";
let a=5;
console.log(a);
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){

            try {
                string=eval(string)
              }
              catch(err) {
                string=""
                document.querySelector('input').value="Invalid"
                
              }

            string=eval(string)
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML=="AC"){
            
            string=""
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML=="DE"){
            
            string=string.slice(0,-1);
            document.querySelector('input').value=string
        }
        else{
            
            string=string+e.target.innerHTML
            document.querySelector('input').value=string
        }
    })
})