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
    if(nomeT == "#120 STARYU" ){
      this.name = "#120 STARYU";
    }
    if(nomeT == "#304 ARON" ){
      this.name = "#304 ARON";
    }
    if(nomeT == "#539 SAWK" ){
      this.name = "#539 SAWK";
    }
    if(nomeT == "#120 STARYU" ){
      this.name = "#120 STARYU";

    if(nomeT == "#120 STARYU" ){
      this.name = "#120 STARYU";
    }
    

    posti = [

      {nome:"Milano", nazione:"Italia"},

      {nome:"Roma", nazione:"Italia"},

      {nome:"Napoli", nazione:"Italia"},

      {nome:"Venezia", nazione:"Italia"},

      {nome:"Bologna", nazione:"Italia"},

    ]

}
