import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { APIResponse, Game } from 'src/app/modals';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }

  getGameList(ordering:string,search?:string) : Observable<APIResponse<Game>>{

    // let parms = new HttpParams().set('ordering',ordering);
    // if(search) parms = new HttpParams().set('ordering',ordering).set('search',search);


    return this.httpClient.get<APIResponse<Game>>(`${environment.Base_Url}/games`,{});
    
  }

  getGameDetails(id:string,photoUrl?:string): Observable<Game>{
  const gameInfoReq = this.httpClient.get(`${environment.Base_Url}/games/${id}`);
  const gameTrailersReq = this.httpClient.get(`${environment.Base_Url}/games/${id}/movies`);
  const gameScreenShotReq = this.httpClient.get(`${environment.Base_Url}/games/${id}/screenshots`);

  return forkJoin({
    gameInfoReq,
    gameTrailersReq,
    gameScreenShotReq,
  }).pipe(
    map((resp:any)=>{
      return{
        ...resp['gameInfoReq'],
        screenshots:resp['gameScreenShotReq']?.results,
        trailers: resp['gameTrailersReq']?.results,
      };
    })
  );


  }

}
