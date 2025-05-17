const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const btnPush = button.textContent;
        console.log(button.textContent)
        if (button.id === "deleteAll"){
            display.textContent = "0";
            return
        }
        if (button.id === "delete"){
            if (display.textContent.length === 1 || display.textContent === "ERROR"){
                display.textContent = "0";
            }else{
                display.textContent = display.textContent.slice(0, -1)
            }
            return
        }

        if (button.id ==="equal"){
            try{
                display.textContent = eval(display.textContent)
            } catch{
                display.textContent = "ERROR";
            }
            return
        }
        if (display.textContent === "0" || display.textContent === "ERROR" ){
            display.textContent = btnPush;
        } else{
            display.textContent += btnPush;
        }
    })
})