import { FaHeart, FaRegHeart } from 'react-icons/fa';

const IconoCorazonTarjetas = ({ activo, onClick }) => {
    return(
        <button onClick={onClick} className={`text-3xl hover:scale-150 transition ${ activo ? 'text-[#00FF84]' : 'text-[#00FF84]'} hover:drop-shadow-[0_0_8px_#00FF84]`}>
        {activo ? <FaHeart /> : <FaRegHeart />}
        </button>
    );
};

export default IconoCorazonTarjetas;