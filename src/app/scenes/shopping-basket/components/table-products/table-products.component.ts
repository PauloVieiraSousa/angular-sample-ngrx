import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {

  @Input() items;

  constructor() { }
  ngOnInit() {
  }

}
