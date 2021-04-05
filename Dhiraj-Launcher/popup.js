$(function(){
    $("#name").keyup(function(){
        newFunction();
    })
});

function newFunction() {
    $("#greet").text('Hello ' + $('#name').val());
}