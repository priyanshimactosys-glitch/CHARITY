
import Container from "@/src/components/common/Container";
import "./globals.css";
import Header from "@/src/components/layout/header/Header";
import Footer from "@/src/components/layout/footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Container>
          <Header />
        </Container>
        {children}
        <Footer />
      </body>
    </html>
  );
}
