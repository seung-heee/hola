import React from 'react';

const PageTitle = ({pagetitle}) => {
    return (
        <div className='titleFont text-4xl text-center pt-16'>
            {pagetitle}
        </div>
    );
};

export default PageTitle;