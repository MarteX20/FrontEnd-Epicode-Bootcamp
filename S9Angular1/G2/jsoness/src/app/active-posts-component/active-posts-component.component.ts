import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-active-posts-component',
  templateUrl: './active-posts-component.component.html',
  styleUrls: ['./active-posts-component.component.scss']
})
export class ActivePostsComponentComponent implements OnInit {
  activePosts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.activePosts = posts.filter(post => post.active);
    });
  }
}
