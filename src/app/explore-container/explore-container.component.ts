import { Component, Input, OnInit } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit{

  @Input() name?: string;
  isNightMode:any;
  isDarkMode: boolean = false;

  ngOnInit(): void {
    this.isDarkMode = this.darkService.isDarkModeSubject.value;
  }
  constructor(private darkService:DarkModeService)  {}

  // toggleDarkMode(): void {
  //   this.darkService.toggleDarkMode();
  //   this.isNightMode = this.darkService.isDarkModeSubject.value;
  //   console.log("the dark mode is executed")
  // }

  
  //  isDarkMode(): boolean {
  //   return this.darkService.isDarkModeSubject.value;
  // }

  toggleDarkMode(): void {
    this.darkService.toggleDarkMode();
  }

}
