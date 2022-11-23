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
        <div className='absolute right-2 top-50 text-lg font-bold text-gray-500 cursor-pointer hover:bg-gray-200 hover:text-black' onClick={close}>X</div>
    )
}
export default CloseModal