import React, { Fragment, useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice';
import Filter from './Filter';
const TodoList = () => {
	const [value, setValue] = useState();
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

	const myfilterChangeHandler = (data) => {
		setValue(data);
		console.log(data)
	}
	
	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);
	
	return (
		<Fragment>
		Filter:
		<Filter filterChangeHandler={myfilterChangeHandler}/>
		<ul className='list-group'>
			
			{!value && todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}

			{value =="All" && todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}

			{value =="completed" && todos.map((todo) => (
				todo.completed && <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}

			{value =="Pending" && todos.map((todo) => (
				!todo.completed && <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}

		</ul>
		</Fragment>
	);
};

export default TodoList;
