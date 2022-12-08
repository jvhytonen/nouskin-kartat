import { handleCheckboxesType } from './Maps'

interface CheckBoxAreaType {
    showOMaps: boolean,
    showSchoolMaps: boolean
    changeCheckboxValue: handleCheckboxesType
}



const CheckboxArea = ({showOMaps, showSchoolMaps, changeCheckboxValue}: CheckBoxAreaType) => {
    return (
        <div className='absolute top-2 right-2 rounded-lg p-2 bg-gray-200'>
            <div className='font-bold mb-4'>
                Näytä
            </div>
            <div className='flex items-center justify-around'>
                <input className='mr-1' type="checkbox" checked={showOMaps} name='o-maps' onChange={() => changeCheckboxValue('oMaps')} />
                <label className='w-[75%] mr-1' htmlFor='o-maps'>Maastosuunnistus</label>
                <img className='w-[30px] h-auto' src={'./polyicon.jpg'} alt='Orienteering map' />
            </div><div className='flex items-center justify-around'>
                <input className='mr-1' type="checkbox" checked={showSchoolMaps} name='school-maps' onChange={() => changeCheckboxValue('schoolMaps')} />
                <label className='w-[75%] mr-1' htmlFor='o-maps'>Koulu- ja spritti</label>
                <img className='w-[30px] h-auto' src={'./house.png'} alt='School map' />
            </div>
        </div>
    )
}

export default CheckboxArea