function previewFile() {
    let preview = document.querySelector('img');
    let file    = document.querySelector('input[type=file]').files[0];
    let reader  = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

function handleFiles(event) {
    let files = event.target.files;
    $("#rlly").attr("src", URL.createObjectURL(files[0]));
    document.getElementById("rllly").load();
}
let sound_play = document.getElementById('rll');
if (sound_play) {
    sound_play.addEventListener('change', handleFiles, true);
}
// document.getElementById("rll").addEventListener("change", handleFiles, false);