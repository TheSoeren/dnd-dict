import Autocomplete from '@mui/material/Autocomplete'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import type { NextPage } from 'next'

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
]

const Home: NextPage = () => {
  return (
    <Container sx={{ my: '30px' }}>
      <Stack spacing={2}>
        <Autocomplete
          freeSolo
          disableClearable
          size="small"
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Stack>
    </Container>
  )
}

export default Home
