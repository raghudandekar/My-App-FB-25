import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

constructor(private _httpClient:HttpClient ){ }
  getAccounts():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }
getFilteredAccounts(term:any):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
}

getsortaccounts(column:any,order:any):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
}

deleteaccounts(id:any):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/="+id);
}

getpaginationaccounts(limit:any,page:any){
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+limit+"&page="+page);
}

createaccount(data:any):Observable<any>{
  return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data);
}


}
