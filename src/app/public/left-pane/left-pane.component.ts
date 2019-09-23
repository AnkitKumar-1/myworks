import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';
import { HttpClientModule } from '@angular/common/http'; 


@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.css']
})

export class LeftPaneComponent implements OnInit {
  private display : any;
  constructor(private dataService:DataService) { 
    console.log('Data service Connected..');
   
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe(data => {
      // Read the result field from the JSON response.
      this.display = data;
      console.log(data);
    });
  }

}
