import { useCallback, useState } from 'react'

function App() {
 const [length, setLength] = useState(8);
 const [numberAllowed, setNumberAllowed] = useState(false);
 const [charAllowed, setCharAllowed] = useState(false);

 const [password,setpassword] = useState('');

 const passwordgenerator = useCallback(()=>{
   let pass="";
   let string="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

   if(numberAllowed){
      string += "0123456789";
   }

   if(charAllowed){
      string += "!@#$%^&*()_+[]{}|;:,.<>?";
   }

   for(let i=1; i<=length;i++){
      let charIndex =Math.random() * string.length;
      charIndex = Math.floor(char); 

      pass+=string.charAt(char);
   }

   setpassword(pass);

   /*
    let pass = "";
    let string = "abc";
    let length = 4;

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * string.length);
      pass += string.charAt(charIndex);
    }
    console.log(pass); // Example output: "bcaa"

   
   */

 },[length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <h1 className='text-4xl text-center text-white ' > Password Generator</h1>
    </>
  )
}

export default App
