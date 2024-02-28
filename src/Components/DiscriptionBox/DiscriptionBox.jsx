import React from 'react'
import './DiscriptionBox.css'

const DiscriptionBox = () => {
  return (
    <div className='discriptionbox'>
      <div className="discriptionbox-navigator">
        <div className="discriptionbox-nav-box">Description</div>
        <div className="discriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="discriptionbox-description">
        <p>
        Vivamus ultricies felis sed porta egestas. Nam ac iaculis diam.
         Vivamus id neque iaculis, scelerisque lectus eget, sollicitudin leo.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc eu aliquam diam. 
          Donec dignissim nibh ac odio rutrum congue non eget nibh. Donec sodales ultrices mauris ultrices varius. Morbi nisi nulla, sollicitudin non accumsan a, luctus aliquam mi. Cras egestas, 
          dui in commodo tincidunt, lacus dolor finibus tortor, vel imperdiet enim velit id ipsum.
        </p>
        <p>
        Fusce mi lorem, vulputate vitae dignissim quis, malesuada non nunc.
         Nulla dui odio, aliquam quis ultrices finibus, tincidunt sed erat. 
         Nulla rutrum nisl in magna vestibulum, ac dignissim nibh convallis. 
         Etiam in ultricies massa. Aliquam ac egestas quam, in posuere odio. Aenean viverra accumsan iaculis. 
        Sed nibh dui, suscipit nec blandit non, viverra condimentum lorem. 
        </p>
      </div>
    </div>
  )
}

export default DiscriptionBox
