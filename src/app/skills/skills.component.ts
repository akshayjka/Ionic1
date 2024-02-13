import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  openGit(){
    console.log("the view project is working");
    const url = 'https://github.com/akshayjka/';
    window.open(url, '_blank');
  }

}
