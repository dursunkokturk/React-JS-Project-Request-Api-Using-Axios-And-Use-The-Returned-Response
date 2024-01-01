// Api Uzerinden Gelen Data lar Icindeki Image Bilgilerini
// Import Ediyoruz
import ImageItem from './ImageItem';

// imagesPlaceholder Degiskeni Uzerinden Gelen Imaga Array ini
// Parametre Olarak Veriyoruz
function ImageList({ imagesPlaceholder }) {
  return (
    <div className="imageList">

      {/* imagesPlaceholder Degiskeni Uzerinden Gelen Imaga Array i */}
      {/* Icinde map Fonksiyonu Ile Geziyoruz */}
      {/* Image Data larini Ve indis Numaralarini Aliyoruz*/}
      {imagesPlaceholder.map((image, index) => {
        
        {/* indis Numaralarina Gore Image Data larini Yazdiriyoruz */}
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
}

export default ImageList;
