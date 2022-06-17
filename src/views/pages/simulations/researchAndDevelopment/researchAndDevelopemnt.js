import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const ResearchAndDevelopment = () => {
    const [values1, setValues1] = React.useState({
        processor_amount: '',
        camera_amount: '',
        display_amount: ''
    });

    const handleChange = (prop) => (event) => {
        setValues1({ ...values1, [prop]: event.target.value });
    };

    const [launch, setLaunch] = React.useState('');

    const handleLaunchChange = (event) => {
        setLaunch(event.target.value);
    };

    return (
        // <Box
        //     component="form"
        //     sx={{
        //         '& > :not(style)': { m: 1, width: '25ch' }
        //     }}
        //     noValidate
        //     autoComplete="off"
        // >
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} style={{ marginBottom: 2 }}>
            <Grid item xs={4}>
                {/* ------------------------------Card Component ------------------------------------------------*/}
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14, marginBottom: 2, fontWeight: 600, textAlign: 'center' }}>Product Name 1</Typography>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} style={{ marginBottom: 8 }}>
                            <Grid item xs={4}>
                                <FormControl variant="standard">
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: 12 }}>Processor</Typography>
                                        </Grid>
                                        <Grid item justifyContent="center" alignItems="center">
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                {/* <CurrencyRupeeIcon sx={{ fontSize: 14 }} /> */}
                                                <TextField
                                                    id="processor-p1"
                                                    value={values1.processor_amount}
                                                    variant="standard"
                                                    // style={{ width: '90%' }}
                                                    onChange={handleChange('processor_amount')}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl variant="standard">
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: 12 }}>Camera</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                {/* <CurrencyRupeeIcon sx={{ fontSize: 14 }} /> */}
                                                <TextField
                                                    id="camera-p1"
                                                    value={values1.camera_amount}
                                                    variant="standard"
                                                    // style={{ width: '60%' }}
                                                    onChange={handleChange('camera_amount')}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl variant="standard">
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: 12 }}>Display</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                {/* <CurrencyRupeeIcon sx={{ fontSize: 14 }} /> */}
                                                <TextField
                                                    id="display-p1"
                                                    value={values1.display_amount}
                                                    variant="standard"
                                                    // style={{ width: '60%' }}
                                                    onChange={handleChange('display_amount')}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item justifyContent="center" alignItems="center">
                                <FormControl variant="standard" fullWidth sx={{ m: 1, minWidth: 140, marginBottom: 4 }}>
                                    <InputLabel id="demo-simple-select-standard-label">New Launch / None</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={launch}
                                        onChange={handleLaunchChange}
                                        label="New Launch / None"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="New Launch">New Launch</MenuItem>
                                        <MenuItem value="Re-launch">Re-launch</MenuItem>
                                        <MenuItem value="Existing Product">Existing Product</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item xs={8}>
                                <Typography sx={{ fontSize: 13, fontWeight: 500, textAlign: 'left' }}>R & D Cost (in crs.)</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: 12, fontWeight: 400, textAlign: 'left' }}>12</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography sx={{ fontSize: 13, fontWeight: 500, textAlign: 'left' }}>Material Cost</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: 12, fontWeight: 400, textAlign: 'left' }}>1,197</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    {/* <CardActions>
                            <Button size="small">Cancel</Button>
                            <Button size="small">Submit</Button>
                        </CardActions> */}
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14, marginBottom: 2, fontWeight: 600, textAlign: 'center' }}>Product Name 1</Typography>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} style={{ marginBottom: 8 }}>
                            <Grid item xs={4}>
                                <FormControl variant="standard">
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: 12 }}>Processor</Typography>
                                        </Grid>
                                        <Grid item justifyContent="center" alignItems="center">
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                {/* <CurrencyRupeeIcon sx={{ fontSize: 14 }} /> */}
                                                <TextField
                                                    id="processor-p1"
                                                    value={values1.processor_amount}
                                                    variant="standard"
                                                    // style={{ width: '90%' }}
                                                    onChange={handleChange('processor_amount')}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl variant="standard">
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: 12 }}>Camera</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                {/* <CurrencyRupeeIcon sx={{ fontSize: 14 }} /> */}
                                                <TextField
                                                    id="camera-p1"
                                                    value={values1.camera_amount}
                                                    variant="standard"
                                                    // style={{ width: '60%' }}
                                                    onChange={handleChange('camera_amount')}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl variant="standard">
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: 12 }}>Display</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                {/* <CurrencyRupeeIcon sx={{ fontSize: 14 }} /> */}
                                                <TextField
                                                    id="display-p1"
                                                    value={values1.display_amount}
                                                    variant="standard"
                                                    // style={{ width: '60%' }}
                                                    onChange={handleChange('display_amount')}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item justifyContent="center" alignItems="center">
                                <FormControl variant="standard" fullWidth sx={{ m: 1, minWidth: 140, marginBottom: 4 }}>
                                    <InputLabel id="demo-simple-select-standard-label">New Launch / None</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={launch}
                                        onChange={handleLaunchChange}
                                        label="New Launch / None"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="New Launch">New Launch</MenuItem>
                                        <MenuItem value="Re-launch">Re-launch</MenuItem>
                                        <MenuItem value="Existing Product">Existing Product</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item xs={8}>
                                <Typography sx={{ fontSize: 13, fontWeight: 500, textAlign: 'left' }}>R & D Cost (in crs.)</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: 12, fontWeight: 400, textAlign: 'left' }}>12</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography sx={{ fontSize: 13, fontWeight: 500, textAlign: 'left' }}>Material Cost</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: 12, fontWeight: 400, textAlign: 'left' }}>1,197</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    {/* <CardActions>
                            <Button size="small">Cancel</Button>
                            <Button size="small">Submit</Button>
                        </CardActions> */}
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14, marginBottom: 2, fontWeight: 600, textAlign: 'center' }}>Product Name 1</Typography>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} style={{ marginBottom: 8 }}>
                            <Grid item xs={4}>
                                <FormControl variant="standard">
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: 12 }}>Processor</Typography>
                                        </Grid>
                                        <Grid item justifyContent="center" alignItems="center">
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                {/* <CurrencyRupeeIcon sx={{ fontSize: 14 }} /> */}
                                                <TextField
                                                    id="processor-p1"
                                                    value={values1.processor_amount}
                                                    variant="standard"
                                                    // style={{ width: '90%' }}
                                                    onChange={handleChange('processor_amount')}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl variant="standard">
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: 12 }}>Camera</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                {/* <CurrencyRupeeIcon sx={{ fontSize: 14 }} /> */}
                                                <TextField
                                                    id="camera-p1"
                                                    value={values1.camera_amount}
                                                    variant="standard"
                                                    // style={{ width: '60%' }}
                                                    onChange={handleChange('camera_amount')}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl variant="standard">
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: 12 }}>Display</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                {/* <CurrencyRupeeIcon sx={{ fontSize: 14 }} /> */}
                                                <TextField
                                                    id="display-p1"
                                                    value={values1.display_amount}
                                                    variant="standard"
                                                    // style={{ width: '60%' }}
                                                    onChange={handleChange('display_amount')}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item justifyContent="center" alignItems="center">
                                <FormControl variant="standard" fullWidth sx={{ m: 1, minWidth: 140, marginBottom: 4 }}>
                                    <InputLabel id="demo-simple-select-standard-label">New Launch / None</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={launch}
                                        onChange={handleLaunchChange}
                                        label="New Launch / None"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="New Launch">New Launch</MenuItem>
                                        <MenuItem value="Re-launch">Re-launch</MenuItem>
                                        <MenuItem value="Existing Product">Existing Product</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item xs={8}>
                                <Typography sx={{ fontSize: 13, fontWeight: 500, textAlign: 'left' }}>R & D Cost (in crs.)</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: 12, fontWeight: 400, textAlign: 'left' }}>12</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography sx={{ fontSize: 13, fontWeight: 500, textAlign: 'left' }}>Material Cost</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: 12, fontWeight: 400, textAlign: 'left' }}>1,197</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    {/* <CardActions>
                            <Button size="small">Cancel</Button>
                            <Button size="small">Submit</Button>
                        </CardActions> */}
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14, marginBottom: 2, fontWeight: 600, textAlign: 'center' }}>Product Name 1</Typography>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} style={{ marginBottom: 8 }}>
                            <Grid item xs={4}>
                                <FormControl variant="standard">
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: 12 }}>Processor</Typography>
                                        </Grid>
                                        <Grid item justifyContent="center" alignItems="center">
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                {/* <CurrencyRupeeIcon sx={{ fontSize: 14 }} /> */}
                                                <TextField
                                                    id="processor-p1"
                                                    value={values1.processor_amount}
                                                    variant="standard"
                                                    // style={{ width: '90%' }}
                                                    onChange={handleChange('processor_amount')}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl variant="standard">
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: 12 }}>Camera</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                {/* <CurrencyRupeeIcon sx={{ fontSize: 14 }} /> */}
                                                <TextField
                                                    id="camera-p1"
                                                    value={values1.camera_amount}
                                                    variant="standard"
                                                    // style={{ width: '60%' }}
                                                    onChange={handleChange('camera_amount')}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl variant="standard">
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: 12 }}>Display</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                {/* <CurrencyRupeeIcon sx={{ fontSize: 14 }} /> */}
                                                <TextField
                                                    id="display-p1"
                                                    value={values1.display_amount}
                                                    variant="standard"
                                                    // style={{ width: '60%' }}
                                                    onChange={handleChange('display_amount')}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item justifyContent="center" alignItems="center">
                                <FormControl variant="standard" fullWidth sx={{ m: 1, minWidth: 140, marginBottom: 4 }}>
                                    <InputLabel id="demo-simple-select-standard-label">New Launch / None</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={launch}
                                        onChange={handleLaunchChange}
                                        label="New Launch / None"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="New Launch">New Launch</MenuItem>
                                        <MenuItem value="Re-launch">Re-launch</MenuItem>
                                        <MenuItem value="Existing Product">Existing Product</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item xs={8}>
                                <Typography sx={{ fontSize: 13, fontWeight: 500, textAlign: 'left' }}>R & D Cost (in crs.)</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: 12, fontWeight: 400, textAlign: 'left' }}>12</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography sx={{ fontSize: 13, fontWeight: 500, textAlign: 'left' }}>Material Cost</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: 12, fontWeight: 400, textAlign: 'left' }}>1,197</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    {/* <CardActions>
                            <Button size="small">Cancel</Button>
                            <Button size="small">Submit</Button>
                        </CardActions> */}
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14, marginBottom: 2, fontWeight: 600, textAlign: 'center' }}>Product Name 1</Typography>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2} style={{ marginBottom: 8 }}>
                            <Grid item xs={4}>
                                <FormControl variant="standard">
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: 12 }}>Processor</Typography>
                                        </Grid>
                                        <Grid item justifyContent="center" alignItems="center">
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                {/* <CurrencyRupeeIcon sx={{ fontSize: 14 }} /> */}
                                                <TextField
                                                    id="processor-p1"
                                                    value={values1.processor_amount}
                                                    variant="standard"
                                                    // style={{ width: '90%' }}
                                                    onChange={handleChange('processor_amount')}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl variant="standard">
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: 12 }}>Camera</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                {/* <CurrencyRupeeIcon sx={{ fontSize: 14 }} /> */}
                                                <TextField
                                                    id="camera-p1"
                                                    value={values1.camera_amount}
                                                    variant="standard"
                                                    // style={{ width: '60%' }}
                                                    onChange={handleChange('camera_amount')}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl variant="standard">
                                    <Grid container direction="column" justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: 12 }}>Display</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                {/* <CurrencyRupeeIcon sx={{ fontSize: 14 }} /> */}
                                                <TextField
                                                    id="display-p1"
                                                    value={values1.display_amount}
                                                    variant="standard"
                                                    // style={{ width: '60%' }}
                                                    onChange={handleChange('display_amount')}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item justifyContent="center" alignItems="center">
                                <FormControl variant="standard" fullWidth sx={{ m: 1, minWidth: 140, marginBottom: 4 }}>
                                    <InputLabel id="demo-simple-select-standard-label">New Launch / None</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={launch}
                                        onChange={handleLaunchChange}
                                        label="New Launch / None"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="New Launch">New Launch</MenuItem>
                                        <MenuItem value="Re-launch">Re-launch</MenuItem>
                                        <MenuItem value="Existing Product">Existing Product</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                            <Grid item xs={8}>
                                <Typography sx={{ fontSize: 13, fontWeight: 500, textAlign: 'left' }}>R & D Cost (in crs.)</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: 12, fontWeight: 400, textAlign: 'left' }}>12</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography sx={{ fontSize: 13, fontWeight: 500, textAlign: 'left' }}>Material Cost</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: 12, fontWeight: 400, textAlign: 'left' }}>1,197</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    {/* <CardActions>
                            <Button size="small">Cancel</Button>
                            <Button size="small">Submit</Button>
                        </CardActions> */}
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Button size="small">Cancel</Button>
                <Button size="small">Submit</Button>
            </Grid>
        </Grid>
        // </Box>
    );
};

export default ResearchAndDevelopment;
