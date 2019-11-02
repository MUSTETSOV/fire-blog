import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {

  constructor( private fix: LandingFixService) { }

  ngOnInit() {
    this.fix.addFix();
  }

  ngOnDestroy() {
    this.fix.removeFix();
  }

}
