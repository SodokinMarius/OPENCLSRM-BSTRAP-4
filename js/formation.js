$(document).ready(function(){
$("#inputSearch").on('keyup',function()
{
    var data=$(this).val().toLowerCase();
    $("#lessons .col-12").filter(
        function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(data) > -1)
        }
    );
});

});