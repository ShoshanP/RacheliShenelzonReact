// import {CardContent, Typography } from '@mui/material';
import Card from '@mui/joy/Card';
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';


export default function OneService(props) {
    const { id, name, description, price, duration } = props;
    return (<>
        <Card sx={{ width: 320 }}>
            {/* <CardOverflow>
                    <img
                        src={img}
                        loading="lazy"
                        alt=""
                    />
            </CardOverflow> */}
            <CardContent>
                <Typography level="title-md">{name}</Typography>
                <Typography level="body-sm">{description}</Typography>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                    <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                        {price}$
                    </Typography>
                    <Divider orientation="vertical" />
                    <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                        {duration}  minutes
                    </Typography>

                </CardContent>
            </CardOverflow>
        </Card>
    </>);
};
