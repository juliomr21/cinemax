import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.css']
})
export class FavoritasComponent implements OnInit {
  listafav:Lcomentario[]=[];
  constructor() { }

  ngOnInit(): void {
   this.listafav = JSON.parse( localStorage.getItem('comentario')!);
   this.listafav = this.listafav.filter(item => item.fav);
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