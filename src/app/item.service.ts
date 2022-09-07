import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "./item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private newest3 = "http://localhost:8080/api/v1/newest3";
  private detailedItemURL= "http://localhost:8080/api/v1/products";

  constructor(private httpClient: HttpClient) { }

  getItemsList(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.newest3}`);
  }

  getDetailedItemInfo(id:string):Observable<Item>{
    let data = {id: id};
    return this.httpClient.get<Item>(this.detailedItemURL, {params: data});
  }
}
