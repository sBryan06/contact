$(function() {
    // on empêche la soumission du formulaire
    $(".formButtonSubmit").on("click", function(e) {
        e.preventDefault();
    });

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validateName(name) {
        var re = /^[a-z ,.'-]+$/i;
        return re.test(name);
    }

    $("#envoyer").on("click", function(e) {
        var inputValOK = 0;

        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var mail = $("#mail").val();

        if (validateName(nom)) {
            inputValOK += 1;
        }

        if (validateName(prenom)) {
            inputValOK += 1;
        }

        if (validateEmail(mail)) {
            inputValOK += 1;
        }

        if (inputValOK === 3) {
            Contact.Contacts.instance().add(new Contact.Builder().createContactWithProfessionalMail(
                Contact.Gender.MR, nom, prenom, mail));
            $("#contacts table, #contacts td").remove();
            build();
        }

    });

    $("#annuler" ).click(function() {
        $('#nom').val('');
        $('#prenom').val('');
        $('#mail').val('');
    });
});