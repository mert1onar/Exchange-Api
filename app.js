const miktar = document.querySelector("#amount");
const ilkPara = document.querySelector("#firstCurrency");
const ikinciPara = document.querySelector("#secondCurrency");
const currency = new Currency("USD","TRY");
const ui = new UI(ilkPara,ikinciPara);

eventListeners();

function eventListeners(){
    miktar.addEventListener("input",hesapla);
    ilkPara.onchange = function(){
        currency.ilkParaGüncelle(ilkPara.options[ilkPara.selectedIndex].textContent);
        ui.changeFirst();
        hesapla();
    };

    ikinciPara.onchange = function(){
        currency.ikinciParaGüncelle(ikinciPara.options[ikinciPara.selectedIndex].textContent);
        ui.changeSecond();
        hesapla();
    };
}

function hesapla(){
    currency.miktariGüncelle(miktar.value);

    currency.exchange()
    .then(result => ui.sonuc(result.result))
    .catch(err => console.log(err));
}