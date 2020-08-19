import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { visibility, flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    visibility(),
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {
  
  constructor(
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  leaders: Leader[];
  errMess: string;
  visibility = 'shown';

  ngOnInit() {
    this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders,
      errmess => this.errMess = <any>errmess);
  }

}
