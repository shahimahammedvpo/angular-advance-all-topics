import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
username='';
private route=inject(ActivatedRoute);

ngOnInit(): void {
  this.username=this.route.snapshot.paramMap.get('username')??'';
}
}
