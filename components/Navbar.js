import NavItem from './NavItem';

export default () => (
  <nav className="pt-navbar pt-fixed-top pt-dark">
    <div className="pt-navbar-group pt-align-left">
      <div className="pt-navbar-heading">Life Stories</div>
    </div>
    <div className="pt-navbar-group pt-align-right">
      <NavItem
        href="/"
        className="pt-button pt-minimal pt-icon-home"
      >
        Home
      </NavItem>
      <NavItem
        href="/stories"
        className="pt-button pt-minimal pt-icon-book"
      >
        Stories
      </NavItem>
      <NavItem
        href="/new-story"
        className="pt-button pt-minimal pt-icon-manually-entered-data"
      >
        Write a story
      </NavItem>
      <span className="pt-navbar-divider"></span>
      <NavItem
        href="/sign-up"
        className="pt-button pt-minimal pt-icon-new-person"
      >
        Sign up
      </NavItem>
      <NavItem
        href="/sign-in"
        className="pt-button pt-minimal pt-icon-log-in"
      >
        Sign in
      </NavItem>
    </div>
  </nav>
);
