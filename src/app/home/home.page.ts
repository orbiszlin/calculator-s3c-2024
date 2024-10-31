import {Component} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonRow,
  IonGrid, IonCol
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonRow, IonGrid, IonCol],
})
export class HomePage {

  input = "0";

  constructor() {
  }


  addNum(number: number) {
    if (this.input === "0") {
      this.input = "";
    }

    this.input = this.input + number;
  }

  removeNum() {
    console.log(this.input.length)
    this.input = this.input.slice(0, this.input.length - 1);

    if (this.input === "") {
      this.input = "0";
    }


  }
}
