import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { WrapperComponent } from '@shared/components';
import { ConfirmDialogComponent } from '@shared/components/dialogs';
import { ConfirmDialogData } from '@shared/components/dialogs/confirm-dialog/confirm-dialog.interface';
import { News, OrderDirection } from '@shared/interfaces';
import { NewsFacade } from '@state/news';
import { filter, merge, startWith, take } from 'rxjs';

@Component({
  selector: 'rdn-admin-news',
  standalone: true,
  imports: [
    CommonModule,
    WrapperComponent,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.scss'],
  providers: [NewsFacade],
})
@UntilDestroy()
export class AdminNewsComponent implements AfterViewInit {
  displayedColumns: string[] = ['actions', 'createdAt', 'editedAt', 'title'];
  isLoading$ = this.newsFacade.isLoadingNewsElements$;
  newsElements$ = this.newsFacade.newsElements$;

  itemsPerPage = 10;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private newsFacade: NewsFacade,
    private dialog: MatDialog
  ) {}

  ngAfterViewInit() {
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(startWith(null), untilDestroyed(this))
      .subscribe(() => {
        setTimeout(() => {
          this.newsFacade.dispatchGetNewsElements({
            orderBy: this.sort.active,
            orderDirection: this.sort.direction as OrderDirection,
            pageSize: this.itemsPerPage,
            pageNumber: this.paginator.pageIndex + 1,
          });
        });
      });
  }

  deleteNews(news: News): void {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: `Ви дійсно хочете видалити новину ${news.title}?`,
      } as ConfirmDialogData,
    });

    dialog
      .afterClosed()
      .pipe(
        take(1),
        untilDestroyed(this),
        filter(res => !!res)
      )
      .subscribe(() => this.newsFacade.dispatchDeleteNews(news.id));
  }
}
