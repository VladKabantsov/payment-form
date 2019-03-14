import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguagesService } from '../../services/languages.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css', './main-info-card.component.css']
})
export class MainInfoComponent implements OnInit, OnDestroy {

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
