import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TagService} from "../service/tag.service";
import {DigitalOutputDto} from "../model/DigitalOutput";

@Component({
  selector: 'app-do-tag',
  templateUrl: './do-tag.component.html',
  styleUrls: ['./do-tag.component.css']
})
export class DoTagComponent {
  digitalOutputForm: FormGroup;
  di: boolean = true;

  constructor(private formBuilder: FormBuilder, private tagService: TagService) {
    this.digitalOutputForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      ioAddress: ['', Validators.required],
      initialValue: ['', Validators.required],
      dateTime: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.digitalOutputForm.valid) {
      const digitalOutput: DigitalOutputDto = this.digitalOutputForm.value;
      console.log(digitalOutput);
      this.tagService.createDO(digitalOutput).subscribe(
        (data) => {
          console.log('Response:', data);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }

}
