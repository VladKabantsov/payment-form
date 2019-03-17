import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Language, LanguagesService } from '../../services/languages.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';



@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit, OnDestroy {

  private host: string = environment.baseUrl;
  public displayed = false;
  public languages: Language[] = [];
  private hash: string;
  private ngDestroy$: Subject<void> = new Subject();

  constructor(
    private langService: LanguagesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.languages = this.langService.langs;
    this.route.params.pipe(
      takeUntil(this.ngDestroy$),
    ).subscribe((params: Params) => {
      console.log('params', params);
      this.hash = params['hash'];
    });
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }

  changeLang(lang: Language): void {
    this.router.navigate([`/main/${lang.abbreviation}/${this.hash}`]);
  }
}
