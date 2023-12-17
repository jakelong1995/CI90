import React, { useEffect } from 'react'
import {db} from './Firebase'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"


const TaskManagement = () => {

    useEffect(() => {
        const taskColRef = query(collection(db, 'task-management'), orderBy('title', 'desc'))
        onSnapshot(taskColRef, (snapshot) => {
          console.log(snapshot.docss);
          setTasks(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        })
      },[])

  return (
    <div>TaskManagement</div>
  )
}

export default TaskManagement