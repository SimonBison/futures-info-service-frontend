import { Component, OnInit } from '@angular/core';
import {FuturesModel, HttpClientService} from "../service/http-client.service";


@Component({
  selector: 'app-add-future',
  templateUrl: './add-future.component.html',
  styleUrls: ['./add-future.component.css']
})
export class AddFutureComponent implements OnInit {

  user: FuturesModel = new FuturesModel("","","","", "");

  constructor(
      private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
  }

  createContract(): void {
    this.httpClientService.createContract(this.user)
        .subscribe( data => {
          alert("FuturesModel created successfully.");
        });

  };

}