import React from 'react'
import CollectionItem from '../collection_item/Collection_Item'
import './Preview.scss'

export default function Preview({title,items}) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item,idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => {
            return <CollectionItem key={id} {...otherItemProps}/>
        })

        }
      </div>
    </div>
  )
}