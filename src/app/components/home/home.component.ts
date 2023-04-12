import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/modals';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
 public sort!:string;
 public games!:Array<Game>;
 private routeSub!:Subscription;
 private gamesList!:Subscription;
 
constructor(private httpService:HttpService,private activatedRoute:ActivatedRoute,private router:Router) {}
  ngOnInit(): void {
   this.routeSub =  this.activatedRoute.params.subscribe((params:Params)=>{
      if(params['game-search']){
        this.searchGames('metacrit',params['game-search']);
      }
      else {
        this.searchGames('metacrit');
      }
    })
  }

  ngOnDestroy():void{
    if(this.routeSub) this.routeSub.unsubscribe();
    if(this.gamesList) this.gamesList.unsubscribe();
  }

  public searchGames(sort:string,search?:string):void{
   this.gamesList = this.httpService.getGameList(sort,search).subscribe((gameList:APIResponse<Game>)=>{
      if(gameList!=null){
        if(gameList.results.length > 0 ) this.games = gameList.results;
      }
    })
  }


  public openGameDetail(id:string):void{
    this.router.navigate(['details',id]);
  }


}
