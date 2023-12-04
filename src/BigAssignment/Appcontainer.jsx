import React from 'react'
import Form from './Form'

const [listExpenseInfos, setListExpenseInfos] = useState([]);

  const handleAddExpenseInfo = expenseInfo =>{
    setListExpenseInfos([...listExpenseInfos, expenseInfo]);
  }

const Appcontainer = () => {
  return (

    <div className="app-container">
        <AddForm handleAddExpenseInfo={handleAddExpenseInfo}/>
        <DataGrid listExpenseInfos={listExpenseInfos} />
    </div>
  )
}

export default Appcontainer
