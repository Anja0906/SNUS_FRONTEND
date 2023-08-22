import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TagService} from "../service/tag.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ai-tag',
  templateUrl: './ai-tag.component.html',
  styleUrls: ['./ai-tag.component.css']
})
export class AiTagComponent {

  analogInputForm: FormGroup;
  ai: boolean = true;

  constructor(private fb: FormBuilder, private tagService:TagService, private router:Router) {
    this.analogInputForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      ioAddress: ['', Validators.required],
      driver: [''],
      scanTime: [0, Validators.min(0)],
      dateTime: [null, Validators.required],
      lowLimit: [0, Validators.required],
      highLimit: [0, Validators.required],
      units: [''],
      value: [0, Validators.required],
    });
  }

  onSubmit() {
    if (this.analogInputForm.valid) {
      console.log(this.analogInputForm);
      this.tagService.createAI(this.analogInputForm.value).subscribe(response=> {
        console.log(response)
          this.router.navigate(['/tagDisplay']);
        }
      );
    }
  }
}
