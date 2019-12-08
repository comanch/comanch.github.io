$(document).ready(function () {
    //validation
    $('.form1-submit').on('click', function(e){
        var validationWrapper = $('.validation-field-wrapper');
        
        for (let i = 0; i < validationWrapper.length; i++){
            var input = $('.validation-field-wrapper input')[i];

            if(!input.checkValidity()){
                if(validationWrapper[i].classList.contains("pass")){
                    validationWrapper[i].classList.remove("pass");
                }
                validationWrapper[i].classList.add("error");
            } else{
                if(validationWrapper[i].classList.contains("error")){
                    validationWrapper[i].classList.remove("error");
                }
                validationWrapper[i].classList.add("pass");
            }
        }
    })
    //password bar
    $('.password').passwordStrength();
});