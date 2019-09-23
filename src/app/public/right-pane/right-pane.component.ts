import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
//import { };

@Component({
  selector: 'app-right-pane',
  templateUrl: './right-pane.component.html',
  styleUrls: ['./right-pane.component.css']
})
export class RightPaneComponent implements OnInit {
  private displayData : any;
  constructor(private dataService:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.dataService.getPost(data['postId']).subscribe(data => {
        // Read the result field from the JSON response.
        this.displayData = data;
        console.log(data);
      });
    });
  
  }

}

