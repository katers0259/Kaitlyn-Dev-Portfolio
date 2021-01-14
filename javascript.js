$(document).ready(function(){

    $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});

    $.ajax({
        url: "https://formsubmit.co/ajax/your@email.com",
        method: "POST",
        data: {
            name: "FormSubmit",
            message: "I'm from Devro LABS"
        },
        dataType: "json"
    });
})