import Table from '../components/Table';

function TablePage() {
  const data = [
    { name: "Jazzmaster® Vintera® II '50s", color: 'bg-amber-100', rank: 1 },
    { name: 'American Ultra Telecaster', color: 'bg-white', rank: 3 },
    { name: "Jaguar® Vintera® II '70s", color: 'bg-black', rank: 2 },
    { name: 'Crestwood Custom, Polaris', color: 'bg-red-600', rank: 4 },
  ];

  const config = [
    { label: 'Name', render: (guitar) => guitar.name },
    {
      label: 'Color',
      render: (guitar) => (
        <div className={`p-3 m-2 border border-gray-300 ${guitar.color}`}></div>
      ),
    },
    { label: 'Score', render: (guitar) => guitar.rank },
  ];

  const keyFn = (guitar) => {
    return guitar.name;
  };

  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
