import React from 'react'
import { useNavigate } from 'react-router-dom';
import constructionLogo from "../assets/under_construction_logo.png";
import { Button } from '@chakra-ui/react'

export default function UnderConstruction() {

    const navigate = useNavigate();

    return(
        <div className='UnderConstructionPage' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', 
        }}>
        <img src={constructionLogo} alt='Construction logo' />
        <h1>This page is currently under construction, and will be live soon!</h1>
        <Button variant="ghost" onClick={() => navigate('/')}>Back to Home Page</Button>
        </div>
    )
}