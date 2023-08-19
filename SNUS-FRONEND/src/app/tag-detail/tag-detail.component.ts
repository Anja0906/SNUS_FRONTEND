import { Component } from '@angular/core';
import {TagService} from "../service/tag.service";
import {ActivatedRoute, Router} from "@angular/router";

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
    this.tagService.turnOnOff(this.tag.id).subscribe(response => {
      console.log("Switched!")
      }
    );
  }
}
