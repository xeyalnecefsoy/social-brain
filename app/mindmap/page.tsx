'use client';

import { useTopics } from '@/hooks/useTopics';
import { INSPIRATION_TOPICS } from '@/data/inspiration';
import MindMapVisualization from '@/components/MindMapVisualization';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MindMapPage() {
  const { topics: myTopics, loading } = useTopics([]);
  
  // Combine all topics for the visualization
  const allTopics = [...myTopics, ...INSPIRATION_TOPICS];

  if (loading && myTopics.length === 0) { // Initial loading state (approximate)
      return (
          <div className="flex h-screen w-full items-center justify-center bg-slate-950 text-slate-400">
              <span className="animate-pulse">Məlumatlar yüklənir...</span>
          </div>
      );
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-slate-950">
       {/* Desktop Back Button */}
       <div className="absolute top-4 left-4 z-30 hidden md:block">
           <Link 
             href="/"
             className="flex items-center gap-2 rounded-xl bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-md transition-colors hover:bg-slate-900 hover:text-white border border-slate-800"
           >
               <ArrowLeft className="h-4 w-4" />
               Geri Qayıt
           </Link>
       </div>

       <MindMapVisualization topics={allTopics} />
    </div>
  );
}
