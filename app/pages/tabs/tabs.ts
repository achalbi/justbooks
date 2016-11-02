import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {SearchPage} from '../search/search';
import {GoalReaderboardPage} from '../goal-readerboard/goal-readerboard';
import {App, MenuController, LocalStorage, Storage } from 'ionic-angular';
import {NavController} from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { WishlistPage } from '../wishlist/wishlist';
import { GoalPage } from '../goal/goal';
import { LoginPage } from '../login/login';
import { ReaderboardPage } from '../readerboard/readerboard';
import { ProfilePage } from '../profile/profile';
import { StoreLocationPage } from '../store-location/store-location';
import { OnInit } from '@angular/core';
import { LoginService } from '../../providers/login-service/login-service';
import { WishlistService } from '../../providers/wishlist-service/wishlist-service';
import { MemberInfo } from '../datatypes/member-info';
import { User } from '../datatypes/user';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html',
  providers: [LoginService, WishlistService ],
})
export class TabsPage  implements OnInit {

  pages: Array<{icon: string, title: string, component: any}>;

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;
  private profilePage: ProfilePage;
  private localStorage: Storage = new Storage(LocalStorage);
  private memberInfo: MemberInfo = new MemberInfo();
  private user: User = new User();

  constructor( private menu: MenuController, private nav: NavController,
               public popoverCtrl: PopoverController, public loginService: LoginService,
               public wishlistService: WishlistService ) {}


    ngOnInit(): void {
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
          {  icon: 'pin',title: 'Store Location', component: StoreLocationPage },
          { icon: 'help',title: 'Help', component: HomePage }
         // { title: 'My Books List', component: ListPage }
        ];

        this.menu.enable(true);
        this.localStorage.get('phone').then((phone) =>{
          this.user.phone = phone
        });
        this.localStorage.get('member_plan_id').then((member_plan_id) => {
            this.loginService.get_member_info(member_plan_id).then(data => {
                this.memberInfo = data[0];
                this.localStorage.set('member_info', JSON.stringify(data[0]));
                this.loginService.get_auth_token(this.user.phone, this.memberInfo.membership_no, this.memberInfo.email, member_plan_id ).then(data => {
                        this.user = data;
                        this.user.first_name = this.memberInfo.first_name;
                        this.user.last_name = this.memberInfo.last_name;
                        this.user.plan_name = this.memberInfo.plan_name;
                        this.user.branch_id = this.memberInfo.branch_id;
                        this.localStorage.set('auth_token', this.user.authentication_token );
                        this.localStorage.set('current_user', JSON.stringify(this.user));
                });
            });
        });

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

  logout() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    this.localStorage.get('current_user').then((user) => {
      this.user = JSON.parse(user);
      this.loginService.logout(this.user.membership_no, this.user.authentication_token).then(data => {
        //return data;
        // navigate to the new page if it is not the current page
        this.nav.push(LoginPage);
      });
    }); 
  }

  openProfilePage() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.push(ProfilePage);

  }


  addToWishList(title_id){
    this.localStorage.get('current_user').then((user) => {
      this.user = JSON.parse(user);
      this.wishlistService.add_to_wishlist(this.user.phone, this.user.membership_no, this.user.authentication_token, title_id).then(data => {
        //return data;
      });
    }); 
  }


  search(){
    this.nav.push(SearchPage);
  }
}
