import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-qoute-details',
  templateUrl: './qoute-details.page.html',
  styleUrls: ['./qoute-details.page.scss'],
})
export class QouteDetailsPage implements OnInit {
  qoutes;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService,public authService: AuthService) { }

  ngOnInit() {
    const id= this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.dataService.getData(`qoutes/${id}`).subscribe( data => {
      console.log(data);
      this.qoutes=data;
    })
  }

}
