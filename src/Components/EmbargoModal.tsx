import { handleModalClosingType } from './Maps'
import CloseModal from './CloseModal'

interface EmbargoModalType {
    close: handleModalClosingType
}

const EmbargoModal = ({ close }: EmbargoModalType) => {
    return (
        <div className='absolute top-5 left-5 w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5'>
            <div className='h-full w-full bg-slate-100 rounded-lg'>
            <div className='h-16 w-full pl-[8%] flex border-b-2 border-gray-200 items-center'>
                    <h1 className='font-serif font-bold text-xl'>SM-viesti 2025 - harjoituskielto</h1>
                    <CloseModal close={close} />
                </div>
                <div className='h-4/5 w-full grid grid-cols-12 mt-3'>

                    <p className='col-start-2 col-end-12'>Nouski järjestää suunnistuksen SM-viestin vuonna 2025 Luhalahden alueella. </p>
                    <p className='col-start-2 col-end-12 mt-3 mb-5'>Alueella on harjoituskieltoalue, jossa SM-viestiin osallistuvat eivät saa harjoitella ennen tapahtumaa.
                        Katso harjoituskiellon tarkka alue ja lisätietoja <span className='text-blue-800 underline italic'><a href='http://www.karttarekisteri.fi/' rel="noreferrer" target="_blank">Suunnistusliiton karttarekisteristä.</a></span></p>

                </div>
            </div>
        </div>
    )
}
export default EmbargoModal