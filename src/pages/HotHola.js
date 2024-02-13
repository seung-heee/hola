import React from 'react';
import FixedBottom from '../components/FixedBottom';
import { Link } from 'react-router-dom';
import { images } from '../utils/images';

const HotHola = () => {
    return (
        <div className='HotHola relative titleShadowXX'>
            <div className="titleFont text-6xl text-center pt-16 mb-6 flex items-center justify-center">
                <span className='inline-block mr-3'>달아</span>
                <span className='groovyFont'>HOLA!</span>
            </div>

            <Link to='https://www.instagram.com/blackmind_hs?igsh=MXNhN3d3cXUxeGxz' target='_blank' className='flex w-9/12 mx-auto justify-between items-center mb-7'>
                <div className='w-6/12'><img src={images.blackheart} alt="흑심" /></div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='text-4xl mb-2'>흑심</div>
                    <div className='text-center'>성결대학교 유일무이<br/>댄스 동아리</div>
                </div>
            </Link>

            <Link to='https://www.instagram.com/sku.pegasuss?igsh=MXZlbjhianhocHk3ag%3D%3D' target='_blank' className='flex w-9/12 mx-auto justify-between items-center mb-7'>
                <div className='w-5/12'><img src={images.pegasuss} alt="페가수스" /></div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='text-4xl mb-2'>페가수스</div>
                    <div className='text-center'>성결대학교 유일무이<br/>대표 응원단</div>
                </div>
            </Link>

            <Link to='https://www.instagram.com/music_.__._ae?igsh=MWFvZnB5N3FqcjlybQ==' target='_blank' className='flex w-9/12 mx-auto justify-between items-center mb-12'>
                <div className='w-6/12'><img src={images.music} alt="뮤직애" /></div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='text-4xl mb-2'>뮤직애</div>
                    <div className='text-center'>성결대학교 유일한<br/>뮤지컬 연극 동아리</div>
                </div>
            </Link>
            <FixedBottom />
        </div>
    );
};

export default HotHola;