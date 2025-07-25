import { StickyNavbar } from "@/components/blocks/navbars/StickyNavbar";
import { SimpleFooterWithFourGrids } from "@/components/blocks/footers/simple-footer-with-four-grids";
import SEOHead from "@/components/seo/SEOHead";

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy - Nubble"
        description="Learn how Nubble protects your personal and health data. Our privacy policy covers data collection, security measures, and your rights regarding your information in our AI-powered nutrition app."
        canonical="/privacy-policy"
        noIndex={true}
      />
      <main className="bg-gradient-to-b from-[#143638] to-black text-white antialiased min-h-screen">
        <StickyNavbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/70">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8">
              
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                <div className="text-white/80 space-y-4">
                  <p>
                    At Nubble, we collect information to provide you with the best possible experience in managing your nutrition and overcoming snacking habits. The information we collect includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Account Information:</strong> Email address, username, and profile information you provide</li>
                    <li><strong>Health Data:</strong> Food intake, water consumption, weight tracking, and progress photos (stored securely and encrypted)</li>
                    <li><strong>Usage Data:</strong> App interactions, feature usage, and analytics to improve our AI recommendations</li>
                    <li><strong>Device Information:</strong> Device type, operating system, and app version for technical support</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                <div className="text-white/80 space-y-4">
                  <p>Your information is used to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide personalized AI-powered nutrition recommendations through Ruphus, our AI coach</li>
                    <li>Track your progress and provide insights into your eating habits</li>
                    <li>Send you relevant notifications and reminders to support your health journey</li>
                    <li>Improve our app features and AI algorithms</li>
                    <li>Provide customer support and respond to your inquiries</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Data Security</h2>
                <div className="text-white/80 space-y-4">
                  <p>
                    We take your privacy seriously and implement industry-standard security measures:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All personal and health data is encrypted both in transit and at rest</li>
                    <li>We use secure servers and follow GDPR compliance standards</li>
                    <li>Your photos and sensitive health information are stored with additional security layers</li>
                    <li>We regularly audit our security practices and update them as needed</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Data Sharing</h2>
                <div className="text-white/80 space-y-4">
                  <p>
                    We do not sell, rent, or share your personal information with third parties, except:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations or protect our rights</li>
                    <li>With trusted service providers who help us operate the app (under strict confidentiality agreements)</li>
                    <li>In anonymized, aggregated form for research purposes to improve eating disorder support</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
                <div className="text-white/80 space-y-4">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access, update, or delete your personal information</li>
                    <li>Export your data in a portable format</li>
                    <li>Opt out of non-essential communications</li>
                    <li>Request clarification about how your data is used</li>
                    <li>File a complaint with relevant data protection authorities</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Health Information</h2>
                <div className="text-white/80 space-y-4">
                  <p>
                    Given Nubble's focus on helping users with eating disorders and snacking habits, we handle health information with extra care:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Health data is used solely to provide personalized recommendations and support</li>
                    <li>We do not share health information with insurance companies or employers</li>
                    <li>You can delete your health data at any time through the app settings</li>
                    <li>Our AI coach Ruphus processes your data locally when possible to enhance privacy</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Children's Privacy</h2>
                <div className="text-white/80 space-y-4">
                  <p>
                    Nubble is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Policy</h2>
                <div className="text-white/80 space-y-4">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by email or through the app. Your continued use of Nubble after changes are posted constitutes acceptance of the updated policy.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
                <div className="text-white/80 space-y-4">
                  <p>
                    If you have any questions about this Privacy Policy or how we handle your data, please contact us:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email: nubble.help@gmail.com</li>
                    <li>Support: nubble.help@gmail.com</li>
                  </ul>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>

      <SimpleFooterWithFourGrids />
    </main>
    </>
  );
}
