import { Component, OnInit } from '@angular/core';
import { ILayoutItem, LayoutItemConfig, AvamGoldenContentLayoutService, ComponentConfiguration, LayoutConfigState } from "avam-ng-layout";
import { TestDynComponent } from './dyn-view/test-dyn.component';

@Component({
  selector: 'gl-test-view',
  templateUrl: './gl-layout-test.component.html',
  styleUrls: ['./gl-layout-test.component.css']
})
export class GLLayoutTestComponent implements OnInit {
  savedLayout: LayoutConfigState;

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
      componentName: 'dyn-view',
      componentState: {
        createdBy: 'Balwinder Katoch (Dynamic)'
      }
    };
    this.layoutService.createComponent(itemConfig);
  }
  onSaveLayout() {
    this.layoutService.saveLayout()
      .then(layout => {
        this.savedLayout = layout
      }).catch((error: any) => console.error(error));
  }
  onRestoreLayout() {
    this.layoutService.restoreLayout(this.savedLayout);
  }

  private getID(): string {
    return Math.floor((Math.random() * 10000) + 1).toString();
  }
}
