import { useEffect, useState, useRef } from 'react'
import { handleFullMapType } from './Maps'


/**
 * 
 * 
 */

interface FullMapType {
    closeMap: handleFullMapType
    fullMapUrl?: string
    name: string
}

const FullMap = ({ fullMapUrl, closeMap, name }: FullMapType) => {
    const [layout, setLayout] = useState<string | null>(null)
    const div = useRef<HTMLDivElement>(null)
    //GetMetaData will measure the natural width and height of the map image. 
    const getMetaData = async (url: string) => {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image)
            image.onerror = () => reject()
            image.src = url
        })
    }

    useEffect(() => {
        //The height and width of the image must be measured to know the orientation (landscape/portrait) before the full map will be opened. 
        const measureDimensions = async () => {
            if (fullMapUrl) {
                const mapImage = await getMetaData(fullMapUrl) as HTMLImageElement
                if (mapImage.naturalWidth > mapImage.naturalHeight) {
                    setLayout('landscape')
                } else {
                    setLayout('portrait')
                }
            }
        }
        measureDimensions()
    })
    const handleCloseClick = () => {
        closeMap()
        setLayout(null)
    }

    const landscapeDivStyle = 'fixed top-1/4 top-[20%] sm:top-[10%] left-[50%] w-[calc(100vw_-_10px)] xl:max-w-[calc(100vw_-_30%)] 2xl:max-w-[calc(100vw_-_45%)] translate-x-[-50%] mx-auto h-auto pb-[8%] xsm:pb-[6%] sm:py-[5%] md:p-10 md:w-[calc(100vw_-_15%)] lg:w-[calc(100vw_-_30%)] xl:w-[calc(100vw_-_40%)]'
    const portraitDivStyle = 'fixed top-[10%] left-[50%] w-[calc(100vw_-_10px)] translate-x-[-50%] mx-auto px-[2%] py-[8%] sm:py-[5%] xl:px-0 xsm:px-[1%] xsm:w-[calc(100vw_-_20%)] sm:w-[calc(100vw_-_35%)] md:sm:w-[calc(100vw_-_45%)] lg:w-[calc(100vw_-_50%)] xl:w-[calc(100vw_-_55%)] 2xl:w-[calc(100vw_-_60%)]'
    
    const landscapeCloseStyle = 'text-xl sm:text-2xl md:border-white md:border-2 w-[3%]'
    const portraitCloseStyle = 'text-xl border-white border-2 h-[4%]'
    return (
            <div ref={div} className={`${layout === 'landscape' ? landscapeDivStyle : portraitDivStyle} flex items-center justify-center border-slate-200 border-4 rounded-lg`}>
                <div onClick={handleCloseClick} className={`${layout === 'landscape' ? landscapeCloseStyle : portraitCloseStyle} text-slate-400 absolute top-1 right-2 z-20 aspect-square flex justify-center items-center hover:bg-white hover:text-black hover:cursor-pointer`}>X</div>
                <div className='absolute top-0 left-0 h-full w-full bg-black/70'></div>
                <p className='absolute top-1 left-50 text-white uppercase text-lg z-10'>{name}</p>
                {/* Important! This max-h-definition in img makes the fullmap-modal behave responsively according to the rules defined in parent div */}
                <img id='image' className='max-h-[60vh] max-w-auto z-10' src={fullMapUrl} alt={'alt'} />
                <p className='absolute bottom-1 left-50 text-blue-300 underline md:text-lg z-10 cursor-pointer'><a href={fullMapUrl} target="_blank" rel="noreferrer">Avaa kartta uuteen välilehteen</a></p>
            </div>
    )
}
export default FullMap