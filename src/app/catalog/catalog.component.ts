import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  hotels: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getHotels();
  }

  getHotels() {
    this.apiService.getData().subscribe(
      response => {
        this.hotels = response;
      },
      error => {
        console.error('Error fetching hotels', error);
      }
    );
  }
}
