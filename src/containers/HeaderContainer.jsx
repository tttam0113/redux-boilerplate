import { connect } from 'react-redux';
// import { login, logout } from '../redux/actions/auth';
import Header from '../components/Header';

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  // login,
  // logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
