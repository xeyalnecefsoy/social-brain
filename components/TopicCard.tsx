import { Topic } from '@/data/inspiration';
import { cn } from '@/lib/utils';
import { Trash2, Copy, Plus, Quote, Sparkles, Atom, History, Cpu, Landmark, Palette, Leaf, Brain, Rocket, BookOpen, HeartPulse, Trophy, Tent, Clapperboard, Smile } from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
  onDelete?: () => void;
  onAdd?: () => void;
  onClick?: () => void;
  variant?: 'personal' | 'inspiration';
}

export function TopicCard({ topic, onDelete, onAdd, onClick, variant = 'personal' }: TopicCardProps) {
  // Kateqoriyaya uyğun rəng təyin edirik
  const getGradient = (category: string) => {
      if (['Türk Tarixi'].includes(category)) return 'from-cyan-600 to-blue-600'; // Turkuaz rənglər
      if (['Elm', 'Texnologiya', 'Kosmos'].includes(category)) return 'from-indigo-500 to-purple-500';
      if (['Tarix', 'Fəlsəfə', 'Siyasət'].includes(category)) return 'from-amber-500 to-orange-500';
      if (['Təbiət', 'Sağlamlıq', 'Psixologiya'].includes(category)) return 'from-emerald-500 to-teal-500';
      if (['İncəsənət', 'İdman', 'Gülməli', 'Filmlər/Seriallar'].includes(category)) return 'from-rose-500 to-pink-500';
      return 'from-slate-500 to-slate-400';
  };

  const categoryIcons: Record<string, any> = {
    'Hamısı': Sparkles,
    'Türk Tarixi': Tent,
    'Elm': Atom,
    'Tarix': History,
    'Texnologiya': Cpu,
    'Siyasət': Landmark,
    'İncəsənət': Palette,
    'Təbiət': Leaf,
    'Psixologiya': Brain,
    'Kosmos': Rocket,
    'Fəlsəfə': BookOpen,
    'Sağlamlıq': HeartPulse,
    'İdman': Trophy,
    'Filmlər/Seriallar': Clapperboard,
    'Gülməli': Smile
  };
  
  const gradient = getGradient(topic.category);
  const Icon = categoryIcons[topic.category];

  return (
    <div 
        onClick={onClick}
        className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-900/40 p-1 transition-all hover:scale-[1.02] active:scale-[0.98]"
    >
      {/* Animated Gradient Border */}
      <div className={cn(
          "absolute inset-0 opacity-20 transition-opacity group-hover:opacity-100 bg-gradient-to-br",
          gradient
      )} />
      
      {/* Inner Card Content */}
      <div className="relative flex h-full flex-col justify-between rounded-xl bg-slate-950/90 p-5 backdrop-blur-sm border border-slate-800 group-hover:border-transparent transition-colors">
          
          <div className="mb-4 flex items-start justify-between">
            <span className={cn(
                "inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300 ring-1 ring-white/10",
                "group-hover:ring-white/30 transition-all"
            )}>
                {Icon ? <Icon size={12} className="text-indigo-400" /> : <Sparkles size={12} className="text-indigo-400" />}
                {topic.category}
            </span>
            
            {/* Action Buttons */}
            <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100" onClick={(e) => e.stopPropagation()}>
                {variant === 'personal' ? (
                <button
                    onClick={onDelete}
                    className="rounded-lg bg-rose-500/10 p-2 text-rose-500 transition-colors hover:bg-rose-500 hover:text-white"
                    title="Sil"
                >
                    <Trash2 className="h-4 w-4" />
                </button>
                ) : (
                <button
                    onClick={onAdd}
                    className="rounded-lg bg-indigo-500/10 p-2 text-indigo-400 transition-colors hover:bg-indigo-500 hover:text-white"
                    title="Mövzularıma əlavə et"
                >
                    <Plus className="h-4 w-4" />
                </button>
                )}
            </div>
          </div>

        <div>
           <h3 className="mb-2 text-lg font-bold text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
             {topic.title}
           </h3>
           <div className="line-clamp-3 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
             {topic.description.split(/(\*\*.*?\*\*)|(\*.*?\*)/g).map((part, index) => {
                 if (!part) return null;
                 if (part.startsWith('**') && part.endsWith('**')) {
                     return <strong key={index} className="font-bold text-slate-200">{part.slice(2, -2)}</strong>;
                 }
                 if (part.startsWith('*') && part.endsWith('*')) {
                     return <em key={index} className="italic text-indigo-400">{part.slice(1, -1)}</em>;
                 }
                 return <span key={index}>{part}</span>;
             })}
           </div>
        </div>

        {/* Footer: Vibe & Source */}
        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-800/50 pt-4">
             {topic.source && (
                 <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-slate-600 max-w-[60%]">
                     <Quote size={10} className="shrink-0" />
                     <span className="truncate">
                       {topic.source.startsWith('http') 
                           ? new URL(topic.source).hostname.replace('www.', '') 
                           : topic.source}
                     </span>
                 </div>
             )}
             
             {topic.vibes?.slice(0, 2).map((vibe, idx) => (
                 <span key={idx} className="rounded px-1.5 py-0.5 text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                     {vibe.split(' ')[0]} {/* Emoji only or first word */}
                 </span>
             ))}
        </div>
      </div>
    </div>
  );
}
