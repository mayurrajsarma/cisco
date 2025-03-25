import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import client from '../../ciscodemo/lib/client';

const InternalNews = () => {

  const [newsCard,setNewsCard] = useState([]) ;

  useEffect(()=> {
    client.fetch('*[_type == "newsCard"]')
    .then((res)=> {
        // console.log(res);
        setNewsCard(res) ;
    });
},[])

  return (
    <div className='mt-14'>
        <p className='text-3xl'>Inside Cisco</p>
        <div className='flex'>
          {newsCard.map(data=> 
          <NewsCard 
              key={data._id}
              header={data.header}
              title={data.title}
              description={data.description}
              btnText={data.btnText}
              linkUrl={data.link}
          />)}
        </div>
    </div>
  )
}

export default InternalNews