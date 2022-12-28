$(document).ready(function(){
    $(window).scroll(function(){
        // if(this.scrollY > 20){
        //     $('.navbar').addClass("sticky");
        // }else{
        //     $('.navbar').removeClass("sticky");
        // }
    })
    
    // toggle menu/navbar script
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // function disableBodyScroll(){
    //     const element = document.querySelector("#appBody");
    //     element.classList.add("stop-scroll");
    // }
    
    // function enableBodyScroll(){
    //     const element = document.querySelector("#appBody");
    //     element.classList.remove("stop-scroll");
    // }
});
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtnRM");
    
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
        btnText.style.color = "blueviolet"
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
        btnText.style.color = "red"
    }
}
var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}