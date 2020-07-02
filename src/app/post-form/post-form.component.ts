import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  title: '';
  text: '';

  @Output() createdPost: EventEmitter<Post> = new EventEmitter();
  @ViewChild('titleInput') inputRef: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  addPost(): void {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        text: this.text,
        title: this.title,
      };

      this.createdPost.emit(post);

      this.title = this.text = '';
    }
  }

  focusTitle(): void {
    this.inputRef.nativeElement.focus();
  }
}
