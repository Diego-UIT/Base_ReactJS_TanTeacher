import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import './WeatherApp.scss'
import {Container, Row, Col, Form, FormControl, Button}  from 'react-bootstrap'
import {BsSearch} from 'react-icons/bs'

const WeatherApp = () => {
    const API_KEY = '90e7b923ee4d2de17eb8bb8fd98e8266'
    const [weather, setWeather] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState('Hà Nội')

    const getWeather = async () => {
        try{
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`)
            console.log(response.data)
                setIsLoading(false)
            setWeather(response.data)
        }catch(e){
            console.log(e)
            setIsLoading(true)
        }
    }
    useEffect(() => {
        getWeather()
    }, [])
    return (
        <div className="weather"> 
            <Container className="search">
                <Form 
                    className="d-flex mt-5" 
                    onSubmit={(e)=>{
                        e.preventDefault()
                        getWeather()
                    }}>
                    <FormControl
                        value={search}
                        onChange={ (e) => setSearch(e.target.value) }
                        className="mr-2 formSearch"
                    />
                    <Button variant="outline-success" className="btnSearch">
                         <BsSearch />
                    </Button>
                </Form>
            </Container>
            {
                (typeof weather.main !== 'undefined') ? (
                    <Container>
                        <div className="text-center pt-5">
                            <h1>{weather.name}</h1>
                            <p>{ new Date().toLocaleDateString()}, {weather.sys.country}</p>
                        </div>
                        <div className="text-center d-flex justify-content-center align-items-center">
                            <div className="icon">
                                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                            </div>
                            <h1>{Math.round(weather.main.temp - 273.15)} °C</h1>
                        </div>
                        <h5 className="text-center">{weather.weather[0].description}</h5>
                        <div className="detail text-center mt-5">
                            <Container>
                                <Row>
                                    <Col sm={6} md={4}>
                                        <h6>{Math.round(weather.main.temp_max - 273.15)} °C</h6>
                                        <p>Hight</p>
                                    </Col>
                                    <Col sm={6} md={4}>
                                    <h6>{Math.round(weather.main.temp_min - 273.15)} °C</h6>
                                        <p>Low</p>
                                    </Col>
                                    <Col sm={6} md={4}>
                                    <h6>{moment.unix(weather.sys.sunrise).format("hh:mm a")}</h6>
                                        <p>Sunrise</p>
                                    </Col>
                                    <Col sm={6} md={4}>
                                        <h6> {moment.unix(weather.sys.sunset).format("hh:mm a")}</h6>
                                        <p>Sunset</p>
                                    </Col>
                                    <Col sm={6} md={4}>
                                    <h6>{weather.main.humidity} </h6>
                                        <p>humidity</p>
                                    </Col>
                                    <Col sm={6} md={4}>
                                    <h6>{weather.wind.speed} </h6>
                                        <p>Speed</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Container>
                ) : (
                    <Container><h4 className="text-center">...Loading</h4></Container>
                )
            }
        </div>
    )
}

export default WeatherApp
