import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class FuturesModel{
  constructor(
      public id:string,
      public futuresGroup:string,
      public futuresMargin:string,
      public futuresName:string,
      public futuresSymbol:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
      private httpClient:HttpClient
  ) {
  }

  getFutures() {
    console.log("test call");
    return this.httpClient.get<FuturesModel[]>('http://localhost:9000/futures/all');
  }

  public deleteContract(contract) {
    return this.httpClient.delete<FuturesModel>("http://localhost:9000/futures/delete" + "/"+ contract.id);
  }

  public createContract(contract) {
    return this.httpClient.post<FuturesModel>("http://localhost:9000/futures/create", contract);
  }
}
