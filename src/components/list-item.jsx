import React from 'react'

const PhotoListItem = ({ photo }) => {

  return (
    <img alt="img" src={photo} style={{ width: '200px' }} />
  )
}

export default PhotoListItem