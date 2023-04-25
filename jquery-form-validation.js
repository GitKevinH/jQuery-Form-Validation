
$(document).ready(function(){

    $('#submit').click(function(event){
        const nameField = $('#name');
        
        
        const emailField = $('#email');
        
        
        const numberField = $('#phone');
        
        
        const messageField = $('#message-area');

        let required = [nameField, emailField, numberField, messageField];



        required.forEach(field => {
            const message = $('#message');
            const label = $('label')
            if(field.val() == ""){
                
                message.html("Please Fill Out Required Fields")
                message.addClass('warning')
                
                label.eq(required.indexOf(field)).addClass('warning')
        } else {
            label.eq(required.indexOf(field)).removeClass('warning')
        }
        });

        if (!($('label').hasClass('warning'))){
             $('#form').remove();
            let preForm = $('#pre-form');
            preForm.html("Thanks for your feedback!");
         }

    })
});