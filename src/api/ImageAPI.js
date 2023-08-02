const API_KEY = '36752814-0630461e212967e8c9b2204d7';

export const fetchImages = async inputSearch => {
  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${inputSearch}&image_type=photo&pretty=true`
    );

    if (!response.ok) {
      throw new Error('Network response is failed');
    }

    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.log(error);
    return error;
  }
};
