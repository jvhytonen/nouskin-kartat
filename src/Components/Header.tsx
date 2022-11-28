
/**
 * Header component. The bg-image -class is defined in the grid-definition of <App className="tsx"></App> 
 * The css-tricks of the bg-image is done in App.css.
 */

const Header = () => {
    return (
        <div className='h-full w-full font-serif flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold xl:text-5xl'>Nouskin kartat</h1>
            <h3 className='text-xl italic xl:text-2xl'>Suunnistuskartat Ikaalisten seudulla</h3>
        </div>
    )
}
export default Header