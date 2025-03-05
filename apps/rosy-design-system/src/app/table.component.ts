import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from '@rosy-design-system';
@Component({
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
    <div>
      <h2>Specifying table cell relations</h2>
      <rosy-table style="border: 2px solid rgb(140 140 140);">
        <rosy-table-head>
          <rosy-table-row>
            <rosy-table-cell role="columnheader"> Name </rosy-table-cell>
            <rosy-table-cell role="columnheader"> ID </rosy-table-cell>
            <rosy-table-cell role="columnheader">
              Member Since
            </rosy-table-cell>
            <rosy-table-cell role="columnheader"> Balance </rosy-table-cell>
          </rosy-table-row>
        </rosy-table-head>
        <rosy-table-body>
          <rosy-table-row>
            <rosy-table-cell role="columnheader">
              Margaret Nguyen</rosy-table-cell
            >
            <rosy-table-cell> 427311 </rosy-table-cell>
            <rosy-table-cell
              ><time datetime="2010-06-03">June 3, 2010</time>
            </rosy-table-cell>
            <rosy-table-cell> 0.00 </rosy-table-cell>
          </rosy-table-row>
          <rosy-table-row>
            <rosy-table-cell role="columnheader">
              Margaret Nguyen</rosy-table-cell
            >
            <rosy-table-cell> 427311 </rosy-table-cell>
            <rosy-table-cell
              ><time datetime="2010-06-03">June 3, 2010</time>
            </rosy-table-cell>
            <rosy-table-cell> 0.00 </rosy-table-cell>
          </rosy-table-row>
          <rosy-table-row>
            <rosy-table-cell role="columnheader">
              Margaret Nguyen</rosy-table-cell
            >
            <rosy-table-cell> 427311 </rosy-table-cell>
            <rosy-table-cell
              ><time datetime="2010-06-03">June 3, 2010</time>
            </rosy-table-cell>
            <rosy-table-cell> 0.00 </rosy-table-cell>
          </rosy-table-row>
        </rosy-table-body>
      </rosy-table>
    </div>
  `,
    styles: `rosy-table-cell{border:1px solid grey;}`
})
export default class TableExampleComponent {}
