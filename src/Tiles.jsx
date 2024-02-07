import logo from '../src/assets/react.svg'

const Tiles = () => {
    const testArray = [
        {
            title: 'Nutrition',
            img: logo,
            label: 'Nutrition icon',
        },
        {
            title: 'Sleep',
            img: logo,
            label: 'Sleep icon',
        },
        {
            title: 'Exercise',
            img: logo,
            label: 'Exercise icon',
        },
        {
            title: 'Personalized Panel',
            img: logo,
            label: 'Bloodwork panel icon',
        },
        {
            title: 'Individualized Plan',
            img: logo,
            label: 'Plan icon',
        },
        {
            title: '24/7 Care',
            img: logo,
            label: 'Always available icon',
        },
    ]

    return (
        <>
            <div className="tiles-container">
                {testArray.map((tile) => {
                    return (
                        <>
                            <div className="tile-container">
                                <img src={tile.img} alt={tile.label} />
                                <h1 className="tile-title">{tile.title}</h1>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Tiles
