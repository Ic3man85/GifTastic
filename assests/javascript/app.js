$(document).ready(function() {

    let sports = ["Basketball", "Baseball"];
    // let name = $(this).attr("btn-name")
    function displayGif() {
        let sport = $(this).attr('btn-name');
        let gifyUrl = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=zsTnGJdunYGgLRWLD45Z6AUFSftgbMOm&limit=5";
        $.ajax({
            url: gifyUrl,
            method: 'GET'
        }).then(function(response) {
            console.log(gifyUrl);
            let result = response.data;
            console.log(result);
            $("#display").empty();
            for (let i = 0; i < result.length; i++) {
                let gifDiv = $("<div>");
                let p = $("<p>");
                p.text("Rating: " + result[i].rating);
                gifDiv.append(p);
                let pImage = $("<img>");
                pImage.addClass("still-images border border-success");
                pImage.attr("src", result[i].images.fixed_height_still.url);
                gifDiv.append(pImage);
                $("#display").prepend(gifDiv);
            }

        });
    }

    function buttons() {

        $('#buttons').empty();

        for (let i = 0; i < sports.length; i++) {
            let b = $("<button>");

            b.addClass("sport-btn btn-dark p-2 ml-2");
            b.attr("btn-name", sports[i]);
            b.text(sports[i]);
            $('#buttons').append(b);
        }
    }
    $("#add-sport").on("click", function(event) {
        event.preventDefault();

        let sportInput = $("#input").val().trim();
        sports.push(sportInput);
        buttons();
        $("#input").val("");
        console.log(sports);

    });
    buttons();

    $(document).on("click", ".sport-btn", displayGif);



})