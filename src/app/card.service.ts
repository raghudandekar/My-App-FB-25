import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  constructor(private _httpClient:HttpClient) { }

   getcard(id: number):Observable<any>{

    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student')

  }

  getcards(id: number):Observable<any>{

    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id);

  }

  getFilteredcard(term:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter='+term)
  }

  getSortedcard(column:any,order:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy='+column+"&order="+order)
  }

  deletcard(id:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id);
  }

  getPaginatedcard(limit:any , page:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit='+limit+"&page="+page)

  }

  createcard(data:any):Observable<any>{
    return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/student',data)
  }

  getCard(id:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id);
  }

  updatecard(id:any,data:any):Observable<any>{
    return this._httpClient.put('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id,data);
  }
}
