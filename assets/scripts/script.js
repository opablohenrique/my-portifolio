
theme.addEventListener("change", function (){
    var checkbox = document.getElementById ("theme");
    var body = document.getElementById("body");
    
    if (checkbox.checked == true){
        body.style.backgroundColor = '#dadada'
        document.documentElement.style.setProperty ('--textcolor', '#22222')
        document.documentElement.style.setProperty ('--secondary-color', '#686767')

    }else {
        body.style.backgroundColor = '#222222'
        document.documentElement.style.setProperty ('--textcolor', '#fff')
        document.documentElement.style.setProperty ('--secondary-color', '#B4B4B4')
    }

})










    
    
    
