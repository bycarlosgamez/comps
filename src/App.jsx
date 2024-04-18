import Button from './components/Button';

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Buttons</h1>
      <div>
        <Button success rounded outline>
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Send
        </Button>
      </div>
      <div>
        <Button warning>Buy Now!</Button>
      </div>
      <div>
        <Button secondary outline>
          See Deal
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Hide Ads
        </Button>
      </div>
    </>
  );
}

export default App;
