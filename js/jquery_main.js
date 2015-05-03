$(document).ready(function() {
    $("#emailsignup").click(function() {
        $("#signupinfo").fadeToggle(1000);
    });
    $("#signupclose").click(function(){
        $("#signupinfo").hide();
    });
    
    $(".login").click(function() {
        $("#logininfo").fadeToggle(1000);
        $("#signupinfo").hide();
    });
    $("#signup").click(function(){
        $("#signupinfo").fadeToggle(1000);
        $("#logininfo").hide();
    });
    $("#loginclose").click(function(){
        $("#logininfo").hide();
    });
    $("button.navbar-toggle").click(function(){
        $(".collapse").slideToggle();
    });
    
});