import { Component } from '@angular/core';
import {TagDto} from "../model/TagDto";
import {TagService} from "../service/tag.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tag-display',
  templateUrl: './tag-display.component.html',
  styleUrls: ['./tag-display.component.css']
})
export class TagDisplayComponent {

  data: TagDto[] = [
    {
      name: 'Tag1',
      description: 'Description 1',
      dateTime: new Date(),
      value: 100,
      type: "AI"
    },
    {
      name: 'Tag2',
      description: 'Description 2',
      dateTime: new Date(),
      value: 200,
      type: "AO"
    },
  ];

  constructor(private tagService: TagService, private router: Router) {
    this.getData()
  }

  async getData(){
    await this.tagService.findAllByDateRange().subscribe(
      (data) => {
        console.log('Response:', data);
        this.data = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  displayTag(item: TagDto) {
    this.router.navigate(['/tag', item.name, item.type]);
  }
}
