import '@styles/globals.css';

import axiosFetch from '@lib/axiosFetch';

export const metadata = {
  title: "Serenova",
  description: 'Serenova'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
          <main>
            {children}
          </main>
        </body>
    </html>
  )
}



export default RootLayout;
