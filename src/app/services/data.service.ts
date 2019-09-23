import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {
  constructor(public http:HttpClient) {
    console.log('Data service connected');
   }

   getPosts(){
     return this.http.get('https://jsonplaceholder.typicode.com/posts')
   }

   getPost(postId){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+ postId)
  }
  
  createPost(postId) {
    console.log("test",postId);
    return this.http.post('https://jsonplaceholder.typicode.com/posts/',postId);
  }

}
