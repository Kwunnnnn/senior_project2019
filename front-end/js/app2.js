$(document).ready(function() {

    $(".card").hide();
    //alert(Welcome);
});

$('#num_of_box').change(function() { //on change do stuff
      $(".card").hide();
    showDiv($(this).val());

});

function showDiv(id){
    $('.g' + id).show();
}


