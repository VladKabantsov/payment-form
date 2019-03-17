import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Language, LanguagesService } from '../services/languages.service';

@Injectable({
  providedIn: 'root'
})
export class AvailableLangGuard implements CanActivate {
  constructor(
    private langServ: LanguagesService,
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const langs: Language[] = this.langServ.langs;

    return !!langs.find((l: Language) => l.abbreviation === next.params['lang']);
  }
}
