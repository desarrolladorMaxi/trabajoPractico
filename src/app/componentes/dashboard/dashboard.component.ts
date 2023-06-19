import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

frase:String;
txtEvent:String = "usuario";

constructor(){
  this.frase="Se usa para pasar informacion del ts al html, se suele utilizar para hacer la comunicación utilizando los atributos de la etiqueta html.";

  
}
cambiarTexto(){
  this.txtEvent="Maximiliano";
}
}
