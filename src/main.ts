
import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, { preserveWhitespaces: true }).then(ref => {
  // Ensure Angular destroys itself on hot reloads.

  // Otherise, log the boot error
}).catch(err => console.error(err));
