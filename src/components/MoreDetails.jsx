import './MoreDetails.css'
function MoreDetails ({moreData, Back}){
    const {flags, name, population, region, subregion, capital, tld, currencies, languages, borders} = moreData;
    const currency = Object.values(currencies)[0].name;
    const nativeName = Object.values(name.nativeName)[Object.values(name.nativeName).length-1].common;
    const lang = Object.values(languages).join(', ');
    return (
        <div className="moreData-main">
            <div className="moreData-Container">
                <button className='button' onClick={Back}> <ion-icon name="arrow-back-outline"></ion-icon> Back</button>
                <div className="details-card-container">
                    <img className="details-image" src={flags.png} alt={flags.alt} />
                    <div className="details-container">
                        <h2 className='detail-title'>{name.common}</h2>
                        <div className="section-container">
                            <div className={"section1"}>
                                <div className="details-item">
                                    <p className="detail-name">Native Name:</p>
                                    <p className="val">{nativeName}</p>
                                </div>
                                <div className="details-item">
                                    <p className="detail-name">Population:</p>
                                    <p className="val">{population}</p>
                                </div>
                                <div className="details-item">
                                    <p className="detail-name">Region:</p>
                                    <p className="val">{region}</p>
                                </div>
                                <div className="details-item">
                                    <p className="detail-name">Sub-Region:</p>
                                    <p className="val">{subregion}</p>
                                </div>
                                <div className="details-item">
                                    <p className="detail-name">Capital:</p>
                                    <p className="val">{capital}</p>
                                </div>
                            </div>
                            <div className="section2">
                                <div className="details-item">
                                    <p className="detail-name">Top-Level Domain:</p>
                                    <p className="val">{tld[0]}</p>
                                </div>
                                <div className="details-item">
                                    <p className="detail-name">Currencies:</p>
                                    <p className="val">{currency}</p>
                                </div>
                                <div className="details-item">
                                    <p className="detail-name">Languages:</p>
                                    <p className="val">{lang}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-section">
                            <p className="detail-name">Border Countries:</p>
                            <div className="border-container">
                                {  
                                   !borders ? 
                                   <p className="border-items">
                                        N/A
                                    </p>
                                    :    borders.map((items, i) => {
                                        return (<p className="border-items" key={i}>
                                            {items}
                                            </p>)
                                        })

                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreDetails;