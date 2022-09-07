import { Component, OnInit } from '@angular/core';
import {Item} from "../item";
import {ItemService} from "../item.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  item!: Item;
  id: string;

  constructor(private itemService: ItemService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id') != null? params.get('id') : '1'
    });
      this.getItem(this.id);
  }

  private getItem(id:string){
    this.itemService.getDetailedItemInfo(id).subscribe(data =>{
        this.item = data;
    })
  }

}
