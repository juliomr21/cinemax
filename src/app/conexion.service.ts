import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http: HttpClient) { }
  public get_dir(miUrl:string)
  {
    return this.http.get(miUrl);
  }
}
