import { Component, OnInit } from '@angular/core';
import { ILayoutItem, LayoutItemConfig } from "avam-ng-layout";

@Component({
  selector: 'test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.css']
})
export class TestViewComponent implements OnInit, ILayoutItem {

  id: string = "20";

  getState(): LayoutItemConfig {
    return <LayoutItemConfig>{
      id: this.id,
      title: 'Test View',
      componentName: 'test-view',
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

  constructor() {

  }

  ngOnInit() {

  }

}
