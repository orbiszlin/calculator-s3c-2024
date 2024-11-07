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

  /**
   * HTML Input placeholder
   *
   * Hold values for HTML input
   */
  input = "0";

  private holdInput = "";

  private action: '+' | '-' | '/' | '*' | null = null;

  constructor() {
  }


  /**
   * Adding numbers
   *
   * Add number to input field
   *
   * @param number Integer from 0 to 9
   */
  addNum(number: number) {
    if (this.input === "0") {
      this.input = "";
    }

    this.input = this.input + number;
  }

  /**
   * Remove number / AC
   *
   * Removing last character from input field
   */
  removeNum() {
    console.log(this.input.length)
    this.input = this.input.slice(0, this.input.length - 1);

    if (this.input === "") {
      this.input = "0";
    }
  }

  /**
   * Toggle sign
   *
   * Toggling +/- on input field
   */
  toggleSign() {
    if (this.input === "0") {
      return;
    }

    if (this.input[0] === "-") {
      this.input = this.input.slice(1);
    } else {
      this.input = "-" + this.input;
    }
  }

  adding() {
    if (this.action) {
      this.processAction();
    }

    console.log(this.input);

    this.action = "+";
    this.holdInput = this.input;
    this.input = "0";
  }

  private processAction() {
    switch (this.action) {
      case "+":
        this.input = (Number(this.input) + Number(this.holdInput)).toString();
        break;
      case "-":
        this.input = (Number(this.input) - Number(this.holdInput)).toString();
        break;
      case "/":
        this.input = (Number(this.input) / Number(this.holdInput)).toString();
        break;
      case "*":
        this.input = (Number(this.input) * Number(this.holdInput)).toString();
        break;
    }
  }
}
