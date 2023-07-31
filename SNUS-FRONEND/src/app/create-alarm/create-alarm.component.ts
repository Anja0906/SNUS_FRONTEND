import { Component } from '@angular/core';

@Component({
  selector: 'app-create-alarm',
  templateUrl: './create-alarm.component.html',
  styleUrls: ['./create-alarm.component.css']
})
export class CreateAlarmComponent {
  formData = {
    name: '',
    // Add other form fields here as needed
  };
  constructor() {
    this.formData.name = ""
  }

  submitForm() {
    // Implement your form submission logic here
    console.log('Form data:', this.formData);
  }
}
