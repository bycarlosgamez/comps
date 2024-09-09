import { Fragment } from 'react';

function Table({ data, config, keyFn }) {
  let tableHeaders = config.map((col) => {
    if (col.header) {
      return <Fragment key={col.label}>{col.header()}</Fragment>;
    }
    return <th key={col.label}>{col.label}</th>;
  });

  let tableRows = data.map((rowData) => {
    let tableCells = config.map((column) => (
      <td className='p-3' key={column.label}>
        {column.render(rowData)}
      </td>
    ));
    return (
      <tr className='border-b' key={keyFn(rowData)}>
        {tableCells}
      </tr>
    );
  });

  return (
    <div>
      <table className='table-auto border-spacing-2'>
        <thead>
          <tr className='border-b-2'>{tableHeaders}</tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default Table;
