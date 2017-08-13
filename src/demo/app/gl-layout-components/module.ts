import { NgModule } from '@angular/core';
import { AvamGoldenContentLayoutModule } from 'avam-ng-layout';
import { TestPanelComponent, TestViewComponent, TestDynComponent, GLLayoutTestComponent } from './index';
import { GlLayoutConfig } from './gl-layout.config';
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [
        CommonModule,
        AvamGoldenContentLayoutModule.forRoot(GlLayoutConfig)
    ],
    declarations: [
        TestPanelComponent,
        TestDynComponent,
        TestViewComponent,
        GLLayoutTestComponent
    ],
    exports: [
        GLLayoutTestComponent
    ],
    entryComponents: [
        TestPanelComponent, TestDynComponent, TestViewComponent
    ]
})
export class GLTestModule { }
