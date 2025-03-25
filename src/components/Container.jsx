import React, { useEffect, useState } from 'react'
import Container_title from './Container_title'
import ContainerCard from './ContainerCard'
import CardHorizontal from './CardHorizontal'
import InternalNews from './InternalNews'
import client from '../../ciscodemo/lib/client'


const Container = () => {

    const [cardData, setCardData] = useState([]) ;
    const [hCard,setHCard] = useState([]) ;
    
    
    useEffect(()=> {
        client.fetch('*[_type == "card"]')
        .then((res)=> {
            // console.log(res);
            setCardData(res) ;
        });

        client.fetch('*[_type == "hcard"]')
        .then((res)=> {
            // console.log(res);
            setHCard(res) ;
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
                    <ContainerCard key={data._id} image={data?.cardImage} title={data.title} description={data.description} linktext={data.linkText} linkURL={data.link}/>
                )}
            </div>
            <div>
                {hCard.map((data)=> <CardHorizontal key={data._id} image={data?.cardImage} title={data.title} description={data.description} buttonText={data.btnText}/>)}
            </div>
           
            <InternalNews/>
           
        </div>
    </div>
  )
}

export default Container