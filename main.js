$(document).ready(function () {

    $("form").submit(function (e) {
        e.preventDefault();

        const valorinput = $("#novaTarefa").val();
        $('ul').append(`<li>${valorinput}</li>`);
        $("#novaTarefa").val('');

    });

        $('#limparLista').click(function(){
        $('li').remove();    
    });

        $('ul').on('click', 'li', function(e){
            $(this).css("text-decoration", "line-through");
        })
        
    })

