import { useConfig } from '@payloadcms/config-provider';
import React from 'react';
import { NavLink } from 'react-router-dom';

// In your projects, you can import as follows:
// import { Chevron } from 'payload/components/icons';


const baseClass = 'after-nav-links';

const AfterNavLinks = () => {
  const { routes: { admin: adminRoute } } = useConfig();

  return (
    <div className={baseClass}>
      <span className="nav__label">Custom Routes</span>
      <nav>
        <NavLink
          activeClassName="active"
          to={`${adminRoute}/custom-default-route`}
        >
          <Chevron />
          Default Template
        </NavLink>
        <NavLink
          activeClassName="active"
          to={`${adminRoute}/custom-minimal-route`}
        >
          <Chevron />
          Minimal Template
        </NavLink>
      </nav>
    </div>
  );
};

export default AfterNavLinks;