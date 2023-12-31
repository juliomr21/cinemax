import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConexionService } from '../conexion.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
   dataMovie:mov = { overview:"",
    genres:[],
    vote_average:""};
   genere:any;
   actors:any = {cats:[{name:""}],crew: [{gender:1}]};
   director = 'director';
   id = '';
   valoracion = [0,1,2,3,4,5,6,7,8,9,10];
   Fav = false;
   colorFav = {"color": "grey"};
   comentario='Aún no ha opinado';
   comentarioTemp='';
   valor = 0;
   valorTemp = 0;
   estado = 'Añadir a favorito';
   poster ='';
   titulo = '';
   listaComentario:Lcomentario[] = [];
   aux:Lcomentario = {
     id: '',
     opinion: '',
     valor: 0,
     fav: false,
     titulo: '',
     poster: ''
   }
  constructor(private http:ConexionService, private route: ActivatedRoute) {

     }
     
  ngOnInit(): void {
    
   
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap; this.id = params.id});
    this.http.get_dir(`https://api.themoviedb.org/3/movie/${this.id}?api_key=4286347c81d541f90c33126bb90f293a`).subscribe(
      res =>{ 
        let aux_Mov:any
        aux_Mov= res;  this.poster = aux_Mov.poster_path; this.titulo = aux_Mov.original_title;
        this.dataMovie.genres = aux_Mov.genres;
        this.dataMovie.overview = aux_Mov.overview;
        this.dataMovie.vote_average = aux_Mov.vote_average;
      });
    
    this.http.get_dir('https://api.themoviedb.org/3/genre/movie/list?api_key=4286347c81d541f90c33126bb90f293a&language=en-US').subscribe(
      res_genere => {this.genere = res_genere; }
    );
    
    this.http.get_dir(`http://api.themoviedb.org/3/movie/${this.id}/casts?api_key=4286347c81d541f90c33126bb90f293a`).subscribe(
      res_actor=>{
        let aux_actor = res_actor;
        
        this.actors = aux_actor;
        this.director = this.actors.crew[1].name;
        // this.actors.cats = aux_actor.crew[1].namer;
        

            console.log(this.director)} 
    );
   
    let temp = JSON.parse(localStorage.getItem('comentario')!);
    if(temp!=null)
    this.listaComentario = temp;
    this.aux =this.listaComentario.find(item => item.id == this.id )!;
    //this.aux = this.listaComentario[pos]
    if(this.aux!=null)
    {
      this.valor = this.aux.valor;
    this.comentario = this.aux.opinion;
    this.Fav = this.aux.fav;
      
    this.showcolor();  
    }
    // console.log(this.aux);
  }
  showcolor(){
    if(this.Fav)
     {
      this.colorFav = {"color": "red"};
      this.estado = 'Quitar de favorito'
     }
     else
     {
      this.colorFav = {"color": "grey"};
      this.estado = 'Añadir a Favorito';
     }
  }
  changeColor(){
   let comentario_temp:Lcomentario = {
     id: '',
     opinion: '',
     valor: 0,
     fav: false,
     titulo: '',
     poster: ''
   };
   comentario_temp.id = this.id;
   comentario_temp.titulo = this.titulo;
   comentario_temp.poster = this.poster;
    if(!this.Fav)
    {
      this.colorFav = {"color": "red"};
      this.estado = 'Quitar de favorito'
    }
     
     else
     {
      this.colorFav = {"color": "grey"};
      this.estado = 'Añadir a Favorito';
     }
     let temp = this.listaComentario.find(item => item.id == this.id);
    if(temp != null){
      let pos = this.listaComentario.indexOf(temp);
      this.listaComentario[pos].fav = !this.Fav;
    }
    else
    {
      comentario_temp.fav = !this.Fav;
      this.listaComentario.push(comentario_temp);
    }
    
    // console.log(this.listaComentario);
    localStorage.setItem('comentario',JSON.stringify(this.listaComentario));

    this.Fav = !this.Fav; 
  }

  enviarComentario(){
    let comentario_temp:Lcomentario = {
      id: '',
      opinion: '',
      valor: 0,
      fav: false,
      titulo: '',
      poster: ''
    }
    this.comentario = this.comentarioTemp;
    this.valor = this.valorTemp;
    this.comentarioTemp = '';
    comentario_temp.id = this.id;
    comentario_temp.valor = this.valor;
    comentario_temp.opinion = this.comentario;
    comentario_temp.fav = this.Fav;
    comentario_temp.poster = this.poster;
    comentario_temp.titulo = this.titulo;
    let temp = this.listaComentario.find(item => item.id == this.id);
    if(temp != null){
      let pos = this.listaComentario.indexOf(temp);
      this.listaComentario[pos].fav = this.Fav;
      this.listaComentario[pos].opinion = comentario_temp.opinion;
      this.listaComentario[pos].valor = comentario_temp.valor;
    }
    else
    {
      this.listaComentario.push(comentario_temp);
    }
    
    // console.log(this.listaComentario);
    localStorage.setItem('comentario',JSON.stringify(this.listaComentario));

  }
  fn(vt:number){
    this.valor = vt;
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
interface mov{
  overview:string,
  genres:any,
  vote_average:string,
  
}
interface actor{
  cats:any[],
  crew:any[]
}
