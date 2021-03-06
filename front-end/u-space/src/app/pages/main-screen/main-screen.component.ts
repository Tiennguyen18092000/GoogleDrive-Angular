import { Component, OnInit } from '@angular/core';
import { Folder } from 'src/app/models/folder.model';

import {DataService} from '../../services/data/data.service';
import { ActivatedRoute } from '@angular/router';
import { Iicon } from 'src/app/models/list.model';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  
  db = [];
  db_1 = [];
  db_2 = [];
  constructor(private dataService: DataService,) { }

  page:Iicon;


  ngOnInit(): void {
    this.db = this.dataService.getDataBase1();
    this.db_1 = this.dataService.getDataBase2();
    this.db_2 = this.dataService.getDataBase2();

  }
}
