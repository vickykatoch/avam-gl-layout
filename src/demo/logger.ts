// import { Component, ViewChild, ElementRef } from '@angular/core';
// import { Logger, getDefaultLogger, getLogger, PopUpAppender, PatternLayout, JsonLayout, InPageAppender, BrowserConsoleAppender } from 'log4javascript';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
//   @ViewChild('loggerElem') private loggerElement: ElementRef;
//   // private logger: Logger;
//   private logger = this.getPopupLogger("AppComponent");


//   constructor() {
//     // debugger;
//     try {
//       this.logger.info('Im Info');
//       this.logger.warn('Im warning');
//       throw new Error('Synthetic Error');
//     } catch (err) {
//       this.logger.error('Error in constructor',err.stack, err);
//     }
//   }
//   ngOnInit() {

//   }

//   private getPopupLogger(name: string): Logger {
//     const logger = getLogger(name);
//     const popUpAppender = new BrowserConsoleAppender();
//     // const popUpLayout = new PatternLayout("%d{MM-dd-yyyy HH:mm:ss,SSS} %-5p - %m%n");
//     // popUpAppender.setLayout(popUpLayout);

//     const jsonLayout = new JsonLayout(true, true);
//     jsonLayout.setCustomField("user", "bkatoch");
//     jsonLayout.setKeys("module", "ts", "level", "msg", "exc", "url");
//     popUpAppender.setLayout(jsonLayout);

//     logger.addAppender(popUpAppender);
//     return logger;
//   }
//   private getInPageAppender(name: string): Logger {
//     const logger = getLogger(name);
//     const appender = new InPageAppender(this.loggerElement.nativeElement);
//     const vanillaLayout = new PatternLayout("%d{MM-dd-yyyy HH:mm:ss,SSS} %-5p - %m%n");
//     appender.setLayout(vanillaLayout);
//     logger.addAppender(appender);
//     return logger;
//   }
// }