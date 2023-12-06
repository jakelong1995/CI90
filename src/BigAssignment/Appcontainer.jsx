import React, {useState} from 'react';
import AddForm from './AddForm';
import DataGrid from './DataGrid';

function Appcontainer() {
  const [listExpenseInfos, setListExpenseInfos] = useState([]);

  const handleAddExpenseInfo = expenseInfo =>{
    setListExpenseInfos([...listExpenseInfos, expenseInfo]);
  }

  return (
    <div className="app-container">
        <AddForm handleAddExpenseInfo={handleAddExpenseInfo}/>
        <DataGrid listExpenseInfos={listExpenseInfos} />
    </div>
  )
}

export default Appcontainer;