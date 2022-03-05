import React from 'react'
import Icon from './Icons/Icon';
import { Link } from 'gatsby';

const SocialLinks = ({name,children}) => 
(
    <div className="about__social">
    <div className="wrapper">
      <div className="icon facebook">
        <div className="tooltip"> Facebook</div>
        <span>
          <i><Icon name="facebook" /></i>
        </span>
      </div>
      <div className="icon facebook">
        <div className="tooltip"> Twitter</div>
        <span>
          <i><Icon  name="twitter"/></i>
        </span>
      </div>
      <div className="icon facebook">
        <div className="tooltip"> Instagram</div>
        <span>
          <i><Icon  name="insta"/></i>
        </span>
      </div>
      <Link to="#" className="icon facebook">
        <div className="tooltip"> Github</div>
        <span>
          <i><Icon  name="github"/></i>
        </span>
      </Link>
      <Link to="/" className="icon facebook">
        <div className="tooltip"> dribble</div>
        <span>
          <i><Icon  name="dribble"/></i>
        </span>
      </Link>
    </div>
  </div>
)


export default SocialLinks;