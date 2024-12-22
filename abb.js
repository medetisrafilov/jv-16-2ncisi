
const form = document.getElementById("validationForm");


form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

   
    if (password.length > 5) {
        console.log("İcazə verildi"); 
    } else {
        console.log("Giriş qadağandır"); 
    }
});
