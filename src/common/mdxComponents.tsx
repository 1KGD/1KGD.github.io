import React from 'react';
import Test from './test.mdx'
import style from './style';

export function Link({ href, children }: { href: string } & React.PropsWithChildren): React.JSX.Element {
    return <a href={href} style={style.link}>{children}</a>;
}

export function Header({ children }: React.PropsWithChildren): React.JSX.Element {
    return <div style={style.header}>{children}</div>;
}

export default {
    a: Link,
    h1: Header,
} as { [key: string]: (args: unknown) => React.JSX.Element }