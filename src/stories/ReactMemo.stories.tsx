import React, {useState} from "react";

export default {
    title: 'React.memo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const Users = React.memo((props: { users: Array<string> }) => {
        console.log('sd')
        return <div>
            {props.users.map((u, index) => <div key={index}>{u}</div>)}
        </div>
    }
)

export const Example1 = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Mitpal', 'DarLeo'])
    const addUser = () => {
        const newUser = [...users, 'Pusha']
        setUsers(newUser)
    }

    return <>
        <button onClick={addUser}>add user</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}


