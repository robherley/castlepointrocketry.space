import React, { useState } from "react"
import { isNull } from "lodash"
import Gallery from "react-photo-gallery"

const photos = [
  { src: require("../images/gallery/0J9A9442-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/0J9A9447-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/0J9A9471-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/0J9A9513-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/0J9A9552-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/0J9A9701-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/0J9A9771-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/0J9A9846-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/0J9A9869-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/0J9A9887-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/0J9A9933-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/0J9A9941-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/0J9A9967-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/DJI_0068-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/IMG_1865-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/IMG_1874-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/IMG_2293-min.jpg"), width: 4, height: 3 },
  { src: require("../images/gallery/IMG_2373-min.jpg"), width: 4, height: 3 },
]

const Modal = ({ index, closeModal }) => {
  return (
    <div className="modal" onClick={() => closeModal()}>
      <img src={photos[index].src} alt="big-img" />
    </div>
  )
}

const GalleryWrapper = () => {
  const [modal, setModal] = useState(null)
  return (
    <div className="gallery">
      {!isNull(modal) && (
        <Modal index={modal} closeModal={() => setModal(null)} />
      )}
      <h1>Gallery</h1>
      <div className="container">
        <Gallery photos={photos} onClick={(_, m) => setModal(m.index)} />
      </div>
    </div>
  )
}

export default GalleryWrapper
