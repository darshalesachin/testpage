import React from 'react'
import {styled} from 'stitches'

const NavBar = styled('div', {
    lineHeight: '1.5',
    textAlign: 'left',
    fontWeight: 700,
    fontSize: '16px',
    color: '$darkBlue',
    letterSpacing: '-0.27',
    borderTop: '7px solid $borderYellow',
    padding: '$sm',
    backgroundColor: '$white',
    width:'100%',
    '@media only screen and (max-width:650px) and (min-width:300px)': {textAlign: 'center',width:'100%'},
})

const Menu = styled('div', {
    display: 'inline',
    width:'100%'
})

const MenuItem = styled('a', {
    display: 'inline',
    paddingRight: '$sm',
    verticalAlign: 'middle',
    marginRight: '$sm',
    color: '$darkBlue',
    whiteSpace:'nowrap',
    '&:hover': {
        color: '$darkBlue',
    },

})

const Header: React.FC = () => {

    return (
        <>
            <NavBar>
                <Menu>
                    <MenuItem style={{cursor: "default"}}>Logo</MenuItem>
                    <MenuItem href="#ignore" target="_blank" rel="noopener noreferrer">testing menu item</MenuItem>
                </Menu>
            </NavBar>
        </>
    )
}

export default Header
