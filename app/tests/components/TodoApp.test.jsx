import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import TodoApp from '../../components/TodoApp';

describe('TodoApp', () => {

	it('should exist', () => {
		expect(TodoApp).toExist();
	});

	it('should add todo to the todos state on handleAddTodo', () => {
		let todoText = 'test text';
		let todoApp = TestUtils.renderIntoDocument(<TodoApp />);

		todoApp.setState({
			todos: []
		});

		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
	});

	it('should toggle completed value when handleToggle called', () => {
	    var todoData = {
	      id: 11,
	      text: 'Test features',
	      completed: false,
	      createdAt: 0,
	      completedAt: undefined
	    };
	    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
	    todoApp.setState({todos: [todoData]});

	    expect(todoApp.state.todos[0].completed).toBe(false);
	    todoApp.handleToggle(11);
	    expect(todoApp.state.todos[0].completed).toBe(true);
	    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle completed to incomplete', () => {
	let todoData = {
		id: 11,
		text: 'Test featrures',
		completed: true,
		createdAt: 0,
		completedAt: 123
	};
	let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
	todoApp.setState({todos: [todoData]});

	expect(todoApp.state.todos[0].completed).toBe(true);

	todoApp.handleToggle(todoData.id);

	expect(todoApp.state.todos[0].completed).toBe(false);
	expect(todoApp.state.todos[0].completedAt).toNotExist();
  });

});