import { Component, OnInit } from '@angular/core';
import { players } from '../common/playerNames';
import { aa } from '../common/schedule';
import { StatusEnum } from '../common/scheduleEnum';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  public statusEnum = StatusEnum;
  public scheduleArr: aa[] = [
    {
      date: '13-FEB-24',
      player1: { names: players['an'], status: StatusEnum.won },
      player2: { names: players['am'], status: StatusEnum.lost },
    },
    {
      date: '13-FEB-24',
      player2: { names: players['ak'], status: StatusEnum.lost },
      player1: { names: players['al'], status: StatusEnum.won },
    },
    {
      date: '14-FEB-24',
      player2: { names: players['ai'], status: StatusEnum.won },
      player1: { names: players['aj'], status: StatusEnum.lost },
    },
    {
      date: '14-FEB-24',
      player2: { names: players['ah'], status: StatusEnum.lost },
      player1: { names: players['ae'], status: StatusEnum.won },
    },
    {
      date: '20-FEB-24',
      player2: { names: players['ad'], status: StatusEnum.won },
      player1: { names: players['aa'], status: StatusEnum.lost },
    },
    {
      date: '21-FEB-24',
      player2: { names: players['ag'], status: StatusEnum.lost },
      player1: { names: players['af'], status: StatusEnum.won },
    }
    
  ];

  constructor() {}

  ngOnInit(): void {}
}