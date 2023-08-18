import { useState, useEffect} from 'react';
import CardList from './components/CardList';
import Search from './components/Search';
import Header from './components/Header';
import MoreDetails from './components/MoreDetails';

function App() {
  const [data, setdata] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [region, setregions] = useState('');
  const [filterToggle, setFilterToggle] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [darkmode, setDarkMode] = useState('light');
  const [moreData, setMoreData] = useState({});
  const matchScreen = window.matchMedia("(prefers-color-scheme: dark)");

  

  matchScreen.addEventListener('change', ()=>{
     matchScreen.matches ? setDarkMode('dark'): setDarkMode('light');
  })
  
  const toggle = () => {
      filterToggle === false ? setFilterToggle(true) : setFilterToggle(false);
  }

  const darktoggle = () => {
    darkmode !== 'light'? setDarkMode('light') : setDarkMode('dark');
  }
  

  const countriesApi = async() => {
    try{
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setTimeout(()=>{
          setdata(data);
          console.log(data)
      }, 1000)
      
    }catch(e){
      console.log('ooops something went wrong');
    }
  }
  useEffect(()=> {
    countriesApi();
  }, []);

  const search = (e) =>{
      setSearchCountry(e.target.value);
  }

  const Regions = (e) =>{
    if(e.target.dataset.val){
      setregions(e.target.dataset.val);
    }
    setFilterToggle(false)
  }

  const moreDetails = (data) => {
    console.log(data);
    setMoreData(data);
    window.scrollTo({ top: 0, left: 0});
  }

  const Back = () => {
    setMoreData({});
  }

  useEffect(()=> {
    if(region !== 'All'){
      setFilterData(data.filter(item => {
                return item.region.includes(region)
      }))
    }else {
      setFilterData(data)
    }
      
  },[region, data]);

  


  const showdata = filterData.filter(item => {
    return item.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  })
  
  return (
      <main className={darkmode}>
        <div>
            <Header darkmode={darktoggle} icon={darkmode}/>
          {
              Object.entries(moreData).length > 0 
              ? <MoreDetails moreData={moreData} Back={Back}/>
              : (
                <div className="body-container">
                  <Search search={search} toggle={toggle} filter={filterToggle} region={Regions} regionText={region}/>
                    {
                      showdata.length !== 0
                      ? <CardList countries={showdata} moreDetails={moreDetails}/>
                      : <div className="load"> <div className="loading"></div></div>
                      // <p className='loading'>loading....</p>
                  } 
                </div> 
              )
              
          }
        </div>
        
      </main>
    )
 
}

export default App
