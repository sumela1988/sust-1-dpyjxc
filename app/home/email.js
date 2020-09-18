function sendMail() {
    var link = "mailto:sumela.mixa@gmail.com"
             + "&subject=" + encodeURIComponent("This is my subject")
             + "&body=" + encodeURIComponent(document.getElementById('inputName').value)
    ;
    
    window.location.href = link;
}