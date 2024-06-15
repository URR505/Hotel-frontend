import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  hotel = {
    name: 'The Ritz-Carlton, Bali',
    address: 'Jl. Raya Nusa Dua Selatan, Nusa Dua, Bali 80363, Indonesia',
    imageUrl: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    availableRooms: 3,
    pricePerNight: 450
  };

  checkInDate: string = '';
  checkOutDate: string = '';
  rooms = 1;
  totalPrice = 0;

  updateTotalPrice() {
    const checkIn = new Date(this.checkInDate);
    const checkOut = new Date(this.checkOutDate);
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (isNaN(diffDays) || diffDays <= 0) {
      this.totalPrice = 0;
    } else {
      this.totalPrice = this.hotel.pricePerNight * diffDays * this.rooms;
    }
  }

  pay() {
    alert('Payment processed!');
  }
}
