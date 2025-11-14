import Header from '../components/header.jsx';
import ContainedButton from '../components/containedButton.jsx'
import {Box} from '@mui/material'
import viteLogo from '/vite.svg'
import reactLogo from '../assets/react.svg'

const Home = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center",
            gap: '2rem',
            height: '100vh',
        }}>
            <Header/>
            <Box display="flex" gap="2rem">
                <img src={viteLogo} alt="Vite Logo" width={200} height={200}/>
                <span style={{fontSize: "8rem", fontWeight: "bold"}}>+</span>
                <img src={reactLogo} alt="React Logo" width={200} height={200}/>
            </Box>
            <ContainedButton>Primary</ContainedButton>
            <ContainedButton color="secondary">Secondary</ContainedButton>
        </Box>
    );
};

export default Home;