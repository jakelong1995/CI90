import React, {useState} from 'react';
import AddForm from './AddForm';
import DataGrid from './DataGrid';

function Appcontainer() {
  const [listExpenseInfos, setListExpenseInfos] = useState([]);

  const handleAddExpenseInfo = expenseInfo =>{
    setListExpenseInfos([...listExpenseInfos, expenseInfo]);
  }

  return (
    <div className='flex flex-col gap-4 items-center justify-center h-screen'>
        <AddForm handleAddExpenseInfo={handleAddExpenseInfo}/>
        <DataGrid listExpenseInfos={listExpenseInfos} />
    </div>
  )
}

export default Appcontainer;