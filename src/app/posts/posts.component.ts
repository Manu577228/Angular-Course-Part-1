import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title: string = "List of Posts"
  messagePost: string = "Message Post";

  postParentMessage: string = "Message coming from Posts Parent";

  childMessage: string = 'From Child Component';

  outputChildMessage: string = 'Message from Child Component Via Output';

  @Input() fromParent: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {   
  }

sendMessage(){
  // console.log('clicked');
  this.messageEvent.emit(this.outputChildMessage);
}

}
