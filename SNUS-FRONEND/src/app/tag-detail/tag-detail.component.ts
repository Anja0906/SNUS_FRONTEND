import { Component } from '@angular/core';
import {TagService} from "../service/tag.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AnalogOutputDto} from "../model/AnalogOutput";
import {DigitalOutput, DigitalOutputDto} from "../model/DigitalOutput";

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.css']
})
export class TagDetailComponent {
  tag : any;
  ai: boolean = false;
  ao: boolean = false;
  do: boolean = false;
  di: boolean = false;
  type:string = '';
  name:string = '';
  isSwitchOn = false;
  numberOfAlarms: number = 5;
  p: number = 10;
  ready: boolean = false;
  edit: boolean = false;
  newValueOfTag: number = 0;


  constructor(private tagService : TagService, private route: ActivatedRoute, private router:Router) {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.name = params['name'];
    });
    this.initType();
  }

  async initType(){
    switch (this.type) {
      case "DI":
        this.di=true;
        this.tag = await this.tagService.getDiTagByName(this.name);
        this.isSwitchOn = this.tag.isActive;
        break;
      case "DO":
        this.do=true;
        this.tag = await this.tagService.getDoTagByName(this.name);
        break;
      case "AI":
        this.ai=true;
        this.tag = await this.tagService.getAiTagByName(this.name);
        this.isSwitchOn = this.tag.isActive;
        this.p = (this.tag.value/this.tag.highLimit)*100;
        this.ready=true;
        break;
      case "AO":
        this.ao=true;
        this.tag = await this.tagService.getAoTagByName(this.name);
        break;
      default:
        this.do=true;
        this.tag = await this.tagService.getDoTagByName(this.name);
    }
    console.log(this.tag);
  }


  createAlarm() {
    this.router.navigate(['createAlarm', this.tag.id])
  }

  turnOnOffScan() {
    if (this.ai){
      this.tagService.turnOnOffAnalog(this.tag.id).subscribe(() => {
          console.log("Switched!")
        }
      );
    }
    else if (this.di){
      this.tagService.turnOnOffDigital(this.tag.id).subscribe(() => {
          console.log("Switched!")
        }
      );
    }
  }

  editTag() {
    this.edit = true;
  }
  async confirmEdit() {
    this.edit = false;
    if (this.ao){
      let newTag = this.convertToDTOAnalog();
      this.tagService.updateAoTag(newTag, this.tag.id).subscribe(async result => {
        this.tag = await this.tagService.getAoTagByName(this.tag.name);
      });
    }
    else if (this.do){
      let newTag = this.convertToDTODigital(this.tag);
      this.tagService.updateDoTag(newTag, this.tag.id).subscribe(async result => {
        this.tag = await this.tagService.getDoTagByName(this.tag.name);
      });
    }

  }
  convertToDTOAnalog(){
    const analogOutputDto: AnalogOutputDto = {
      name: this.tag.name,
      description: this.tag.description,
      ioAddress: this.tag.ioAddress,
      initialValue: this.tag.initialValue,
      lowLimit: this.tag.lowLimit,
      highLimit: this.tag.highLimit,
      units: this.tag.units,
      value: this.newValueOfTag,
      dateTime: new Date()
    };
    return analogOutputDto;
  }
  convertToDTODigital(digitalOutput: DigitalOutput){
    const digitalOutputDto: DigitalOutputDto = {
      name: digitalOutput.name,
      description: digitalOutput.description,
      ioAddress: digitalOutput.ioAddress,
      initialValue: digitalOutput.initialValue,
      dateTime: new Date(),
      value: this.newValueOfTag
    };

    return digitalOutputDto;
  }
}
