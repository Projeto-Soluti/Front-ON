import { TabContext, TabPanel } from '@material-ui/lab';
import { AppBar, Box, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import ListaPostagem from '../ListaPostagem/ListaPostagem';

function TabPostagem() {

  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string){
    setValue(newValue);
  }

  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className="tabPost" style={{backgroundColor: '#06283d', color: 'white'}}>
          <Tabs centered indicatorColor="secondary" onChange={handleChange} >
            <Tab label="Postagens" value="1" style={{marginRight: '45px', color: 'white'}} className='tab1' />
            <Tab label="Sobre-nós" value="2" style={{color: 'white'}} />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="sobre">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ut eveniet natus totam et, voluptate dicta tempore alias, odio nobis non eius cupiditate minima inventore pariatur! Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit consequuntur suscipit fugiat, nam quis quod quaerat veritatis et, vel ratione beatae, facere neque! Quo animi porro voluptate saepe deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci, officia aut quidem dolorum deserunt iure dolorem doloribus velit nobis quas consequatur at ullam odit, nesciunt est nulla nihil excepturi!</Typography>
        </TabPanel>
      </TabContext>
    </>
  )
}

export default TabPostagem