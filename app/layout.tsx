import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
})

export const metadata: Metadata = {
  title: "ひさまつ歯科クリニック | 遠賀町の歯医者・小児歯科",
  description:
    "福岡県遠賀町の歯医者「ひさまつ歯科クリニック」。痛みの少ない治療と小児歯科の専門性で、ご家族皆様の笑顔をサポートします。無料駐車場完備、遠賀川駅徒歩19分。",
  keywords: "遠賀町 歯医者, ひさまつ小児歯科, 福岡県 歯科, 小児歯科, 痛みの少ない治療",
  
  // ▼▼▼ ここから追加・修正 ▼▼▼
  icons: {
    icon: '/icon.png', // ファビコンのパス
  },
  openGraph: {
    title: "ひさまつ歯科クリニック | 遠賀町の歯医者・小児歯科",
    description:
      "福岡県遠賀町の歯医者「ひさまつ歯科クリニック」。痛みの少ない治療と小児歯科の専門性で、ご家族皆様の笑顔をサポートします。",
    url: "https://hisamatsu-dental.com",
    siteName: "ひさまつ歯科クリニック",
    images: [ // サイトの代表画像を指定 (推奨)
      {
        url: 'https://hisamatsu-dental.com/ogp-image.jpg', // OGP画像のURLを指定
        width: 1200,
        height: 630,
        alt: 'ひさまつ歯科クリニックの外観',
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: { // Twitterカード用の設定 (推奨)
    card: 'summary_large_image',
    title: "ひさまつ歯科クリニック | 遠賀町の歯医者・小児歯科",
    description: "福岡県遠賀町の歯医者「ひさまつ歯科クリニック」。痛みの少ない治療と小児歯科の専門性で、ご家族皆様の笑顔をサポートします。",
    // images: ['https://hisamatsu-dental.com/ogp-image.jpg'], // OGP画像と同じで良い
  },
  robots: { // Google検索結果での表示を最適化 (推奨)
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large', // サムネイル画像を大きく表示
    },
  },
  // ▲▲▲ ここまで追加・修正 ▲▲▲

  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className={notoSansJP.className}>{children}</body>
    </html>
  )
}