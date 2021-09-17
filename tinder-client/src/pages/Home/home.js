import React from 'react'

//Component importing
import Header from '../../components/Header/header'
import SwipeButtons from '../../components/SwipeButton/swipeButtons'
import TinderCards from '../../components/TinderCard/tinderCards'

function Home() {
    return (
        <div className="home">
            <Header></Header>
            <SwipeButtons></SwipeButtons>
            <TinderCards></TinderCards>
        </div>
    )
}

export default Home
