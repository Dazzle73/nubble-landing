"use client";

export default function SimpleCenteredWithGradient() {
  return (
    <div className="relative isolate overflow-hidden bg-[--color-glass] font-sans backdrop-blur-sm">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
            Ready to Transform Your Nutrition?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-muted-foreground">
            Join thousands of users who've already improved their health with Nubble's AI-powered tracking. Download
            now and start your journey to better nutrition.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Download for iOS
            </a>
            <a href="#" className="text-sm/6 font-semibold text-muted-foreground hover:text-foreground">
              Available on App Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}