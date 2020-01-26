import { Component, OnInit } from '@angular/core';
import { IPost } from './post.interface'
import { slideUp, fade } from './animations'

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
  animations: [slideUp, fade]
}) 
export class SocialPostsComponent implements OnInit {

  posts: IPost[];
  addingThought: boolean = false;

  constructor() { 
    this.posts = [
      {title:'Title 1', thought:'Thought 1' },
      {title:'Title 2', thought:'Thought 2' },
      {title:'Title 3', thought:'Thought 3' }
    ]
  }
  
  onSubmit(post:IPost) {
    console.log('onSubmit called');
    this.posts.push(post);
    this.addingThought = false;
  }
  onDelete(index: number) {
    console.log('onDelete Called');
    this.posts.splice(index, 1); 
  }
  addNewThought(e: Event) {
    let target = e.target as HTMLElement
    target.blur();
    this.addingThought = true;
  }
  ngOnInit() {
  }

}
