import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  productName = 'Sample Product';
  productDescription = 'This is a sample product description.';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productName = this.route.snapshot.paramMap.get('id') || 'Unknown Product';
    // You can initialize any data or make API calls here
  }
}