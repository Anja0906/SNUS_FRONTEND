import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {

  constructor(private router: Router) { }
  signOut() {
    this.router.navigate(['/']);
  }

  createTag() {
    this.router.navigate(['createTag']);
  }

  reports() {
    this.router.navigate(['reports']);
  }
}
