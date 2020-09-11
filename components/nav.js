import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/foo">
        <a>foo</a>
      </Link>
      <Link href="/bar">
        <a>bar</a>
      </Link>
      <Link href="/baz">
        <a>baz</a>
      </Link>
      <style jsx>
        {`
          a {
            margin-right: 25px;
          }
        `}
      </style>
    </nav>
  )
}

export default Nav
