import { NgModule } from '@angular/core';
import { LiveScoreService } from './services/live-score.service';
import { CricketCommentaryComponent } from './cricket-commentary/cricket-commentary.component';
import { CricketLiveComponent } from './cricket-live/cricket-live.component';
import { CricketNewsComponent } from './cricket-news/cricket-news.component';
import { CricketScorecardComponent } from './cricket-scorecard/cricket-scorecard.component';
import { CricketViewComponent } from './cricket-view.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IPLStatsComponent } from './ipl-stats/ipl-stats.component';
import { IPLStatsService } from './ipl-stats/ipl-stats.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CricBuzzDataService } from './services/cricbuzz-data.service';

@NgModule({
    declarations: [
        CricketCommentaryComponent,
        CricketLiveComponent,
        CricketNewsComponent,
        CricketScorecardComponent,
        CricketViewComponent,
        IPLStatsComponent
    ],
    imports: [
        CommonModule,
        // FormsModule,
        HttpClientModule,
        RouterModule.forChild([
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: CricketViewComponent
            },
            {
                path: 'livecommentary/:matchId',
                component: CricketCommentaryComponent
            }
        ])
    ],
    providers: [
        LiveScoreService,
        IPLStatsService,
        CricBuzzDataService
    ]
  })
  export class CricketModule { }
