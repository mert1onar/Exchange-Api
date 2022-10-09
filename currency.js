class Currency{
    constructor(ilkPara,ikinciPara){
        this.ilkPara = ilkPara;
        this.ikinciPara = ikinciPara;
        this.miktar = null;

    }

    exchange(){

        return new Promise((resolve,reject) => {
            var myHeaders = new Headers();
            myHeaders.append("apikey", "mGPzcdmtaS0pqYOomwWRzTuUlThXFTU4");

            var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
            };

            fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${this.ikinciPara}&from=${this.ilkPara}&amount=${this.miktar}`, requestOptions)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
        
    }

    miktariGüncelle(miktar){
        this.miktar = miktar;
    }

    ilkParaGüncelle(yenipara1){
        this.ilkPara = yenipara1;
    }

    ikinciParaGüncelle(yenipara2){
        this.ikinciPara = yenipara2;
    }



        
    
}