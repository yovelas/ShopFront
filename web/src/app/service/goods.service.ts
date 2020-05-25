import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor() { }
  domain = "http://192.168.16.100:8080/";
  navControl:boolean = false;
}
