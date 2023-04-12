import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/modals';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit ,OnDestroy {
  gameRating=0;
  gameId!:string;
  routeSub!:Subscription;
  gameSub!:Subscription;
  game!:Game;


  constructor(private activatedRoute:ActivatedRoute,
              private httpService:HttpService,
              private sanitizer: DomSanitizer
              ){}
  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params:Params)=>{
      this.gameId= params['id'];
      this.getGameDetails(this.gameId);
    })

  }
 
  ngOnDestroy(): void {
    if(this.gameSub) this.gameSub.unsubscribe();
    if(this.routeSub) this.routeSub.unsubscribe();
  }



getColor(value:number):string{

if(value>75) return '#5ee432';
else if(value>50 && value < 75) return '#fffa50';
else if(value>30 && value < 50) return '#f7aa38';
else return '#ef4655';

}


public getGameDetails(id:string):void{
  this.gameSub = this.httpService.getGameDetails(id).subscribe((gameResp:Game)=>{
    if(gameResp) this.game = gameResp;
    setTimeout(()=>{
      this.gameRating = this.game.metacritic;
    },1000);
  })
}
}
