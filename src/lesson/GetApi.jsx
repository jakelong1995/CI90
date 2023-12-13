import React from 'react'
import {useState} from 'react'

const GetApi = () => {

	const [store, setStore] = useState([])
	
	const handleFetchStore = () => {
		fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data)=>{
                console.log(data)
                setStore(data)}
                )
	}

	return (
		<div>
			<button onClick={handleFetchStore}>Fetch Store</button>
			<ul>
				{store.map(store => {
					return <li key={store.id}>{store.title}</li>
				})}
			</ul>
		</div>
	)
}

export default GetApi