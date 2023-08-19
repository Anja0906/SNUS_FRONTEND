import {Injectable} from '@angular/core';
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
    const url = 'https://localhost:8081/api/Reports/FindAllTagsByDateRange?from=2021-07-29T22%3A21%3A09&to=2024-07-29T22%3A21%3A09&sort=1';
    return this.http.get<TagDto[]>(url);
  }

  async getAiTagByName(name:string): Promise<AnalogInput|undefined>{
    return await this.http.get<AnalogInput>('https://localhost:8081/api/AnalogInput/getByName/'+name).toPromise();
  }
  async getAoTagByName(name:string): Promise<AnalogOutput | undefined>{
    return await this.http.get<AnalogOutput>('https://localhost:8081/api/AnalogOutput/getByName/'+name).toPromise();
  }
  async getDiTagByName(name:string): Promise<DigitalInput | undefined>{
    return await this.http.get<DigitalInput>('https://localhost:8081/api/DigitalInput/getByName/'+name).toPromise();
  }
  async getDoTagByName(name:string): Promise<DigitalOutput | undefined>{
    return await this.http.get<DigitalOutput>('https://localhost:8081/api/DigitalOutput/getByName/' + name).toPromise();
  }
  async getAIsByName(name:string): Promise<AnalogInput[] | undefined>{
    return await this.http.get<AnalogInput[]>('https://localhost:8081/api/AnalogInput/getAllByName/' + name + "/0").toPromise();
  }
  turnOnOff(id:number){
    return this.http.put('https://localhost:8081/api/AnalogInput/turnOnOff/' + id, {});
  }
}
