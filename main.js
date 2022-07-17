function tristate(control, value1, value2, value3) {
    switch (control.value.charAt(0)) {
        case value1:
        control.value = value2;
        break;
        case value2:
        control.value = value3;
        break;
        case value3:
        control.value = value1;
        break;
        default:
        // display the current value if it's unexpected
        alert(control.value);
    }
}
function tristate_Marks(control) {
    tristate(control,'\u2753', '\u2705', '\u274C');
}
function tristate_Circles(control) {
    tristate(control,'\u25EF', '\u25CE', '\u25C9');
}
function tristate_Ballot(control) {
    tristate(control,'\u2610', '\u2611', '\u2612');
}
function tristate_Check(control) {
    tristate(control,'\u25A1', '\u2754', '\u2714');
}

window.onload = addElements;

function addElements () {
    
}