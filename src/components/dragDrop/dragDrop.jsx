import { useDispatch, useSelector } from "react-redux";
import ImageSlider from "../imageSlider/imageSlider";
import "./styles.css";
import { setImagesSlides } from "../../features/images/imagesSlice";

export function DragDrop() {
  const dispatch = useDispatch();
  const isSlides = useSelector((state) => state.images.slides);

  const handleImage = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      dispatch(setImagesSlides({ slides: filesArray }));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  return (
    <div>
      <div className="image-upload-wrap">
        <input
          className="file-upload-input"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImage}
        />
        <div className="text-information">
          <h3>Arrastra o selecciona una Imagen</h3>
        </div>
      </div>

      <div className="image-center">
        <div className="image-container">
          {isSlides.length !== 0 ? <ImageSlider /> : null}
        </div>
      </div>
    </div>
  );
}
