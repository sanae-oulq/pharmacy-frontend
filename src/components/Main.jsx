import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import Map from './Map/Map'
import Button from 'react-bootstrap/Button';

// import Map from './Map/Map';
import Cards from './cards/Cards';

const garrdeData = [
  { value: 'Nuit', label: 'Nuit' },
  { value: 'Jour', label: 'Jour' },
]


const URL = "https://faithful-tuna-cuff-links.cyclic.app";

const Main = () => 
{
    const [selectedCity, setCity] = useState(null)
    const [cites, setCities] = useState(null)
    const [selectedZone, setZone] = useState(null)
    const [zones, setZones] = useState(null)
    const [garde, setGarde] = useState(null)

    const [pharmacies, setPharmacies] = useState(null)

    useEffect(() => {
        fetch(`${URL}/api/cities`)
            .then(response => response.json())
            .then(data => {
                const options = data?.map(item => ({ value: item._id, label: item.name }));
                setCities(options)
            })
            .catch(error => console.log(error));
        
        selectedCity && fetch(`${URL}/api/zones/city/${selectedCity.value}`)
            .then(response => response.json())
            .then(data => {
                const options = data?.map(item => ({ value: item._id, label: item.name }));
                setZones(options)
            })
            .catch(error => console.error(error));
    },  [selectedCity, selectedZone, garde]) 
    
    const handlerPharmacies = () => {
        // console.log(selectedZone.value);
        // console.log(selectedCity.value);

        fetch(`${URL}/api/pharmacies/${garde.value}/${selectedZone.value}`)
        .then(response => response.json())
        .then(data => {
            console.log("data: ", data)
            setPharmacies(data);
            console.log(data);
        })
    }

    const isCity = !selectedCity;
    const isZone = !selectedZone;
    const isGarde = !garde;

    const handleCityChange = (e) =>{
        setCity({value: e.value, label: e.label});
    }

    const handleZoneChange = (e) =>{
        setZone({value: e.value, label: e.label});
    }

    const handleGardeChange = (e) =>{
        setGarde({value: e.value, label: e.label});
    }
    return(
    <>
       <div className='d-flex'>
            <div className='mx-3 flex-grow-1'>
                <Select 
                    options={cites} 
                    defaultValue={"select City"}
                    value={selectedCity}
                    onChange={handleCityChange}
                />
            </div>
            <div className='mx-3 flex-grow-1'>
                <Select 
                    options={zones} 
                    defaultValue={"select zone"}
                    value={selectedZone}
                    onChange={handleZoneChange}
                    isDisabled={isCity}
                    />
            </div>
            <div className='mx-3 flex-grow-1'>
                <Select 
                    options={garrdeData} 
                    defaultValue={"select garde"}
                    value={garde}
                    onChange={handleGardeChange}
                    isDisabled={isZone}
                />
            </div>

            <div className='mx-3 flex-grow-1'>
                <Button onClick={handlerPharmacies} variant="primary">Get</Button>
            </div>
        </div>

        {
            pharmacies?.length > 0 ?
                <div className='container'>
                    <div className='d-flex'>
                        <Cards pharmacies={pharmacies} />
                    </div>
                    <div className='d-flex mx-3'>
                        <Map pharmacies={pharmacies} />
                    </div>
                </div> 
            :
            <div className='d-flex justify-content-center mt-4'>
                Search Pharmacies
            </div>
        }
    </>
)}

export default Main;