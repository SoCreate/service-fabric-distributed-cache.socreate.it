import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  items = [
    {
      firstName: 'Jami',
      lastName: 'Lurock',
      avatarUrl: 'https://pbs.twimg.com/profile_images/479643327441018880/z9boZ906_400x400.jpeg',
      githubUrl: 'https://github.com/lurock',
      twitterUrl: 'https://twitter.com/maindg'
    }
  ];

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
