import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getDataFromServer();
  }

  getDataFromServer() {
    const url = 'https://localhost:8081/api/Alarm/all'; // Replace with your API endpoint
    this.http.get(url).subscribe(
      (data) => {
        console.log('Response:', data);
        // Handle the received data here
      },
      (error) => {
        console.error('Error:', error);
        // Handle the error here
      }
    );
  }
}
