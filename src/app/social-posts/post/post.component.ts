import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from '../post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: IPost
  @Input() divider: boolean
  @Input() currentIndex: number
  @Output() deleted = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  deletePost():void {
    console.log(this.currentIndex);  
    this.deleted.emit(this.currentIndex) 
  }


}
