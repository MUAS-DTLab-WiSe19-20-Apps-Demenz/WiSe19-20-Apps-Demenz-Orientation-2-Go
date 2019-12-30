import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-change-contact',
  templateUrl: './change-contact.component.html',
  styleUrls: ['./change-contact.component.css']
})
export class ChangeContactComponent implements OnInit {

  @Input() con : Contact;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
  }

  save() : void {
    this.router.navigate([`../contacts`], { relativeTo: this.route});
    this.con = null;
  }

}
