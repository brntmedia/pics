import axios from 'axios';

export default axios.create({
    
    baseURL:'https://api.unsplash.com',

    headers: {
        Authorization: 'Client-ID pd8rRu0utoHxL_Sb_2DnCoQTln9GCvCeZFQIBTAs8XA'
    }
});