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
    transaction_type: [null],
    currency: [null],
    amount: [null],
    first_name: [null],
    last_name: [null],
    card_holder: [null],
    card_number: [null],
    expiration_year: [null],
    expiration_month: [null],
    cvv: [null],
    customer_email: [null],
    customer_phone: [null],
    usage: [null],
    address1: [null],
    city: [null],
    zip_code: [null],
    country: [null],
    state: [null],
  });
  public userForm: FormGroup = this.fb.group({});
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
