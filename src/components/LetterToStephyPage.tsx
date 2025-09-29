
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
              To the Stephy of the Past
            </h1>
            <div className="mt-10 space-y-6 text-lg leading-8 text-muted-foreground">
              <p>Dear 13-year-old Buffy,</p>
              <p>
                Omg… look at you, so cute, literally a little firecracker of a child. But guess what? You’re about to make the most annoying, roast-happy friends ever who’ll never leave you alone… and somehow, you’ll love every minute of it.
              </p>
              <p>
                You’re growing into a strong, unstoppable woman. From that innocent, shy girl, you’re going to become bold, crazy, and totally unapologetic about who you are. You’ll be independent, confident, and figure out how to conquer the world.
              </p>
              <p>
                Also, can we talk about your glow-up?You’re gonna look amazing—inside and out. You’ll take risks, get out of your comfort zone, and grow smarter and braver than you ever imagined. Your creativity? Literally no bounds. You’ll learn to live alone, explore new places, and totally slay in the UK… so proud of you for that.
              </p>
              <p>
                You’ve got so many strengths—patience, resilience, curiosity, and a heart that loves deeply. Keep analyzing, keep creating, and don’t ever doubt yourself. I just want to hug you rn… love your past self, can’t wait to see the incredible person you become.
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

    