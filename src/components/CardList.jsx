import Card from './Card';
import './CardList.css'
function CardList ({countries, moreDetails}) {
    return (
        <div className='cardList'>
            {
                countries.map((item, i) => {
                    return (
                        <Card 
                            key={countries[i].name.common}
                            Data={item}
                            moreDetails={moreDetails}
                        />
                    )
                })
            }
            
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
        </div>
    )
}

export default CardList;