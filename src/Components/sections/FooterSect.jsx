import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import { Instagram, LinkedIn } from '@mui/icons-material';
import { Stack } from '@mui/material';

export default function ColorInversionFooterTwo() {
    const [color, setColor] = React.useState('neutral');
    return (
        <Sheet
            variant="solid"
            color={color}
            invertedColors
            sx={{
                ...(color !== 'neutral' && {
                    bgcolor: `${color}.800`,
                }),
                flexGrow: 1,
                py: 0.3,
                px: 3,
                borderRadius: { xs: 0, sm: 'sm' },
            }}
        >
            <Divider sx={{ my: 0.5 }} />
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <Box variant="soft" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3 }}>
                    <IconButton variant="plain">
                        <a href="https://www.linkedin.com/in/rajesh-choudhary-89a561285" target="_blank" rel="noopener noreferrer">
                            <LinkedIn style={{ color: 'white' }} />
                        </a>
                    </IconButton>
                    <IconButton variant="plain">
                        <a href="https://github.com/coding-At-GitHub" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon style={{ color: 'white' }} />
                        </a>
                    </IconButton>
                    <IconButton variant="plain">
                        <a href="https://www.linkedin.com/in/rajesh-choudhary-89a561285" target="_blank" rel="noopener noreferrer">
                            <FacebookRoundedIcon style={{ color: 'white' }} />
                        </a>
                    </IconButton>
                    <IconButton variant="plain">
                        <a href="https://www.linkedin.com/in/rajesh-choudhary-89a561285" target="_blank" rel="noopener noreferrer">
                            <Instagram style={{ color: 'white' }} />
                        </a>
                    </IconButton>
                    {/* Other social media icons with anchor tags */}
                    <Input
                        variant="soft"
                        placeholder="Type in your email"
                        type="email"
                        name="email"
                        endDecorator={
                            <IconButton variant="soft" aria-label="subscribe">
                                <SendIcon />
                            </IconButton>
                        }
                        sx={{ ml: 'auto', }}
                    />
                    <Divider orientation="vertical" />
                </Box>
                <Box variant="soft">
                    <Typography level="body-xs">&copy; 2023 - Developed by Rajesh Choudhary</Typography>
                </Box>
                <Box></Box>
            </Stack>
            
            <Divider sx={{ my: 0.7 }} />
        </Sheet>
    );
}
