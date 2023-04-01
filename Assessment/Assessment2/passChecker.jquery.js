$(document).ready(function () {
    $("#password").keyup(function () {
        var number = /([0-9])/;
        var alphabets = /([a-zA-Z])/;
        var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
        if ($('#password').val().length < 6) {
            $('#password-strength').removeClass();
            $('#password-strength').addClass('weak-pass');
            $('#password-strength').html("Weak");
        } else {
            if ($('#password').val().match(number) && $('#password').val().match(alphabets) && $('#password').val().match(special_characters)) {
                $('#password-strength').removeClass();
                $('#password-strength').addClass('strong-pass');
                $('#password-strength').html("Strong");
            } else {
                $('#password-strength').removeClass();
                $('#password-strength').addClass('medium-pass');
                $('#password-strength').html("Medium");
            }
        }

        if ($('#password').val() == "") {
            $('#password-strength').removeClass();
        }
    }
    )
})