import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
// import { RequestOptions } from '@angular/http';
import { model } from 'src/assets/model';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpconnectService {

  constructor(private http:HttpClient) { }
    result:model;
    data:model
    getheaders (){
          const header = new Headers()
          header.append('Content-type','application/json')
          return header;
    }

    // getRequestOptions():RequestOptions{
    //    const options = new RequestOptions()
    //    options.headers= this.getheaders();
    //    return options
    // }

    
 post(url:string,data:any){
    return this.http.post(url,data);
}

getdata(){
   return this.post('/api/complaint',this.data).pipe(map(res=>this.result))
}
}
