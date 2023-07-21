import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HtmlPresentatorComponent } from '@shared/components';
import { AboutUsFacade } from '@state/about-us';

@Component({
  selector: 'rdn-about-us',
  standalone: true,
  imports: [CommonModule, HtmlPresentatorComponent],
  providers: [AboutUsFacade],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  isLoading$ = this.aboutUsFacade.isLoading$;
  aboutUs$ = this.aboutUsFacade.aboutUs$;
  constructor(private aboutUsFacade: AboutUsFacade) {}

  ngOnInit() {
    this.aboutUsFacade.dispatchGetAboutUs();
  }
}
