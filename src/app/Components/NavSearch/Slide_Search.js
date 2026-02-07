import React from 'react';

function Slide_Search({ title, img, rating, released, platforms }) {
  return (
    <div className='flex bg-[#ff5353] my-3 p-4 rounded-xl hover:bg-[#ff4444] hover:scale-102 transition-all duration-400 cursor-pointer'>
      <div>
        {img ? <img 
          src={img || '/placeholder.jpg'}  
          alt={title}  
          className='w-40 h-30 object-cover rounded-lg'
        /> : <div className='w-40 h-30 object-cover rounded-lg bg-gray-500 flex justify-center items-center'><span className='text-white'>N/A🥱</span></div>}
      </div>
      <div className='ml-6 mt-3 text-white'>
        <h1 className='font-bold text-[1.1rem] mb-2'>{title}</h1>
        <div className='flex gap-2 mb-2'>
          <span className='text-sm'>{released ? `#${released}` : 'TBA'}</span>
          <span className='font-bold'>.</span>
          <span className='text-sm'>⭐ {rating || 'N/A'}</span>
        </div>
        <div className='flex flex-wrap gap-2'>
          {platforms?.map((platform, index) => (  
            <span 
              key={index} 
              className='bg-gray-700 px-2 py-1 rounded-xl text-xs font-lg text-white'
            >
              {platform.platform?.name || platform.name} 
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slide_Search;