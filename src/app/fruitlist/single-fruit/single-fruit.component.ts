import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-fruit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './single-fruit.component.html',
  styleUrl: './single-fruit.component.scss'
})
export class SingleFruitComponent {
  //The name in the parentesis is the same that I use in the parent Element to assign a Variable. If I dont put anything, then will be used the same name "fruitNumber"
  @Input()fruit={
    name: "Apfel",
    img:"apple.png",
    description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
    genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
    stars: 2.3,
    reviews:[{name: "Kevin W.", text: "ist lecker"},{name: "Arne P.", text: "nicht so meins"}],
  };

  inputData = "";

  @Output()comment = new EventEmitter<string>();

  sendInputData(){
    this.comment.emit(this.inputData);
    this.inputData = "";
  }
}
