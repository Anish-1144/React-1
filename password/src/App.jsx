import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState('');
const passwordref = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ';

    if (number) str += '1234567890';
    if (character) str += '[]{}-=,./?`~@#$%^*()&\\|';

    for (let i = 0; i < length; i++) { // Change to i < length
      let charIndex = Math.floor(Math.random() * str.length+1); // Corrected random index
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, number, character]);  


  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select()
    passwordref.current.setSelectionRange(0 ,8)
    
    window.navigator.clipboard.writeText(password)},[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  
  return (
    <>
      <div className='w-full max-w-md h-50 mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-orange-700 text-xl font-semibold '>
        <h1 className='text-white text-center text-2xl font-semibold'>Password Generator</h1>

        <div className='flex gap-2 rounded-3xl overflow-hidden md-4 justify-center p-5'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 rounded-xl text-black'
            readOnly
            ref={passwordref}
            placeholder='password'
          />

          <button 
          onClick = {copyPasswordToClipboard}
          className='p-2 w-16 rounded-xl text-center text-black bg-teal-300'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-4 p-5'>
          <div className='flex items-center gap-x-4'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="custom-range"
              onChange={(e) => setLength(e.target.value)}
            />
            <label> Length: {length}</label>
          </div>

          <div>
            <input
              type="checkbox"
              checked={number}
              id="numberInput"
              onChange={() => setNumber(prev => !prev)}
            />
            <label htmlFor="numberInput"> Number</label>
          </div>

          <div>
            <input
              type="checkbox"
              checked={character}
              id="characterInput"
              onChange={() => setCharacter(prev => !prev)}
            />
            <label htmlFor="characterInput"> Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
