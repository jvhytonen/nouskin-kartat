import {handleModalClosingType} from './Maps'

/**
 * X -icon that closes the open modal 
 * 
 */

interface CloseModalType {
    close: handleModalClosingType
}

const CloseModal = ({close}: CloseModalType) => {
    return (
        <div className='absolute right-3 top-3 text-lg font-bold text-gray-500 cursor-pointer hover:bg-gray-200 hover:text-black' onClick={close}>X</div>
    )
}
export default CloseModal
