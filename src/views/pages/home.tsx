import React from 'react'
import {styled} from 'stitches'
import Footer from '../components/footer'
import Header from "../components/header";

const Wrapper = styled('div', {
    background: '$backgroundGrey'
})

const TabsWrap = styled('div', {
    maxWidth: '1080px',
    margin: '0 auto',
})

const CenterWrapper = styled('div', {
    margin: 'auto',
    maxWidth: '1080px',
})


const Home: React.FC = () => {

    return (<>
            <Wrapper>
                <CenterWrapper>
                    <Header></Header>
                    <Footer></Footer>
                </CenterWrapper>
            </Wrapper>
        </>
    )
}

export default Home
