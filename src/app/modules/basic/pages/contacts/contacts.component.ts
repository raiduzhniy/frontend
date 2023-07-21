import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HtmlPresentatorComponent } from '@shared/components';
import { ContactsFacade } from '@state/contacts';

@Component({
  selector: 'rdn-contacts',
  standalone: true,
  imports: [CommonModule, HtmlPresentatorComponent],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ContactsFacade],
})
export class ContactsComponent implements OnInit {
  isLoading$ = this.contactsFacade.isLoading$;
  contacts$ = this.contactsFacade.contacts$;
  constructor(private contactsFacade: ContactsFacade) {}

  ngOnInit() {
    this.contactsFacade.dispatchGetContacts();
  }
}
