import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>Home</h1>
    <IndexLink to='/' activeClassName='PageLayout-navItem--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='PageLayout-navItem--active'>Counter</Link>
    <div className='PageLayout-children'>
      <h2>start of children</h2>
      {children}
      <h2>end of children</h2>
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
