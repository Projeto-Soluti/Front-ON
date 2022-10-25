import { Box, Grid } from '@mui/material';
import ListaPostagem from '../ListaPostagem/ListaPostagem';
import { BarLoader } from 'react-spinners'

function TabPostagem() {

  return (
    <>
      <Grid xs={12}>
        <Box>
          <BarLoader
            color="#168eb4"
            height={7}
            width='100%'
          />
        </Box>
        <Box>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </Box>
      </Grid>
    </>
  )
}

export default TabPostagem