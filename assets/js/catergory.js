$(document).ready(function(){

    if($("#coffee")){
        $("optgroup#coffee").removeClass("hidden");
        $("optgroup#teas").addClass("hidden");
        $("optgroup#shakes").addClass("hidden");
    }

    $("#coffee").click(function(){
        $("optgroup#coffees").removeClass("hidden");
        $("optgroup#teas").addClass("hidden");
        $("optgroup#shakes").addClass("hidden");
        console.log("coffee");
    });

    $("#tea").click(function(){
        $("optgroup#coffees").addClass("hidden");
        $("optgroup#teas").removeClass("hidden");
        $("optgroup#shakes").addClass("hidden");    
    });

    $("#shake").click(function(){
        $("optgroup#coffees").addClass("hidden");
        $("optgroup#teas").addClass("hidden");
        $("optgroup#shakes").removeClass("hidden");
    });


});