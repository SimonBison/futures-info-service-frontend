import { Component, OnInit } from '@angular/core';
import {FuturesModel, HttpClientService} from "../service/http-client.service";


@Component({
  selector: 'app-futures',
  templateUrl: './futures.component.html',
  styleUrls: ['./futures.component.css']
})
export class FuturesComponent implements OnInit {

  futures:FuturesModel[];

  constructor(
      private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getFutures().subscribe(
        response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response)
  {
    this.futures=response;
  }

  deleteContract(contract: FuturesModel): void {
    this.httpClientService.deleteContract(contract)
        .subscribe( data => {
          this.futures = this.futures.filter(u => u !== contract);
        })
  };


}
