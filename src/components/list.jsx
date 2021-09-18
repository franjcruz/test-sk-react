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

      <button type="button" className="btn btn-outline-primary" onClick={showMore} disabled={!images || images.length === 0}>Show more...</button>
    </>
  )
}

export default PhotoList