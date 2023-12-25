import React from 'react'
import Layout from '../../Layout'
import Card from '../../components/Card/Card';
import cardJson from '../../wharehouse/Lake.json';
import PageContainer from '../../components/PageContainer';
import { Carousel } from '../../components/Carousel';
import FirstFooter from '../../components/Footer/FirstFooter/FirstFooter';

const HomePage = () => {
  console.log(cardJson);
  return (
    <>
      <Layout>
        <Carousel />
        <PageContainer data={cardJson?.data} />
        <FirstFooter/>
      </Layout>
    </>
  )
}

export default HomePage
