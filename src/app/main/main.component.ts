import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../shared/services/landing-fix.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {



  constructor(
    private fix: LandingFixService
  ) { }

  ngOnInit() {
    this.fix.addFix();
  }

  ngOnDestroy() {
    this.fix.removeFix();
  }

}


