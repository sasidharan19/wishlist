import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { wishItem } from '../../shared/models/wishitem';
import { FormsModule } from '@angular/forms';

const filters : any = [
  (item: wishItem) => item,
  (item: wishItem) => !item.isComplete,
  (item: wishItem) => item.isComplete
];

@Component({
  selector: 'app-wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})

export class WishFilterComponent implements OnInit {

  @Input() filter : any;
  @Output() filterChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.updateFilter('0');
  }

  listFilter : any = '0';

  updateFilter(value : any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
   
}
