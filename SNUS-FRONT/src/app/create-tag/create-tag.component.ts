import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.css']
})
export class CreateTagComponent {
  do: boolean = true;
  di : boolean = false;
  ai: boolean = false;
  ao: boolean = false;

  yourForm: FormGroup;
  selectedOption: string = "";

  constructor(private fb: FormBuilder) {
    this.yourForm = this.fb.group({
      selectedOption: ['Digital output', Validators.required],
    });
  }

  resetAll(){
    this.do = false;
    this.di = false;
    this.ai = false;
    this.ao = false;
  }

  onOptionSelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedOption = target.value;
    this.resetAll();
    this.selection();
    console.log('Selected Option:', this.selectedOption);
  }

  selection(){
    if (this.selectedOption=="Analog input"){
      this.ai = true;
    }
    else if (this.selectedOption=="Digital input"){
      this.di = true;
    }
    else if (this.selectedOption=="Digital output"){
      this.do = true;
    }
    else if (this.selectedOption=="Analog output"){
      this.ao = true;
    }
  }

}
