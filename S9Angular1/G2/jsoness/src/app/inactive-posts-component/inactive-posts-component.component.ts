import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-inactive-posts-component',
  templateUrl: './inactive-posts-component.component.html',
  styleUrls: ['./inactive-posts-component.component.scss']
})
export class InactivePostsComponentComponent implements OnInit {
  inactivePosts: Post[]= [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.inactivePosts = posts.filter(post => post.active);
    });
  }
}
