$(document).ready(function() {

    let people = ["Adam Sandler", "Tom Hanks", "Taylor Swift", "Julia Roberts"];
    // let name = $(this).attr("btn-name")
    function displayGif() {
        let person = $(this).attr('btn-name');
        let gifyUrl = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=zsTnGJdunYGgLRWLD45Z6AUFSftgbMOm&limit=5&lang=en";
        $.ajax({
            url: gifyUrl,
            method: 'GET'
        }).then(function(response) {
            console.log(gifyUrl);
            let result = response.data;
            console.log(result);

            for (let i = 0; i < result.length; i++) {
                let gifDiv = $("<div>");
                let p = $("<p>").text("Rating: " + result[i].rating);
                let pImage = $("<img>");
                pImage.attr("src", result[i].images.original.url);
                gifDiv.append(p);
                gifDiv.append(pImage);

                $("#person-display").prepend(gifDiv);
            }
        });
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
    $("#add-person").on("click", function(event) {
        event.preventDefault();

        let personInput = $("#input").val().trim();
        people.push(personInput);
        buttons();
        $("#input").val("");
        console.log(people);

    });

    $(document).on("click", ".person-btn", displayGif);
    buttons();

})