import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Car, Heart, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="text-xl font-bold text-primary">ひさまつ歯科クリニック</div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              ホーム
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              医院紹介
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              診療案内
            </Link>
            <Link href="/first-visit" className="text-sm font-medium hover:text-primary transition-colors">
              初めての方へ
            </Link>
            <Link href="/access" className="text-sm font-medium hover:text-primary transition-colors">
              アクセス
            </Link>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Phone className="mr-2 h-4 w-4" />
            093-293-1151
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-secondary/30 to-accent/20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                    遠賀町の
                    <span className="text-primary block">やさしい歯医者</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    痛みの少ない治療と小児歯科の専門性で、
                    <br />
                    ご家族皆様の笑顔をサポートします
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4">
                    <Phone className="mr-2 h-5 w-5" />📞 093-293-1151 電話予約する
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    医院について詳しく
                  </Button>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Car className="mr-1 h-4 w-4" />
                    無料駐車場5台
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    遠賀川駅徒歩19分
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/bio6.jpg?height=600&width=800&text=遠賀町の歯医者ひさまつ歯科クリニック外観"
                  alt="遠賀町の歯医者 ひさまつ歯科クリニック 外観"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">ひさまつ歯科クリニックの特徴</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                患者様に安心して治療を受けていただくための、当院の3つの特徴をご紹介します
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 border-secondary/50 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">痛みの少ない治療</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    表面麻酔・電動麻酔器・レーザー治療を駆使し、患者様の負担を最小限に抑えた優しい治療を心がけています。
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/50 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">小児歯科の専門性</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    お子様の成長に合わせた治療計画で、歯医者さんが好きになるような楽しい診療環境を提供しています。
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/50 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Car className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">アクセス良好</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    無料駐車場5台完備で、お車でのご来院も安心。遠賀川駅からも徒歩圏内でアクセス便利です。
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">診療案内</h2>
              <p className="text-lg text-gray-600">一般歯科から小児歯科まで、幅広い診療に対応しています</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">一般歯科</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Image
                    src="/bio5.jpg?height=300&width=500&text=遠賀町の歯医者ひさまつ歯科クリニック一般歯科治療"
                    alt="遠賀町の歯医者 ひさまつ歯科クリニック 一般歯科治療"
                    width={500}
                    height={300}
                    className="rounded-lg w-full"
                  />
                  <p className="text-gray-600 leading-relaxed">
                    虫歯治療、歯周病治療、予防歯科など、お口の健康を総合的にサポートします。痛みの少ない治療で、患者様に安心していただけます。
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">小児歯科</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Image
                    src="/bio9.jpg?height=300&width=500&text=遠賀町の歯医者ひさまつ小児歯科治療"
                    alt="遠賀町の歯医者 ひさまつ小児歯科 治療風景"
                    width={500}
                    height={300}
                    className="rounded-lg w-full"
                  />
                  <p className="text-gray-600 leading-relaxed">
                    お子様の成長段階に合わせた治療と予防指導を行います。歯医者さんが怖くないよう、優しく丁寧な対応を心がけています。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">院長紹介</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">院長　久松 孝浩</h3>
                  <p className="text-gray-600 leading-relaxed">
                    地域の皆様に愛される歯科医院を目指し、患者様一人ひとりに寄り添った治療を心がけています。
                    特に小児歯科では、お子様が歯医者さんを好きになってもらえるよう、楽しい診療環境づくりに力を入れています。
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    痛みの少ない治療技術の習得にも積極的に取り組み、患者様に安心して治療を受けていただけるよう努めています。
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/bio10.jpg?height=500&width=400&text=遠賀町の歯医者ひさまつ歯科クリニック院長久松孝浩"
                  alt="遠賀町の歯医者 ひさまつ歯科クリニック 院長 久松孝浩"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Access & Hours Section */}
        <section className="py-20 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">診療時間・アクセス</h2>
              <p className="text-lg text-gray-600">遠賀町松の本にございます。お気軽にお越しください</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    診療時間
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="font-medium">曜日</div>
                      <div className="font-medium">午前</div>
                      <div className="font-medium">午後</div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-3 gap-4 py-2 border-b">
                        <div>月・火・木・金</div>
                        <div>9:00-12:30</div>
                        <div>14:30-19:00</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 py-2 border-b">
                        <div>水</div>
                        <div>9:00-12:30</div>
                        <div className="text-red-500">午後休診</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 py-2 border-b">
                        <div>土</div>
                        <div>9:00-12:30</div>
                        <div>14:00-17:00</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 py-2">
                        <div>日・祝</div>
                        <div className="text-red-500 col-span-2">休診</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    アクセス
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium">〒811-4305</p>
                    <p>福岡県遠賀郡遠賀町松の本 5-9-7</p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>🚃 JR鹿児島本線「遠賀川駅」徒歩19分</p>
                    <p>🚗 無料駐車場5台完備</p>
                  </div>
                  <Image
                    src="/0613_hisamatu1.JPG?height=200&width=400&text=遠賀町の歯医者ひさまつ歯科クリニック駐車場案内図"
                    alt="遠賀町の歯医者 ひさまつ歯科クリニック 駐車場案内図"
                    width={400}
                    height={200}
                    className="rounded-lg w-full"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">お知らせ</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex items-center space-x-4 p-4 border-l-4 border-primary bg-secondary/10">
                <div className="text-sm text-gray-500">2024.01.15</div>
                <div className="text-gray-900">新年のご挨拶と診療開始のお知らせ</div>
              </div>
              <div className="flex items-center space-x-4 p-4 border-l-4 border-primary bg-secondary/10">
                <div className="text-sm text-gray-500">2023.12.28</div>
                <div className="text-gray-900">年末年始の診療スケジュールについて</div>
              </div>
              <div className="flex items-center space-x-4 p-4 border-l-4 border-primary bg-secondary/10">
                <div className="text-sm text-gray-500">2023.12.01</div>
                <div className="text-gray-900">小児歯科の予防プログラムを開始しました</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                お口の健康について
                <br />
                お気軽にご相談ください
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                遠賀町の皆様の笑顔のために、
                <br />
                ひさまつ歯科クリニックがサポートします
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />📞 093-293-1151 今すぐ電話予約
              </Button>
              <p className="text-sm opacity-75">
                診療時間：月火木金 9:00-12:30/14:30-19:00　水 9:00-12:30　土 9:00-12:30/14:00-17:00
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">ひさまつ歯科クリニック</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>〒811-4305</p>
                <p>福岡県遠賀郡遠賀町松の本 5-9-7</p>
                <p>TEL: 093-293-1151</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">診療科目</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>歯科・小児歯科</p>
                <p>院長：久松 孝浩</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">サイトマップ</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <Link href="/" className="block hover:text-primary transition-colors">
                  ホーム
                </Link>
                <Link href="/about" className="block hover:text-primary transition-colors">
                  医院紹介
                </Link>
                <Link href="/services" className="block hover:text-primary transition-colors">
                  診療案内
                </Link>
                <Link href="/access" className="block hover:text-primary transition-colors">
                  アクセス
                </Link>
                <Link href="/privacy" className="block hover:text-primary transition-colors">
                  個人情報保護方針
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ひさまつ歯科クリニック. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
