import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TagService} from "../service/tag.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AnalogInput} from "../model/AnalogInput";
import {AlarmService} from "../service/alarm.service";

@Component({
  selector: 'app-create-alarm',
  templateUrl: './create-alarm.component.html',
  styleUrls: ['./create-alarm.component.css']
})
export class CreateAlarmComponent implements OnInit{
  alarmForm: FormGroup;
  aiId : string = " ";
  private analogInput: AnalogInput | undefined;

  constructor(private fb: FormBuilder, private tagService : TagService, private router: Router,
              private route: ActivatedRoute, private alarmService:AlarmService) {
    this.alarmForm = this.fb.group({
      threshHold: [0, Validators.required],
      message: ['', Validators.required],
      priority: ['', Validators.required],
      type: ['',Validators.required],
    });
    this.route.params.subscribe(params => {
      this.aiId = params['id'];
    });
  }

  ngOnInit(): void {
    this.initData()
  }

  async initData(){
    this.analogInput = await this.tagService.getAiTagById(this.aiId);
    console.log(this.analogInput)
  }

  async onSubmit() {
    if (this.alarmForm.valid) {
      console.log(this.alarmForm.value);
      let alarmDto = {
        threshHold: this.alarmForm.value.threshHold,
        message: this.alarmForm.value.message,
        analogId: this.analogInput?.id,
        priority: this.alarmForm.value.priority,
        type: this.alarmForm.value.type,
        timeStamp: new Date()
      }
      this.alarmService.createAlarm(alarmDto).subscribe(result =>
        this.router.navigate(['AiAlarms', this.aiId])
      );
    }
  }
}
