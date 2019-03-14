import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguagesService } from '../../services/languages.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnDestroy {

  public content: any;
  private ngDestroy$: Subject<void> = new Subject();

  constructor(
    private langService: LanguagesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.ngDestroy$),
    ).subscribe((params: Params) => {
      const lang: string = params['lang'];
      this.content = this.langService.getTranslation(lang);
    });
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
