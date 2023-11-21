import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../conexion.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   sol: any;
   genere:any;
   palabra:string = '';
   pag = 1;
   
   
   
  miUrl = 'https://api.themoviedb.org/3/movie/550?api_key=4286347c81d541f90c33126bb90f293a'
  constructor(private http: ConexionService){
    this.miUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=4286347c81d541f90c33126bb90f293a&language=en-US&page=1'
   http.get_dir(this.miUrl).subscribe(
    res => {this.sol = res;});
  }
   
  ngOnInit(): void {
    
    // console.log(x);
    // this.listaComentario.push(this.aux);
    // localStorage.setItem('comentario',JSON.stringify(this.aux));
    //  this.aux = JSON.parse(localStorage.getItem('comentario')!); 
     
    // console.log('LLLKKKK');
    this.http.get_dir('https://api.themoviedb.org/3/genre/movie/list?api_key=4286347c81d541f90c33126bb90f293a&language=en-US').subscribe(
      res => {this.genere = res; }
    );
  }
  search(){
    // this.http.get_dir(`https://api.themoviedb.org/3/search/movie?api_key=4286347c81d541f90c33126bb90f293a&language=en-US&query=${this.palabra}&page=${this.pag}&include_adult=false`).subscribe(
    //   res => {this.sol = res;});
  // console.log(this.genere)});
  
  }
  navegation(direction:string){
    if(direction === 'plus')
     {
      this.pag++;
     }
     else{
       if(this.pag > 1)
       this.pag--;
     }
     this.search();
  }
 
}
