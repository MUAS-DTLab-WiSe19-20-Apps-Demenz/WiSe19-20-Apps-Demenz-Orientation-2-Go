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
    if(localStorage.getItem('housenumber') == null)
        localStorage.setItem('housenumber', "");

    if(localStorage.getItem('place') == null)
        localStorage.setItem('place', "");

    if(localStorage.getItem('postcode') == null)
        localStorage.setItem('postcode', "");

    if(localStorage.getItem('street') == null)
        localStorage.setItem('street', "");
    
    console.log(localStorage.getItem('housenumber'));
    this.route.data.subscribe((res) => {this.bringMeHomeActivated = res;
    },
    error => {
      console.log('ERROR', error);
    });
  }

}
