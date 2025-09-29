
"use client";

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function LetterToStephyPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen w-full bg-background font-body animate-in fade-in duration-500">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-12 sm:py-24">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">
              To the Stephy of the Future
            </h1>
            <div className="mt-10 space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                Hey Old Stephy, we hope you're reading this from a comfy chair,
                with a cup of tea, and still bossing everyone around. We just
                wanted to remind you of a few things:
              </p>
              <ul className="list-disc list-inside space-y-2 text-left">
                <li>We're so proud of the person you've become.</li>
                <li>
                  Remember all the late-night talks, the silly dances, and the
                  dreams we shared?
                </li>
                <li>
                  Your kindness and strength have always been your superpowers.
                </li>
                <li>We hope you're still obsessed with a good book.</li>
              </ul>
              <p className="text-right font-bold pt-4 border-t border-dashed">
                We love you to the moon and back.
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button onClick={onBack}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

    