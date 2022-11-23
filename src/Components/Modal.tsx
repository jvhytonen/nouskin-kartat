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

        <div className='absolute top-5 left-5 min-h-3/5 w-4/5 md:w-3/5 xl:w-3/6 2xl:w-3/5'>
            <div className='h-full w-full bg-slate-100 rounded-lg text-sm sm:text-lg md:text-base 2xl:text-sm'>
                {/* A bit impractical fix here. For some reason tailwind won't allow me to define height of this div in percentages. So here it with rem.  */}
                <div className='h-16 w-full pl-[8%] flex border-b-2 border-gray-200 items-center'>
                    <h1 className='font-serif font-bold text-xl'>{name}</h1>
                    <CloseModal close={close} />
                </div>
                {mapMaker || scale || year ?
                    <div className='grid grid-cols-12 grid-rows-3 gap-2 border-b-2 border-gray-200 mt-5 pb-3'>
                        <div className='col-start-2 col-end-5 font-bold'>Kartoittaja:</div>
                        <div className='col-start-6 col-end-12'>{mapMaker}</div>
                        <div className='col-start-2 col-end-5 row-start-2 font-bold'>Vuosi:</div>
                        <div className='col-start-6 col-end-12 row-start-2'>{year}</div>
                        <div className='col-start-2 col-end-5 row-start-3 font-bold'>Mittakaava:</div>
                        <div className='col-start-6 col-end-12 row-start-3'>{scale}</div>
                    </div>
                    : null}
                <div className='h-2/5 w-full pl-[8%] mt-3 mb-3'>
                    {/* This is used only if a url to img exists */}
                    {mapUrl ?
                        <div className='flex w-full py-2 pr-2'>
                            <div className='w-1/2 flex justify-center items-start'>
                                <h3>{description}</h3>
                            </div>
                            <div className='w-1/2 flex justify-center items-start'>
                                <img src={mapUrl} alt={name} className='h-[80%] w-auto border-black border-2' />
                            </div>
                        </div>
                        : <div className='h-full w-full pb-3'>
                            <h3>{description}</h3>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Modal
