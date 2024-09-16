var input =document.querySelector("#table")
var h1 =document.querySelector('#show')

function change() {
    h1.innerHTML=""
     


    for (let i = 1; i <= 10; i++) {

        let final=+input.value + "*"  +  i +  "="  + +input.value*i
        h1.innerHTML +=  `<p> ${final}</p>`
    
    
    }



    
}
