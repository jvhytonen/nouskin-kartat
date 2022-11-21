import { handleModalClosingType } from './Maps'
import CloseModal from './CloseModal'

interface ModalDataType {
    name?: string,
    mapMaker?: string,
    year?: string,
    scale?: string,
    description?: string,
    mapUrl: string
    close: handleModalClosingType
}

const Modal = ({ name, mapMaker, year, scale, description, mapUrl, close }: ModalDataType) => {
    return (
        <div className='h-full w-full bg-slate-100 rounded-lg'>
            {/* A bit impractical fix here. For some reason tailwind won't allow me to define height of this div in percentages. So here it comes with rem.  */}
            <div className='h-16 w-full pl-[8%] flex sm:text-4xl border-b-2 border-gray-200 items-center'>
                    <h1 className='font-serif'>{name}</h1>
                    <CloseModal close={close} />
            </div>
            {mapMaker || scale || year ?
                <div className='grid grid-cols-12 grid-rows-3 gap-2'>
                    <div className='col-start-2 col-end-5 font-bold'>Kartoittaja:</div>
                    <div className='col-start-6 col-end-12'>{mapMaker}</div>
                    <div className='col-start-2 col-end-5 row-start-2 font-bold'>Vuosi:</div>
                    <div className='col-start-6 col-end-12 row-start-2'>{year}</div>
                    <div className='col-start-2 col-end-5 row-start-3 font-bold'>Mittakaava:</div>
                    <div className='col-start-6 col-end-12 row-start-3'>{scale}</div>
                </div>
                : null}
            <div className='h-[15%] pl-5 pl-[8%] h-2/5 w-full'>
                {/* This is used only if a url to img exists */}
                {mapUrl ?
                    <div className='flex w-full'>
                        <div className='w-1/2 flex justify-center items-start'>
                            <h3>{description}</h3>
                        </div>
                        <div className='w-1/2 flex justify-center items-start'>
                            <img src={mapUrl} alt={name} className='h-[80%] w-auto border-black border-2' />
                        </div>
                    </div>
                    : <div>
                        <h3>{description}</h3>
                    </div>}
            </div>
        </div>
    )
}

export default Modal
/* 
<div className='h-2/5 flex border-b-2 border-gray-200'>
<div className='w-2/5'>
    <div className='h-1/3 pl-5 pt-5'>
        <h2 className='font-bold'>Kartoittaja: </h2>
    </div>
    <div className='h-1/3 pl-5 pt-5'>
        <h2 className='font-bold'>Mittakaava: </h2>
    </div>
    <div className='h-1/3 pl-5 pt-5'>
        <h2 className='font-bold'>Vuosi: </h2>
    </div>
</div>
<div>
    <div className='h-1/3 sm:ml-2'>
        <p>{mapMaker}</p>
    </div>
    <div className='h-1/3 pl-5 pt-5'>
        <h3>{scale}</h3>
    </div>
    <div className='h-1/3 pl-5 pt-5'>
        <h3>{year}</h3>
    </div>
</div>
</div> */