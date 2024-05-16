$('.form').submit(function(event){
    event.preventDefault()
    if($('#peso').val() <= 0 || $('#desejado').val() <= 0 || $('#idade').val() <= 0 || $('#altura').val() <= 0){
        alert('CONFIRA OS VALORES ENVIADOS, Todos devem ser maior que 0')
        return false
    }
    if($('#peso').val() < $('#desejado').val()){
        alert('Use OzempicNatural para perder peso, o valor desejado nao pode ser maior que o seu peso atual')
        return false
    }
    calculo()
    $('.resultado').show()
    $('.resultado-header').html(`<h1>Você pode alcançar <span class="texto">
    ${total}kg</span> em <span class="texto">${texto}</span>
    com o <span class="texto">OzempicNatural</span><h1>`)
})

function calculo(){
    var peso = $('#peso').val()
    var desejo = $('#desejado').val()
    var exercicio = $('#exercicio').val()
    total = peso-desejo
    if(exercicio == 0){
        texto = '7 dias'
    }else if(exercicio = 1){
        texto = '5 dias'
    }else if(exercicio = 2){
        texto = '3 dias'
    }else{
        texto = '0 dias'
    }
}