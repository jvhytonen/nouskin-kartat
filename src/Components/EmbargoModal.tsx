import { handleModalClosingType } from './Maps'

interface EmbargoModalType {
    close: handleModalClosingType
}

const EmbargoModal= (props:any) => {
    return (
        <div className='h-full w-full my-5 bg-slate-100 rounded-lg' onClick={(props.close)}>
            <div className='h-[20%] w-full pl-5 flex text-xl border-b-2 border-gray-200 items-center'>
                <h1>SM-viesti 2025 - harjoituskieltoalue</h1>
            </div>
            <div className='pl-5 pt-5 h-4/5 w-full'>
                <div>
                    <p>Nouski järjestää suunnistuksen SM-viestin vuonna 2025 Luhalahden alueella. Tämän johdosta alueella on harjoituskieltoalue,
                        jossa SM-viestiin osallistuvat eivät saa harjoitella ennen tapahtumaa.
                        Katso harjoituskiellon tarkka alue ja lisätietoja <a href='http://www.karttarekisteri.fi/'>Suunnistusliiton karttarekisteristä.</a></p>
                </div>
            </div>
        </div>
    )
}
export default EmbargoModal