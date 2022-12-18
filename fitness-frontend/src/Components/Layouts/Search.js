import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Stack, Typography, TextField, Button } from '@mui/material'

const Search = () => {
    return (
        <Stack alignItems='center' mt='30px' justifyContent='center'  padding='20px'>
            <Typography fontWeight={700} sx={{
                fontSize: { lg: '50px', xs: '35px' }}}
                mb='40px'
                textAlign='center'
             >
                Choose a category that best suits the <br/>workout you're searching for
            </Typography>
            <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          
          
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        {/* <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} /> */}
      </Box>
        </Stack>
    )
}

export default Search

