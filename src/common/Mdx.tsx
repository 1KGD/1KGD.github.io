import React from 'react';
import style from './style';

export function Link({ href, children }: { href: string } & React.PropsWithChildren): React.JSX.Element {
    return <a href={href} style={style.link}>{children}</a>;
}

export function Header({ children }: React.PropsWithChildren): React.JSX.Element {
    return <h1 style={style.header}>{children}</h1>;
}

const components: { [key: string]: (args: any) => React.JSX.Element } = {
    a: Link,
    h1: Header,
};

export default function Mdx({ element }: { element: React.ReactElement }): React.JSX.Element {
    return React.cloneElement(element, { components: components as {} } as {});
} 