import {useState, useEffect, useRef, useCallback} from 'react';
import {Box, Typography} from '@mui/material'
import {blue, red, green} from '@mui/material/colors'

const ReactionTest = () => {

const [status, setStatus] = useState('idle');
const [reactionTime, setReactionTime] = useState(0);
const [results, setResults] = useState([]);
const startTimeRef = useRef(null);

const colors = {
    idle: blue[500],
    waiting: red[700],
    ready: green["A400"],
    result: blue[500],
    early: blue[500],
};

const messages = {
    idle: 'Reaction Time Test',
    waiting: 'Wait for green...',
    ready: 'Click!',
    result: `${reactionTime} ms`,
    early: 'Too early!'
}

const backgroundColor = colors[status] || 'gray'
const message = messages[status] || 'Unknown state'

    useEffect(() => {
        let timer;
        if (status === 'waiting') {
            const delay = Math.random() * 2000 + 1000;
            timer = setTimeout(() => {
                setStatus('ready');
                startTimeRef.current = Date.now();
            }, delay);
        }
        return () => clearTimeout(timer)
    }, [status])

const handleClick = useCallback(() => {
    if (status === 'idle') {
        setStatus('waiting');
    } else if (status === 'waiting') {
        setStatus('early');
        setReactionTime(null)
    } else if (status === 'early') {
        setStatus('waiting')
        setReactionTime(null)
    } else if (status === 'ready') {
        const endTime = Date.now();
        const reactionTime = endTime - startTimeRef.current;

        setReactionTime(reactionTime);

        setResults(prev => {
            const updated = [reactionTime, ...prev];
            return updated.slice(0, 5);
        })
        setStatus('result')
    } else if (status === 'result') {
        setStatus('waiting');
        setReactionTime(null)
    }
}, [status]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === " ") {
                e.preventDefault();
                handleClick();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleClick]);

    return(
        <Box
            onClick={handleClick}
            tabIndex={0}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "94vh",
                cursor: "pointer",
                userSelect: "none",
                background: backgroundColor
        }}
        >
            <Typography variant="h2">
                {results.join(", ")}
            </Typography>
            <Typography variant="h1" fontWeight="500">
                {message}
            </Typography>
        </Box>
    )
}
export default ReactionTest;