import { Component, OnInit } from '@angular/core';
import { ILayoutItem, LayoutItemConfig } from "avam-ng-layout";



@Component({
  selector: 'dyn-view',
  templateUrl: './test-dyn.component.html',
  styleUrls: ['./test-dyn.component.css']
})
export class TestDynComponent implements OnInit, ILayoutItem {
  currentTime = new Date();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 300);
  }

  id: string = "30";

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
