import React from 'react'

export const Publication = ({title,author,fecha,content}) => {
  return (
      <article className="publication l-block">
        <div className="publication__container">
          <h2 className="publication__title t3">{title}</h2>
          <span><b>{author}</b> a las {fecha}</span>
          <div className="publication__content">
            <p>{content}</p>
          </div>
        </div>
      </article>
    
  )
}
