function talk(){
    var know={
        "who are you" : "hello amal here",
        "how are you" : "Good",
        "what can i do for you" : "please give me the details",
        "Company" : "ABC LTD",
        "ok" : "Thank you so much",
        "Bye" : "okay"

    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if(user in know){
        document.getElementById('chatLog').innerHTML =know[user] + "<br>";
    }
    else{
        document.getElementById('chatLog').innerHTML="Sorry,I didnt understand <br>";
    }
}