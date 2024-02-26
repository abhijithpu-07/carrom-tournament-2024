import { Component, OnInit } from '@angular/core';
import { players } from '../common/playerNames';
import { aa } from '../common/schedule';
import { StatusEnum } from '../common/scheduleEnum';

@Component({
  selector: 'app-semi',
  templateUrl: './semi.component.html',
  styleUrls: ['./semi.component.css']
})
export class SemiComponent implements OnInit {
  public statusEnum = StatusEnum;
  public scheduleArr: aa[] = [
    {
      date: '27-FEB-24',
      player1: { names: players['ad'], status: StatusEnum.won },
      player2: { names: players['ae'], status: StatusEnum.lost },
    },
    {
      date: '28-FEB-24',
      player2: { names: players['an'], status: StatusEnum.lost },
      player1: { names: players['al'], status: StatusEnum.won },
    },
    {
      date: '28-FEB-24',
      player2: { names: players['ai'], status: StatusEnum.won },
      player1: { names: players['af'], status: StatusEnum.lost },
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
