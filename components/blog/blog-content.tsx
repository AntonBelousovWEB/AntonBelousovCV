"use client"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }: { node?: any; [key: string]: any }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
        h2: ({ node, ...props }: { node?: any; [key: string]: any }) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
        h3: ({ node, ...props }: { node?: any; [key: string]: any }) => <h3 className="text-xl font-bold mt-5 mb-2" {...props} />,
        p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="mb-4 leading-relaxed" {...props} />,
        ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="list-disc pl-8 mb-4 space-y-2" {...props} />,
        ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => <ol className="list-decimal pl-8 mb-4 space-y-2" {...props} />,
        li: (props: React.LiHTMLAttributes<HTMLLIElement>) => <li className="mb-1" {...props} />,
        a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a className="text-blue-600 hover:underline" {...props} />,
        blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
        ),
        code: ({ node, inline, className, children, ...props }: { node?: any; inline?: boolean; className?: string; children?: React.ReactNode; [key: string]: any }) => {
          const match = /language-(\w+)/.exec(className || "")
          return !inline && match ? (
            <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" className="rounded-md my-4" {...props}>
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600 font-mono text-sm" {...props}>
              {children}
            </code>
          )
        },
        img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
          <img className="max-w-full h-auto rounded-md my-6" {...props} alt={props.alt || ""} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

