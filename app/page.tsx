'use client';

import { useState, useMemo } from 'react';
import { useTopics } from '@/hooks/useTopics'; // Switch to Backendless hook
import { INSPIRATION_TOPICS, Topic } from '@/data/inspiration';
import { TopicCard } from '@/components/TopicCard';
import { Plus, Search, Shuffle, X, Lightbulb, Quote, Settings, Copy, Check, Download, Upload, LayoutGrid, Atom, History, Cpu, Landmark, Palette, Leaf, Brain, Rocket, BookOpen, HeartPulse, Trophy, Tent, Heart, Sparkles, MessageCircle, Shield, ArrowUpDown, Clapperboard, Smile } from 'lucide-react';
import { clsx } from 'clsx';
import { cn } from '@/lib/utils';

export default function Home() {
  // State
  // Use our new Backendless hook. It handles data fetching.
  const { topics: myTopics, addTopic, deleteTopic, loading } = useTopics([]);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Hamısı');
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<'newest' | 'oldest' | 'az' | 'za'>('newest');
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  
  // Icon Mapping
  const categoryIcons: Record<string, any> = {
    'Hamısı': LayoutGrid,
    'Tanışlıq': Heart,
    'Kişilik': Shield,
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
    'Türk Tarixi': Tent,
    'Filmlər/Seriallar': Clapperboard,
    'Gülməli': Smile
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isShuffleOpen, setIsShuffleOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSOSOpen, setIsSOSOpen] = useState(false); // SOS Modalı üçün
  const [sosTopic, setSosTopic] = useState<Topic | null>(null);
  const [randomTopic, setRandomTopic] = useState<Topic | null>(null);
  const [viewingTopic, setViewingTopic] = useState<Topic | null>(null);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  
  // Filter Dropdown States
  const [isFilterCatOpen, setIsFilterCatOpen] = useState(false);
  const [isFilterVibeOpen, setIsFilterVibeOpen] = useState(false);
  const [filterCatSearch, setFilterCatSearch] = useState('');
  const [filterVibeSearch, setFilterVibeSearch] = useState('');

  // Settings State
  const [importData, setImportData] = useState('');
  const [showCopied, setShowCopied] = useState(false);
  const [importError, setImportError] = useState('');

  // Form State
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [newTopicDesc, setNewTopicDesc] = useState('');
  const [newTopicCategory, setNewTopicCategory] = useState('Ümumi');
  const [newTopicOpener, setNewTopicOpener] = useState('');
  const [newTopicQuestion, setNewTopicQuestion] = useState('');
  const [newTopicVibes, setNewTopicVibes] = useState<string[]>([]);

  const categories = ['Hamısı', 'Tanışlıq', 'Kişilik', 'Türk Tarixi', 'Filmlər/Seriallar', 'Gülməli', 'Elm', 'Tarix', 'Texnologiya', 'Siyasət', 'İncəsənət', 'Təbiət', 'Psixologiya', 'Kosmos', 'Fəlsəfə', 'Sağlamlıq', 'İdman'];
  
  const vibesList = [
      { id: '🐺 Türk', label: '🐺 Türk Soyu' },
      { id: '🗿 Stoik', label: '🗿 Stoik/Sakit' },
      { id: '😏 Flirt', label: '😏 Flirt/Tanışlıq' },
      { id: '✨ Xarizma', label: '✨ Xarizma' },
      { id: '🤝 Qardaşlıq', label: '🤝 Qardaşlıq' },
      { id: '⚖️ Şərəf', label: '⚖️ Şərəf/Söz' },
      { id: '💪 Bədən Dili', label: '💪 Bədən Dili' },
      { id: '🗣️ Ünsiyyət', label: '🗣️ Ünsiyyət' },
      { id: '🧊 Buzqıran', label: '🧊 Buzqıran' },
      { id: '😂 Gülməli', label: '😂 Gülməli' },
      { id: '🤔 Dərin', label: '🤔 Dərin/Fəlsəfi' },
      { id: '❤️ Romantik', label: '❤️ Romantik' },
      { id: '💼 İş', label: '💼 İş/Karyera' },
      { id: '☕ Chill', label: '☕ Chill/Rahat' },
      { id: '👻 Sirli', label: '👻 Sirli' },
      { id: '🍔 Yemək', label: '🍔 Yemək' },
      { id: '🌍 Səyahət', label: '🌍 Səyahət' },
      { id: '🥶 Qorxulu', label: '🥶 Qorxulu' },
      { id: '💀 Ölüm', label: '💀 Ölüm' },
      { id: '😱 Dəhşət', label: '😱 Dəhşət' },
      { id: '🐝 Təbiət', label: '🐝 Təbiət' },
      { id: '🤢 İyrənc', label: '🤢 İyrənc' },
      { id: '⚔️ Döyüş', label: '⚔️ Döyüş' },
      { id: '🔥 Güc', label: '🔥 Güc' },
      { id: '👑 Lider', label: '👑 Lider' },
      { id: '🤣 Gülməli', label: '🤣 Gülməli' },
      { id: '⏳ Vaxt', label: '⏳ Vaxt' },
  ];

  // Derived State
  // "Mövzularım" (My Topics) - SADECE istifadəçinin əlavə etdikləri.
  const filteredTopics = useMemo(() => {
    return myTopics.filter((topic) => {
      const matchesSearch =
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'Hamısı' || topic.category === selectedCategory;
      
      // Vibe filtri
      const matchesVibe = !selectedVibe || (topic.vibes && topic.vibes.includes(selectedVibe));

      return matchesSearch && matchesCategory && matchesVibe;
    });
  }, [myTopics, searchQuery, selectedCategory, selectedVibe]);

  // "Maraqlı Faktlar" (Inspiration) - Statik baza.
  const filteredInspiration = useMemo(() => {
     let result = INSPIRATION_TOPICS.filter((t) => {
      const matchesSearch =
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'Hamısı' || t.category === selectedCategory;
      const matchesVibe = !selectedVibe || (t.vibes && t.vibes.includes(selectedVibe));
      
      // Əgər axtarış varsa, kateqoriya və vibe filtrlərini iqnor et (Qlobal Axtarış)
      if (searchQuery) {
          return matchesSearch;
      }

      return matchesSearch && matchesCategory && matchesVibe;
    });

    // Sorting Logic
    if (selectedSort === 'newest') {
        result.sort((a, b) => {
            const idA = parseInt(a.id.replace('fact-', ''));
            const idB = parseInt(b.id.replace('fact-', ''));
            return idB - idA;
        });
    } else if (selectedSort === 'oldest') {
        result.sort((a, b) => {
            const idA = parseInt(a.id.replace('fact-', ''));
            const idB = parseInt(b.id.replace('fact-', ''));
            return idA - idB;
        });
    } else if (selectedSort === 'az') {
        result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSort === 'za') {
        result.sort((a, b) => b.title.localeCompare(a.title));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedVibe, selectedSort]);

  // Pagination State for Inspiration
  const [visibleInspirationCount, setVisibleInspirationCount] = useState(6);
  
  const handleLoadMore = () => {
    setVisibleInspirationCount((prev) => prev + 6);
  };

  // Reset pagination when filters change
  useMemo(() => {
    setVisibleInspirationCount(6);
  }, [searchQuery, selectedCategory, selectedVibe]);

  const displayedInspiration = filteredInspiration.slice(0, visibleInspirationCount);


  // Handlers
  const handleAddTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTopicTitle.trim()) return;

    const newTopic: Topic = {
      id: crypto.randomUUID(), // Temp ID
      title: newTopicTitle,
      description: newTopicDesc,
      category: newTopicCategory || 'Ümumi',
      opener: newTopicOpener,
      question: newTopicQuestion,
      vibes: newTopicVibes
    };

    addTopic(newTopic);
    
    setNewTopicTitle('');
    setNewTopicDesc('');
    setNewTopicCategory('Ümumi');
    setNewTopicOpener('');
    setNewTopicQuestion('');
    setNewTopicVibes([]);
    setIsAddModalOpen(false);
  };
  
  const handleSOS = () => {
      // Bütün mövcud sualları toplayırıq (həm şəxsi, həm inspirasiya)
      const allTopics = [...myTopics, ...INSPIRATION_TOPICS];
      const validTopics = allTopics.filter(t => t.question);
      
      if (validTopics.length > 0) {
          const random = validTopics[Math.floor(Math.random() * validTopics.length)];
          setSosTopic(random);
          setIsSOSOpen(true);
      } else {
          alert("Hələ heç bir sual bazası yoxdur!");
      }
  };

  const handleDeleteTopic = (id: string) => {
    deleteTopic(id);
  };

  const handleCopyInspiration = (topic: Topic) => {
    const newTopic = { ...topic, id: crypto.randomUUID() }; // Temp ID
    addTopic(newTopic);
    // Optional: Show toast
  };

  const handleShuffle = () => {
    // 1. Prioritet: Filtrlənmiş şəxsi mövzular
    let source = filteredTopics;

    // 2. Əgər şəxsi mövzularda nəticə yoxdursa, filtrlənmiş inspirasiya faktlarına bax
    if (source.length === 0) {
      source = filteredInspiration;
    }

    // 3. Əgər heç bir nəticə yoxdursa
    if (source.length === 0) {
      alert("Seçilmiş filtrlərə uyğun mövzu tapılmadı! Zəhmət olmasa filtrləri dəyişin.");
      return;
    }

    const random = source[Math.floor(Math.random() * source.length)];
    setRandomTopic(random);
    setIsShuffleOpen(true);
  };

  const handleExport = () => {
    // If user has no personal topics, export the inspiration topics as a starter pack
    const dataToExport = myTopics.length > 0 ? myTopics : INSPIRATION_TOPICS;
    const data = JSON.stringify(dataToExport);
    navigator.clipboard.writeText(data);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const handleImport = () => {
     alert("Backendless rejimində import deaktivdir. Məlumatlar avtomatik sinxronlaşır.");
  };

  return (
    <main className="min-h-screen bg-slate-950 pb-20 md:pb-10">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30">
               <Brain className="h-6 w-6" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Social Brain
            </h1>
          </div>
          <div className="flex items-center gap-3">
             <button
               onClick={() => setIsAddModalOpen(true)}
               className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-900 hover:text-indigo-400 md:block hidden"
               aria-label="Yeni Mövzu"
             >
               <Plus className="h-5 w-5" />
             </button>
             <button
              onClick={() => setIsSettingsOpen(true)}
              className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-900 hover:text-slate-200"
              aria-label="Tənzimləmələr"
            >
              <Settings className="h-5 w-5" />
            </button>
            <button
              onClick={handleShuffle}
              className="group flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors hover:border-indigo-500/50 hover:text-indigo-400 active:scale-95"
            >
              <Shuffle className="h-3 w-3 transition-transform group-hover:rotate-180" />
              Xatırla
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl gap-6 px-4 py-6">
        {/* Search & Filter */}
        <div className="mb-0 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Mövzuları axtar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900 py-3 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          {/* Tabs & Filters */}
        {/* Searchable Dropdowns for Filter */}
        <div className="flex gap-3 mb-8">
            {/* Category Filter */}
            <div className="relative flex-1">
                <button
                    onClick={() => {
                        setIsFilterCatOpen(!isFilterCatOpen);
                        setIsFilterVibeOpen(false);
                    }}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:border-slate-700"
                >
                    <div className="flex items-center gap-2 overflow-hidden">
                        {(() => {
                            const Icon = categoryIcons[selectedCategory];
                            return Icon ? <Icon className="h-4 w-4 shrink-0 text-indigo-400" /> : <LayoutGrid className="h-4 w-4 shrink-0 text-indigo-400" />;
                        })()}
                        <span className="truncate">{selectedCategory}</span>
                    </div>
                     <div className={clsx("w-2 h-2 border-r-2 border-b-2 border-slate-500 transform transition-transform ml-2 shrink-0", isFilterCatOpen ? "-rotate-135 translate-y-0.5" : "rotate-45 -translate-y-0.5")}></div>
                </button>

                {isFilterCatOpen && (
                    <div className="absolute top-full left-0 z-20 mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-2xl animate-in fade-in zoom-in-95">
                        <input
                            autoFocus
                            type="text"
                            placeholder="Axtar..."
                            className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:outline-none mb-2"
                            onChange={(e) => setFilterCatSearch(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="max-h-48 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-slate-800">
                             {categories.filter(c => c.toLowerCase().includes((filterCatSearch || '').toLowerCase())).map(cat => (
                                 <button
                                    key={cat}
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                        setIsFilterCatOpen(false);
                                        setFilterCatSearch('');
                                    }}
                                    className={clsx(
                                        "w-full flex items-center gap-2 rounded-lg px-3 py-2 text-xs transition-colors text-left",
                                        selectedCategory === cat ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-900"
                                    )}
                                 >
                                    {(() => { const Icon = categoryIcons[cat]; return Icon ? <Icon className="w-3.5 h-3.5 opacity-70" /> : null; })()}
                                    {cat}
                                 </button>
                             ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Vibe Filter */}
            <div className="relative flex-1">
                 <button
                    onClick={() => {
                        setIsFilterVibeOpen(!isFilterVibeOpen);
                        setIsFilterCatOpen(false);
                    }}
                    className="flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:border-slate-700"
                >
                    <div className="flex items-center gap-2 overflow-hidden">
                        {selectedVibe ? (
                            <>
                                <span className="truncate">{vibesList.find(v => v.id === selectedVibe)?.label || selectedVibe}</span>
                            </>
                        ) : (
                            <>
                                <Sparkles className="h-4 w-4 shrink-0 text-amber-400" />
                                <span className="truncate">Bütün Duyğular</span>
                            </>
                        )}
                    </div>
                    <div className={clsx("w-2 h-2 border-r-2 border-b-2 border-slate-500 transform transition-transform ml-2 shrink-0", isFilterVibeOpen ? "-rotate-135 translate-y-0.5" : "rotate-45 -translate-y-0.5")}></div>
                </button>

                {isFilterVibeOpen && (
                    <div className="absolute top-full right-0 z-20 mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 p-2 shadow-2xl animate-in fade-in zoom-in-95">
                         <input
                            autoFocus
                            type="text"
                            placeholder="Duyğu axtar..."
                            className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:outline-none mb-2"
                            onChange={(e) => setFilterVibeSearch(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                         <div className="max-h-48 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-slate-800">
                             <button
                                onClick={() => {
                                    setSelectedVibe(null);
                                    setIsFilterVibeOpen(false);
                                }}
                                className={clsx(
                                    "w-full flex items-center gap-2 rounded-lg px-3 py-2 text-xs transition-colors text-left",
                                    selectedVibe === null ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-900"
                                )}
                             >
                                <Sparkles className="w-3.5 h-3.5 opacity-70" />
                                Bütün Duyğular
                             </button>
                             {vibesList.filter(v => v.label.toLowerCase().includes((filterVibeSearch || '').toLowerCase())).map(vibe => (
                                 <button
                                    key={vibe.id}
                                    onClick={() => {
                                        setSelectedVibe(vibe.id);
                                        setIsFilterVibeOpen(false);
                                        setFilterVibeSearch('');
                                    }}
                                    className={clsx(
                                        "w-full flex items-center gap-2 rounded-lg px-3 py-2 text-xs transition-colors text-left",
                                        selectedVibe === vibe.id ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-900"
                                    )}
                                 >
                                    <span>{vibe.label}</span>
                                 </button>
                             ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>

        {/* My Topics Section */}
        {/* My Topics Section - Only visible if user has topics */}
        {myTopics.length > 0 && (
        <section className="mb-10 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-200">Mövzularım</h2>
            <span className="text-xs text-slate-500">
               {loading ? 'Yüklənir...' : `${myTopics.length} yadda saxlanılan`}
            </span>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
             {/* Quick Add Card (Inline option) */}
             <button
                onClick={() => setIsAddModalOpen(true)}
                className="flex min-h-[140px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-800 bg-slate-900/50 p-6 text-slate-500 transition-colors hover:border-slate-700 hover:bg-slate-900 hover:text-indigo-400"
             >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 group-hover:bg-indigo-500/20">
                  <Plus className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Tez Əlavə Et</span>
             </button>

            {filteredTopics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                onDelete={() => handleDeleteTopic(topic.id)}
                onClick={() => setViewingTopic(topic)}
              />
            ))}
          </div>

          
          {filteredTopics.length === 0 && searchQuery && (
             <p className="text-center text-sm text-slate-600 py-8">Axtarışa uyğun mövzu tapılmadı.</p>
          )}
        </section>
        )}

        {/* Inspiration Feed */}
        <section className="space-y-4 pt-4 border-t border-slate-800/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
               <h2 className="text-lg font-semibold text-slate-200">Maraqlı Faktlar</h2>
               <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-bold text-indigo-400">KƏŞF ET</span>
            </div>

             {/* Sort Dropdown Button */}
             <div className="relative">
                 <button 
                    onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                    className="flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                 >
                    <ArrowUpDown className="w-3.5 h-3.5" />
                    <span>
                        {selectedSort === 'newest' && 'Ən Yeni'}
                        {selectedSort === 'oldest' && 'Ən Köhnə'}
                        {selectedSort === 'az' && 'A-Z'}
                        {selectedSort === 'za' && 'Z-A'}
                    </span>
                 </button>
                 
                 {isSortDropdownOpen && (
                     <div className="absolute right-0 top-full mt-2 w-36 rounded-xl border border-slate-800 bg-slate-950 p-1 shadow-xl z-50">
                         <button onClick={() => { setSelectedSort('newest'); setIsSortDropdownOpen(false); }} className={cn("w-full text-left px-3 py-2 text-xs rounded-lg transition-colors", selectedSort === 'newest' ? "bg-indigo-500/10 text-indigo-400" : "text-slate-400 hover:bg-slate-900")}>Ən Yeni</button>
                         <button onClick={() => { setSelectedSort('oldest'); setIsSortDropdownOpen(false); }} className={cn("w-full text-left px-3 py-2 text-xs rounded-lg transition-colors", selectedSort === 'oldest' ? "bg-indigo-500/10 text-indigo-400" : "text-slate-400 hover:bg-slate-900")}>Ən Köhnə</button>
                         <button onClick={() => { setSelectedSort('az'); setIsSortDropdownOpen(false); }} className={cn("w-full text-left px-3 py-2 text-xs rounded-lg transition-colors", selectedSort === 'az' ? "bg-indigo-500/10 text-indigo-400" : "text-slate-400 hover:bg-slate-900")}>Ad (A-Z)</button>
                         <button onClick={() => { setSelectedSort('za'); setIsSortDropdownOpen(false); }} className={cn("w-full text-left px-3 py-2 text-xs rounded-lg transition-colors", selectedSort === 'za' ? "bg-indigo-500/10 text-indigo-400" : "text-slate-400 hover:bg-slate-900")}>Ad (Z-A)</button>
                     </div>
                 )}
             </div>
          </div>
          <p className="text-sm text-slate-500">Söhbət başlatmaq üçün seçilmiş maraqlı faktlar və mövzular.</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {displayedInspiration.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                variant="inspiration"
                onAdd={() => handleCopyInspiration(topic)}
                onClick={() => setViewingTopic(topic)}
              />
            ))}
          </div>

          {/* Load More Button */}
          {visibleInspirationCount < filteredInspiration.length && (
              <button
                onClick={handleLoadMore}
                className="w-full mt-4 py-3 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 text-sm font-medium hover:bg-slate-900 hover:text-slate-200 transition-colors"
            >
                Daha çox göstər ({filteredInspiration.length - visibleInspirationCount} qaldı)
            </button>
          )}
          
          {filteredInspiration.length === 0 && (
             <p className="text-center text-sm text-slate-600 py-8">Filtrə uyğun fakt tapılmadı.</p>
          )}
        </section>
      </div>

      {/* Floating Action Button (Mobile) */}
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 transition-transform hover:scale-105 active:scale-95 md:hidden"
        aria-label="Mövzu Əlavə Et"
      >
        <Plus className="h-6 w-6" />
      </button>

      {/* SOS Button - Fixed Position, High Z-Index */}
      <div className="fixed bottom-6 left-6 z-[100]">
        <button
            onClick={handleSOS}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-600 text-white shadow-xl shadow-rose-900/50 transition-transform active:scale-90 animate-pulse hover:animate-none hover:scale-110 border-4 border-rose-400/30"
            title="Təcili Sual!"
        >
            <span className="text-xl font-black tracking-tighter">SOS</span>
        </button>
      </div>

      {/* Add Topic Modal */}
      {isAddModalOpen && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={(e) => {
                if (e.target === e.currentTarget) setIsAddModalOpen(false);
            }}
        >
          <div className="w-full max-w-md animate-in fade-in zoom-in-95 duration-200 rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-2xl cursor-default">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-100">Yeni Mövzu</h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="rounded-full p-1 text-slate-500 hover:bg-slate-900 hover:text-slate-300 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleAddTopic} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-400">Başlıq</label>
                <input
                  type="text"
                  value={newTopicTitle}
                  onChange={(e) => setNewTopicTitle(e.target.value)}
                  placeholder="Məs: Balın Ölümsüzlüyü"
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:outline-none"
                  autoFocus
                />
              </div>
              <div className="relative group">
                 <label className="mb-2 block text-xs font-medium text-slate-400">Kateqoriya</label>
                 <div className="relative">
                     <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                        {categories.includes(newTopicCategory) ? <Check className="w-4 h-4 text-emerald-500" /> : <Search className="w-4 h-4" />}
                     </div>
                     <input
                        type="text"
                        value={newTopicCategory}
                        onChange={(e) => {
                            setNewTopicCategory(e.target.value);
                            setIsCategoryDropdownOpen(true);
                        }}
                        onFocus={() => setIsCategoryDropdownOpen(true)}
                        // Delay blur to allow clicking options
                        onBlur={() => setTimeout(() => setIsCategoryDropdownOpen(false), 200)}
                        placeholder="Seçin və ya yeni yazın..."
                        className="w-full rounded-lg border border-slate-800 bg-slate-900 pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                     />
                     <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                         <div className={clsx("w-2 h-2 border-r-2 border-b-2 border-slate-600 transform transition-transform", isCategoryDropdownOpen ? "-rotate-135 translate-y-0.5" : "rotate-45 -translate-y-0.5")}></div>
                     </div>
                 </div>

                 {/* Dropdown Menu */}
                 {isCategoryDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-2xl animate-in fade-in zoom-in-95 duration-100">
                        <div className="max-h-48 overflow-y-auto p-1 scrollbar-thin scrollbar-thumb-slate-800">
                            {categories.filter(c => c !== 'Hamısı').filter(cat => 
                                cat.toLowerCase().includes(newTopicCategory.toLowerCase())
                            ).map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onMouseDown={(e) => {
                                        e.preventDefault(); // Prevent blur
                                        setNewTopicCategory(cat);
                                        setIsCategoryDropdownOpen(false);
                                    }}
                                    className={clsx(
                                        "w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors text-left",
                                        newTopicCategory === cat ? "bg-indigo-600 text-white" : "text-slate-300 hover:bg-slate-900"
                                    )}
                                >
                                    {categoryIcons[cat] ? (() => { const Icon = categoryIcons[cat]; return <Icon className="w-4 h-4 opacity-70" /> })() : <div className="w-4 h-4" />}
                                    {cat}
                                </button>
                            ))}
                            {categories.filter(c => c !== 'Hamısı' && c.toLowerCase().includes(newTopicCategory.toLowerCase())).length === 0 && newTopicCategory.trim() !== '' && (
                                <button
                                    type="button"
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        setNewTopicCategory(newTopicCategory);
                                        setIsCategoryDropdownOpen(false);
                                    }}
                                    className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-indigo-400 hover:bg-slate-900 transition-colors text-left"
                                >
                                    <Plus className="w-4 h-4" />
                                    "{newTopicCategory}" əlavə et
                                </button>
                            )}
                        </div>
                    </div>
                 )}
              </div>

              <div>
                <label className="mb-1 flex items-center gap-2 text-xs font-medium text-slate-400">
                    <MessageCircle className="w-3 h-3" />
                    Təsvir (Fikir və qeydləriniz)
                </label>
                <textarea
                  value={newTopicDesc}
                  onChange={(e) => setNewTopicDesc(e.target.value)}
                  placeholder="Mövzu haqqında təfərrüatlı qeydlər..."
                  rows={3}
                  className="w-full resize-none rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:border-indigo-500 focus:outline-none"
                />
              </div>
              {/* Vibes Selector */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-400">Duyğu (Vibe)</label>
              <div className="flex flex-wrap gap-2">
                 {vibesList.map(vibe => (
                     <button
                        type="button"
                        key={vibe.id}
                        onClick={() => {
                            setNewTopicVibes(prev => 
                                prev.includes(vibe.id) 
                                ? prev.filter(v => v !== vibe.id)
                                : [...prev, vibe.id]
                            )
                        }}
                        className={clsx(
                            "px-3 py-1 rounded-full text-xs border transition-all",
                            newTopicVibes.includes(vibe.id)
                            ? "bg-indigo-600 border-indigo-500 text-white"
                            : "bg-slate-800 border-slate-700 text-slate-400"
                        )}
                     >
                        {vibe.label}
                     </button>
                 ))}
              </div>
            </div>

             {/* Social Cheat Sheet Inputs */}
             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-4 border-t border-slate-800">
                <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-indigo-400">
                        📣 Söhbətə Başla (Bunu De)
                    </label>
                    <textarea
                        value={newTopicOpener}
                        onChange={(e) => setNewTopicOpener(e.target.value)}
                        placeholder="Məs: Bilirdin ki..."
                        className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        rows={2}
                    />
                </div>
                <div>
                     <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-emerald-400">
                        ❓ Topu Ona At (Bunu Soruş)
                    </label>
                    <textarea
                        value={newTopicQuestion}
                        onChange={(e) => setNewTopicQuestion(e.target.value)}
                        placeholder="Məs: Səncə bu necə olardı?"
                        className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        rows={2}
                    />
                </div>
             </div>

            <div className="flex gap-3 pt-2">
                 <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="flex-1 rounded-lg border border-slate-800 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-900 hover:text-slate-300 cursor-pointer"
                >
                  Ləğv et
                </button>
                <button
                  type="submit"
                  disabled={!newTopicTitle.trim()}
                  className="flex-1 rounded-lg bg-indigo-600 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-50 cursor-pointer"
                >
                  Yadda saxla
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Topic Modal */}
      {viewingTopic && (
        <div 
            className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm"
            onClick={(e) => {
                if (e.target === e.currentTarget) setViewingTopic(null);
            }}
        >
           <div 
               className="flex min-h-full items-center justify-center p-4"
               onClick={(e) => {
                   if (e.target === e.currentTarget) setViewingTopic(null);
               }}
           >
               <div className="relative w-full max-w-lg animate-in fade-in zoom-in-95 duration-200 flex flex-col rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-2xl md:p-8 cursor-default my-8">
              <button
                onClick={() => setViewingTopic(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-900 hover:text-slate-300 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-4">
                <span className={cn(
                  "inline-block rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider",
                  viewingTopic.category === 'Elm' || viewingTopic.category === 'Təbiət' ? "bg-emerald-500/10 text-emerald-400" : "bg-indigo-500/10 text-indigo-400"
                )}>
                  {viewingTopic.category}
                </span>
              </div>
              
              <h3 className="mb-6 text-2xl font-bold text-slate-100 leading-snug">
                {viewingTopic.title}
              </h3>
              
              <div className="prose prose-invert max-w-none text-slate-300">
                <div className="text-base leading-relaxed md:text-lg text-slate-300">
                  {viewingTopic.description.split(/(\*\*.*?\*\*)|(\*.*?\*)/g).map((part, index) => {
                      if (!part) return null;
                      if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={index} className="font-bold text-white">{part.slice(2, -2)}</strong>;
                      }
                      if (part.startsWith('*') && part.endsWith('*')) {
                          return <em key={index} className="italic text-indigo-300">{part.slice(1, -1)}</em>;
                      }
                      return <span key={index}>{part}</span>;
                  })}
                </div>
              </div>

              {viewingTopic.source && (
                 <div className="mt-8 flex items-center gap-2 rounded-lg bg-slate-900/50 p-3 text-sm text-slate-400 border border-slate-800/50">
                    <Quote className="h-4 w-4 shrink-0 text-slate-500" />
                    <span>Mənbə: {viewingTopic.source.startsWith('http') ? (
                        <a href={viewingTopic.source} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-400 hover:underline">
                            {new URL(viewingTopic.source).hostname.replace('www.', '')}
                        </a>
                    ) : (
                        <span className="font-medium text-slate-300">{viewingTopic.source}</span>
                    )}</span>
                 </div>
              )}

              {/* Playlist Section */}
              {viewingTopic.playlist && (
                  <div className="mt-6">
                    <div className="mb-3 flex items-center justify-between">
                       <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          Playlist: {viewingTopic.playlist.title}
                       </span>
                       <span className="text-[10px] text-slate-500 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">
                          {viewingTopic.playlist.order}/{viewingTopic.playlist.total}
                       </span>
                    </div>
                    <div className="flex flex-col gap-1.5 bg-slate-900/30 p-2 rounded-xl border border-slate-800/50">
                       {INSPIRATION_TOPICS.filter(t => t.playlist?.id === viewingTopic.playlist?.id)
                        .sort((a, b) => (a.playlist?.order || 0) - (b.playlist?.order || 0))
                        .map(t => (
                           <button 
                              key={t.id}
                              onClick={(e) => {
                                  e.stopPropagation(); // Prevent modal close
                                  setViewingTopic(t);
                              }}
                              className={cn(
                                  "flex items-center gap-3 w-full p-2 rounded-lg text-left transition-all text-xs cursor-pointer group",
                                  t.id === viewingTopic.id 
                                  ? "bg-indigo-500/10 text-indigo-200 border border-indigo-500/30" 
                                  : "hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-transparent"
                              )}
                           >
                              <div className={cn(
                                  "flex items-center justify-center w-5 h-5 rounded-md text-[10px] font-bold shrink-0 transition-colors",
                                  t.id === viewingTopic.id ? "bg-indigo-500 text-white" : "bg-slate-800 text-slate-600 group-hover:bg-slate-700 group-hover:text-slate-400"
                              )}>
                                  {t.playlist?.order}
                              </div>
                              <span className="truncate font-medium">{t.title}</span>
                              {t.id === viewingTopic.id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />}
                           </button>
                        ))
                       }
                    </div>
                  </div>
              )}

              {/* Social Cheat Sheet */}
              <div className="mt-6 space-y-4">
                {viewingTopic.opener && (
                  <div className="rounded-xl bg-indigo-500/10 p-4 border border-indigo-500/20">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-indigo-400">
                      📣 Söhbətə Başla (Bunu De)
                    </span>
                    <p className="text-lg font-medium text-indigo-100 italic">
                      "{viewingTopic.opener}"
                    </p>
                  </div>
                )}
                
                {viewingTopic.question && (
                  <div className="rounded-xl bg-emerald-500/10 p-4 border border-emerald-500/20">
                     <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-emerald-400">
                      ❓ Topu Ona At (Bunu Soruş)
                    </span>
                    <p className="text-lg font-medium text-emerald-100">
                      "{viewingTopic.question}"
                    </p>
                  </div>
                )}
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                   onClick={() => setViewingTopic(null)}
                   className="rounded-xl bg-slate-800 px-6 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-700 cursor-pointer"
                >
                  Bağla
                </button>
              </div>
              </div>
           </div>
        </div>
      )}

      {/* Active Recall Modal */}
      {isShuffleOpen && randomTopic && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={(e) => {
                if (e.target === e.currentTarget) setIsShuffleOpen(false);
            }}
        >
           <div className="relative w-full max-w-sm animate-in zoom-in-95 duration-300 flex flex-col items-center text-center rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-8 shadow-2xl shadow-indigo-500/10 cursor-default">
              <button
                onClick={() => setIsShuffleOpen(false)}
                className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-900 hover:text-slate-300 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/30">
                 <Shuffle className="h-8 w-8" />
              </div>

              <span className="mb-2 inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
                {randomTopic.category}
              </span>
              
              <h3 className="mb-4 text-2xl font-bold text-slate-100">
                {randomTopic.title}
              </h3>
              
              <div className="mb-8 text-slate-400 leading-relaxed text-center">
                {randomTopic.description.split(/(\*\*.*?\*\*)|(\*.*?\*)/g).map((part, index) => {
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

              {randomTopic.source && (
                 <div className="mb-8 flex items-center justify-center gap-1.5 text-xs text-slate-500">
                    <Quote className="h-3 w-3" />
                    <span>Mənbə: {randomTopic.source}</span>
                 </div>
              )}
              
              <button
                 onClick={() => handleShuffle()}
                 className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 cursor-pointer"
              >
                Başqasını göstər
              </button>
           </div>
        </div>
      )}

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={(e) => {
                if (e.target === e.currentTarget) setIsSettingsOpen(false);
            }}
        >
          <div className="w-full max-w-md animate-in fade-in zoom-in-95 duration-200 rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-2xl cursor-default">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-100">Məlumat Tənzimləmələri</h3>
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="rounded-full p-1 text-slate-500 hover:bg-slate-900 hover:text-slate-300 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Export Section */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Cihazdan köçür (Export)</label>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400 mb-3">
                    Bütün qeydlərinizi kopyalayıb digər cihaza göndərin.
                  </p>
                  <button
                    onClick={handleExport}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600/10 py-2.5 text-sm font-medium text-indigo-400 transition-colors hover:bg-indigo-600/20 cursor-pointer"
                  >
                    {showCopied ? (
                      <>
                        <Check className="h-4 w-4" /> Kopyalandı!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" /> Bütün Məlumatları Kopyala
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-slate-950 px-2 text-slate-500">və ya</span>
                </div>
              </div>

              {/* Import Section */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Cihaza Yüklə (Import)</label>
                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-sm text-slate-400 mb-3">
                    Digər cihazdan kopyaladığınız kodu bura yapışdırın.
                  </p>
                  <textarea
                    value={importData}
                    onChange={(e) => {
                        setImportData(e.target.value);
                        setImportError('');
                    }}
                    placeholder='Məsələn: [{"id":"1", "title":"..."}]'
                    rows={3}
                    className="mb-3 w-full resize-none rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-slate-300 placeholder-slate-600 focus:border-indigo-500 focus:outline-none"
                  />
                  {importError && (
                    <p className="mb-3 text-xs text-red-400">{importError}</p>
                  )}
                  <button
                    onClick={handleImport}
                    disabled={!importData.trim()}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-transparent py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 disabled:opacity-50"
                  >
                    <Upload className="h-4 w-4" /> Məlumatları Yüklə
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* SOS Modal */}
      {isSOSOpen && sosTopic && (
        <div 
             className="fixed inset-0 z-[150] flex items-center justify-center bg-rose-950/90 p-4 backdrop-blur-sm animate-in fade-in duration-200"
             onClick={(e) => {
                 if (e.target === e.currentTarget) setIsSOSOpen(false);
             }}
           >
          <div className="w-full max-w-md rounded-3xl bg-slate-900 border-2 border-rose-500 p-8 shadow-2xl relative cursor-default">
             <button 
                onClick={() => setIsSOSOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
             >
                 <X size={24} />
             </button>
             
             <div className="text-center space-y-6">
                 <div className="mx-auto w-16 h-16 rounded-full bg-rose-500/20 flex items-center justify-center animate-bounce">
                     <Lightbulb className="w-8 h-8 text-rose-500" />
                 </div>
                 
                 <h3 className="text-2xl font-bold text-white">Xilasedici Sual!</h3>
                 
                 <div className="rounded-xl bg-slate-800 p-6 border border-slate-700 shadow-inner">
                     <p className="text-xl font-medium text-emerald-400 leading-relaxed italic">
                         "{sosTopic.question}"
                     </p>
                 </div>
                 
                 <div className="text-sm text-slate-500 flex items-center justify-center gap-1">
                     Mövzu: 
                     <button 
                        onClick={() => {
                            setIsSOSOpen(false);
                            setViewingTopic(sosTopic);
                        }}
                        className="font-semibold text-slate-300 hover:text-white hover:underline decoration-slate-400 underline-offset-4 transition-all cursor-pointer"
                     >
                        {sosTopic.title}
                     </button>
                 </div>
                 
                 <button
                    onClick={() => handleSOS()}
                    className="w-full py-3 rounded-xl font-bold bg-rose-600 hover:bg-rose-700 text-white transition-colors shadow-lg shadow-rose-900/40"
                 >
                     Bəyənmədim, Başqasını Ver 🎲
                 </button>
             </div>
          </div>
        </div>
      )}
    </main>
  );
}
