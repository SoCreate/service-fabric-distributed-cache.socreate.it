import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { HowToSetUpComponent } from './docs/set-up/how-to-set-up/how-to-set-up.component';
import { SetupClientTouseDistributedCacheComponent } from './docs/set-up/setup-client-to-use-distributed-cache/setup-client-to-use-distributed-cache.component';
import { ExampleUsageComponent } from './docs/configuration/example-usage/example-usage.component';
import { OptionalConfigurationSettingsComponent } from './docs/configuration/optional-configuration-settings/optional-configuration-settings.component';

export const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: 'docs',
    component: DocsComponent,
    children: [
      { path: 'set-up/how-to-set-up', component: HowToSetUpComponent },
      { path: 'set-up/app-setup-client-to-use-distributed-cache', component: SetupClientTouseDistributedCacheComponent },
      { path: 'configuration/example-usage', component: ExampleUsageComponent },
      { path: 'configuration/optional-configuration-settings', component: OptionalConfigurationSettingsComponent },
      { path: '', redirectTo: 'set-up/how-to-set-up', pathMatch: 'full' }
    ]
  },
  { path: '', component: HomeComponent }
];
