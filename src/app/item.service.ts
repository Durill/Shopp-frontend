import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "./item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseURL = "http://localhost:8080/api/v1/newest3";

  constructor(private httpClient: HttpClient) { }

  getItemsList(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.baseURL}`);
  }
}
