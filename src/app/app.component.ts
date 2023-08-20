import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name?: string = '';
  date?: string = '';
  amount?: number = 0;
  height?: number = 0;
  distance?: number = 0;

  onInputName(event: Event): void {
    this.name = (event.target as HTMLInputElement).value;
  }

  onInputDate(event: Event): void {
    this.date = (event.target as HTMLInputElement).value;
  }

  onInputAmount(event: Event): void {
    this.amount = parseFloat((event.target as HTMLInputElement).value);
  }

  onInputHeight(event: Event): void {
    this.height = parseFloat((event.target as HTMLInputElement).value);
  }
  onInputDistance(event: Event): void {
    this.distance = parseFloat((event.target as HTMLInputElement).value);
  }
}
