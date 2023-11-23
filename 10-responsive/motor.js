window.onload = function(){
    var cards = document.getElementsByClassName("card")

    // Adiciona um ouvinte para quando passar o mouse em cima(MouseOver)
    for(var i = 0; i < cards.length; i++){
        cards[i].addEventListener("mouseover", function(){
        
            this.style.backgroundColor = "lightblue"
        })
    
        cards[i].addEventListener("mouseout", function(){
            
            this.style.backgroundColor = "#fff"
        })
    }

    // Revalar número
    var telefoneAtv = false;
    document.getElementById("zap").addEventListener("click", function(){
        if(telefoneAtv){
            this.textContent = "Whatsapp (XX) XXXXX-XXXX"
            telefoneAtv = false;
        }else {
            this.textContent = "Whatsapp (17) 123-456"
            telefoneAtv = true;
        }
    })

    // Revalar user
    var instaAtv = false;
    document.getElementById("insta").addEventListener("click", function(){
        if(instaAtv){
            this.textContent = "Instagram @XXXXXXXX"
            instaAtv = false;
        }else {
            this.textContent = "@nomeDouser"
            instaAtv = true;
        }
    })

    // Revalar endereço
    var enderecoAtv = false;
    document.getElementById("endereco").addEventListener("click", function(){
        if(enderecoAtv){
            this.textContent = "Endereço: Rua XXXXXXXXXXX, X, Bairro X - São José do Rio Preto SP/Brasil"
            enderecoAtv = false;
        }else {
            this.textContent = "R. Jorge Tibiriçá, 3518 - Vila Santa Cruz, São José do Rio Preto - SP, 15014-040"
            enderecoAtv = true;
        }
    })

    // Revalar e-mail
    var emailAtv = false;
    document.getElementById("email").addEventListener("click", function(){
        if(emailAtv){
            this.textContent = "E-mail: XXXX@XXXXX.com.br"
            emailAtv = false;
        }else {
            this.textContent = "email@email.com.br"
            emailAtv = true;
        }
    })

    // Botão Flutuante 
    document.getElementById("btnZap").onclick = function(){
        var msg = document.getElementById("zapInput").value
        window.open("https://api.whatsapp.com/send/?phone=123456789&text="+encodeURIComponent(msg))
    }

    document.getElementById("meuForm").addEventListener("submit", function(event){
        event.preventDefault(); // Impede de Enviar o Formulário

        var nome = document.forms["meuForm"]["Cliente"].value
        var email = document.forms["meuForm"]["E-mail"].value
        var telefone = document.forms["meuForm"]["Phone"].value

        if(nome.length < 3){
            alert("Nome Inválido, insira seu nome completo")
            return false
        }

        // Validar Email
        if(email.indexOf('@') == -1){
            alert("Digete um E-mail né!")
            return false
        }

        // Validação Telefone
        var regexTelefone = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/
        if(!regexTelefone.test(telefone)){
            alert("Telefone Inválido!")
            return false
        }
        return true
    })
}

