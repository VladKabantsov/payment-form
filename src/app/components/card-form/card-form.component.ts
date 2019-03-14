import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguagesService } from '../../services/languages.service';
import { ActivatedRoute, Params } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit, OnDestroy {

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
