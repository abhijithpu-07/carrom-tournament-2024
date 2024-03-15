import { Component, OnInit } from '@angular/core';
import { players } from '../common/playerNames';
import { aa } from '../common/schedule';
import { StatusEnum } from '../common/scheduleEnum';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],

})
export class HomepageComponent implements OnInit {
 
  public statusEnum = StatusEnum;
  public scheduleArr: aa[] = [
    {
      date: '12-MAR-24',
      player1: { names: players['af'], status: StatusEnum.won },
      player2: { names: players['ab'], status: StatusEnum.lost },
    },
    {
      date: '13-MAR-24',
      player2: { names: players['ad'], status: StatusEnum.lost },
      player1: { names: players['al'], status: StatusEnum.won },
    },
  ];
  

  constructor() { }

  ngOnInit(): void {
  }
  

}


