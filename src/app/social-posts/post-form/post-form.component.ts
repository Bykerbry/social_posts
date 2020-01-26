import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPost } from '../post.interface'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<IPost>(); 

  constructor() { }

  submitPost(newTitle: string, newThought: string):void { 
    this.submitted.emit({title: newTitle, thought: newThought}); 
  }  

  ngOnInit() {
  }

}
