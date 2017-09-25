import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MePage } from '../me/me';
// import { PremiumeventsPage } from '../premiumevents/premiumevents';
// import { SettingsPage } from '../settings/settings';
import { ProfilePage } from '../profile/profile';
import { EventsPage } from '../events/events';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventsPage;
  tab3Root = MePage;
  tab4root = ProfilePage;

  constructor() {

  }
}
