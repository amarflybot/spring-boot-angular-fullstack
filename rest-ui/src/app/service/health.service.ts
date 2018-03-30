import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HealthService {

  constructor(private httpclient: HttpClient) {
  }

  status(): Observable<any> {
    return this.httpclient.get('/actuator/health');
  }

}
