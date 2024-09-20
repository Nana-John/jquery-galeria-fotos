$(document).ready(function() {
    const form = $('form');
    const imageContainer = $('.image-container');

    // Adicionar imagem à galeria
    form.on('submit', function(event) {
        event.preventDefault(); 

        const imageUrl = $('#imageUrl').val();

        if (imageUrl) {
            const newImage = $('<img>').attr('src', imageUrl).attr('alt', 'Imagem da galeria');

            // Animação de fade-in
            newImage.hide().appendTo(imageContainer).fadeIn(500); 

            // Efeito de hover na nova imagem
            newImage.hover(function() {
                $(this).css('cursor', 'pointer'); // Muda o cursor para indicar que é clicável
                $(this).animate({ opacity: 0.8 }, 200);
            }, function() {
                $(this).animate({ opacity: 1 }, 200);
            });

            // Clique na imagem para ampliar
            newImage.on('click', function() {
                const expandedImage = $('<img>').attr('src', imageUrl).attr('alt', 'Imagem ampliada');
                const overlay = $('<div>').addClass('overlay');
                overlay.append(expandedImage);
                $('body').append(overlay);

                // Fechar ao clicar na imagem ampliada ou no overlay
                expandedImage.on('click', function() {
                    overlay.fadeOut(300, function() {
                        overlay.remove();
                    });
                });
                overlay.on('click', function() {
                    overlay.fadeOut(300, function() {
                        overlay.remove();
                    });
                });
            });

            form.trigger('reset'); 
        }
    });
});