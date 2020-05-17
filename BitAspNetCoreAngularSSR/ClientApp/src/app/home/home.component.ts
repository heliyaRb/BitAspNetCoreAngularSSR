import { Component } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navText: ["", ""],
    navSpeed: 700,
    rtl: true,
    nav: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      678: {
        items: 2
      },
      960: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  };

}
