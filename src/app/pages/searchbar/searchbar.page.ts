import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  lista: string[];

  constructor() {
    this.inicializar();
   }

  ngOnInit() {
  }

  inicializar(){
    this.lista=[
      'uno',
      'dos',
      'tres',
    ];
  }

  buscar(ev: any){
    this.inicializar();
    const val = ev.target.value;
    if(val && val.trim() !== ""){
      this.lista = this.lista.filter((item)=>{
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

}
