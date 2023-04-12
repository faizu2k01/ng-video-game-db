import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>
     {
          req = req.clone({
            
            setParams:{
                key:'7845ceef19d149ae8337f7a9b8edb05c',
            }

        });

        return next.handle(req);
    }
}