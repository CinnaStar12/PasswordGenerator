function generate() {
    var code = '';

    var lower = 'abcdefghijklmnopqrrstuvwxyz';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var number = '0123456789';
    var spec = ' !"#$%&\'()*+,-/:;<=>?@^[\\]^_`{|}~';

    var bag = '';

    var charCount = prompt("How many characters? (Recommended 8-128)");

    if (charCount < 8 || charCount > 128) {
    }
    if (charCount < 8) {
        alert("Not enough characters! Try Again");
    }
    else if (charCount > 128) {
        alert("Too many characters! Try Again!")
    }

    else {
        var lowConfirm = confirm("Would you like to include lowercase characters?");
        var upConfirm = confirm("Would you like to include uppercase characters?");
        var numConfirm = confirm("Would you like to include numbers?");
        var specConfirm = confirm("Would you like to include special characters?");
    }

    if (lowConfirm) {
        bag += lower;
    }
    if (upConfirm) {
        bag += upper;
    }
    if (numConfirm) {
        bag += number;
    }
    if (specConfirm) {
        bag += spec;
    }


    for (var i = 0; i < charCount; i++) {
        var character = Math.floor(Math.random() * bag.length);
        code += bag.substr(character, 1);

    }



    document.getElementById("output").value = code;

}

function copyToClipboard() {
    var copyText = document.getElementById("output");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");

    alert("Copied password to clipboard");
}


