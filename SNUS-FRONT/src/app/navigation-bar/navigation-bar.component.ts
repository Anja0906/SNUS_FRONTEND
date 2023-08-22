import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  logged:boolean=false;

  constructor(private router: Router, private userService:UserService) {
    let user = userService.getUser();
    if (user!=undefined){
      this.logged=true;
    }
  }
  signOut() {
    this.userService.loggedIn=false;
    this.router.navigate(['/']);
  }

  createTag() {
    this.router.navigate(['createTag']);
  }

  reports() {
    this.router.navigate(['reports']);
  }

  tagDisplay() {
    this.router.navigate(['tagDisplay']);
  }

  alarms() {
    this.router.navigate(['alarms']);
  }
}
