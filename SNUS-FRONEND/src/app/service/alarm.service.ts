import { Injectable } from '@angular/core';
import {Alarm} from "../model/Alarm";
import {HttpClient} from "@angular/common/http";
import {AnalogInput} from "../model/AnalogInput";

@Injectable({
  providedIn: 'root'
})
export class AlarmService {

  constructor(private http: HttpClient) { }

  async getAll(): Promise<Alarm[]|undefined>{
    const apiUrl =
      'https://localhost:8081/api/Alarm/all';
    return await this.http.get<Alarm[]>(apiUrl).toPromise();
  }

  async getAiFromId(analogId: number | undefined) {
    const apiUrl =
      'https://localhost:8081/api/AnalogInput/get/' + analogId;
    return await this.http.get<AnalogInput>(apiUrl).toPromise();
  }
}
