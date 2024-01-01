import { useState } from 'react';

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState('');

  // Arama Isleminin Yapilacagi Form Icinde Yazi Yazilmaya Baslandigi Anda
  // Tetikleme Islemi Baslayacak
  const handleFormSubmit = (event) => {

    // Search Alanina Tiklandiginda 
    // Yenileme Isleminin Yapilmasini Engellemek Icin
    // preventDefault Metodunu Kullaniyoruz
    event.preventDefault();
    debugger;

    // Uygulama Calistiginda
    // Input Alanina Yazilan Yaziyi Yazidiriyoruz
    search(valueInput);
  };

  // Search Isleminin Yapilacagi Input Alaninda Girilen Degeri
  // event Parametresi Uzerinden Aliyoruz
  const handleChange = (event) => {

    // setValue Metodu Icinde Search Islemi Icin Girilen Her Karakteri
    // Girildigi Anda Search Islemine Dahil Ediyoruz
    setValue(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>

        {/* handleChange Metodu Icinde Search Islemi Icin Girilen Yaziyi Aliyoruz */}
        {/* onChange Metodu Icinde handleChange Fonksiyonunu Cagiriyoruz */}
        {/* Search Islemini Yapiyoruz */}
        <input value={valueInput} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchHeader;
