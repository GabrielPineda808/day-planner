$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMMM Do "));
    var textarea = $("textarea");
    var hour = moment().hour();
    console.log(hour)
    textarea.each(function(){
        
        for(var i = 0; i < textarea.length; i++){
            if(hour === $(textarea[i]).attr("value")* 1){
                textarea[i].setAttribute("class", "present col-md-10 textarea")
            }
            else if(hour > $(textarea[i]).attr("value")* 1){
                textarea[i].setAttribute("class", "past col-md-10 textarea")
            }
            else{
                textarea[i].setAttribute("class", "future col-md-10 textarea")
            }
            $(textarea[i]).val(localStorage.getItem($(textarea[i]).attr("id")))
        }
        
    })
    
    $("button").on("click", function(){
        var btn = $(this).val()
        var textID = $("#"+ btn).val()
        localStorage.setItem(btn , textID)
    });

})