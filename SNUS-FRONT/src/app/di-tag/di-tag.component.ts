import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TagService} from "../service/tag.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-di-tag',
  templateUrl: './di-tag.component.html',
  styleUrls: ['./di-tag.component.css']
})
export class DiTagComponent {
  digitalOutputForm: FormGroup;
  di: boolean = true;

  constructor(private fb: FormBuilder, private tagService:TagService, private router:Router) {
    this.digitalOutputForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      ioAddress: ['', Validators.required],
      driver: [''],
      scanTime: [0, Validators.min(0)],
      isActive: [false],
      dateTime: [null, Validators.required],
      value: [0, Validators.required],
    });
  }

  onSubmit() {
    if (this.digitalOutputForm.valid) {
      this.tagService.createDI(this.digitalOutputForm.value).subscribe(
        (data) => {
          console.log(data)
          this.router.navigate(['/tagDisplay']);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }

}
