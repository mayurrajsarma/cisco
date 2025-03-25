import React, { useEffect, useState } from 'react'
import Container_title from './Container_title'
import ContainerCard from './ContainerCard'
import CardHorizontal from './CardHorizontal'
import InternalNews from './InternalNews'
import client from '../../ciscodemo/lib/client'


const Container = () => {

    const [cardData, setCardData] = useState([]) ;
    
    useEffect(()=> {

        // const fun = async
        client.fetch('*[_type == "card"]')
        .then((res)=> {
            // console.log(res);
            setCardData(res) ;
        });

        
    },[])  

    //if(cardData.length === 0) return ;
  return  (
    <div className=''>
        <div className='mt-14 mx-30'>
            <Container_title/>
            <div className='flex justify-between'>
                {cardData.map((data)=> 
                    // console.log(data.title) 
                    <ContainerCard key={data._id} image={data?.cardImage} title={data.title} description={data.description}/>
                )}
            </div>
            <CardHorizontal/>
            <InternalNews/>
        </div>
    </div>
  )
}

export default Container