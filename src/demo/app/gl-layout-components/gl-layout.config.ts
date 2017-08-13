import { GoldenLayoutConfiguration } from "avam-ng-layout";
import { TestPanelComponent, TestViewComponent } from './index';


export const GlLayoutConfig: GoldenLayoutConfiguration = {
    components: [{
        componentName: 'test-panel',
        component: TestPanelComponent
    }, {
        componentName: 'test-view',
        component: TestViewComponent
    }],
    defaultLayout: {
        content: [{
            type: 'stack',
            content: [{
                type: 'component',
                title: 'Testing Panel',
                componentName: 'test-panel',
                componentState: {
                    label: 'Test Panel'
                }
            }, {
                type: 'component',
                title: 'Testing View',
                componentName: 'test-view',
                componentState: {
                    label: 'Test View'
                }
            }]
        }]
    }
};

// content: [{
//     type: 'row',
//     content: [{
//         type: 'component',
//         title: 'Testing Panel',
//         componentName: 'test-panel',
//         componentState: {
//             label: 'Test Panel'
//         }
//     }, {
//         type: 'component',
//         title: 'Testing View',
//         componentName: 'test-view',
//         componentState: {
//             label: 'Test View'
//         }
//     }]
// }]


// content: [{
//             type: 'stack',
//             content :[]
//         }]