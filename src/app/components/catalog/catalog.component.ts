import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  hotels: any[] = [];
  hotels2: any[] = [];
  loaded = false;

  constructor(private apiService: ApiService, private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.getHotels();
    }, 2000
  );
  this.hotels = this.hotels2
  }

  getHotels() {
    this.apiService.getData().subscribe(
      response => {
        this.hotels2 = response;
       
      },
      error => {
        console.error('Error fetching hotels', error);
      }
    );
  }

  selectHotel(hotel: any) {
    this.orderService.setHotel(hotel);
    this.router.navigate(['/order']);
  }
}
