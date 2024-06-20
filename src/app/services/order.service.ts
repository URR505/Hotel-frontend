import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private storageKey = 'selectedHotel';

  setHotel(hotel: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(hotel));
  }

  getHotel() {
    const hotelData = localStorage.getItem(this.storageKey);
    return hotelData ? JSON.parse(hotelData) : null;
  }

}
