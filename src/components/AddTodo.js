import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import { React, useState } from 'react'
import { nanoid } from "nanoid"

const AddTodo = (props) => {

    const toast = useToast()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!content) {
            toast({
                title: "No Content",
                status: "error",
                duration: "2000",
                isClosable: true
            })
            return;
        }

        const todo = {
            id: nanoid(),
            body: content
        }

        props.addTodo(todo)
        setContent('')
    }
    const [content, setContent] = useState('')
    return (
        <>
            <form onSubmit={handleSubmit} >
                <HStack mt="8">
                    <Input variant="filled" placeholder="learning chakra"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <Button colorScheme="pink" px="8" type="submit"> Add ToDo </Button>
                </HStack>
            </form>
        </>
    )
}

export default AddTodo