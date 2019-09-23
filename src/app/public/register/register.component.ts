import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private formObject: Post = new Post('','','');
  

  constructor(private postVar:DataService) { }

  ngOnInit() {
  }

  submitForm(){      
    console.log(JSON.stringify(this.formObject));

    this.postVar.createPost(this.formObject).subscribe( data => {        
    console.log(data);
    }); 

    
}
}
