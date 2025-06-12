import { useCallback, useState,useEffect } from 'react'

    function App() {
      const [length, setLength] = useState(8);
      const [numberAllowed, setNumberAllowed] = useState(false);
      const [charAllowed, setCharAllowed] = useState(false);
      const [password,setpassword] = useState('');
      const [copied, setCopied] = useState(false);

      const generatePassword = useCallback(() => {  
      

          let pass="";
          let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
          const numbers = '0123456789';
          const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        
          if (numberAllowed) string += numbers;
          if (charAllowed) string += specialChars;

          for (let i = 0; i < length; i++) {
            const charIndex = Math.floor(Math.random() * string.length);
            pass += string[charIndex];
          }
          setpassword(pass);
          },[length, numberAllowed, charAllowed,setpassword]);

          useEffect(() => {
            
            generatePassword();
          }, [length, numberAllowed, charAllowed, generatePassword]);

          const handleCopy = () => {
            window.navigator.clipboard.writeText(password);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          };


      return (
        <>
            <div className=' w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-gray-500'>

              <h1 className='text-white text-center'>Password Generator</h1>
              <div className='flex shadow rounded-lg  mb-4 text-red-600 bg-white  max-w-xl justify-center items-center mx-auto w-full'>
                <input type="text"
                  value={password}
                  className='outline-none w-full py-1 px-3'
                  placeholder='password'
                  readOnly
                />

                <button
                  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
                  onClick={handleCopy}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>

              </div>

              <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                      <input type="range"
                        min="8"
                        max="30"
                        value={length}
                      onChange={(e) => setLength(e.target.value)}
                          className='curseor-pointer'
                      />
                      <label htmlFor="">length:{length}</label>
                  </div>

                  <div className='flex items-center gap-x-1'>
                      <input type="checkbox"
                            id='numberAllowed'
                            checked={numberAllowed}
                              onChange={(e) => setNumberAllowed(e.target.checked)}
                      />
                      <label htmlFor="numberAllowed">Numbers</label>

                  </div>

                <div className='flex items-center gap-x-1'>
                    <input type="checkbox"
                      id='charAllowed'
                      checked={charAllowed}
                      onChange={(e) => setCharAllowed(e.target.checked)}//The issue is with how you are updating the `numberAllowed` and `charAllowed` state in your checkbox `onChange` handlers. You are using `e.target.defaultChecked`, which always returns the initial value, not the current checked state.
                                                                                    />
                  <label htmlFor="charAllowed">Special Characters</label>
                </div>
              </div>
            </div>                                                           
          
        </>
        )
    }

    export default App
