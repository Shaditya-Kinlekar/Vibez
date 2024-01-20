import { ClerkProvider } from '@clerk/nextjs';
import '../global.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Vibez',
  description: 'Nextjs 14 Social Media WebApp',
};

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} bg-purple-2`}>
          <LeftSideBar />
          <MainContainer>
            <TopBar />
            {children}
          </MainContainer>
          <RightSidebar />
        </body>
      </html>
    </ClerkProvider>
  );
}
