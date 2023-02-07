import React, { useState } from 'react'
//Передается тольк один раз(снижение нагрузки)
// function App() {
// 	const [count, setCount] = useState(() => {
// 		console.log('run function 1 time')
// 		return 4
// 	})
// 	let decrementCount = () => {
// 		setCount(prevCount => prevCount - 1)
// 	}
// 	let incrementCount = () => {
// 		setCount(prevCount => prevCount + 1)
// 	}
// 	return (
// 		<div>
// 			<button onClick={decrementCount}>-</button>
// 			<span>{count}</span>
// 			<button onClick={incrementCount}>+</button>
// 		</div>
// 	)
// }

// export default App

//Передается при каждом нажатии
// function countInitial() {
// 	console.log('run function 1 time')
// 	return 4
// }

// function App() {
// 	const [count, setCount] = useState(countInitial())
// 	let decrementCount = () => {
// 		setCount(prevCount => prevCount - 1)
// 	}
// 	let incrementCount = () => {
// 		setCount(prevCount => prevCount + 1)
// 	}
// 	return (
// 		<div>
// 			<button onClick={decrementCount}>-</button>
// 			<span>{count}</span>
// 			<button onClick={incrementCount}>+</button>
// 		</div>
// 	)
// }

// export default App

function App() {
	const [state, setState] = useState({ count: 4, theme: 'blue' })
	const count = state.count
	const theme = state.theme

	function decrementCount() {
		setState(prevState => {
			return { ...prevState, count: prevState.count - 1 }
		})
	}
	function incrementCount() {
		setState(prevState => {
			return { ...prevState, count: prevState.count + 1 }
		})
	}
	return (
		<div>
			<button onClick={decrementCount}>-</button>
			<span>{count}</span>
			<span>{theme}</span>
			<button onClick={incrementCount}>+</button>
		</div>
	)
}

export default App
