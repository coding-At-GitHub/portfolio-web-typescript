import * as React from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import { Instagram, InstallDesktopRounded, LinkedIn } from '@mui/icons-material';
import { FaInstagram } from 'react-icons/fa';
import { Stack } from '@mui/material';

export default function ColorInversionFooterOne() {
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
                        <LinkedIn />
                    </IconButton>
                    <IconButton variant="plain">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton variant="plain">
                        <FacebookRoundedIcon />
                    </IconButton>
                    <IconButton variant="plain">
                        <Instagram />
                    </IconButton>
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
                <Box
                    variant="soft"
                   >
                    <Typography level="body-xs">&copy; 2023 - Developed by Rajesh Choudhary</Typography>
                </Box>

            </Stack>
            <Divider sx={{ my: 0.7 }} />


        </Sheet>
    );
}