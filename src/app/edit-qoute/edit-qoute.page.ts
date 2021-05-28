import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-qoute',
  templateUrl: './edit-qoute.page.html',
  styleUrls: ['./edit-qoute.page.scss'],
})
export class EditQoutePage implements OnInit {
  model: any = {};

  constructor( private dataService: DataService
   ){ }

  ngOnInit() {
  }
  onEditQoute(f){
    console.log(f.value);
    this.dataService.postData(`qoutes`,f.value).subscribe( data=> {
      console.log(data);
      
    });
  }
}
