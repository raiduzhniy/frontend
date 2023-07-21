import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlEditorComponent } from '@shared/components';
import { Html } from '@shared/interfaces';
import { ContactsFacade } from '@state/contacts';

@Component({
  selector: 'rdn-admin-contacts',
  standalone: true,
  imports: [CommonModule, HtmlEditorComponent],
  templateUrl: './admin-contacts.component.html',
  styleUrls: ['./admin-contacts.component.scss'],
  providers: [ContactsFacade],
})
export class AdminContactsComponent implements OnInit {
  contacts$ = this.contactsFacade.contacts$;

  isLoading$ = this.contactsFacade.isLoading$;

  constructor(private contactsFacade: ContactsFacade) {}

  ngOnInit() {
    this.contactsFacade.dispatchGetContacts();
  }

  aboutUsEdited(html: Html): void {
    this.contactsFacade.dispatchEditContacts(html);
  }
}
