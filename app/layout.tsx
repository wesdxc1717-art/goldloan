import "./globals.css";

export const metadata = {
  title: "GOLDLOAN - 무료 안심조회",
  description: "골드론 무료 안심조회 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}