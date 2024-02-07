import { Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'

const List = () => {
    const people = [
        {
            id: uuidv4(), // Used in JSX as a key
            name: 'Creola Katherine Johnson',
            profession: 'mathematician',
            accomplishment: 'spaceflight calculations',
            imageId: 'MK3eW3A',
        },
        {
            id: uuidv4(), // Used in JSX as a key
            name: 'Mario José Molina-Pasquel Henríquez',
            profession: 'chemist',
            accomplishment: 'discovery of Arctic ozone hole',
            imageId: 'mynHUSa',
        },
        {
            id: uuidv4(), // Used in JSX as a key
            name: 'Mohammad Abdus Salam',
            profession: 'physicist',
            accomplishment: 'electromagnetism theory',
            imageId: 'bE7W1ji',
        },
        {
            id: uuidv4(), // Used in JSX as a key
            name: 'Percy Lavon Julian',
            profession: 'chemist',
            accomplishment:
                'pioneering cortisone drugs, steroids and birth control pills',
            imageId: 'IOjWm71',
        },
        {
            id: uuidv4(), // Used in JSX as a key
            name: 'Subrahmanyan Chandrasekhar',
            profession: 'astrophysicist',
            accomplishment: 'white dwarf star mass calculations',
            imageId: 'lrWQx8l',
        },
    ]

    return (
        <>
            <ul>
                <h4>Chemists</h4>
                {people.map((person) => {
                    if (person.profession === 'chemist') {
                        return (
                            <Fragment key={person.id}>
                                <h1>{person.name}</h1>
                                <p>{person.accomplishment}</p>
                            </Fragment>
                        )
                    }
                })}
            </ul>
            <ul>
                <h4>Everyone Else</h4>
                {people.map((person) => {
                    if (person.profession != 'chemist') {
                        return (
                            <Fragment key={person.id}>
                                <h1>{person.name}</h1>
                                <p>{person.accomplishment}</p>
                            </Fragment>
                        )
                    }
                })}
            </ul>
        </>
    )
}

export default List
