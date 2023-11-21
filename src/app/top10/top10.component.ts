import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.css']
})
export class Top10Component implements OnInit {
lista:Lcomentario[]=[];
  constructor() { }

  ngOnInit(): void {
    this.lista = JSON.parse(localStorage.getItem('comentario')!);
    this.lista = this.lista.filter(item => item.valor !=0);
    this.lista = this.lista.sort((a:Lcomentario,b:Lcomentario)=>b.valor-a.valor);
  }

}
interface Lcomentario{
  id:string,
  titulo: string,
  poster: string,
  opinion:string,
  valor:number,
  fav:boolean
}

