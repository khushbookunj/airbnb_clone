import React from 'react'
import Card from './Card/Card';
import style from './PageConatiner.module.css'



const PageContainer = ({ data }) => {

   
    return (
        <div className={style.CardContainer}>
            {
                data.map((i) => {
                    return <Card
                        id={i.id}
                        image={i.image}
                        name={i.name}
                        title={i.title}
                        date={i.date}
                        rating={i.rating}
                        price={i.price}
                        
                    />
                })
            }

        </div >
    )
}

export default PageContainer
