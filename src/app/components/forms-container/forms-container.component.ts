import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../../services/request-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { EMPTY, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { UserForm } from '../../models/user-form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-container',
  templateUrl: './forms-container.component.html',
  styleUrls: ['./forms-container.component.css']
})
export class FormsContainerComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    transaction_id: [null, Validators.required],
    transaction_type: [null, Validators.required],
    currency: [null, Validators.required],
    amount: [null],
    first_name: [null, Validators.required],
    last_name: [null, Validators.required],
    card_holder: [null, Validators.required],
    card_number: [null, Validators.required],
    expiration_year: [null, Validators.required],
    expiration_month: [null, Validators.required],
    cvv: [null, Validators.required],
    customer_email: [null],
    customer_phone: [null, Validators.required],
    usage: [null],
    address1: [null, Validators.required],
    city: [null, Validators.required],
    zip_code: [null, Validators.required],
    country: [null, Validators.required],
    state: [null, Validators.required],
  });
  public userForm: FormGroup = this.fb.group({
    transaction_id: [null],
    customer_email: [null],
    usage: [null]
  });
  private ngDestroy$: Subject<void> = new Subject();

  constructor(
    private requestServ: RequestServiceService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        if (params['hash']) {
          this.requestServ.getParams(params['hash']);
        }
        return EMPTY;
      }),
      takeUntil(this.ngDestroy$),
    ).subscribe((obj: UserForm) => {
      console.log('UserForm', obj);
      this.userForm.patchValue(obj);
    });
  }

  save(): void {
    if (this.form.valid) {
      // this.requestServ.save(this.form.getRawValue(), , 'sah');
    }
  }
}
