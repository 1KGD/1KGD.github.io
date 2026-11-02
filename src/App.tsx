import React from 'react';
import Layout from './common/Layout';
import Test from './common/test.mdx';
import mdxComponents from './common/mdxComponents';
import style from './common/style';

export default function App(): React.JSX.Element {
    return <div style={style.root}>
        <Test components={mdxComponents} />
    </div>
}