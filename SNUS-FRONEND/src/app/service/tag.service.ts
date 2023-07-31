import { Injectable } from '@angular/core';
import {User, UserDto} from "../model/User";
import {Observable} from "rxjs";
import {DigitalOutput, DigitalOutputDto} from "../model/DigitalOutput";
import {HttpClient} from "@angular/common/http";
import {TagDto} from "../model/TagDto";
import {DigitalInput, DigitalInputDto} from "../model/DigitalInput";
import {AnalogInput, AnalogInputDto} from "../model/AnalogInput";
import {AnalogOutput, AnalogOutputDto} from "../model/AnalogOutput";

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  createDO(digitalOutput:DigitalOutputDto) : Observable<DigitalOutput>{
    const url = 'https://localhost:8081/api/DigitalOutput/new';
    return this.http.post<DigitalOutput>(url, digitalOutput);
  }
  createDI(digitalInput:DigitalInputDto) : Observable<DigitalInput>{
    const url = 'https://localhost:8081/api/DigitalInput/new';
    return this.http.post<DigitalInput>(url, digitalInput);
  }
  createAI(analogInput:AnalogInputDto) : Observable<AnalogInput>{
    const url = 'https://localhost:8081/api/AnalogInput/new';
    return this.http.post<AnalogInput>(url, analogInput);
  }
  createAO(analogOutput:AnalogOutputDto) : Observable<AnalogOutput>{
    const url = 'https://localhost:8081/api/AnalogOutput/new';
    return this.http.post<AnalogOutput>(url, analogOutput);
  }

  findAllByDateRange(){
    const url = 'https://localhost:8081/api/Reports/FindAllTagsByDateRange?from=2021-07-29T22%3A21%3A09.507Z&to=2024-07-29T22%3A21%3A09.507Z&sort=1';
    return this.http.get<TagDto[]>(url);
  }
}
