import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'x';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get("api/AdUser").pipe(
        tap(result => console.log(result)
      )).subscribe();
  }

}
