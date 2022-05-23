import React from 'react';
import styled from 'styled-components';
import AppBar from './AppBar';

const Layout = ({ children }) => {
    return (
        <View>
            <div className="header">

                <AppBar />
            </div>

            <div className="container">
                {children}
            </div>
        </View>
    )
}

export default Layout;


const View = styled.div`
    .header{
        position:sticky;
        top: 0;
        z-index:16;
        width:100%;    
    }
    .container{
        padding:1em 1em;
        height:100%
    }

`