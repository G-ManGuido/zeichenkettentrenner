
let langtext = document.getElementById('langtext');
let trenntext = document.getElementById('trenntext');
let trennmethode = document.getElementById('trennmethode');


function cutString() {

    let positionTrenntext = langtext.value.search(trenntext.value);
    let textdavor = "";
    let textdanach = "";

    console.log(positionTrenntext);

    if (positionTrenntext >= 0) {

        if (trennmethode.checked == true) {
            textdavor = langtext.value.substring(0, positionTrenntext);
            textdanach = langtext.value.substring(positionTrenntext);

        } else {
            textdanach = langtext.value.substring(positionTrenntext + Number(trenntext.value.length));
            textdavor = langtext.value.substring(0, positionTrenntext + Number(trenntext.value.length));
        }

    } else {
        textdavor = 'Das Zeichen konnte leider nicht gefunden werden.';
        textdanach = langtext.value;
    }

    document.getElementById("outputvorne").innerHTML = textdavor.trim();
    document.getElementById("outputhinten").innerHTML = textdanach.trim();

}


