import axios from 'axios';
const searchImages = async (term) => {

  // axios Kullanarak Image Data larini Almak Icin
  // Request Atiyoruz
  const response = await axios.get('https://api.unsplash.com/search/photos', {

    // headers Alaninda Request Islemini Yapiyoruz
    headers: {

      // Client-ID Kullanarak Request Atiyoruz
      Authorization: 'Client-ID k8ljl7bhBeUyfNP9-UhTO4r3Br5zzXXpE3QJOBdKBbQ',
    },

    // params Alaninda Query Islemi Yapiyoruz
    params: {

      // query Kismi Sorgu Yapilmasi Gerektigini Belirtiyor
      // term Kismi Search Islemi Icin 
      // Input Alanina Girilen Degerin 
      // Atandigi Degisken Adi Oluyor
      query: term,
    },
  });
  debugger;

  // Request Isleminden Donen Response i Donduruyoruz
  return response.data.results;
};

export default searchImages;
