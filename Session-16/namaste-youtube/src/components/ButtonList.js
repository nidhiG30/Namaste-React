import React from 'react'
import Button from './Button'

const list = ["All", "Live", "Gaming", "Songs", "Soccer", "Badminton", "Cooking", "Mantras", "News", "Sadhguru", "Tourism", "Comedy", "Podcasts"];

const btnItems = list.map(items => <Button name={items} key={items}/>)

const ButtonList = () => {
  return (
    <div className='flex'>
      {btnItems}
    </div>
  )
}

export default ButtonList