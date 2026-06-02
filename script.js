function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subjec").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_84oyd0r","template_8k7hyos",parms).then(alert("Email Sent Successfully !!"))

}