import React from 'react'
import Layout from '../../Layout'
import Card from '../../components/Card/Card';
import cardJson from '../../wharehouse/Lake.json';
import PageContainer from '../../components/PageContainer';

const HomePage = () => {
  console.log(cardJson);
  return (
    <>
      <Layout>
        <PageContainer data={cardJson?.data} />
      </Layout>
    </>
  )
}

export default HomePage
