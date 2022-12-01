/**
 * This component provides extra info. Shown only on larger viewports as the user should be able to 
 *  use this simple app even without instructions. 
 */

const DesktopInfo = () => {
    return (
        <div className='h-full w-full text-lg 2xl:text-xl flex flex-col px-5 pb-5'>
            <p className='font-serif font-bold justify-self-start'>Ikaalisten seudun kartat</p>
            <p className='justify-self-center mt-5'>Oheisessa kartassa on merkittynä kaikki Ikaalisen Nouseva-Voima ry:n omistamat suunnistuskartat. Lisätietoja kartasta saa klikkaamalla kartalla merkittyä aluetta. Karttaan on merkitty myös vuoden 2025 SM-viestin harjoituskieltoalue. </p>
        </div>
    )
}
export default DesktopInfo