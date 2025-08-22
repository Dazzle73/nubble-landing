import { StickyNavbar } from "@/components/blocks/navbars/StickyNavbar";
import { SimpleFooterWithFourGrids } from "@/components/blocks/footers/simple-footer-with-four-grids";
import SEOHead from "@/components/seo/SEOHead";

export default function TermsConditions() {
  return (
    <>
      <SEOHead
        title="Terms & Conditions - Nubble"
        description="Read Nubble's terms of service and conditions of use. Learn about our AI-powered nutrition app policies, subscription terms, medical disclaimers, and user responsibilities."
        canonical="/terms-conditions"
        noIndex={true}
      />
      <main className="bg-gradient-to-b from-[#143638] to-black text-white antialiased min-h-screen">
        <StickyNavbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Terms & Conditions
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
                <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                <div className="text-white/80 space-y-4">
                  <p>
                    By downloading, installing, or using the Nubble app, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our service.
                  </p>
                  <p>
                    Nubble is an AI-powered nutrition tracking app designed to help users overcome snacking habits and build healthier relationships with food.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
                <div className="text-white/80 space-y-4">
                  <p>Nubble provides:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>AI-powered dish analysis with calorie, macro, and health scoring</li>
                    <li>Snacking timer and panic button functionality</li>
                    <li>Water intake tracking and reminders</li>
                    <li>Weight and progress photo tracking</li>
                    <li>24/7 AI nutrition coach (Ruphus) for personalized guidance</li>
                    <li>Analytics and insights into eating patterns</li>
                    <li>Community support features</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Medical Disclaimer</h2>
                <div className="text-white/80 space-y-4">
                  <p className="font-semibold text-yellow-400">
                    IMPORTANT: Nubble is not a substitute for professional medical advice, diagnosis, or treatment.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Always consult with qualified healthcare professionals for eating disorder treatment</li>
                    <li>Our AI recommendations are for informational purposes only</li>
                    <li>If you have a serious eating disorder, please seek professional help immediately</li>
                    <li>Nubble is designed as a supportive tool, not a medical treatment</li>
                    <li>In case of emergency, contact your local emergency services</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. User Responsibilities</h2>
                <div className="text-white/80 space-y-4">
                  <p>As a user of Nubble, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate information about your health and dietary habits</li>
                    <li>Use the app responsibly and not rely solely on it for health decisions</li>
                    <li>Respect other users in community features</li>
                    <li>Not share your account credentials with others</li>
                    <li>Report any bugs or issues you encounter</li>
                    <li>Not attempt to reverse engineer or hack the app</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Subscription and Payments</h2>
                <div className="text-white/80 space-y-4">
                  <p>Nubble offers premium features through subscription:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Monthly subscription: €12/month</li>
                    <li>Annual subscription: €96/year (equivalent to €8/month)</li>
                  </ul>
                  
                  <p className="font-semibold">Subscription Details:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Subscriptions automatically renew unless auto-renewal is turned off at least 24 hours before the end of the current period</li>
                    <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
                    <li>You can manage and cancel your subscriptions by going to your Account Settings on the App Store after purchase</li>
                    <li>Any unused portion of a free trial period will be forfeited when you purchase a subscription</li>
                    <li>Refunds are handled according to App Store policies (Apple's standard refund policy)</li>
                  </ul>
                  
                  <p>Premium features include advanced AI coaching, detailed analytics, and priority support</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property</h2>
                <div className="text-white/80 space-y-4">
                  <p>
                    All content, features, and functionality of Nubble, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>AI algorithms and recommendations</li>
                    <li>App design and user interface</li>
                    <li>Ruphus AI coach personality and responses</li>
                    <li>Logos, trademarks, and branding</li>
                    <li>Software code and architecture</li>
                  </ul>
                  <p>
                    Are owned by Nubble and protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Privacy and Data</h2>
                <div className="text-white/80 space-y-4">
                  <p>
                    Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information. By using Nubble, you consent to our data practices as described in our Privacy Policy.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Prohibited Uses</h2>
                <div className="text-white/80 space-y-4">
                  <p>You may not use Nubble to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Promote unhealthy eating behaviors or eating disorders</li>
                    <li>Share harmful or triggering content with other users</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use the app for commercial purposes without permission</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
                <div className="text-white/80 space-y-4">
                  <p>
                    To the fullest extent permitted by law, Nubble and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses resulting from your use of the app.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Termination</h2>
                <div className="text-white/80 space-y-4">
                  <p>
                    We may terminate or suspend your account and access to Nubble at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to Terms</h2>
                <div className="text-white/80 space-y-4">
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or in-app notification. Your continued use of Nubble after changes are posted constitutes acceptance of the new Terms.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Information</h2>
                <div className="text-white/80 space-y-4">
                  <p>
                    If you have any questions about these Terms & Conditions, please contact us:
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
