class UI{
    constructor(ilkVeri, ikinciVeri){
        this.ilkVeri = ilkVeri;
        this.ikinciVeri = ikinciVeri;

        this.outputResult = document.querySelector("#outputResult");
        this.outputFirst = document.querySelector("#outputFirst");
        this.outputSecond = document.querySelector("#outputSecond");

    }

    changeFirst(){
        this.outputFirst.textContent = this.ilkVeri.options[this.ilkVeri.selectedIndex].textContent;
    }

    changeSecond(){
        this.outputSecond.textContent = this.ikinciVeri.options[this.ikinciVeri.selectedIndex].textContent;
    }

    sonuc(val){
        this.outputResult.placeholder = String(val);
    }
}






