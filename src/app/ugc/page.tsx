import { Metadata } from 'next'
import Link from 'next/link'
import { TrendingUp, Users, DollarSign, Video, AlertTriangle, CheckCircle, Lightbulb, Mail } from 'lucide-react'
import { StickyNavbar } from '@/components/blocks/navbars/StickyNavbar'
import { SimpleFooterWithFourGrids } from '@/components/blocks/footers/simple-footer-with-four-grids'

export const metadata: Metadata = {
  title: 'Create Content & Earn - Nubble UGC Program',
  description: 'Join the Nubble creator program and earn money by making content about overcoming snacking addiction. Get paid per thousand views on TikTok and Instagram.',
  robots: 'noindex, nofollow',
}

export default function UGCPage() {

  return (
    <main className="bg-gradient-to-b from-[#143638] to-black text-white overflow-hidden">
      <StickyNavbar />
      
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Creator Program
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl mb-6">
            Earn with NUBBLE by making content
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Go viral with us and earn <span className="text-green-400 font-semibold">$1 per thousand views</span>
          </p>
          <div className="flex items-center justify-center gap-6 text-white/60">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Join 500+ creators</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              <span>Monthly payouts</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5" />
              <span>TikTok & Instagram</span>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-red-400 font-semibold text-lg mb-2">
                YOU WILL ONLY BE PAID IF YOU FOLLOW THE INSTRUCTIONS
              </h3>
              <p className="text-white/80">
                Read all guidelines carefully and ensure your content meets our quality standards.
              </p>
            </div>
          </div>
        </div>

        {/* Program Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
            <p className="text-lg text-white/90 mb-6">
              Create content on TikTok and Instagram promoting the <Link href="/" className="text-green-400 hover:text-green-300 underline">Nubble App</Link>. 
              Each post must be about Nubble and helping people overcome snacking addiction - no unrelated content.
            </p>
            
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-green-400 font-semibold text-lg mb-2">
                    Creator Payment Structure
                  </h3>
                  <p className="text-white/90">
                    Every month, we will add up all of your video views across TikTok and Instagram, 
                    and pay you <strong>$1 per 1,000 views</strong> through secure payment platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Content Opportunities</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Organic Content */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Organic Content</h3>
                  <p className="text-white/70">Personal stories & testimonials</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6 text-white/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  Share your anti-snacking journey
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  Show Nubble app features in action
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  Before/after transformations
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  Daily motivation & tips
                </li>
              </ul>
              

            </div>

            {/* Faceless Content */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Video className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Faceless Content</h3>
                  <p className="text-white/70">Anonymous educational content</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6 text-white/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  Educational voiceovers
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  Screen recordings of app
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  Animated explanations
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  Statistics & facts about snacking
                </li>
              </ul>
              

            </div>
          </div>
        </div>

        {/* Important Guidelines */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Important Guidelines</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-400 mb-3">✅ Requirements</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Warm up your account for 4-7 days minimum</li>
                  <li>• Post once per day ideally</li>
                  <li>• Tag @nubbleapp in every caption</li>
                  <li>• Each video MUST show the Nubble app</li>
                  <li>• Focus on anti-snacking content only</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-400 mb-3">❌ Avoid</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Unrelated content to Nubble/health</li>
                  <li>• Poor video quality or production</li>
                  <li>• Misleading claims about the app</li>
                  <li>• Content that promotes unhealthy habits</li>
                  <li>• Violating platform community guidelines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Content Ideas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Video Content Ideas</h2>
          
          <div className="space-y-8">
            {/* Style 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Problem → Solution Format</h3>
                  <p className="text-white/80 mb-3">
                    Show the struggle with snacking cravings, then reveal how Nubble's panic button, 
                    AI coach, or tracking features provide relief and support.
                  </p>
                  <p className="text-sm text-white/60">
                    Example: "POV: You're craving snacks at 2am but you have Nubble's panic button"
                  </p>
                </div>
              </div>
            </div>

            {/* Style 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Before & After Transformations</h3>
                  <p className="text-white/80 mb-3">
                    Show the contrast between unhealthy snacking habits and a healthier lifestyle 
                    after using Nubble. Include weight loss, energy improvements, and mental clarity.
                  </p>
                  <p className="text-sm text-white/60">
                    Example: "My life before vs after stopping mindless snacking with Nubble"
                  </p>
                </div>
              </div>
            </div>

            {/* Style 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Daily Journey Updates</h3>
                  <p className="text-white/80 mb-3">
                    Document your anti-snacking journey day by day, showing how Nubble helps 
                    track progress, provides insights, and keeps you motivated.
                  </p>
                  <p className="text-sm text-white/60">
                    Example: "Day 15 without mindless snacking - here's what Nubble taught me"
                  </p>
                </div>
              </div>
            </div>

            {/* Style 4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Video className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">App Feature Demonstrations</h3>
                  <p className="text-white/80 mb-3">
                    Create engaging content showing specific Nubble features like AI dish analysis, 
                    panic button, water tracking, or the 24/7 AI coach Ruphus in action.
                  </p>
                  <p className="text-sm text-white/60">
                    Example: "This AI analyzed my snack and told me exactly why I shouldn't eat it"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA Section - Matching Landing Page Style */}
        <section className="bg-transparent py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            {/* Centered card with gradient background */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f4639] via-[#133537] to-[#17493d] px-8 py-16 sm:px-16">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute top-32 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>
                  <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-500"></div>
                  <div className="absolute bottom-10 right-10 w-28 h-28 bg-white/10 rounded-full blur-xl animate-pulse delay-1500"></div>
                </div>
              </div>
              
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
              
              {/* Content */}
              <div className="relative text-center">
                <div className="space-y-8">
                  {/* Main headline */}
                  <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-tight">
                    Have you made a video and want to let us know?
                  </h2>
                  
                  {/* Subheading */}
                  <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                    Contact us to share your content and join our creator community
                  </p>

                  {/* Contact button */}
                  <div className="flex items-center justify-center pt-8">
                    <Link
                      href="mailto:nubble.help@gmail.com"
                      className="group relative"
                      aria-label="Contact Us"
                    >
                      <div className="absolute -inset-2 bg-white/20 rounded-2xl blur-lg group-hover:bg-white/30 transition-all duration-300"></div>
                      <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-4 hover:bg-white/20 transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                            <Mail className="w-6 h-6 text-black" />
                          </div>
                          <div className="text-left">
                            <div className="text-lg font-semibold text-white">Contact Us</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Trust indicators */}
                  <div className="pt-8 space-y-4">
                    <p className="text-white/70 text-sm">
                      Trusted by creators worldwide • Fast response time • Creator-friendly support
                    </p>
                    
                    {/* Security badges */}
                    <div className="flex items-center justify-center gap-6 opacity-80">
                      <div className="flex items-center gap-2 text-white/60 text-xs">
                        <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span>Secure & Private</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-xs">
                        <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span>No Spam</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-xs">
                        <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span>Creator Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <SimpleFooterWithFourGrids />
    </main>
  )
}
