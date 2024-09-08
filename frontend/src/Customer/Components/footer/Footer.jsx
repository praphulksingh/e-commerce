import {Button, Grid2, Typography } from '@mui/material'
import {Link} from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <Grid2 className="bg-black text-white text-center mt-10 w-full" 
        container
        sx={{bgcolor:"black", color:"white",py:3 }}
        > 
            <Grid2 items xs={12} sm={6} md={3} className='w-1/4'>
                <Typography className='pb-5' variant='h6'>Company</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>About</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Press</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Contact Us</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Partners</Button>
                </div>
            </Grid2>
            <Grid2 items xs={12} sm={6} md={3} className='w-1/4'>
                <Typography className='pb-5' variant='h6'>Solutions</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Marketing</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Analytics</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Insight</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Supports</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Commence</Button>
                </div>
            </Grid2>
            <Grid2 items xs={12} sm={6} md={3} className='w-1/4'>
                <Typography className='pb-5' variant='h6'>Documentations</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Guides</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Api Status</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Press</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Contact Us</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Partners</Button>
                </div>
            </Grid2>
            <Grid2 items xs={12} sm={6} md={3} className='w-1/4'>
                <Typography className='pb-5' variant='h6'>Legal</Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Claim</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Blog</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Privacy</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Terms</Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom>Partners</Button>
                </div>
            </Grid2>
            <Grid2 className='pt-20' items xs={20}>
                <Typography variant='body2' company='p' align='center'>&copy; 2024 company_name. All rights reserved</Typography>
                <Typography variant='body2' company='p' align='center'>Made by Praphul Kumar</Typography>
                <Typography variant='body2' company='p' align='center'>
                    Icons made by {''}
                    <Link href="https://www.freepik.com" color="inherit" underline="always">Freepik</Link>{''}
                    from{''}
                    <Link href="https://www.flaticon.com" color="inherit" underline="always">Flaticon</Link>
                </Typography>
            </Grid2>
        </Grid2>
    </div>
  )
}

export default Footer