import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import{FaGithub} from 'react-icons/fa';
import{FaLinkedinIn} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
        <a href="https://mobile.twitter.com/timeForSorcool" target="_blank" ><BsTwitter /></a>
        </div>
        <div>
            <a href="https://github.com/Sorabh3127" target="_blank"><FaGithub/></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/sorabh-singh-952895209/" target="_blank" ><FaLinkedinIn /></a>
        </div>
    </div>
  )
}

export default SocialMedia