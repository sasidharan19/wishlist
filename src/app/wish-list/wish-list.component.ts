import { Component, Input, OnInit } from '@angular/core';
import { wishItem } from '../../shared/models/wishitem';
import { CommonModule } from '@angular/common';
import { WishListItemComponent } from "../wish-list-item/wish-list-item.component";

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule, WishListItemComponent],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})

export class WishListComponent implements OnInit{

  @Input() wishes : wishItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  
}
