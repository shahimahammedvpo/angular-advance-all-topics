import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private http=inject(HttpClient);
private apiUrl='https://dummyjson.com/products';

getProducts():Observable<any>{
  return this.http.get<any>(this.apiUrl);
}
}
