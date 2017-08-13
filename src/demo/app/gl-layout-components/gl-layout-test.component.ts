import { Component, OnInit } from '@angular/core';
import { ILayoutItem, LayoutItemConfig, AvamGoldenContentLayoutService, ComponentConfiguration } from "avam-ng-layout";
import { TestDynComponent } from './dyn-view/test-dyn.component';

@Component({
  selector: 'gl-test-view',
  templateUrl: './gl-layout-test.component.html',
  styleUrls: ['./gl-layout-test.component.css']
})
export class GLLayoutTestComponent implements OnInit {
  private isRegistered = false;

  constructor(private layoutService: AvamGoldenContentLayoutService) {

  }

  ngOnInit() {

  }

  onAddView() {
    const itemConfig = {
      id: this.getID(),
      title: 'Test View (Runtime)',
      componentName: 'test-view',
      componentState: {
        createdBy: 'Balwinder Katoch (View)'
      }
    };
    this.layoutService.createComponent(itemConfig);
  }
  onAddPanel() {
    const itemConfig = {
      id: this.getID(),
      title: 'Test Panel (Runtime)',
      componentName: 'test-panel',
      componentState: {
        createdBy: 'Balwinder Katoch (Panel)'
      }
    };
    this.layoutService.createComponent(itemConfig);
  }
  onAddDynView() {
    const itemConfig = {
      id: this.getID(),
      title: 'Dynamic View',
      componentName: 'dynamic-view',
      componentState: {
        createdBy: 'Balwinder Katoch (Dynamic)'
      }
    };
    if (!this.isRegistered) {
      this.isRegistered = true;
      const compConfig = {
        componentName: 'dynamic-view',
        component: TestDynComponent
      };
      this.layoutService.registerComponent(compConfig);
    }
    this.layoutService.createComponent(itemConfig);
    // this.layoutService.
  }

  private getID(): string {
    return Math.floor((Math.random() * 10000) + 1).toString();
  }
}
