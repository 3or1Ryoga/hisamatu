import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Heart, Shield, Zap, CheckCircle } from "lucide-react"

export default function ServicesPage() {
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
            <Link href="/services" className="text-sm font-medium text-primary">
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
        {/* Breadcrumb */}
        <div className="bg-secondary/20 py-4">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-primary">
                ホーム
              </Link>
              <span className="mx-2">&gt;</span>
              <span className="text-primary">診療案内</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">診療案内</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              一般歯科から小児歯科まで、幅広い診療でご家族皆様の歯の健康をサポートします
            </p>
          </div>
        </section>

        {/* General Dentistry */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">一般歯科</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  虫歯治療、歯周病治療、予防歯科など、お口の健康を総合的にサポートします。
                  痛みの少ない治療技術で、患者様に安心していただける診療を心がけています。
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">虫歯治療</h3>
                      <p className="text-gray-600">早期発見・早期治療で、歯を長持ちさせます</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">歯周病治療</h3>
                      <p className="text-gray-600">歯ぐきの健康を守り、歯を支える土台を強化します</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">予防歯科</h3>
                      <p className="text-gray-600">定期検診とクリーニングで、病気を未然に防ぎます</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=遠賀町の歯医者ひさまつ歯科クリニック一般歯科治療"
                  alt="遠賀町の歯医者 ひさまつ歯科クリニック 一般歯科治療"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pediatric Dentistry */}
        <section className="py-20 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=遠賀町の歯医者ひさまつ小児歯科治療風景"
                  alt="遠賀町の歯医者 ひさまつ小児歯科 治療風景"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900">小児歯科（ひさまつ小児歯科の専門性）</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  お子様の成長段階に合わせた治療と予防指導を行います。
                  歯医者さんが怖くないよう、優しく丁寧な対応でお子様の歯の健康を守ります。
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">お子様の虫歯治療</h3>
                      <p className="text-gray-600">痛みの少ない治療で、お子様の負担を最小限に</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">歯並び相談</h3>
                      <p className="text-gray-600">成長に合わせた適切なタイミングでのアドバイス</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">フッ素塗布・シーラント</h3>
                      <p className="text-gray-600">虫歯予防のための専門的なケア</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain-free Treatment */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">痛みの少ない治療への取り組み</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                患者様の負担を軽減するため、最新の技術と設備を導入しています
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-2 border-secondary/50 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">表面麻酔</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    注射針を刺す前に歯ぐきに塗布し、注射の痛みを軽減します。
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/50 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">電動麻酔器</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    注入速度をコンピューター制御し、圧迫感や痛みを最小限に抑えます。
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/50 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">レーザー治療</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    従来の治療法と比較して痛みが少なく、治癒も早い最新の治療法です。
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Flow */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">治療の流れ</h2>
              <p className="text-lg text-gray-600">患者様に安心していただくため、丁寧な説明と段階的な治療を行います</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-5">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900">初診・カウンセリング</h3>
                  <p className="text-sm text-gray-600">お悩みやご希望をお聞かせください</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900">検査・診断</h3>
                  <p className="text-sm text-gray-600">お口の状態を詳しく検査します</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900">治療計画説明</h3>
                  <p className="text-sm text-gray-600">最適な治療計画をご提案します</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-900">治療開始</h3>
                  <p className="text-sm text-gray-600">ご納得いただいてから治療開始</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <h3 className="font-semibold text-gray-900">定期メンテナンス</h3>
                  <p className="text-sm text-gray-600">健康な状態を維持します</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">お口のお悩みはお気軽にご相談ください</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                痛みの少ない治療で、患者様に安心していただける診療を提供します
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />📞 093-293-1151 今すぐ電話予約
              </Button>
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
