import React, { useState } from 'react';




import Input from './Input';
import Button from './Button';
import Counter from './Counter';


function App() {
  const [process,setProcess]= useState('')
  const [superd,setSuperd] = useState('')
  function handlesubmit (){ alert(`Name: ${process},Country:${superd}`)
setProcess('');
setSuperd('')
}

  return (
    <div style={{ width: '400px', margin: '40px auto' }}>
      <h1>Hello Ubaid! 👋</h1>
      
      <h3 style={{ width: '300px', margin: '40px auto'}}>Reusable Form</h3>
      <Input label="Name"
      value={process}
      onChange={(e)=>setProcess(e.target.value)}
      placeholder="enter The Process"/>
      <Input label="Country"
      value={superd}
      onChange={(e)=>setSuperd(e.target.value)}
      placeholder="Enter The Country Name"/>
      <Button label="Submit" disabled={!process||!superd}
      onClick={handlesubmit}/>
      <Counter/>
     
      
    


    </div>
  );
}

export default App;







