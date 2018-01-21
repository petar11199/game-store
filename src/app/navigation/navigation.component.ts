import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{
  dropDownActive: boolean = false;

  dropDown() {
    this.dropDownActive = !this.dropDownActive;
  }

}
