import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import { TinyLetter } from 'react-tinyletter';
import Menu from '../Menu';
import Links from '../Links';
import profilePic from '../../pages/photo.jpg';
import './style.scss';

class Sidebar extends React.Component {
  render() {
    const { location } = this.props;
    const { author, subtitle, copyright, menu } = this.props.data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            width="75"
            height="75"
            alt={author.name}
          />
        </Link>
        {isHomePage ? (
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h1>
        ) : (
          <h2 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h2>
        )}
        <p className="sidebar__author-subtitle">{subtitle}</p>
        <p className="sidebar__author-subtitle">
          Current project:{' '}
          <a href="https://www.feedbear.com" target="blank">
            FeedBear
          </a>{' '}
          – Easiest way to manage feedback from your customers
        </p>
      </div>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{authorBlock}</div>
          <div>
            <Menu data={menu} />
            <div className="sidebar__footer">
              <h5 className="sidbar__heading">Become a friend</h5>
              <p className="sidebar__text">
                I will send you articles before I&nbsp;publish them. No spam. No ads.
              </p>
              <TinyLetter list="tmvst" className="sidebar__subscribe">
                <input type="email" className="sidebar__subscribe__email" />
                <input type="submit" value="&#10148;" className="sidebar__subscribe__button" />
              </TinyLetter>
              <Links data={author} />
              <p className="sidebar__copyright">{copyright}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
