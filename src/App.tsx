import React, { useState, useEffect } from 'react';
import './App.css';
import Maps from './Components/Maps'
import Header from './Components/Header';
import DesktopInfo from './Components/DesktopInfo';
import { fetchApiKey } from './http-requests/fetch-api-key'


function App() {
  // Google Maps Api -key must be downloaded before rendering the Maps-component.
  const [apikey, setApikey] = useState<string | null>(null)
  const [apiKeyLoaded, setApiKeyLoaded] = useState<boolean>(false)
  const [loadingInfo, setLoadingInfo] = useState<string>('Loading data...')

  useEffect(() => {
    const getKey = async () => {
      try {
        //const key: any = await fetchApiKey() Tested and it works. This will be used in production. 
        const key = process.env.REACT_APP_API_KEY!
        setApikey(key)
        setApiKeyLoaded(true)
      }
      catch (err) {
        console.log(err)
        setLoadingInfo('An error occured!')
      }
    }
    getKey()
  })
  return (
    <div className='h-full w-full'>
      <div className="grid grid-cols-12 grid-rows-6 gap-3 h-full">
        <div className='bg-purple-700 col-start-2 col-end-12 row-start-1 row-span-1 lg:col-start-2 lg:col-end-12'>
          {/* <Header/> */}Header
        </div>
        <div className='bg-green-300 col-start-2 col-end-12 row-start-2 row-span-1'>
         <DesktopInfo/> 
          </div>
        <div className='bg-red-600 col-start-2 col-end-12 row-start-3 row-span-4'>
          {apiKeyLoaded ? <Maps mapApiKey={apikey} /> : <h1>{loadingInfo}</h1>}
        </div>
      </div>
    </div>
  );
}

export default App;


// {apiKeyLoaded ? <Maps mapApiKey={apikey} /> : <h1>{loadingInfo}</h1>}