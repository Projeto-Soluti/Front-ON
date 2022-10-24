import { TabContext, TabPanel } from '@material-ui/lab';
import { AppBar, Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react'
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
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem/>
          </Box>
        </TabPanel>
      </TabContext>
    </>
  )
}

export default TabPostagem