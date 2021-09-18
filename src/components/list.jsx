import React from 'react'
import PhotoListItem from './list-item'

const PhotoList = ({ images, view, showMore }) => {
  return (
    <>
      <div className="row mt-4">
        {images.map(i => {
          return (
            <div key={i.id} className={view + " p-2"} >
              <PhotoListItem photo={i.urls.regular}></PhotoListItem>
            </div>

          )
        })}
      </div>

      <button onClick={showMore}>Show more...</button>
    </>
  )
}

export default PhotoList