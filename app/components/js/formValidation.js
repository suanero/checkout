$(document).ready(function() {
    var validateInfo = function() {
        return {
            isEmpty: function(param) {
                var esempty = false;
                if(param == undefined || param == null)
                    esempty = true;
                else if (param.toString().replace(/\s/g, '') == "")
                    esempty = true;
            
                return esempty;
            },
            isEmail: function(param) {
                var resultado = false;
                var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (param == undefined || param == null) resultado = false;
                else {
                if (!expr.test(param)) resultado = false;
                else resultado = true;
                }
                return resultado;
            },
            isText: function(param) {
                var expreg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚü ]*$/;
                return  expreg.test(param) ? true: false;
            },
            // isPhone: function(param) {
                
            // }
            
        } 
    }
    const _ = validateInfo();

    const MessageAlert = function(input, error) {
        if(!_.isEmpty(error) && !_.isEmpty(input.attr("data-help"))){
            $(input.attr("data-help")).html(error);
        }
        else if(!_.isEmpty(input.attr("data-help"))){
            $(input.attr("data-help")).html("");
        }
    }

    $("input[data-type=text]").on("keyup", function(e) {
        e.preventDefault();
        
        const input = $(this);
        let error = "";        
        if(_.isEmpty(input.val()))
            error = "Debe ir agregar tu nombre";
        else if(!_.isText(input.val()))
            error = "No utilices carácteres especiales en el campo";

        MessageAlert(input, error);
    });

    $("input[data-type=email]").on("keyup", function(e) {
        e.preventDefault();
        const input = $(this);
        let error = "";       

        if(_.isEmpty(input.val()))
            error = "Debes agregar el correo electrónico";
        else if(!_.isEmail(input.val()))
            error = "agrega un correo electrónico valido";

        MessageAlert(input, error);
    });
    // $("input[data-type=phone]").on("change", function(e) {
    //     e.preventDefault();
    //     console.log("click");
    // });
    
});