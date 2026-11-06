import React from 'react';
import Layout from './common/Layout';
import mdxComponents from './common/Mdx';
import * as Router from 'react-router';
import style from './style';
import Homepage from './pages/homepage.mdx';
import Mdx from './common/Mdx';
import 'react-babylon-lite/intrinsics';

export default function App(): React.JSX.Element {
    return <div style={style.root}>
        <Layout>
            <Router.MemoryRouter useTransitions>
                <Router.Routes>
                    <Router.Route path="/" element={<Mdx element={<Homepage />} />} />
                </Router.Routes>
            </Router.MemoryRouter>
        </Layout>
    </div>
}