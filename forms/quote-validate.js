document.getElementById("quoteForm").addEventListener("submit", function(e){
    e.preventDefault();

    // Clear errors
    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    let valid = true
     
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const eventType = document.getElementById("eventType").value;
    const budget = document.getElementById("budget").value.trim();
    const message = document.getElementById("message").value.trim();

    // Name validation
    if(name === ""){
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    // Email validation
    if(email === ""){
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    } else if(!email.includes("@")){
        document.getElementById("emailError").innerText = "Invalid email format";
        valid = false;
    }

    // Phone validation
    if(phone === ""){
        document.getElementById("phoneError").innerText = "Phone number is required";
        valid = false;
    } else if(phone.length < 10){
        document.getElementById("phoneError").innerText = "Phone number must be at least 10 digits";
        valid = false;
    }

    // Event type validation
    if(eventType === ""){
        document.getElementById("eventTypeError").innerText = "Please select an event type";
        valid = false
    } 

    // Budget validation
    if(budget === ""){
        document.getElementById("budgetError").innerText = "Budget range is require";
        valid = false
    }

    // Message validation
    if(message === ""){
        document.getElementById("messageError").innerText = "Message is required";
        valid = false
    }

    // If valid
    if(valid){
        document.getElementById("successMsg").style.display = "block";
        document.getElementById("quoteForm").reset();
    }
});