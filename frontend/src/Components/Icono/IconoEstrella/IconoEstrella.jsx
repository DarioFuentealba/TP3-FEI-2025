import { FaStar, FaRegStar } from 'react-icons/fa';

const IconoEstrella = ({ activo, onClick }) => {
    return(
        <button onClick={onClick} className={`text-3xl hover:scale-150 transition ${ activo ? 'text-[#f6ff00]' : 'text-gray-400'} `}>
        {activo ? <FaStar /> : <FaRegStar />}
        </button>
    );
};

export default IconoEstrella;