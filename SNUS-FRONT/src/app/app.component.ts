import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {TagHubServiceService} from "./service/tag-hub-service.service";
import {Router} from "@angular/router";
import {SignalIRService} from "./service/signal-ir.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'SNUS-FRONTEND';
  constructor(private _snackBar: MatSnackBar, private tagHub: SignalIRService, private router:Router) {
  }
  openSnackbar() {
    const snackBarRef = this._snackBar.open('New alarm!!!', 'Show more', {
      duration: 5000,
      panelClass: ['custom-snackbar'], // Add custom CSS class
    });

    snackBarRef.onAction().subscribe(() => {
      this.router.navigate(['alarms'])
    });
  }
  ngOnInit() {
    const hubConnection = this.tagHub.getConnection();
    hubConnection.on('ReceiveAlarm', (tag) => {
      this.openSnackbar()
    });
  }
}
