import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment',
  DECREMENT_COUNT = 'decrement',
  CHANGE_VALUE_TO_ADD = 'change-count',
  SUBMIT_COUNT = 'submit-count';

const reducer = (state, action) => {
  if (action.type === INCREMENT_COUNT) {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === CHANGE_VALUE_TO_ADD) {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }
  if (action.type === DECREMENT_COUNT)
    return {
      ...state,
      count: state.count - 1,
    };
  if (action.type === SUBMIT_COUNT) {
    return {
      ...state,
      count: state.count + state.valueToAdd,
      valueToAdd: 0,
    };
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const handleIncrement = () => {
    dispatch({ type: INCREMENT_COUNT });
  };

  const handleDecrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;

    dispatch({ type: CHANGE_VALUE_TO_ADD, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: SUBMIT_COUNT });
  };

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button onClick={handleDecrement}>Decrement</Button>
        <Button onClick={handleIncrement}>Increment</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor='number'>Add a lot!</label>
        <input
          className='p-1 m-3 bg-gray-50 border border-r-gray-300'
          type='number'
          onChange={handleChange}
          value={state.valueToAdd || ''}
          id='number'
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
