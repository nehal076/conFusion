import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  constructor(
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL) { }

  leaders: Leader[];
  errMess: string;

  ngOnInit() {
    this.leaderService.getLeaders().subscribe(leaders => this.leaders = leaders,
      errmess => this.errMess = <any>errmess);
  }

}
