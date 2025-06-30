import { Component, EventEmitter, Output } from '@angular/core';
import { wishItem } from '../../shared/models/wishitem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-wish-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})

export class AddWishFormComponent {

  @Output() addwish = new EventEmitter<wishItem>();

  newWishText = '';

  addNewWish() {
    this.addwish.emit(new wishItem(this.newWishText));
    this.newWishText = '';
  }

}
