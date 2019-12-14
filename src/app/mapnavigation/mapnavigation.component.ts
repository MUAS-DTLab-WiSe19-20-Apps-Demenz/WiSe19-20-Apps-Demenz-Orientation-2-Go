import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mapnavigation',
  templateUrl: './mapnavigation.component.html',
  styleUrls: ['./mapnavigation.component.css']
})
export class MapnavigationComponent implements OnInit {

  bringMeHomeActivated: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((res) => {this.bringMeHomeActivated = res;
    },
    error => {
      console.log('ERROR', error);
    });
  }

}
