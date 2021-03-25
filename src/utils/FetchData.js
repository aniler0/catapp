import axios from 'axios'

export const getRandomCatPhoto = async (setData, setLoaded) => {
    await axios.get('https://api.thecatapi.com/v1/images/search')
        .then(res => {
            const data = res.data

            setData(data);
            setLoaded(true);


        })
        .catch(err => {
            console.log(err)
        })

}