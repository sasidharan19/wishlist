import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { wishItem } from '../../shared/models/wishitem';
import { CommonModule } from '@angular/common';
import {EventService} from "../../shared/services/EventService";

@Component({
  selector: 'wish-list-item',
  standalone: true,
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css'],
  imports: [CommonModule]
})

export class WishListItemComponent implements OnInit {

  @Input() wish! : wishItem;

  @Input() fullfilled! : boolean;

  @Output() fullfilledChange = new EventEmitter<boolean>();

  constructor(private events: EventService) { }

  get cssClasses() {
    return {'strikeout text-muted': this.wish.isComplete};
  }

  ngOnInit(): void {
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

}