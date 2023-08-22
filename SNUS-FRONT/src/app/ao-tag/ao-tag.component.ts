import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TagService} from "../service/tag.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ao-tag',
  templateUrl: './ao-tag.component.html',
  styleUrls: ['./ao-tag.component.css']
})
export class AoTagComponent {
  analogInputForm: FormGroup;
  ai: boolean = true;

  constructor(private fb: FormBuilder, private tagService:TagService, private router:Router) {
    this.analogInputForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      ioAddress: ['', Validators.required],
      initialValue: [0, Validators.required],
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
      this.tagService.createAO(this.analogInputForm.value).subscribe(
        (data) => {
          this.router.navigate(['/tagDisplay']);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }

}
