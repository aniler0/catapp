import axios from 'axios'

export const getRandomCatPhoto = async () => {
    await axios.get('https://api.thecatapi.com/v1/images/search')
        .then((res) => { console.log(res.data) })
        .catch((error) => (console.log(error)))

}