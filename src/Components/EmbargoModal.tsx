import { handleModalClosingType } from './Maps'
import CloseModal from './CloseModal'

interface EmbargoModalType {
    close: handleModalClosingType
}

const EmbargoModal= ({close}: EmbargoModalType) => {
    return (
        <div className='h-full w-full bg-slate-100 rounded-lg'>
            <div className='h-[20%] w-full pl-5 flex text-xl border-b-2 border-gray-200 items-center'>
                <h1 className='font-serif'>SM-viesti 2025 - harjoituskieltoalue</h1>
                <CloseModal close={close}/>
            </div>
            <div className='py-5 pl-5 h-4/5 w-full flex flex-col justify-around'>
                {/* <div className='m-5'> */}
                    <p>Nouski järjestää suunnistuksen SM-viestin vuonna 2025 Luhalahden alueella. </p>
                    <p>Alueella on harjoituskieltoalue, jossa SM-viestiin osallistuvat eivät saa harjoitella ennen tapahtumaa.
                        Katso harjoituskiellon tarkka alue ja lisätietoja <span className='text-blue-800 underline italic'><a href='http://www.karttarekisteri.fi/' rel="noreferrer" target="_blank">Suunnistusliiton karttarekisteristä.</a></span></p>
                {/* </div> */}
            </div>
        </div>
    )
}
export default EmbargoModal