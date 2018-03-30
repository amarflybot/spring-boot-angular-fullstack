import {Component, OnInit} from '@angular/core';
import {HealthService} from '../service/health.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  status: string;

  constructor(private healthService: HealthService) {
  }

  ngOnInit() {
    this.healthService.status().subscribe(data => {
      this.status = data.status;
    });
  }

}
