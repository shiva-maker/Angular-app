import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculatorapp';
  sumFirst: string;
  sumResult: boolean;

  subFirst: string;
  subSecond: string;
  subResult: any[];

  sum() {
    this.sumResult = Math.sqrt(parseInt(this.sumFirst)) % 1 === 0;
    this.clearAllTexts();
  }

  sub() {
    let rangeStart = parseInt(this.subFirst);
    let rangeEnd = parseInt(this.subSecond);
    var result = [];
    for (let i = rangeStart; i <= rangeEnd; i++) {
      if (Math.sqrt(i) % 1 === 0) {
        result.push(i);
      }
    }
    this.subResult = result;
    this.clearAllTexts();
  }

  clearAllTexts() {
    this.sumFirst = '';
    this.subFirst = '';
    this.subSecond = '';
  }
}
