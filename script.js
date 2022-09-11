$(document).ready(function () {
    // adicionar rolagem suave a todos os links
    $("a").on("click", function (event) {
        // certificando de que this.hash tenha um valor antes de substituir o comportamento padrão
        if (this.hash !== "") {
            // evita o comportamento padrão do click
            event.preventDefault();

            // hash na loja
            var hash = this.hash;

            // usando o método de animação do jQuery para adicionar pergaminho de página suave
            // o número opcional (800) especifica o número de milissegundos necessários para rolar até a área especificada
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    // adiciona hash (#) à URL quando for feita a rolagem (comportamento padrão do clique)
                    window.location.hash = hash;
                }
            );
        } // fim se
    });
});