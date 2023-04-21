import React, { useState } from 'react';
import Modal from './components/Modal';
import Button from './components/Button';

function App() {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Modal Dialog Example</h1>
        <div className="mb-4">
          <Button label="Button 1" onClick={() => setModal1Open(true)} />
          <Button label="Button 2" onClick={() => setModal2Open(true)} />
          <Button label="Button 3" onClick={() => setModal3Open(true)} />
        </div>
        {modal1Open && (
          <Modal
            title="Button 1"
            content={
              <>
                <input type="text" className="block mb-4 w-full" placeholder="Text Field 1" />
                <input type="text" className="block mb-4 w-full" placeholder="Text Field 2" />
              </>
            }
            onClose={() => setModal1Open(false)}
          />
        )}
        {modal2Open && (
          <Modal
            title="Button 2"
            content={
              <>
                <input type="text" className="block mb-4 w-full" placeholder="Text Field 1" />
                <select className="block mb-4 w-full">
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </>
            }
            onClose={() => setModal2Open(false)}
          />
        )}
        {modal3Open && (
          <Modal
            title="Button 3"
            content={
              <>
                {[...Array(10)].map((_, i) => (
                  <input key={i} type="text" className="block mb-4 w-full" placeholder={`Text Field ${i + 1}`} />
                ))}
              </>
            }
            onClose={() => setModal3Open(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
