import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  product: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product = this.route.snapshot.data['product']
  }
}
