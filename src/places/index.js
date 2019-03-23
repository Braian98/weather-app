const axios = require('axios');
const chalk = require('chalk');

const getCoordinates = async city => {
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${city}`,
        headers: {'X-RapidAPI-Key': 'YrIv9XHJxmmshCBitpg1YTAnahQSp1KbdHhjsnSBU1hvMDMlzK'}
    });
    
    const res = await instance.get();

    const { Results: data } = res.data;

    if(data.length > 0) {
        const { name, lat, lon } = data[0];
        return { name, lat, lon }
    } else {
        throw new Error(chalk.yellow(`The city ${city} was not found`));
    }
}

const getTemperature = async (lat, lng, name) => {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9233c05c5ade24a98079e0e7a9059bc0&units=metric`);
        return res.data.main.temp;
    } catch (error) {
        throw new Error(chalk.yellow(`${name} is not a valid city.\n${error.message}`));
    }
}

module.exports = {
    getCoordinates,
    getTemperature
}