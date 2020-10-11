import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getLeaders(): Leader[] {
      return LEADERS;
    }
  
    getLeader(id: string): Leader {
      return LEADERS.filter((leader) => (leader.id === id))[0];
    }
  
    getFeaturedLeader(): Leader {
      return LEADERS.filter((leader) => leader.featured)[0];
    }  
}
