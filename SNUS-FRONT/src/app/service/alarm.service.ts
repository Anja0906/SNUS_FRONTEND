import { Injectable } from '@angular/core';
import {Alarm, AlarmDto} from "../model/Alarm";
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
  createAlarm(alarm: AlarmDto) {
    const url = 'https://localhost:8081/api/Alarm/new'
    return this.http.post<Alarm>(url, alarm);
  }

  async getAlarmsForAi(aiId: number) {
    const apiUrl = 'https://localhost:8081/api/Alarm/getByAnalogId/' + aiId;
    return await this.http.get<Alarm[]>(apiUrl).toPromise();
  }

  deleteAlarm(id: number) {
    const url = 'https://localhost:8081/api/Alarm/delete/' + id;
    return this.http.delete(url);
  }
}
