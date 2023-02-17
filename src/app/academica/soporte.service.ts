import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Medico} from "../registro/medico";
import {Observable} from "rxjs";
import {Soporte} from "./soporte";
import {Especialidad} from "../registro/especialidad";

@Injectable({
  providedIn: 'root'
})
export class SoporteService {
  urlSoportesMedico: string = environment.urlSoportesMedico;

  constructor(private http: HttpClient) { }
  crear(soporte: Soporte): Observable<any>{
    return this.http.post<any>(this.urlSoportesMedico, soporte).pipe();
  }
  getListaSoportes(): Observable<Soporte[]>{
    return this.http.get<Soporte[]>(this.urlSoportesMedico);
  }

}
