function sendmail(){
    var parms={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_xk7iz0v","template_q9q4mcq",parms).then(function(res){
        alert("Message Sent Succesfully");
        document.getElementById("name").value=''
        document.getElementById("email").value=''
        document.getElementById("message").value=''
    })
}