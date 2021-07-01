"use strict";

let balance = 0;

// when you click the Make money button, prevent default
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();

    // log the value of the which coin
    console.log("input value: ", document.querySelector("input").value)

    // log the coin selected
    console.log("coin value: ", document.querySelector("select").selectedOptions[0].value)
    console.log("coin text: ", document.querySelector("select").selectedOptions[0].text)

    // for however many coins selected
    for (let i = 0; i < document.querySelector("input").value; i++){
        
        // add a coin(s) to the page 
        let p = document.createElement("p");
        // add a class to it
        p.classList.add("coin");
        // add a value to it based on its value
        p.value = document.querySelector("select").selectedOptions[0].value;

        p.innerText = document.querySelector("select").selectedOptions[0].text; // use the name of the coin
        document.querySelector("#purse").append(p);
    }

    // calculate total  money
    balance += document.querySelector("select").selectedOptions[0].value * document.querySelector("input").value;
    
    // log the balance
    console.log("Your balance is: " + balance);
    document.querySelector("h1 span").textContent = balance;
    
})


// clicking on the purse... 
document.querySelector("#purse").addEventListener("click", function(e){
    // if it's a coin in the purse
    if (e.target.classList.contains("coin")) {
        // removes its value from the balance
        balance -= e.target.value;
        // remove that coin from the purse
        e.target.remove();

        // say the new balance
        console.log("your new balance is: ", balance);
        document.querySelector("h1 span").textContent = balance;
        
        
        
    }
})