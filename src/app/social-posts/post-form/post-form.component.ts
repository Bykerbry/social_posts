import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPost } from '../post.interface'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<any>();

  constructor() { }

  submitPost(newTitle: string, newThought: string):void {
    console.log('submitPost called');
    console.log(newTitle, newThought);
    console.log({title: newTitle, thought: newThought}); 
    this.submitted.emit({title: newTitle, thought: newThought}); 
  }  

  ngOnInit() {
  }

}
