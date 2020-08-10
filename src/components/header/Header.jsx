import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../images/crown.svg'
import './Header.scss'
import { auth } from '../../firebase/firebase'
import { connect } from 'react-redux'

function Header({ currentUser }) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {
          currentUser ?
            <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
            :
            <Link className="option" to="/signin">Sign In</Link>
        }
      </div>

    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser 
})

export default connect(mapStateToProps)(Header)