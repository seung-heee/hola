import { Link } from "react-router-dom";
import { images } from '../utils/images';
import Person from "./Person";
import { AiOutlineInstagram } from 'react-icons/ai';

const ElectionCommission = () => {
    return (
        <div>
            <div className="mb-3 mt-8 ">
                <div className="text-center"><img src={images.councilLogo} alt='비대위' className="w-14 mx-auto mb-1" /></div>
                <p className="text-sm">총학생회<br/> 비상대책위원회</p>
                <p className="text-sm"><Link to='https://www.instagram.com/sku_bisang/' className="flex items-center justify-center navLinkItem" target="_blank"><AiOutlineInstagram className="mr-1" /><span>sku_39th_renew</span></Link></p>
            </div>
            <div className="grid grid-cols-2 mb-16">
                <Person id={5} />
                <Person id={6} />
            </div>
        </div>
    )
}
   
export default ElectionCommission;