import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ConexionService } from '../conexion.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  palabra = '';
  pag = 1;
  sol:any;
  genero:any;
  constructor(private route: ActivatedRoute, private http:ConexionService) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap; this.palabra = params.palabra});

      this.http.get_dir('https://api.themoviedb.org/3/genre/movie/list?api_key=4286347c81d541f90c33126bb90f293a&language=en-US').subscribe(
        res => {this.genero = res; }
      );
      this.http.get_dir(`https://api.themoviedb.org/3/search/movie?api_key=4286347c81d541f90c33126bb90f293a&language=en-US&query=${this.palabra}&page=${this.pag}&include_adult=false`).subscribe(
      res => {this.sol = res;});

  }

  search(){
    this.http.get_dir(`https://api.themoviedb.org/3/search/movie?api_key=4286347c81d541f90c33126bb90f293a&language=en-US&query=${this.palabra}&page=${this.pag}&include_adult=false`).subscribe(
      res => {this.sol = res;});
  // console.log(this.genere)});
  }
}
