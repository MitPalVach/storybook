import React, {useMemo, useState} from 'react';


export default {
    title: 'useMemo',
}

export const Difficult = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)
    let resA = 1
    let resB = 1
    resA = useMemo(() => {
        let temp = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 25000000) {
                fake++
                const fakeValue = Math.random()
            }
            temp = temp * i
        }
        return temp
    }, [a])

    for (let i = 1; i <= b; i++) {
        resB *= i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <div>
                Result for a: {resA}
            </div>
            <div>
                Result for b: {resB}
            </div>

        </>
    );
};


const OurUsers = (props: { users: Array<string> }) => {
    console.log('Our Users')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(OurUsers)

export const HelpForReactMemo = () => {
    console.log('HelpForReactMemo');
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Mitpal', 'DarLeo'])

    const newUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('p') > -1)
    }, [users])

    const addUser = () => {
        const newUser = [...users, 'Pusha']
        setUsers(newUser)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newUsers}/>
    </>
}

