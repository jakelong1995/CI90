import React, { useState } from 'react';

export default function AddForm(props) {
  const initData = { name: '', amount: '', date: '' };
  const [isAdded, setIsAdded] = useState(false);
  const [expenseInfo, setexpenseInfo] = useState(initData);
  const { name, amount, date } = expenseInfo;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setexpenseInfo({ ...expenseInfo, [name]: value });
  };

  const handleAdd = (event) => {
    event.preventDefault();
    console.log(name);
    if (!name || !amount || !date) {
      alert('Empty fields, please input all the fields!');
    } else {
      props.handleAddExpenseInfo(expenseInfo);
      setexpenseInfo(initData);
    }
  };

  const handleChangeStatusAdd = () => setIsAdded((prev) => !prev);

  const handleCancel = () => {
    handleChangeStatusAdd();
    setexpenseInfo(initData);
  };

  return (
    <div>
      <div>
        {!isAdded ? (
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => handleChangeStatusAdd()}
          >
            Add Expense
          </button>
        ) : (
          <form className='space-y-4'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                placeholder='Enter name here'
                onChange={handleChange}
                className='mt-1 p-2 border rounded-md w-full'
              />
            </div>

            <div>
              <label htmlFor='amount' className='block text-sm font-medium text-gray-700'>
                Amount
              </label>
              <input
                id='amount'
                name='amount'
                type='number'
                value={amount}
                placeholder='Enter amount here'
                onChange={handleChange}
                className='mt-1 p-2 border rounded-md w-full'
              />
            </div>

            <div>
              <label htmlFor='date' className='block text-sm font-medium text-gray-700'>
                Date
              </label>
              <input
                id='date'
                name='date'
                type='text'
                value={date}
                placeholder='dd/mm/yyyy'
                onChange={handleChange}
                className='mt-1 p-2 border rounded-md w-full'
              />
            </div>
            <div className='flex gap-2 justify-center'>  
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleAdd}
              >
                Add
              </button>
              <button
                className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
