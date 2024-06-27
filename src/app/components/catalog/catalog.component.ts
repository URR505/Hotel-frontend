import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { Hotel } from '../../interfaces/Hoteles';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  hotels: Hotel[] = [];
  hotels2: Hotel[] = [];
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
    this.apiService.getHotels().subscribe(
      response => {
        this.hotels2 = response.value;
       
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
