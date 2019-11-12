import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { AppCommonServiceService } from '../../../app-common-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: any;

  constructor(private appCommonService: AppCommonServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: ToasterService) { }

  public config: ToasterConfig =
    new ToasterConfig({
        timeout: 2000
    });
  ngOnInit() {
  }

  update(custData) {
    this.appCommonService.storeCustomerNode(custData);
    this.router.navigate([`/update/${custData.firstName}`]);
  }
  delete(custName) {
    this.toasterService.pop('error', 'Deleted', custName + 'Node has been successfully deleted');
  }
}
