import { Injectable } from '@angular/core';
import {HubConnection, HubConnectionBuilder} from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class TagHubServiceService {
  private hubConnection: HubConnection;

  constructor() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:8081/hubs/tagHub') // Replace with your server URL
      .build();

    this.hubConnection.start().catch(err => console.error(err));
  }
  getConnection() {
    return this.hubConnection;
  }
}
