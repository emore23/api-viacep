function consultaCep(){
    $(".barra-progresso").show();
    const cep = document.getElementById("cep").value;
    const url = "https://viacep.com.br/ws/"+ cep + "/json/";

    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#tituloCep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    });
}

$(function() {
    $(".cep").hide();    
    $(".barra-progresso").hide();    
});

