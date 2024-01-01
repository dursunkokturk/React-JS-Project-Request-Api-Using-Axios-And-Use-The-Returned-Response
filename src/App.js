import './App.css';

// Search Isleminin Yapilacagi Input Alanindaki Islemleri Aliyoruz
import SearchHeader from './SearchHeader';

// Sorgulama Islemi Ve Donen Cevabi Aliyoruz
import searchImages from './api';
import { useState } from 'react';

// ImageList.js Dosyasindaki Image Listesini Import Ediyoruz
import ImageList from './components/ImageList';

function App() {

  // Api den Gelen Data lar Icindeki Array Tipindeki Image Bilgilerini
  // useState Kullanarak 
  // setImages Degiskenine Atama Yapiyoruz
  const [images, setImages] = useState([]);

  // SearchHeader.js Dosyasindaki 
  // handleFormSubmit Fonksiyonu Icinde Yapilan 
  // Islemin Sonucunu Ekrana Yazdiriyoruz
  const handleSubmit = async (term) => {

    // Search Isleminden Gelen Image Datasini Yazdiriyoruz
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />

      {/* Api Uzerinden Gelen Image Response lari Ekrana Yazdiriyoruz */}
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;