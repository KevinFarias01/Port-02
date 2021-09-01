//Identificar o clique no menu
//Verificar o item clicado e referenciar com o alvo
//Verificar distancia entre alvo e topo
//animar o scroll até o elemento alvo

$('nav a').click(function(e){
    e.preventDefault(); //previnir a função de aparecer o nome do elemento clicado na barra de texto 
    let id = $(this).attr('href'),
        targetOffset =$(id).offset().top;


    $('html, body').animate({
        scrollTop: targetOffset-100
    }, 500);

})