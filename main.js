// Hello Javascipt

function check() {

    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)
    let num3 = parseFloat(document.getElementById('num3').value)

    let result = num1 + num2 + num3;

    document.getElementById('result-card').textContent = result;
    document.getElementById('math').innerHTML = num1;
    document.getElementById('science').innerHTML = num2;
    document.getElementById('eng').innerHTML = num3;
    document.getElementById('tm').textContent = result;

    // Marks Condition 
    if (result > 250) {
        document.getElementById('result-card').innerHTML = 'Your Marks Is Valid';
    }
    else if(result === 0){
        document.getElementById('result-card').innerHTML = 'Please enter your marks..';
    }
    else {
        document.getElementById('result-card').innerHTML = ' You are Not Valid';
    }
}


// Popup Call Back For Display
function pop() {
    document.getElementById('popup').style.display = 'block';
}
function popcls() {
    document.getElementById('popup').style.display = 'none';
}