//Name
const nameElement = document.getElementById('name');
console.log(nameElement);

//Km
const kmElement = document.getElementById('km');
console.log(kmElement);

//Age
const ageElement = document.getElementById('age');
console.log(ageElement);

const ticketElement = document.querySelector('.ticket');


document.querySelector("form").addEventListener('submit', function (e) {

    console.log(e.preventDefault());


    const name = nameElement.value;

    const km = kmElement.value;

    const age = ageElement.value;

    console.log(name, km, age);


    //Prezzo biglietto
    let discount = 'standard';
    let price = km * 0.21;

    //Sconto
    if (age === 'minor') {
        console.log('apply 20% off');
        finalPrice = (price * 0.8).toFixed(2);
        discount = '20% off';
    }
    else if (age === 'senior') {
        finalPrice = (price * 0.6).toFixed(2);
        console.log('apply 40% off');
        discount = '40% off';
    }
    else {
        finalPrice = price.toFixed(2);
    }

    console.log(finalPrice, discount, name);


    const cpCode = Math.floor((Math.random() * 90000) + 50000);
    const wNumber = Math.floor((Math.random() * 10) + 1);

    console.log(cpCode, wNumber);


    const markup = `
        <table class="card table my-3 p-5 d-flex text-center gap-5 rounded-5">
            <tr class="d-flex gap-5 justify-content-evenly mx-5 flex-wrap">
                <th class="table-primary border-0 rounded-4 px-5">Nome Passeggero<br><i>${name}</i></th>
                <td class="border-0">Sconto<br><b>${discount}</b></td>
                <td class="border-0">Prezzo<br><b>${finalPrice}€</b></td>
                <td class="border-0">Codice Biglietto<br>CP<b>${cpCode}</b></td>
                <td class="border-0">Info Posto<br>Carrozza n.<b>${wNumber}</b></td>
            </tr>
        </table>
    `

    ticketElement.insertAdjacentHTML('beforeend', markup)





    /* 
    const name = document.getElementById('name').value;
    document.getElementById('output-name').innerHTML = name;
 
    document.getElementById("output-price").innerHTML = final_price;
 */
});