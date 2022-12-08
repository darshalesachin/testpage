import React from 'react'
import {styled} from 'stitches'

const Box = styled('div', {
    marginTop: '$xxl',
    backgroundColor: '$borderYellow',
    height: '80px',
    display: 'flex'
})

const Title = styled('div', {
    paddingLeft: '$md',
    color: '$mediumDarkGrey',
    fontSize: '28px',
    lineHeight: '41px',
    textAlign: 'left',
    fontWeight: 500,
    transform: 'translate(0%, 20%)',
    width: '100%',
    '@media only screen and (max-width:650px) and (min-width:300px)':{fontSize:'20px',textAlign: 'center'}
})

const Welcome: React.FC = () => {
    return (
        <>
            <Box>
                <Title>Welcome user!!!</Title>
            </Box>
        </>
    )
}

export default Welcome
