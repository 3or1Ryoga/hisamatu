import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, Car, Train, Navigation } from "lucide-react"

export default function AccessPage() {
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
            <Link href="/first-visit" className="text-sm font-medium hover:text-primary transition-colors">
              初めての方へ
            </Link>
            <Link href="/access" className="text-sm font-medium text-primary">
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
              <span className="text-primary">診療時間・アクセス</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">診療時間・アクセス</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">遠賀町松の本にございます。お気軽にお越しください</p>
          </div>
        </section>

        {/* Clinic Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">医院情報</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-secondary/50 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">医院名・住所</h3>
                          <p className="text-gray-600 leading-relaxed">
                            <strong>ひさまつ歯科クリニック</strong>
                            <br />
                            〒811-4305
                            <br />
                            福岡県遠賀郡遠賀町松の本 5-9-7
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">電話番号</h3>
                          <p className="text-gray-600">093-293-1151</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-3">
                        <Navigation className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">診療科目</h3>
                          <p className="text-gray-600">歯科・小児歯科</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Navigation className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">院長</h3>
                          <p className="text-gray-600">久松 孝浩</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Hours */}
        <section className="py-20 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">診療時間</h2>
              <p className="text-lg text-gray-600">平日夜19時まで診療。土曜日も17時まで診療しています</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-secondary/50 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary flex items-center justify-center">
                    <Clock className="mr-2 h-6 w-6" />
                    診療時間表
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-center">
                      <thead>
                        <tr className="border-b-2 border-secondary">
                          <th className="py-4 px-4 font-semibold text-gray-900">曜日</th>
                          <th className="py-4 px-4 font-semibold text-gray-900">午前</th>
                          <th className="py-4 px-4 font-semibold text-gray-900">午後</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        <tr className="border-b border-gray-200">
                          <td className="py-4 px-4 font-medium">月曜日</td>
                          <td className="py-4 px-4">9:00-12:30</td>
                          <td className="py-4 px-4">14:30-19:00</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-4 px-4 font-medium">火曜日</td>
                          <td className="py-4 px-4">9:00-12:30</td>
                          <td className="py-4 px-4">14:30-19:00</td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-red-50">
                          <td className="py-4 px-4 font-medium">水曜日</td>
                          <td className="py-4 px-4">9:00-12:30</td>
                          <td className="py-4 px-4 text-red-600 font-medium">午後休診</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-4 px-4 font-medium">木曜日</td>
                          <td className="py-4 px-4">9:00-12:30</td>
                          <td className="py-4 px-4">14:30-19:00</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-4 px-4 font-medium">金曜日</td>
                          <td className="py-4 px-4">9:00-12:30</td>
                          <td className="py-4 px-4">14:30-19:00</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-4 px-4 font-medium">土曜日</td>
                          <td className="py-4 px-4">9:00-12:30</td>
                          <td className="py-4 px-4">14:00-17:00</td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="py-4 px-4 font-medium">日曜・祝日</td>
                          <td className="py-4 px-4 text-red-600 font-medium" colSpan={2}>
                            休診
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      <strong className="text-red-600">休診日:</strong> 水曜午後・日曜・祝日
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Access Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">アクセス</h2>
              <p className="text-lg text-gray-600">電車・お車どちらでもアクセス便利です</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
              <Card className="border-2 border-secondary/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <Train className="mr-2 h-5 w-5" />
                    電車でお越しの方
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">JR鹿児島本線</p>
                    <p className="text-gray-600">「遠賀川駅」から徒歩19分</p>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      遠賀川駅から松の本方面へ向かい、約1.5kmの距離です。
                      徒歩でお越しの際は、お時間に余裕を持ってお越しください。
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <Car className="mr-2 h-5 w-5" />
                    お車でお越しの方
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">無料駐車場5台完備</p>
                    <p className="text-gray-600">医院前に駐車スペースをご用意</p>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      遠賀町内からアクセス良好。
                      駐車場は医院の目の前にございますので、お車でお越しの際は安心してご利用ください。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map and Parking */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-gray-900">地図・駐車場のご案内</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">アクセスマップ</h3>
                {/* 33°51'26.5"N 130°40'13.4"E */}
                <Image
                  src="/placeholder.svg?height=400&width=600&text=遠賀町の歯医者ひさまつ歯科クリニックアクセスマップ"
                  alt="遠賀町の歯医者 ひさまつ歯科クリニック アクセスマップ"
                  width={600}
                  height={400}
                  className="rounded-lg w-full shadow-lg"
                />
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">目印・周辺施設</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 遠賀町役場から車で約5分</li>
                    <li>• 遠賀川駅から松の本方面</li>
                    <li>• 県道281号線沿い</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">駐車場案内</h3>
                <Image
                  src="/0613_hisamatu1.JPG?height=400&width=600&text=遠賀町の歯医者ひさまつ歯科クリニック駐車場案内図"
                  alt="遠賀町の歯医者 ひさまつ歯科クリニック 駐車場案内図"
                  width={600}
                  height={400}
                  className="rounded-lg w-full shadow-lg"
                />
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">駐車場について</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 無料駐車場5台分完備</li>
                    <li>• 医院前の専用駐車場</li>
                    <li>• 車椅子でのアクセスも可能</li>
                    <li>• 満車の場合はお声がけください</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reservation Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">ご予約について</h2>
              <div className="bg-accent/20 p-8 rounded-2xl">
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    お待ち時間を短縮するため、事前のお電話でのご予約をお勧めしております。
                    急患の方も対応いたしますので、まずはお電話ください。
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900 mb-2">予約受付時間</h3>
                      <p className="text-gray-600">診療時間内にお電話ください</p>
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900 mb-2">急患対応</h3>
                      <p className="text-gray-600">痛みがある場合は随時対応</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">ご予約・お問い合わせ</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                お口のお悩みがございましたら、お気軽にご相談ください
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />📞 093-293-1151 今すぐ予約する
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
