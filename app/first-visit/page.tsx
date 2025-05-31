import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, FileText, Clock, Heart, Users, HelpCircle } from "lucide-react"

export default function FirstVisitPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold text-primary">ひさまつ歯科クリニック</div>
          </Link>
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
            <Link href="/first-visit" className="text-sm font-medium text-primary">
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
        {/* Breadcrumb */}
        <div className="bg-secondary/20 py-4">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-primary">
                ホーム
              </Link>
              <span className="mx-2">&gt;</span>
              <span className="text-primary">初めての方へ</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">初めての方へ</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              初めて受診される方、お子様の歯科デビューをお考えの方も安心してお越しください
            </p>
          </div>
        </section>

        {/* Welcome Message */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">ひさまつ歯科クリニックへようこそ</h2>
              <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                <p>
                  ひさまつ歯科クリニックへようこそ。初めて歯科医院を受診される方、お子様の歯科デビューをお考えの方も安心してお越しください。
                </p>
                <p>
                  遠賀町の地域密着型歯科医院として、患者様一人ひとりに寄り添った診療を行っております。
                  痛みの少ない治療と丁寧な説明で、歯医者さんが怖い場所ではないことを実感していただけます。
                </p>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=800&text=遠賀町の歯医者ひさまつ歯科クリニック初診カウンセリング"
                alt="遠賀町の歯医者 ひさまつ歯科クリニック 初診カウンセリング"
                width={800}
                height={400}
                className="rounded-2xl shadow-lg mx-auto"
              />
            </div>
          </div>
        </section>

        {/* What to Bring */}
        <section className="py-20 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">ご来院時にお持ちいただくもの</h2>
              <p className="text-lg text-gray-600">スムーズな診療のため、以下のものをご準備ください</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              <Card className="border-2 border-secondary/50 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">健康保険証</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">必ずお持ちください</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/50 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">お薬手帳</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">服用中のお薬がある方</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/50 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">母子手帳</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">お子様の場合</CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/50 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">紹介状</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">他院からの場合</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* First Visit Flow */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">初診の流れ</h2>
              <p className="text-lg text-gray-600">患者様に安心していただくため、丁寧な説明と段階的な診療を行います</p>
            </div>
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">受付・問診票記入</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    受付で健康保険証をご提示いただき、問診票にご記入ください。
                    症状やご希望、不安なことがございましたら、遠慮なくお書きください。
                  </p>
                </div>
                <Image
                  src="/placeholder.svg?height=300&width=400&text=遠賀町の歯医者ひさまつ歯科クリニック受付"
                  alt="遠賀町の歯医者 ひさまつ歯科クリニック 受付"
                  width={400}
                  height={300}
                  className="rounded-lg mx-auto"
                />
              </div>

              <div className="grid gap-8 md:grid-cols-2 items-center">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=遠賀町の歯医者ひさまつ歯科クリニックカウンセリング"
                  alt="遠賀町の歯医者 ひさまつ歯科クリニック カウンセリング"
                  width={400}
                  height={300}
                  className="rounded-lg mx-auto order-2 md:order-1"
                />
                <div className="space-y-6 order-1 md:order-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">カウンセリング</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    お悩みや不安なことがございましたら、お気軽にご相談ください。
                    患者様のお話をしっかりとお聞きし、ご希望に沿った治療計画を検討いたします。
                  </p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">検査</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    お口の状態を詳しく拝見いたします。 必要に応じてレントゲン撮影を行い、現在の状況を正確に把握します。
                  </p>
                </div>
                <Image
                  src="/placeholder.svg?height=300&width=400&text=遠賀町の歯医者ひさまつ歯科クリニック検査"
                  alt="遠賀町の歯医者 ひさまつ歯科クリニック 検査"
                  width={400}
                  height={300}
                  className="rounded-lg mx-auto"
                />
              </div>

              <div className="grid gap-8 md:grid-cols-2 items-center">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=遠賀町の歯医者ひさまつ歯科クリニック治療計画説明"
                  alt="遠賀町の歯医者 ひさまつ歯科クリニック 治療計画説明"
                  width={400}
                  height={300}
                  className="rounded-lg mx-auto order-2 md:order-1"
                />
                <div className="space-y-6 order-1 md:order-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      4
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">治療計画のご説明</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    検査結果をもとに、最適な治療計画をご提案します。
                    治療内容、期間、費用について詳しくご説明し、ご納得いただいてから治療を開始いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Children */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">お子様の初回受診について</h2>
              <p className="text-lg text-gray-600">
                ひさまつ小児歯科では、お子様が歯医者さんを好きになれるよう、優しくサポートします
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">歯科医院デビューを応援</h3>
                <p className="text-gray-600 leading-relaxed">
                  お子様にとって初めての歯科医院は不安なものです。
                  当院では、お子様が歯医者さんを好きになってもらえるよう、楽しい雰囲気づくりと優しい対応を心がけています。
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">保護者様へのお願い</h4>
                      <p className="text-gray-600">「痛くない」「怖くない」とお声がけください</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">一緒に診療室へ</h4>
                      <p className="text-gray-600">治療中は診療室でお子様を見守っていただけます</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">慣らし治療</h4>
                      <p className="text-gray-600">いきなり治療は行わず、まずは歯科医院の雰囲気に慣れていただきます</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=遠賀町の歯医者ひさまつ小児歯科お子様の治療"
                  alt="遠賀町の歯医者 ひさまつ小児歯科 お子様の治療"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">よくあるご質問</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-2 border-secondary/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <HelpCircle className="mr-2 h-5 w-5 text-primary" />
                    予約は必要ですか？
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    お待ち時間を短縮するため、事前のご予約をお勧めしています。
                    急患の方も対応いたしますので、まずはお電話ください。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <HelpCircle className="mr-2 h-5 w-5 text-primary" />
                    駐車場はありますか？
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    無料駐車場を5台分ご用意しております。お車でお越しの際は、安心してご利用ください。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <HelpCircle className="mr-2 h-5 w-5 text-primary" />
                    子供と一緒に診療室に入れますか？
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    はい、保護者様も一緒にお入りいただけます。
                    お子様が安心して治療を受けられるよう、そばで見守っていただけます。
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <HelpCircle className="mr-2 h-5 w-5 text-primary" />
                    初診にかかる時間はどのくらいですか？
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    カウンセリングと検査を含めて、約60分程度を予定しております。 お時間に余裕を持ってお越しください。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">初診のご予約・ご相談</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                初診のご予約やご質問がございましたら、お気軽にお電話ください
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />📞 093-293-1151 電話予約する
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
