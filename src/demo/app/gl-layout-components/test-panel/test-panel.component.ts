import { Component, OnInit } from '@angular/core';
import { ILayoutItem, LayoutItemConfig } from "avam-ng-layout";

@Component({
  selector: 'test-panel',
  templateUrl: './test-panel.component.html',
  styleUrls: ['./test-panel.component.css']
})
export class TestPanelComponent implements OnInit, ILayoutItem {
  counter = 0;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.counter++;
    }, 300);
  }

  id: string = "10";

  getState(): LayoutItemConfig {
    return <LayoutItemConfig>{
      id: this.id,
      title: 'Test Panel',
      componentName: 'test-panel',
      state: {
        value: 10
      }
    };
    // throw new Error("Method not implemented.");
  }
  setState(state: LayoutItemConfig): void {
    console.log(state);
    // throw new Error("Method not implemented.");
  }
  dispose(): void {
    console.log('Disposed');
    // throw new Error("Method not implemented.");
  }
}
