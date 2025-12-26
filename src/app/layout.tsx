import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen">
        <header className="border-b bg-white px-6 py-4">
          <h1 className="text-lg font-semibold">NextPublish</h1>
        </header>

        <main className="mx-auto max-w-5xl px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}