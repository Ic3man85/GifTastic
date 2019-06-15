$(document).ready(function() {

    let people = ["Adam Sandler", "Tom Cruise", "Dolly Parton", "Marilyn Monroe"];

    function displayGif() {
        let person = $(this).attr("btn-name");
        let gifyUrl = "https://api.giphy.com/v1/" + person + "&api_key=zsTnGJdunYGgLRWLD45Z6AUFSftgbMOm";

        $.ajax({
            url: gifyUrl,
            method: 'GET'
        }).then(function(response) {
            console.log(gifyUrl);
            console.log(response);
        })

    }

    function buttons() {

        $('#buttons').empty();

        for (let i = 0; i < people.length; i++) {
            let b = $("<button>");

            b.addClass("person-btn");
            b.attr("btn-name", people[i]);
            b.text(people[i]);
            $('#buttons').append(b);
        }
    }


    buttons();
    $(document).on("click", ".person-btn", displayGif);
    displayGif();


})