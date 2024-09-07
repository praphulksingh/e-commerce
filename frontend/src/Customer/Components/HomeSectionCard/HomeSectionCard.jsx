import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' src="https://rukminim2.flixcart.com/image/612/612/xif0q/jewellery-set/h/y/i/na-na-1-skr58123-suk-2-sukkhi-original-imagyudjhzwrycyx.jpeg?q=70" alt="" />
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Gold Jewellery</h3>
            <p className='mt-2 text-sm text-gray-500'>this is a gold jewellery</p>
        </div>
    </div>
  )
}

export default HomeSectionCard