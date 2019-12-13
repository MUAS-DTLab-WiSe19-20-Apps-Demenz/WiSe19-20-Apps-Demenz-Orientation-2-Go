import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  bringMeHomeActivated: any;
  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    this.route.data.subscribe((res) => {this.bringMeHomeActivated = res;
    },
    error => {
      console.log('ERROR', error);
    });
  }

}
