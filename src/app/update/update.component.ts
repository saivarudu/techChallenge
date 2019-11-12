import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { AppCommonServiceService } from '../app-common-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  myForm: FormGroup;
  warningAlert: any = false;
  name: any;
  getFormObj: any;
  constructor(private appCommonService: AppCommonServiceService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: ToasterService) { }

  public config: ToasterConfig =
    new ToasterConfig({
        timeout: 2000
    });
  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['M', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });
    if (this.route.snapshot.params.id && this.route.snapshot.params.id !== 'new') {
      this.name = this.route.snapshot.params.id;
      this.getFormObj = this.appCommonService.getCustomerNode();
      this.getFormObj ? this.myForm.patchValue(this.getFormObj) : this.myForm.patchValue({'firstName': this.name});
    }
  }
  onSubmit(form: FormGroup) {
      this.toasterService.pop('success', 'Submitted', 'Customer has been successfully added');
      this.warningAlert = true;
  }
  cancel() {
    this.router.navigate([`home/listing`]);
  }
  delete() {
      this.toasterService.pop('error', 'Deleted', 'Customer Node has been successfully deleted');
      this.warningAlert = true;
  }
}
