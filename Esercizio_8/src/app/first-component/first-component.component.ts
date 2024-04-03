import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

  name = "inizio";
  clickBottone(link: string){
    window.open(link);
    
  }
  setBtn(nomeT: string){
    if(nomeT == "MILANO" ){
      this.name = "MILANO";
    }
    if(nomeT == "ROMA" ){
      this.name = "ROMA";
    }
    if(nomeT == "NAPOLI" ){
      this.name = "NAPOLI";
    }
    if(nomeT == "VENEZIA" ){
      this.name = "VENEZIA";
    }
    if(nomeT == "BOLOGNA" ){
      this.name = "BOLOGNA";
    }
  
  }
    posti = [

      {nome:"MILANO", nazione:"Italia", immagine:"https://media.istockphoto.com/id/493223692/it/foto/duomo-di-milano-italia.jpg?s=612x612&w=0&k=20&c=X8QrI64NuylVeasXYRnKoj2LEHJNgI5OcVwoQwzd0bo=", capitale:"Roma", abitanti:"1.371.850" },

      {nome:"ROMA", nazione:"Italia", immagine:"https://media.istockphoto.com/id/539115110/it/foto/colosseo-di-roma-e-sole-mattutino-italia.jpg?s=612x612&w=0&k=20&c=ngbBMGVEkJxHsnt4SN7ZuncEnRenq2tFI8V0-zCg4pw=", capitale:"Roma", abitanti:"2.848.084"},

      {nome:"NAPOLI", nazione:"Italia", immagine:"https://media.istockphoto.com/id/527072683/it/foto/citt%C3%A0-di-napoli-con-il-vesuvio-al-tramonto-campania-italia.jpg?s=612x612&w=0&k=20&c=Ba8KpBUWlvfj4RqyDJvYlG2NfNZARsccYR4kMST8Jb4=", capitale:"Roma", abitanti:"1.004.500"},

      {nome:"VENEZIA", nazione:"Italia", immagine:"https://media.istockphoto.com/id/1388018793/it/foto/canal-grande-a-venezia.jpg?s=612x612&w=0&k=20&c=1_Vi0rvZBiCO9SCZfJsHkDJsw-9qjLhcGiYyE-AAnpo=", capitale:"Roma", abitanti:"250.369"},

      {nome:"BOLOGNA", nazione:"Italia", immagine:"https://media.istockphoto.com/id/1070080094/it/foto/bologna-emilia-romagna-italia.jpg?s=612x612&w=0&k=20&c=dJqUQ_tBOZJijZwbuMOXh5JNAe63VrkW1rlMlIA1zC4=", capitale:"Roma", abitanti:"390.518"},

    ]
  
}

  
