/**
 * Function fetching Google Api -key.
 * 
 */

export const fetchApiKey = async () => {
    //Replace this with the real endpoint when the Google Cloud API is ready and secured. 
    const response = await fetch(process.env.REACT_APP_API_URL!)
    try {
        //The key comes as plain text (instead of json).
        const data = await response.text()
        return data
    } catch (err) {
        console.log(err)
    }
}