import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CASOS } from './mock-casos';
import { Caso } from './caso';

@Injectable({
  providedIn: 'root'
})
export class CasodermatologicoListaService {

constructor() {
 // This is intentional
}


getCasos(): Observable<Caso[]> {
 const casos = null;
  return casos;
}


}
