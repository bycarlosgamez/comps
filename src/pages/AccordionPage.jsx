import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'asdfasd',
      label: 'this is a label',
      content: 'This is content',
    },
    {
      id: 'fghhr6',
      label: 'this is a label 2',
      content: 'This is content 2',
    },
    {
      id: '7rtygh',
      label: 'this is a label 3',
      content: 'This is content 3',
    },
  ];

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Components</h1>
      <div className='default'>
        <Accordion items={items} />
      </div>
    </>
  );
}

export default AccordionPage;
