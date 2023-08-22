import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AnalogInput} from "../model/AnalogInput";
import {Alarm, AlarmDto} from "../model/Alarm";
import {TagDto} from "../model/TagDto";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }

  async getAlarmsByDateRange(from:string, to:string, sort:number): Promise<Alarm[]|undefined>{
    const apiUrl =
      'https://localhost:8081/api/Reports/FindAllAlarmsByDateRange?from=' + from +
      '&to=' + to + '&sort=' + sort;
    return await this.http.get<Alarm[]>(apiUrl).toPromise();
  }
  async getAlarmsByPriority(priority:number, sort:number): Promise<Alarm[]|undefined>{
    const apiUrl =
      'https://localhost:8081/api/Reports/FindAllAlarmsByPriority?priority=' + priority +
      '&sortType=' + sort;
    return await this.http.get<Alarm[]>(apiUrl).toPromise();
  }
  async getAllTagsByDateRange(from:string, to:string, sort:number): Promise<TagDto[]|undefined>{
    const apiUrl =
      'https://localhost:8081/api/Reports/FindAllTagsByDateRange?from=' + from +
    '&to=' + to + '&sort=' + sort;
    return await this.http.get<TagDto[]>(apiUrl).toPromise();
  }
  async getLastAiTags(sort:number): Promise<TagDto[]|undefined>{
      const apiUrl =
        'https://localhost:8081/api/Reports/FindLastAITags?sort=' + sort;
      return await this.http.get<TagDto[]>(apiUrl).toPromise();
  }
  async getLastDiTags(sort:number): Promise<TagDto[]|undefined>{
        const apiUrl =
          'https://localhost:8081/api/Reports/FindLastDITags?sort=' + sort;
        return await this.http.get<TagDto[]>(apiUrl).toPromise();
  }
  async findTagsByName(type:number, sort:number, name:string): Promise<TagDto[]|undefined>{
        const apiUrl =
          'https://localhost:8081/api/Reports/FindTagsByName?type='+ type +
          '&sort='+ sort+'&name=' + name;
        return await this.http.get<TagDto[]>(apiUrl).toPromise();
  }

}
