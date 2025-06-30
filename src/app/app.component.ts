import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/models/wishitem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from "./wish-list/wish-list.component";
import {AddWishFormComponent} from "./add-wish-form/add-wish-form.component";
import { WishFilterComponent } from "./wish-filter/wish-filter.component";
import {EventService} from "../shared/services/EventService";
import { WishService } from './wish-list-item/wish.service';
import { HttpClientModule } from '@angular/common/http'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{

  items: wishItem[] = [];

  constructor(events: EventService, private readonly wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  ngOnInit() {
    this.wishService.getWishes().subscribe({
      next: (data: any) => {
        this.items = data;
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      }
    });
  }

  filter: any;

}
