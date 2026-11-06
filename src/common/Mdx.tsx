import React from 'react';
import style from '../style';
import * as Monaco from '@monaco-editor/react';
import * as Loaders from 'react-spinners';

export function Link({ href, children }: { href: string } & React.PropsWithChildren): React.JSX.Element {
    return <a href={href} style={style.link}>{children}</a>;
}

export function Header({ children }: React.PropsWithChildren): React.JSX.Element {
    return <h1 style={style.header}>{children}</h1>;
}


export function Code({ language, children }: { language: string } & React.PropsWithChildren): React.JSX.Element {
    return <Monaco.Editor
        language={language}
        height="80vh"
        value={children as string}
        options={{
            readOnly: true, fontFamily: "Redaction 50", fontSize: 16
        }}
        theme="hc-black"
        loading={<Loaders.SyncLoader loading color="green" cssOverride={{ display: "block", margin: "auto" }} />}
    />;
}

function CodeWrapper({ className, children, ...properties }: any): React.JSX.Element {
    const match = /language-(\w+)/.exec(className || '')
    return match ? <Code language={match[1]}>{children}</Code> : <code className={className} {...properties}>{children}</code>
}

const components: { [key: string]: (args: any) => React.JSX.Element } = {
    a: Link,
    h1: Header,
    code: CodeWrapper,
};


export default function Mdx({ element }: { element: React.ReactElement }): React.JSX.Element {
    return React.cloneElement(element, { components: components as {} } as {});
} 