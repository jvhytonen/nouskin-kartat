import React, { useState, useEffect } from 'react';
import './App.css';
import Maps from './Components/Maps'
import Header from './Components/Header';
import Info from './Components/Info';
import DesktopInfo from './Components/DesktopInfo';
import { fetchApiKey } from './http-requests/fetch-api-key'

/**
 * App-component. Here the Google Maps Api -key is fetched from API. After that it will be passed to the Google Maps-component
 * and then the app starts working. 
 */

function App() {
  // Google Maps Api -key must be downloaded before rendering the Maps-component.
  const [apikey, setApikey] = useState<string | null>(null)
  const [apiKeyLoaded, setApiKeyLoaded] = useState<boolean>(false)
  const [loadingInfo, setLoadingInfo] = useState<string>('Loading data...')

  useEffect(() => {
    const getKey = async () => {
      try {
      //  const key: any = await fetchApiKey() 
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
     <div className='font-cabin bg-gradient-to-b from-blue-200 to-blue-400 md:h-full w-full'>
      <div className="grid grid-cols-12 grid-rows-6 gap-3 h-full">
        {/* The bg-image of the header is handled in App.css */}
        <div className='bg-image col-start-1 col-span-12 row-start-1 row-span-1 shadow-2xl'>
          <Header />
        </div>
        {/*The Map component. Modals are inside the map. */}
        <div className='ml-8 mb-8 col-start-1 col-end-12 row-start-2 row-span-4 lg:col-start-1 lg:col-end-8 lg:row-start-2 lg:row-span-5 xl:col-start-1 xl:col-end-7 xl:row-start-2 xl:row-span-5 border-black border-4 rounded-md'>
          {apiKeyLoaded ? <Maps mapApiKey={apikey} /> : <h1>{loadingInfo}</h1>}
        </div>
         {/* This will only be shown with larger viewports */}
        <div className='hidden lg:grid lg:col-start-8 lg:col-span-5 lg:row-start-2 lg:row-span-2 xl:col-start-7 xl:col-span-4 xl:row-start-3 xl:row-span-2'>
          <DesktopInfo/>
        </div>
        {/* "Footer component" with contact information */}
        <div className='col-start-1 col-span-12 row-start-6 lg:col-start-8 lg:col-span-5 lg:row-start-5 xl:col-start-10 xl:col-span-3 xl:row-start-5 xl:row-span-2'>
          <Info />
        </div>
      </div>
    </div>
  );
}

export default App;
