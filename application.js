jQuery(function($)  
{
    $("#contact_form").submit(function()
    {
        var email = $("#email").val(); // get email field value
        var name = $("#name").val(); // get name field value
        var phone = $("#phone").val(); // get message field value
        var msg = $("#msg").val(); // get message field value
        var body = "<b>Электронная почта: </b>" + email + "<br><b>Имя: </b>" + name + "<br><b>Контактный телефон: </b>" + phone + "<br><b>Сообщения: </b>" + msg;
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'l62aNxMwBJe64vFPctSidw',
                'message': {
                    'from_email': email,
                    'from_name': name,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Заявка с сайта Дом аренды',
                    'html': body,
                    'to': [
                    {
                        'email': 'info@domarendy.by',
                        'name': 'Андрей Денисов',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            alert('Ваша заявка отправлена. Спасибо!'); // show success message
            $("#name").val(''); // reset field after successful submission
            $("#email").val(''); // reset field after successful submission
            $("#phone").val(''); // reset field after successful submission
            $("#msg").val(''); // reset field after successful submission
        })
        .fail(function(response) {
            alert('Не удалось отправить сообщения.');
        });
        return false; // prevent page refresh
    });
});