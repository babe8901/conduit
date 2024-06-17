import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserStatsService } from './+state/user-stats.service';
@Component({
  selector: 'cdt-roster',
  standalone: true,
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule]
})
export class RosterComponent implements OnInit {
  userStats$: Observable<any>;

  constructor(private userStatsService: UserStatsService) {}

  ngOnInit(): void {
    this.userStats$ = this.userStatsService.getUserStats();
  }
}
