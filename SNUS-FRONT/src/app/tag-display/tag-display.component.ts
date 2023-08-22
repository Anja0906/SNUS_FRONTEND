import {Component, NgZone, OnInit} from '@angular/core';
import {TagDto} from "../model/TagDto";
import {TagService} from "../service/tag.service";
import {Router} from "@angular/router";
import {TagHubServiceService} from "../service/tag-hub-service.service";

@Component({
  selector: 'app-tag-display',
  templateUrl: './tag-display.component.html',
  styleUrls: ['./tag-display.component.css']
})
export class TagDisplayComponent implements OnInit{

  data: TagDto[] = []

  constructor(private tagService: TagService, private router: Router, private tagHub:TagHubServiceService,private ngZone: NgZone) {
    this.getData()
  }

  ngOnInit() {
    const hubConnection = this.tagHub.getConnection();

    hubConnection.on('ReceiveTag', (tag) => {
      this.ngZone.run(() => {
        // Refresh the page or perform any other action
        this.refreshPage();
      });
    });
  }

  refreshPage() {
    // Implement your refresh logic here
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
