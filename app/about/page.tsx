import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Award, Users, Heart, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Same as homepage */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold text-primary">ひさまつ歯科クリニック</div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              ホーム
            </Link>
            <Link href="/about" className="text-sm font-medium text-primary">
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
        {/* Breadcrumb */}
        <div className="bg-secondary/20 py-4">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-primary">
                ホーム
              </Link>
              <span className="mx-2">&gt;</span>
              <span className="text-primary">医院紹介</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">医院紹介</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              遠賀町の皆様に愛される歯科医院として、患者様一人ひとりに寄り添った診療を心がけています
            </p>
          </div>
        </section>

        {/* Clinic Philosophy */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">当院の理念</h2>
              <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                <p>
                  ひさまつ歯科クリニックは、遠賀町の皆様の健康な笑顔のために「痛みの少ない、優しい治療」を第一に考えています。
                </p>
                <p>
                  特に小児歯科では、お子様が生涯にわたって歯の健康を大切にできるよう、楽しく通える歯科医院を目指しています。
                  歯医者さんが怖い場所ではなく、お口の健康を守る大切なパートナーとして感じていただけるよう努めています。
                </p>
                <p>
                  地域密着型の歯科医院として、患者様とのコミュニケーションを大切にし、
                  一人ひとりのライフスタイルに合わせた最適な治療計画をご提案いたします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Director Profile */}
        <section className="py-20 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">院長紹介</h2>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-primary">院長　久松 孝浩</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      地域の皆様に愛される歯科医院として、患者様とのコミュニケーションを大切にしています。
                      小児歯科を専門として、お子様の成長に合わせた最適な治療計画をご提案いたします。
                    </p>
                    <p>
                      「痛みの少ない治療」の実現のため、最新の医療技術の習得に積極的に取り組んでいます。
                      表面麻酔、電動麻酔器、レーザー治療など、患者様の負担を軽減する治療法を導入しています。
                    </p>
                    <p>
                      また、予防歯科にも力を入れており、治療よりも予防を重視した診療を心がけています。
                      定期的なメンテナンスを通じて、患者様の健康な歯を長期間維持できるようサポートいたします。
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-900">専門分野</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Award className="mr-2 h-4 w-4 text-primary" />
                      小児歯科
                    </li>
                    <li className="flex items-center">
                      <Award className="mr-2 h-4 w-4 text-primary" />
                      予防歯科
                    </li>
                    <li className="flex items-center">
                      <Award className="mr-2 h-4 w-4 text-primary" />
                      一般歯科
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=500&text=遠賀町の歯医者ひさまつ歯科クリニック院長久松孝浩"
                  alt="遠賀町の歯医者 ひさまつ歯科クリニック 院長 久松孝浩"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">院内設備・特徴</h2>
              <p className="text-lg text-gray-600">
                患者様に安心して治療を受けていただくための設備と環境を整えています
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 border-secondary/50 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">最新の医療機器</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    デジタルレントゲン、電動麻酔器、レーザー治療器など、最新の医療機器を導入しています。
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/50 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">清潔で快適な環境</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    滅菌システム完備、バリアフリー設計で、どなたでも安心してご来院いただけます。
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/50 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">キッズスペース</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    お子様が楽しく過ごせるキッズスペースを設置し、歯医者さんを好きになってもらえる工夫をしています。
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Clinic Interior */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">院内のご案内</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=遠賀町の歯医者ひさまつ歯科クリニック待合室"
                  alt="遠賀町の歯医者 ひさまつ歯科クリニック 待合室"
                  width={600}
                  height={400}
                  className="rounded-lg w-full"
                />
                <h3 className="text-xl font-semibold text-gray-900">待合室</h3>
                <p className="text-gray-600">明るく開放的な待合室で、リラックスしてお待ちいただけます。</p>
              </div>
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=遠賀町の歯医者ひさまつ歯科クリニック診療室"
                  alt="遠賀町の歯医者 ひさまつ歯科クリニック 診療室"
                  width={600}
                  height={400}
                  className="rounded-lg w-full"
                />
                <h3 className="text-xl font-semibold text-gray-900">診療室</h3>
                <p className="text-gray-600">
                  プライバシーに配慮した個室タイプの診療室で、安心して治療を受けていただけます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">医院概要</h2>
              <Card className="border-2 border-secondary/50">
                <CardContent className="p-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <dt className="font-semibold text-gray-900 mb-1">医院名</dt>
                        <dd className="text-gray-600">ひさまつ歯科クリニック</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-gray-900 mb-1">院長</dt>
                        <dd className="text-gray-600">久松 孝浩</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-gray-900 mb-1">住所</dt>
                        <dd className="text-gray-600">
                          〒811-4305
                          <br />
                          福岡県遠賀郡遠賀町松の本 5-9-7
                        </dd>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <dt className="font-semibold text-gray-900 mb-1">電話番号</dt>
                        <dd className="text-gray-600">093-293-1151</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-gray-900 mb-1">診療科目</dt>
                        <dd className="text-gray-600">歯科・小児歯科</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-gray-900 mb-1">駐車場</dt>
                        <dd className="text-gray-600">無料駐車場5台完備</dd>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">ご予約・ご相談はお気軽に</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                遠賀町の皆様の笑顔のために、
                <br />
                ひさまつ歯科クリニックがサポートします
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />📞 093-293-1151 今すぐ電話予約
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Same as homepage */}
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
