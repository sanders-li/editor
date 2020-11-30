import React from 'react';
import { HotTable } from '@handsontable/react';

import "handsontable/dist/handsontable.full.css"

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.hotSettings = {
      columns: [
        {
          data: 'id',
          type: 'numeric',
          width: 40
        },
        {
          data: 'title',
          type: 'text'
        },
        {
          data: 'url',
          type: 'text'
        },
        {
          data: 'rank',
          type: 'numeric'
        },
        {
          data: 'date',
          type: 'date',
          dateFormat: 'MM/DD/YYYY'
        }
      ],
      stretchH: 'all',
      autoWrapRow: true,
      rowHeaders: true,
      colHeaders: ['ID', 'Article Title', 'Article URL', 'Rank', 'Date'],
      columnSorting: { indicator: true },
      autoColumnSize: { samplingRatio: 23 },
      contextMenu: true,
      manualRowMove: true,
      manualColumnMove: true,
      manualRowResize: true,
      filters: true,
      dropdownMenu: true,
      exportFile: true,
      language: 'en-US'
    };
  }

  render() {
    return (
      <div id="hot">
        <HotTable 
          ref={ this.props.table }
          data={ this.props.data } 
          settings={ this.hotSettings } 
          //afterChange={}
          licenseKey='non-commercial-and-evaluation' 
        />
      </div>
    )
  }
}