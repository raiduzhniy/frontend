import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { LoaderDirective } from '@shared/directives';
import { AboutUsFacade } from '@state/about-us';

@Component({
  selector: 'rdn-about-us',
  standalone: true,
  imports: [CommonModule, MatCardModule, LoaderDirective],
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
