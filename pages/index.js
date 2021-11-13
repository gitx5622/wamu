import React from 'react';
import Image from "next/image";
import Home from "../assets/apples.jpg";
import {Grid, Box, Paper} from '@mui/material';
import {Button, Tag, Divider, Input, InputGroup, InputNumber, Sidenav, Nav, Dropdown} from "rsuite";

const Index = () => {
    const [value, setValue] = React.useState(0);
    const handleMinus = () => {
        setValue(parseInt(value, 10) - 1);
    };
    const handlePlus = () => {
        setValue(parseInt(value, 10) + 1);
    };
    return (
        <div>
            <Grid container component="main" sx={{ marginTop:"-200px", height: '100vh' }}>
                <Grid
                    item
                    xs={false}
                    sm={24}
                    md={24}
                    sx={{
                        backgroundImage: `url(https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Fgrocery.png&w=1200&q=75)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <Box style={styles.navbar}>
                    <Box sx={{ display: 'flex', justifyContent:"space-between",mx:"30px", mt: "205px", color: '#1976D2', '@media only screen and (max-width: 600px)': { display: 'none' } }}>
                        <h3>Wamu</h3>
                        <Button style={{background:"#009F7F", color:"white"}}>Login to dashboard</Button>
                    </Box>
                    </Box>
                    <Divider/>
                    <Box sx={{mt: "350px", lineHeight:3.5}}>
                        <center>
                            <h3>Groceries Delivered in 90 Minute</h3>
                            <p>Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>
                            <InputGroup style={styles.input}>
                                <Input />
                                <InputGroup.Addon style={styles.inputgroup}>Search</InputGroup.Addon>
                            </InputGroup>
                        </center>
                    </Box>
                </Grid>
            </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={2}>
                            <div style={{ width: 240, position: 'sticky',
                                top: 0,
                                left: 0,
                                zIndex: 999, }} >
                                <Sidenav defaultOpenKeys={['3', '4']} activeKey="1">
                                    <Sidenav.Body>
                                        <Nav>
                                            <Nav.Item eventKey="1">
                                                Dashboard
                                            </Nav.Item>
                                            <Nav.Item eventKey="2">
                                                User Group
                                            </Nav.Item>
                                            <Dropdown eventKey="3" title="Advanced">
                                                <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                                                <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                                                <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
                                                <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
                                            </Dropdown>
                                            <Dropdown eventKey="4" title="Settings" >
                                                <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                                                <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
                                                <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
                                                <Dropdown.Menu eventKey="4-5" title="Custom Action">
                                                    <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                                                    <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Nav>
                                    </Sidenav.Body>
                                </Sidenav>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <br/>
                            <Grid container spacing={2} style={{padding:"20px"}}>
                                <Grid item xs={3}>
                                    <Paper elevation={3} style={{padding:"10px"}}>
                                        <Tag style={{color: "white", margin:"10px", float:"right", background:"#009F7F"}}>20%</Tag>
                                        <Image src={Home} alt="product"/>
                                        <h5>Price : $0.00</h5>
                                        <h5>Apples</h5><br/>
                                        <InputGroup style={{marginRight:"20px"}}>
                                            <InputGroup.Button style={{background:"#009F7F"}} onClick={handleMinus}>-</InputGroup.Button>
                                            <center><InputNumber className={'custom-input-number'} value={value} onChange={setValue} /></center>
                                            <InputGroup.Button onClick={handlePlus} style={{background:"#009F7F"}}>+</InputGroup.Button>
                                        </InputGroup>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper elevation={3} style={{padding:"10px"}}>
                                        <Tag style={{color: "white", margin:"10px", float:"right", background:"#009F7F"}}>20%</Tag>
                                        <Image src={Home} alt="product"/>
                                        <h5>Price : $0.00</h5>
                                        <h5>Apples</h5><br/>
                                        <InputGroup style={{marginRight:"20px"}}>
                                            <InputGroup.Button style={{background:"#009F7F"}} onClick={handleMinus}>-</InputGroup.Button>
                                            <center><InputNumber className={'custom-input-number'} value={value} onChange={setValue} /></center>
                                            <InputGroup.Button onClick={handlePlus} style={{background:"#009F7F"}}>+</InputGroup.Button>
                                        </InputGroup>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper elevation={3} style={{padding:"10px"}}>
                                        <Tag style={{color: "white", margin:"10px", float:"right", background:"#009F7F"}}>20%</Tag>
                                        <Image src={Home} alt="product"/>
                                        <h5>Price : $0.00</h5>
                                        <h5>Apples</h5><br/>
                                        <InputGroup style={{marginRight:"20px"}}>
                                            <InputGroup.Button style={{background:"#009F7F"}} onClick={handleMinus}>-</InputGroup.Button>
                                            <center><InputNumber className={'custom-input-number'} value={value} onChange={setValue} /></center>
                                            <InputGroup.Button onClick={handlePlus} style={{background:"#009F7F"}}>+</InputGroup.Button>
                                        </InputGroup>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper elevation={3} style={{padding:"10px"}}>
                                        <Tag style={{color: "white", margin:"10px", float:"right", background:"#009F7F"}}>20%</Tag>
                                        <Image src={Home} alt="product"/>
                                        <h5>Price : $0.00</h5>
                                        <h5>Apples</h5><br/>
                                        <InputGroup style={{marginRight:"20px"}}>
                                            <InputGroup.Button style={{background:"#009F7F"}} onClick={handleMinus}>-</InputGroup.Button>
                                            <center><InputNumber className={'custom-input-number'} value={value} onChange={setValue} /></center>
                                            <InputGroup.Button onClick={handlePlus} style={{background:"#009F7F"}}>+</InputGroup.Button>
                                        </InputGroup>
                                    </Paper>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} style={{padding:"20px"}}>
                                <Grid item xs={3}>
                                    <Paper elevation={3} style={{padding:"10px"}}>
                                        <Tag style={{color: "white", margin:"10px", float:"right", background:"#009F7F"}}>20%</Tag>
                                        <Image src={Home} alt="product"/>
                                        <h5>Price : $0.00</h5>
                                        <h5>Apples</h5><br/>
                                        <InputGroup style={{marginRight:"20px"}}>
                                            <InputGroup.Button style={{background:"#009F7F"}} onClick={handleMinus}>-</InputGroup.Button>
                                            <center><InputNumber className={'custom-input-number'} value={value} onChange={setValue} /></center>
                                            <InputGroup.Button onClick={handlePlus} style={{background:"#009F7F"}}>+</InputGroup.Button>
                                        </InputGroup>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper elevation={3} style={{padding:"10px"}}>
                                        <Tag style={{color: "white", margin:"10px", float:"right", background:"#009F7F"}}>20%</Tag>
                                        <Image src={Home} alt="product"/>
                                        <h5>Price : $0.00</h5>
                                        <h5>Apples</h5><br/>
                                        <InputGroup style={{marginRight:"20px"}}>
                                            <InputGroup.Button style={{background:"#009F7F"}} onClick={handleMinus}>-</InputGroup.Button>
                                            <center><InputNumber className={'custom-input-number'} value={value} onChange={setValue} /></center>
                                            <InputGroup.Button onClick={handlePlus} style={{background:"#009F7F"}}>+</InputGroup.Button>
                                        </InputGroup>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper elevation={3} style={{padding:"10px"}}>
                                        <Tag style={{color: "white", margin:"10px", float:"right", background:"#009F7F"}}>20%</Tag>
                                        <Image src={Home} alt="product"/>
                                        <h5>Price : $0.00</h5>
                                        <h5>Apples</h5><br/>
                                        <InputGroup style={{marginRight:"20px"}}>
                                            <InputGroup.Button style={{background:"#009F7F"}} onClick={handleMinus}>-</InputGroup.Button>
                                            <center><InputNumber className={'custom-input-number'} value={value} onChange={setValue} /></center>
                                            <InputGroup.Button onClick={handlePlus} style={{background:"#009F7F"}}>+</InputGroup.Button>
                                        </InputGroup>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper elevation={3} style={{padding:"10px"}}>
                                        <Tag style={{color: "white", margin:"10px", float:"right", background:"#009F7F"}}>20%</Tag>
                                        <Image src={Home} alt="product"/>
                                        <h5>Price : $0.00</h5>
                                        <h5>Apples</h5><br/>
                                        <InputGroup style={{marginRight:"20px"}}>
                                            <InputGroup.Button style={{background:"#009F7F"}} onClick={handleMinus}>-</InputGroup.Button>
                                            <center><InputNumber className={'custom-input-number'} value={value} onChange={setValue} /></center>
                                            <InputGroup.Button onClick={handlePlus} style={{background:"#009F7F"}}>+</InputGroup.Button>
                                        </InputGroup>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
        </div>
    );
};

export default Index;
const styles = {
    input: {
        width: 500,
        marginBottom: 10
    },
    inputgroup: {
        background:"#009F7F",
        color:"white",
    },
    navbar: {
        position: 'fixed',
        top: -200,
        left: 0,
        zIndex: 999,
        width: '100%',
        background: 'whitesmoke',
        padding: '10px'
    }
};
