var myWindow;

function openNewWindow(){
    var url = document.getElementById("urlInput").value;
    if(url){
        myWindow = window.open(url, "_blank");
    }
    else{
        alert("Kindly Enter an URL");
    }
}

function closeWindow(){
    if(myWindow){
        myWindow.close();
        myWindow = null;
    }
    else{
        alert("Need to open an URL");
    }
}

function checkWindowStatus(){
    if(myWindow && !myWindow.closed) {
        alert("Window is still open");
    }
    else{
        alert("Window is closed");
    }
}