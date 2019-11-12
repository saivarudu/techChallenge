import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppCommonServiceService {
  custNode: any;
  constructor() { }

  storeCustomerNode(x) {
    this.custNode = x;
  }
  getCustomerNode() {
    return this.custNode;
  }
}
