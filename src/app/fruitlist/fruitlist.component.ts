import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SingleFruitComponent } from './single-fruit/single-fruit.component';
import { FruitListDataService } from '../fruit-list-data.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SingleFruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {
  greenColor = "green";
  redColor = 'red';

  fruitListData = inject(FruitListDataService);

  addComment(comment:string, index:number){
    this.fruitListData.addCommentToFruit(comment, index);
  }
}
