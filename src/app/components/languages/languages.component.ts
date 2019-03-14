import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Language, LanguagesService } from '../../services/languages.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  private host: string = environment.baseUrl;
  public displayed = false;
  public languages: Language[] = [];

  constructor(
    private langService: LanguagesService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.languages = this.langService.langs;
  }

  changeLang(lang: Language): void {
    this.router.navigate(['/main', lang.abbreviation]);
  }
}
