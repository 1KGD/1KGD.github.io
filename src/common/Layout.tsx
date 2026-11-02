import React from 'react';

export default function Layout({ children }: React.PropsWithChildren): React.JSX.Element {
    return <>
        {children}
    </>;
}