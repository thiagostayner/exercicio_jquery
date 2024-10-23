$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault(); 

        const adicionaNovaTarefa = $('#nome-tarefa').val();

        if(adicionaNovaTarefa.trim()!==""){
            const novaTarefa = $('<li></li>').text(adicionaNovaTarefa);
            $('ul').append(novaTarefa);
            $('#nome-tarefa').val('');}
    });

    $('ul').on('click', 'li', function(){
        $(this).css('text-decoration', 'line-through');
    });
});