// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons flex">
                <img src={youtube_icon} alt='' className='icon' />
                <img src={twitter_icon} alt='' className='icon' />
                <img src={instagram_icon} alt='' className='icon' />
                <img src={facebook_icon} alt='' className='icon' />

            </div>
            <div>
                <ul className='grid grid-cols-4'>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                    <li>Legal Notices</li>
                    <li>Account</li>
                    <li>Ways to Watch</li>
                    <li>Corporate Information</li>
                    <li>Only on Netflix</li>
                    <li>Media Center</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                </ul>
                <p className='copyright-text'>Netflix Vietnam </p>
            </div>
        </div>
    )
}

export default Footer