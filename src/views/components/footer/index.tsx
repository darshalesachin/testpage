import React from 'react'
import {styled} from 'stitches'

const FooterText = styled('div', {
    marginTop: '$sm',
    marginBottom: '$sm',
    padding: '$sm 0',
    color: '$grey',
    fontSize: '12px',
    fontWeight: '400',
    textAlign: 'left'
})

const Footer: React.FC = () => {
    return (<>
            
            <FooterText>
                footer text sample
            </FooterText>
        </>
    )
}

export default Footer
