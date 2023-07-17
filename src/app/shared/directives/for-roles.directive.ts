import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PermissionsService } from '../../core/services/permissions.service';
import { UserRole } from '../enums';

@Directive({
  selector: '[rdnForRole]',
  standalone: true,
})
@UntilDestroy()
export class ForRolesDirective implements OnInit {
  @Input() rdnForRole: UserRole[] = [];
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private permissionsService: PermissionsService
  ) {}

  ngOnInit(): void {
    this.permissionsService
      .checkPermissions(this.rdnForRole)
      .pipe(untilDestroyed(this))
      .subscribe(allowed => {
        if (allowed) {
          this.insert();
        } else {
          this.clear();
        }
      });
  }

  clear(): void {
    this.viewContainerRef.clear();
  }

  insert(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
