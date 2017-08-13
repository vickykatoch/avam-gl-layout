import { Component } from '@angular/core';
import { LibService } from 'avam-ng-layout';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css']
})
export class AppComponent {
  meaning: number;
  constructor(libService: LibService) {
    this.meaning = libService.getMeaning();
  }
}
