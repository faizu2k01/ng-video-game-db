import { Component, Input, OnInit } from '@angular/core';
import { Game, GameDetailDTO } from 'src/app/modals';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {
 
  @Input() game!:GameDetailDTO;
  constructor(){}
 
 
  ngOnInit(): void {
    
  }


  


}
