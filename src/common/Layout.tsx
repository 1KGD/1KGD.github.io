import React from 'react';
import style from '../style';

function TopBar(): React.JSX.Element {
    return <div style={style.topBar}>
        <span style={{ margin: "auto" }}>Top Bar</span>
    </div>
}

export default function Layout({ children }: React.PropsWithChildren): React.JSX.Element {
    return <div style={style.content}>
        <TopBar />
        {children}
    </div>;
}