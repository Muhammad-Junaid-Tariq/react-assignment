import React from 'react';

function Modal({ title, content, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
      <div className="bg-white rounded-lg p-8 z-10 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 10l3.646-3.646a.5.5 0 10-.707-.707L11.586 9l-3.646-3.646a.5.5 0 00-.707.707L10.293 10l-3.646 3.646a.5.5 0 10.707.707L11.586 11l3.646 3.646a.5.5 0 00.707-.707L12.293 10z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="overflow-auto h-64">{content}</div>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={onClose}>
            OK
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
