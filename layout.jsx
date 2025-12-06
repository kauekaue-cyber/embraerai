export const metadata = {
  title: "Embraer AI",
  description: "AI-powered search based on Embraer content."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', margin:0, padding:0 }}>
        {children}
      </body>
    </html>
  );
}
