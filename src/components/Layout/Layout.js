import { Fragment } from 'react';
import MainHeader from './MainHeader';
import ErrorComponent from '../error/Error';

const Layout = (props) => {
  return (
    <Fragment>
      {/* <ErrorComponent/> */}
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
