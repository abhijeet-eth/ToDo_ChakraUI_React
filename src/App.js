import './App.css';
import { React, useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddTodo from "./components/AddTodo"
import { VStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from "react-icons/fa"

function App() {
    const initialTodos = [
        {
            id: 1,
            body: 'get bread'
        },
        {
            id: 2,
            body: 'get butter'
        },
        {
            id: 3,
            body: 'get salt'
        }
    ]

    const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || [])
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => {
            return todo.id !== id
        })
        setTodos(newTodos)
    }

    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <VStack p={4}>
                <IconButton icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
                    isRound="true"
                    size="lg"
                    alignSelf="flex-end" />
                onClick{toggleColorMode}
                <Heading
                    mb='8'
                    fontWeight='extraBold'
                    size='2xl'
                    bgGradient='linear(to-r, pink.500,pink.300, blue.500)'
                    bgClip="text">
                    To DO Application
                </Heading>
                <TodoList todos={todos} deleteTodo={deleteTodo} />
                <AddTodo addTodo={addTodo} />
            </VStack>

        </>
    );
}


export default App;
