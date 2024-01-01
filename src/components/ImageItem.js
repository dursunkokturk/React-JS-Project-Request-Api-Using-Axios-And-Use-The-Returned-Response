// Api Icindeki Image lerin Bulundugu 
// Degisken Adini Parametre Olarak Veriyoruz
function ImageItem({ image }) {
  console.log(image);
  return (
    <div>
      <img
        className="imageListImg"

        // Image Bilgilerinin Small Halini Aliyoruz
        src={image.urls.small}

        // Image Bilgilerinin Aciklamalarini Aliyoruz
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageItem;
