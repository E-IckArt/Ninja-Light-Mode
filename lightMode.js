let mode = 'light';
let color, image, label, label2;

function selectMode(mode) {
    switch (mode) {
        case 'dark':
            color = 'rgb(42, 41, 48)';
            image = 'img/ninja-darkmode.png';
            label = 'Dark Ninja Mode';
            label2 = '';
            break;
        case 'light':
            color = 'ghostWhite';
            image = 'img/ninja-lightmode.png';
            label = 'Light Ninja Mode';
            label2 = '';
            break;
        case 'grey':
            color = 'dimGray';
            image = 'img/ninja-greymode.png';
            label = 'Grey Ninja Mode';
            label2 = '';
            break;
        // default:
        //     break;
    }

    document.getElementById('icon').src = image;
    document.getElementById('theme').style.background = color;
    document.getElementById('label').innerHTML = label;
    document.getElementById('label2').innerHTML = label2;
}
