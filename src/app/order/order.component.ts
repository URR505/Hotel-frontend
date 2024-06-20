import { Component,  OnInit  } from '@angular/core';
import { OrderService } from '../services/order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  hotel: any;
  checkInDate: string = '';
  checkOutDate: string = '';
  rooms = 1;
  totalPrice = 0;
  tarjetaNumero: string = '';
  mensajeValidacion: string = '';


  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.hotel = this.orderService.getHotel();
    if (!this.hotel) {
      alert('No hotel selected!');
      // Redirigir a la página de catálogo si no hay hotel seleccionado
      window.location.href = '/catalog';
    }
  }
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



  verificarTarjeta() {
    if (this.validarTarjeta(this.tarjetaNumero)) {
      this.mensajeValidacion = 'El número de tarjeta es válido.';
    } else {
      this.mensajeValidacion = 'El número de tarjeta no es válido.';
    }
  }

  validarTarjeta(numero: string): boolean {
    let suma = 0;
    let alternar = false;

    // Invertir el número de la tarjeta para procesar de derecha a izquierda
    for (let i = numero.length - 1; i >= 0; i--) {
      let n = parseInt(numero.charAt(i), 10);

      if (alternar) {
        n *= 2;
        if (n > 9) {
          n -= 9;
        }
      }

      suma += n;
      alternar = !alternar;
    }

    return (suma % 10 === 0);
  }
}
