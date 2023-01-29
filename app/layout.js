import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

import styles from "app/styles/min/Root.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={styles.root}>
        <div className={styles.container}>
          <header>Header</header>
          <main>{children}</main>
          <footer>Footer</footer>
        </div>
      </body>
    </html>
  );
}
