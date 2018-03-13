import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  chart = [];

  constructor() { }

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Sales',
            fillColor: 'rgba(220, 220, 220, 0.2)',
            backgroundColor: 'rgba(0,0,0,.2)',
            borderColor: 'rgba(0,0,0,1)',
            data: [0, 20, 9, 25, 115, 25, 18]
        }]


    },
    options: {
        maintainAspectRatio: true,
        legend: {
            display: false
        },

        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: true
            }]
        },
        elements: {
            line: {
                tension: 0.00001,
                // tension: 0.4,
                borderWidth: 1,
                backgroundColor: 'rgba(255,255,255,1)'
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
    });
  }
}
