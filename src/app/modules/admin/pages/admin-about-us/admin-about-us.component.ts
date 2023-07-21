import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { HtmlEditorComponent } from '@shared/components';
import { Html } from '@shared/interfaces';
import { AboutUsFacade } from '@state/about-us';

@Component({
  selector: 'rdn-admin-about-us',
  standalone: true,
  imports: [CommonModule, HtmlEditorComponent],
  providers: [AboutUsFacade],
  templateUrl: './admin-about-us.component.html',
  styleUrls: ['./admin-about-us.component.scss'],
})
@UntilDestroy()
export class AdminAboutUsComponent implements OnInit {
  aboutUs$ = this.aboutUsFacade.aboutUs$;

  isLoading$ = this.aboutUsFacade.isLoading$;

  constructor(private aboutUsFacade: AboutUsFacade) {}

  ngOnInit() {
    this.aboutUsFacade.dispatchGetAboutUs();
  }

  aboutUsEdited(html: Html): void {
    this.aboutUsFacade.dispatchEditAboutUs(html);
  }
}
