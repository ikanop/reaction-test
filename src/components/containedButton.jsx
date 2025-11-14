import {Button} from '@mui/material'

const ContainedButton = ({...props}) => {
    return (
        <Button variant="contained" sx={{width: "8rem"}} {...props}></Button>
    );
};

export default ContainedButton;