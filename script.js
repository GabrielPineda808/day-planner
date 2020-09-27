$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do "));
    var text = $("textarea");
    var hour = moment().hour();
    console.log(hour)
    text.each(function(){
        for(var i = 0; i < text.length; i++){
            if(hour === $(text[i]).attr("value")){
                text[i].setAttribute("class", "present col-md-10 textarea")
            }
            else if(hour > $(text[i]).attr("value")){
                text[i].setAttribute("class", "past col-md-10 textarea")
            }
            else{
                text[i].setAttribute("class", "future col-md-10 textarea")
            }
        }
        
    })
    // for(var i = 0; i < text.length; i++){
    //     if(hour === $(text[i]).attr("id")){
    //         $(text[i]).setAttribute("class", "present")
    //     }
    //     else if(hour > $(text[i]).attr("id")){
    //         $(text[i]).setAttribute("class", "past")
    //     }
    //     else{
    //         $(text[i]).setAttribute("class", "future")
    //     }
    // $("#save").on("click", function(){
    //     console.log($(text[i]).val())
    //     var value = $(text[i]).val() 
    //     var text = value + "text"
    //     var textContent = $("#" + text).val()
    //     var place = $("#" + text)
    
    // });

})