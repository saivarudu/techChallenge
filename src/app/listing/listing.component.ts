import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  customerData: any;
  searchText: any;
  view: any = 'card';
  constructor(private appService: AppServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.appService.getCustomers().subscribe((success) => {
      this.customerData = success;
    });
  }
  create() {
    this.router.navigate([`update/new`]);
  }
}
