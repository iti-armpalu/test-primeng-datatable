import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';


@Component({
  selector: 'app-primeng-datatable',
  templateUrl: './ngx-datatable.component.html',
  styleUrls: ['./ngx-datatable.component.scss']
})
export class NgxDatatableComponent implements OnInit, AfterViewInit {
  @ViewChild('search', { static: false }) search: any;
  @ViewChild('table', { static: false }) table: any;

  public temp: Array<object> = [];
  public rows: Array<object> = [];
  public columns: Array<object> = [];
  selected = [];
  expanded: any = {};
  timeout: any;

  constructor(
    private httpClient: HttpClient
  ) {}

    ngOnInit() {
      // Initial columns, can be used for data list which is will be filtered
      this.columns = [
          { prop: 'name' },
          { prop: 'company' },
          { prop: 'gender' },
          { prop: 'age' }
      ];

      this.findAll();
    }

    ngAfterViewInit(): void {
      // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      // Add 'implements AfterViewInit' to the class.
      fromEvent(this.search.nativeElement, 'keydown')
        .pipe(
          debounceTime(550),
          map(x => x['target']['value'])
        )
        .subscribe(value => {
          this.updateFilter(value);
        });
    }

    updateFilter(val: any) {
      const value = val.toString().toLowerCase().trim();
      // get the amount of columns in the table
      const count = this.columns.length;
      // get the key names of each column in the dataset
      const keys = Object.keys(this.temp[0]);
      // assign filtered matches to the active datatable
      this.rows = this.temp.filter(item => {
        // iterate through each row's column data
        for (let i = 0; i < count; i++) {
          // check for a match
          if (
            (item[keys[i]] &&
              item[keys[i]]
                .toString()
                .toLowerCase()
                .indexOf(value) !== -1) ||
            !value
          ) {
            // found match, return true to add to result set
            return true;
          }
        }
      });
    }

    findAll() {
      this.httpClient.get('./assets/data/company.json').subscribe(
        (data: any) => {
          // cache our list
          this.temp = data;

          // push our inital complete list
          this.rows = [...this.temp]
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
    }

    getCellClass({ row, column, value }): any {
      return {
        'is-female': value === 'female'
      };
    }

    onSelect({ selected }) {
      console.log('Select Event', selected, this.selected);
      this.selected.splice(0, this.selected.length);
      this.selected.push(...selected);
    }

    toggleExpandRow(row) {
      this.table.rowDetail.toggleExpandRow(row);
    }

    onDetailToggle(event) {
      console.log('Detail Toggled', event);
    }


}
