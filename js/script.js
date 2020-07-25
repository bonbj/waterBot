$( document ).ready(function() {
    console.log( "ready!" );
    setTimeout(() => {
        document.getElementsByTagName("iframe")[1].style.display = "none";
        document.getElementsByTagName("iframe")[1].document.getElementById("u_0_0").style.display = "block";
        document.getElementsByTagName("iframe")[1].document.getElementsByClassName("_f_0")[0].style.display = "none";
    }, 5000);
});


