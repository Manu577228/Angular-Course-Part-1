import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.css']
})
export class PostslistComponent {

  @Input() fromPostParent:string;

}
