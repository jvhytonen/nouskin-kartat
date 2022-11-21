/**
 * X -icon that closes the open modal 
 * 
 */

import {handleModalClosingType} from './Maps'

interface CloseModalType {
    close: handleModalClosingType
}

const CloseModal = ({close}: CloseModalType) => {
    return (
        <div className='absolute top-50 right-5 text-xl font-bold border-black border-2 text-gray-500 cursor-pointer hover:bg-gray-200 hover:text-black' onClick={close}>X</div>
    )
}
export default CloseModal