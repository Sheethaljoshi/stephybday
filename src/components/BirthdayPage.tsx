"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MainContent } from '@/components/MainContent';
import { Confetti } from '@/components/Confetti';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Book, Film, Gift, Heart, Music, Users } from 'lucide-react';

const CORRECT_PASSWORD = "6BANGRYBIRDSCHIQUITITAM4RIAREKHAMAAM!";

const clues = [
    { icon: Book, text: "Where did our friendship officially start?", hint: "6B 📚" },
    { icon: Film, text: "Which cartoon character do we always associate with you?", hint: "Angry Birds 🐦" },
    { icon: Music, text: "What song did you sing at Arts Fest that we all loved?", hint: "Chiquitita 🎶" },
    { icon: Users, text: "Who is our friend that’s never been in our class yet?", hint: "Maria 💕" },
    { icon: Heart, text: "Which teacher loved you the most?", hint: "Teacher ❤️" },
];

export function BirthdayPage() {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const { toast } = useToast();

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password.toUpperCase().replace(/\s/g, '') === CORRECT_PASSWORD) {
            setShowConfetti(true);
            setTimeout(() => {
                setIsAuthenticated(true);
            }, 1000); // Wait for confetti to be visible
        } else {
            toast({
                title: "Oops!",
                description: "That's not the right password. Try combining the answers!",
                variant: "destructive",
            });
            setPassword('');
        }
    };

    if (isAuthenticated) {
        return <MainContent />;
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-background">
            {showConfetti && <Confetti />}
            <main className="w-full max-w-2xl">
              <Card className="shadow-2xl animate-in fade-in zoom-in-95 duration-500">
                  <CardHeader className="text-center">
                      <div className="mx-auto bg-primary/20 p-3 rounded-full mb-4 w-fit">
                          <Gift className="h-10 w-10 text-primary-foreground" />
                      </div>
                      <CardTitle className="font-headline text-4xl">Birthday Time Capsule</CardTitle>
                      <CardDescription className="text-lg">A special gift for a special friend. But first, a test of your memory!</CardDescription>
                  </CardHeader>
                  <CardContent>
                      <div className="space-y-4 mb-6">
                          {clues.map((clue, index) => (
                              <div key={index} className="flex items-start space-x-4 p-3 bg-card-foreground/5 rounded-lg">
                                  <clue.icon className="h-6 w-6 text-primary-foreground mt-1 flex-shrink-0" />
                                  <div>
                                      <p className="font-semibold">{clue.text}</p>
                                      <p className="text-sm text-muted-foreground">{clue.hint}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                      <form onSubmit={handlePasswordSubmit} className="space-y-4">
                          <Input
                              type="password"
                              placeholder="Enter the secret code..."
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="text-center text-lg h-12"
                          />
                          <Button type="submit" className="w-full text-lg h-12 group bg-accent text-accent-foreground hover:bg-accent/90">
                              Unlock Your Surprise
                              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </Button>
                      </form>
                  </CardContent>
              </Card>
            </main>
        </div>
    );
}
