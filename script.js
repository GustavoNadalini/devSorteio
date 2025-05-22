function draw() {
    
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if(min >= max) {
        alert("Alerta! O primiero campo deve conter um número menor que o segundo")
        
    } else {
        const result = Math.floor(Math.random() * (max - min) + min);

        alert(result)
    }
}