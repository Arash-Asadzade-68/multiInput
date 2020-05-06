import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout'
import Meta from 'components/Meta';
import Home from 'components/Home'
import { ResultContext } from 'utils';

const Index = () => {
    //Persist Data when page refreshed. results is iif function
    const results =()=>{
    if (typeof window !== 'undefined') {
    const results = JSON.parse(localStorage.getItem('results'))
     if(results.length > 0)
     return results
    }
    return[{
        id: Math.random(),
        value: ''
    }]}

   

    return (<Layout>
        <Meta pageTitle="Multi Input" />
        <ResultContext.Provider value={results()}>
            <Home />
        </ResultContext.Provider>
    </Layout>)
}
    ;

export default Index;