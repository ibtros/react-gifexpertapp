export const getGifs = async (category) => {
    const apiKey = 'qWDH5V3gXRcSqIFvAI7EolqI5SjvJLWp';
    const domain = 'https://api.giphy.com/v1/gifs/';
    const url = `${domain}search?q=${encodeURI(category)}&limit=30&api_key=${apiKey}`;
    const response = await fetch(url);
    const {data} = await response.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs
};