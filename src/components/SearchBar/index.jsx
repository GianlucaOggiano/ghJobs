import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../../redux/actions';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(search(input));
  };

  return (
    <div className='searchBar'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Title, companies, expertise or benefits'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
