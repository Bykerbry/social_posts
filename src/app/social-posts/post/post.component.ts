import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from '../post.interface';
import { fade } from '../animations'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  animations: [fade]
})
export class PostComponent implements OnInit {

  @Input() post: IPost
  @Input() divider: boolean
  @Input() currentIndex: number
  @Output() deleted = new EventEmitter<number>();

  upVoteCount: number = 0;

  constructor() { }

  ngOnInit() {
  }
  deletePost():void {
    console.log(this.currentIndex);  
    this.deleted.emit(this.currentIndex) 
  }
  upVotePost() {
    console.log(this.upVoteCount);
    this.upVoteCount++
  }



}
