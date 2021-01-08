import React, { Children } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

const ActiveLink = ({ router, children, ...props }) => {
    const child = Children.only(children);
    let className = child.props.className || null
    let currentPageUrlSlug;

    if (typeof props.pageUrlSlug !== 'undefined') {
        currentPageUrlSlug = '/' + props.pageUrlSlug;
    } else {
        currentPageUrlSlug = router.pathname;
    }

    let isActive = props.href !== '/' ? currentPageUrlSlug.indexOf(props.href) > -1 : currentPageUrlSlug === props.href;

    if (isActive && props.activeClassName) {

        className = `${className !== null ? className : ''} ${props.activeClassName}`.trim();
    }

    delete props.activeClassName;
    delete props.pageUrlSlug;

    return (
        <Link {...props}>
            {React.cloneElement(child, { className })}
        </Link>
    );
};

export default withRouter(ActiveLink);