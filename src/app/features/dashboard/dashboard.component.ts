import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LineChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  

  // logout() {
  //   alert("Logging out...");
    
  // }
}
