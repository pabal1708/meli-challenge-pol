import React, { useEffect, useState } from 'react'

import Layout from '../components/layout/'
import Header from '../components/header'
import DetailModal from '../components/detailModal/index'
import { useRouter } from 'next/router'
import Head from 'next/head'


const Detail = () => {
  const router = useRouter()
  const { id } = router.query
  const { pathname } = router

  return (
    <>
      <Head>
        <title>Pol Challenge</title>
        <meta name="Item - Detail " content="Generated by Pol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header pathname={pathname} />
        <div className="view-detail-modal">
          <DetailModal id={id} />
        </div>
      </Layout>
    </>
  )
}

export default Detail