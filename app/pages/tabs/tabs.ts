import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {SearchPage} from '../search/search';
import {GoalReaderboardPage} from '../goal-readerboard/goal-readerboard';
import {App, MenuController} from 'ionic-angular';
import {NavController} from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { WishlistPage } from '../wishlist/wishlist';
import { GoalPage } from '../goal/goal';
import { ReaderboardPage } from '../readerboard/readerboard';
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  pages: Array<{icon: string, title: string, component: any}>;

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;
  private profilePage: ProfilePage;

  constructor(private menu: MenuController, private nav: NavController, public popoverCtrl: PopoverController) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = GoalPage;
    this.tab3Root = ReaderboardPage;
    this.tab4Root = WishlistPage;

        // set our app's pages
    this.pages = [
      { icon: 'bookmark', title: 'Wishlist', component: WishlistPage },
      { icon: 'cart',title: 'Orders', component: HomePage },
      { icon: 'list',title: 'Reader-Board', component: GoalReaderboardPage },
      { icon: 'help',title: 'Help', component: HomePage }
      //{ title: 'Home', component: MsgPushPage },
     // { title: 'My Books List', component: ListPage }
    ];


    menu.enable(true);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(NotificationPage);
    popover.present({ev: myEvent});
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.push(page.component);
  }

  openProfilePage() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.push(ProfilePage);

  }


  search(){
    this.nav.push(SearchPage);
  }
}
