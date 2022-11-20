import React from 'react'
import { HStack, VStack, Text, IconButton, StackDivider, Spacer, Badge } from "@chakra-ui/react"
import { FaTrash } from "react-icons/fa"

const TodoList = (props) => {


    if (!props.todos.length) {
        return (
            <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
                No Todos, Yay !!!
            </Badge>
        )
    }
    return (
        <VStack
            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth="2px"
            p="4"
            borderRadius="lg"
            width="100%"
            maxWidth={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}>
            {props.todos.map(todo => (
                <HStack>
                    <Text>{todo.body}</Text>
                    <Spacer />
                    <IconButton icon={<FaTrash />} isRound="true" onClick={() => props.deleteTodo(todo.id)} />
                    

                    />
                </HStack>
            ))}
        </VStack>
    )
}

export default TodoList