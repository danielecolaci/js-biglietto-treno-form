document.getElementById("form").addEventListener("calc", function (event) {

    //Name
    const input = document.getElementById('name');

    //Km
    let km = document.getElementById('km');

    //Età
    let age = document.getElementById('age');

    //Prezzo biglietto
    let price = km * 0.21;

    //Sconto
    let final_price;

    if (age === 'under18') {
        final_price = (price * 0.8).toFixed(2);
    }
    else if (age === 'over65') {
        final_price = (price * 0.6).toFixed(2);
    }
    else {
        final_price = price.toFixed(2);
    }

    const name = document.getElementById('name').value;
    document.getElementById('output-name').innerHTML = name;

    document.getElementById("output-price").innerHTML = final_price;

});