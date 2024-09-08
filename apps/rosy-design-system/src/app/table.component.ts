import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from '@rosy-design-system/rosy-design-system';
@Component({
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-table-example',
  template: `
    <div>
      <h1>Basic Table</h1>

      <rosy-table>
        <rosy-table-head>
          <rosy-table-row>
            <rosy-table-cell role="columnheader"> Name </rosy-table-cell>
            <rosy-table-cell role="columnheader"> Age </rosy-table-cell>
          </rosy-table-row>
        </rosy-table-head>
        <rosy-table-body>
          <rosy-table-row>
            <rosy-table-cell> Maria Sanchez </rosy-table-cell>
            <rosy-table-cell> 28 </rosy-table-cell>
          </rosy-table-row>
          <rosy-table-row>
            <rosy-table-cell> Michel Jhonson </rosy-table-cell>
            <rosy-table-cell> 34 </rosy-table-cell>
          </rosy-table-row>
        </rosy-table-body>
      </rosy-table>
    </div>
  `,
})
export default class TableExampleComponent {}
