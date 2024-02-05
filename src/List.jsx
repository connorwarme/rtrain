const List = () => {

  const people = [{
    id: 0, // Used in JSX as a key
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1, // Used in JSX as a key
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2, // Used in JSX as a key
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3, // Used in JSX as a key
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];

  return ( 
    <>
      <ul>
      <h4>Chemists</h4>
        { people.map(person => {
          if (person.profession === 'chemist') {
            return (
              <>
                <h1>{person.name}</h1>
                <p>{person.accomplishment}</p>
              </>
            )
          }
        })}
      </ul>
      <ul>
        <h4>Everyone Else</h4>
        { people.map(person => {
          if (person.profession != 'chemist') {
            return (
              <>
                <h1>{person.name}</h1>
                <p>{person.accomplishment}</p>
              </>
            )
          }
        })}
      </ul>
    </>
   );
}
 
export default List;