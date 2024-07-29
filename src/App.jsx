import Button from './components/Button';

function App() {
  const handleClick = () => {
    console.log('Click');
  };

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Buttons</h1>
      <div className='default'>
        <div>
          <Button primary onClick={handleClick}>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary>Secondary</Button>
        </div>
        <div>
          <Button success>Success</Button>
        </div>
        <div>
          <Button warning>Warning</Button>
        </div>
        <div>
          <Button danger>Danger</Button>
        </div>
        <div>
          <Button>Plain</Button>
        </div>
      </div>
      <div className='rounded'>
        <div>
          <Button primary rounded>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary rounded>
            Secondary
          </Button>
        </div>
        <div>
          <Button success rounded>
            Success
          </Button>
        </div>
        <div>
          <Button warning rounded>
            Warning
          </Button>
        </div>
        <div>
          <Button danger rounded>
            Danger
          </Button>
        </div>
        <div>
          <Button rounded>Plain</Button>
        </div>
      </div>

      <div className='outlined'>
        <div>
          <Button primary outline>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary outline>
            Secondary
          </Button>
        </div>
        <div>
          <Button success outline>
            Success
          </Button>
        </div>
        <div>
          <Button warning outline>
            Warning
          </Button>
        </div>
        <div>
          <Button danger outline>
            Danger
          </Button>
        </div>
        <div>
          <Button outline>Plain</Button>
        </div>
      </div>
      <div className='outlined-rounded'>
        <div>
          <Button primary outline rounded>
            Primary
          </Button>
        </div>
        <div>
          <Button secondary outline rounded>
            Secondary
          </Button>
        </div>
        <div>
          <Button success outline rounded>
            Success
          </Button>
        </div>
        <div>
          <Button warning outline rounded>
            Warning
          </Button>
        </div>
        <div>
          <Button danger outline rounded>
            Danger
          </Button>
        </div>
        <div>
          <Button outline rounded>
            Plain
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
