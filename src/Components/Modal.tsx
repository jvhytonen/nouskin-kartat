import {handleModalClosingType} from './Maps'
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
            <div className='h-[20%] w-full pl-5 flex text-4xl border-b-2 border-gray-200 items-center'>
                <h1 className='font-serif'>{name}</h1>
                <CloseModal close={close}/>
            </div>
            {mapMaker || scale || year ?
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
                    <div className='h-1/3 pl-5 pt-5'>
                        <p className='pl-5'>{mapMaker}</p>
                    </div>
                    <div className='h-1/3 pl-5 pt-5'>
                        <h3 className='pl-5'>{scale}</h3>
                    </div>
                    <div className='h-1/3 pl-5 pt-5'>
                        <h3 className='pl-5'>{year}</h3>
                    </div>
                </div>
            </div>
            : null }
            <div className='pl-5 pt-5 h-2/5 w-full'>
                {/* This is used only if a url to img exists */}
                {mapUrl ?
                    <div className='flex h-full w-full'>
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