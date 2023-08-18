import './Card.css'
function Card ({Data, moreDetails}) {
    // {CommonName, imageURL, population, region, capital}
    const {flags, name, population, region, capital} = Data;
    return (
        <div className='cards' onClick={()=>moreDetails(Data)}>
            <img className='image' src={flags.png} alt={flags.alt}  />
            <div className='container'>
                <h3 className='name'>{name.common}</h3>
                <div className="details">
                    <div className='population'>
                        <p className='label'>Population: </p>
                        <p className='val'>{population}</p>
                    </div>
                    <div className='region'>
                        <p className='label'>Region: </p>
                        <p className='val'>{region}</p>
                    </div>
                    <div className='capital'>
                        <p className='label'>Capital: </p>
                        <p className='val'>{capital}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;