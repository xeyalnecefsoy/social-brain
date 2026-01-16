'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Topic } from '@/data/inspiration';
import { useRouter } from 'next/navigation';
import { X, Search, ZoomIn, ZoomOut, Maximize, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FormattedText } from './FormattedText';

// Dynamically import ForceGraph2D with no SSR
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { 
  ssr: false,
  loading: () => <div className="flex h-full w-full items-center justify-center text-slate-500 animate-pulse">Beyin Xəritəsi Yüklənir...</div>
});

interface MindMapProps {
  topics: Topic[];
}

// Category Colors Palette
const CATEGORY_COLORS: Record<string, string> = {
  'Hamısı': '#ffffff',
  'Tanışlıq': '#ec4899', // Pink
  'Kişilik': '#3b82f6', // Blue
  'Elm': '#10b981', // Emerald
  'Tarix': '#d97706', // Amber
  'Texnologiya': '#6366f1', // Indigo
  'Siyasət': '#64748b', // Slate
  'İncəsənət': '#8b5cf6', // Violet
  'Təbiət': '#84cc16', // Lime
  'Psixologiya': '#a855f7', // Purple
  'Kosmos': '#0ea5e9', // Sky
  'Fəlsəfə': '#f59e0b', // Amber
  'Sağlamlıq': '#ef4444', // Red
  'İdman': '#f97316', // Orange
  'Türk Tarixi': '#06b6d4', // Cyan
  'Filmlər/Seriallar': '#e11d48', // Rose
  'Gülməli': '#facc15', // Yellow
};

export default function MindMapVisualization({ topics }: MindMapProps) {
  const router = useRouter();
  const graphRef = useRef<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [hoveredNode, setHoveredNode] = useState<any>(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
        setContainerDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Prepare Graph Data
  const graphData = useMemo(() => {
    const nodes: any[] = [];
    const links: any[] = [];
    
    // 1. Create Category Hub Nodes
    // If search query exists, only show categories that have matching topics
    const matchingTopics = searchQuery 
        ? topics.filter(t => 
            t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            t.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : topics;
        
    const categories = Array.from(new Set(matchingTopics.map(t => t.category)));
    
    categories.forEach(cat => {
      nodes.push({
        id: `cat-${cat}`,
        name: cat,
        group: 'category',
        val: 20, // Bigger size for hubs
        color: CATEGORY_COLORS[cat] || '#94a3b8'
      });
    });

    // 2. Create Topic Nodes and Link to Categories
    topics.forEach(topic => {
       // Filter by search if exists
       if (searchQuery && !topic.title.toLowerCase().includes(searchQuery.toLowerCase()) && !topic.description.toLowerCase().includes(searchQuery.toLowerCase())) {
           return;
       }

       nodes.push({
         id: topic.id,
         name: topic.title,
         group: 'topic',
         val: 4, // Smaller topic nodes
         color: CATEGORY_COLORS[topic.category] || '#cbd5e1',
         data: topic // Store full topic data
       });

       links.push({
         source: topic.id,
         target: `cat-${topic.category}`,
         color: (CATEGORY_COLORS[topic.category] || '#475569') + '20', // More subtle links
         distance: 80 // Try to keep them at this distance
       });
    });

    // Link Categories to a central "Root" if we want a fully connected graph, 
    // OR just let them float as clusters. Let's add a central invisible root to keep them somewhat near.
    nodes.push({ id: 'root', name: 'Social Brain', val: 1, color: 'transparent', group: 'root' });
    categories.forEach(cat => {
        links.push({ source: 'root', target: `cat-${cat}`, distance: 300, color: 'transparent' });
    });

    return { nodes, links };
  }, [topics, searchQuery]);

  // Adjust forces on load
  useEffect(() => {
      if (graphRef.current) {
          // Increase repulsion to spread nodes out (anti-claustrophobic)
          graphRef.current.d3Force('charge').strength(-120); 
          // Add collision to prevent overlap
          // graphRef.current.d3Force('collide', d3.forceCollide(node => node.val + 5)); 
          
          // Adjust link distance
          graphRef.current.d3Force('link').distance((link: any) => link.distance || 30);
      }
  }, [graphData]);

  // Handle Node Click
  const handleNodeClick = (node: any) => {
    if (node.group === 'topic') {
        setSelectedNode(node.data);
        // Focus camera on node
        if (graphRef.current) {
            graphRef.current.centerAt(node.x, node.y, 1000);
            graphRef.current.zoom(6, 2000);
        }
    } else if (node.group === 'category') {
         // Maybe just zoom in?
         if (graphRef.current) {
            graphRef.current.centerAt(node.x, node.y, 1000);
            graphRef.current.zoom(3, 2000);
        }
    }
  };

  return (
    <div className="relative h-screen w-full bg-slate-950 overflow-hidden">
      
      {/* Search Overlay */}
      <div className="absolute top-4 left-4 right-4 z-20 mx-auto max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Beyin Xəritəsində Axtar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900/90 backdrop-blur-md py-3 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-600 shadow-xl outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          
          {/* Search Suggestions */}
          {searchQuery && (
              <div className="mt-2 max-h-60 overflow-y-auto rounded-xl border border-slate-800 bg-slate-900/95 backdrop-blur-md p-2 shadow-xl scrollbar-thin scrollbar-thumb-slate-700">
                  {topics.filter(t => 
                      t.title.toLowerCase().includes(searchQuery.toLowerCase())
                  ).slice(0, 5).map(topic => (
                      <button
                        key={topic.id}
                        onClick={() => {
                           const node = graphData.nodes.find((n:any) => n.id === topic.id);
                           if (node && graphRef.current) {
                               setSearchQuery(''); // Clear search on select
                               handleNodeClick(node);
                           }
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                      >
                          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: CATEGORY_COLORS[topic.category] }} />
                          <span className="truncate">{topic.title}</span>
                      </button>
                  ))}
                  {topics.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                      <div className="px-3 py-2 text-xs text-slate-500 text-center">Nəticə tapılmadı</div>
                  )}
              </div>
          )}
      </div>

      {/* Controls Overlay */}
      <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2">
         <button 
            onClick={() => {
                if(graphRef.current) graphRef.current.zoom(graphRef.current.zoom() * 1.5, 400); // Correct zoom usage if possible, else just let user scroll
            }}
            className="p-3 rounded-full bg-slate-900/80 text-slate-300 hover:bg-indigo-600 hover:text-white transition-colors border border-slate-800 shadow-lg"
         >
             <ZoomIn className="w-5 h-5" />
         </button>
         <button 
             onClick={() => {
                if(graphRef.current) graphRef.current.zoomToFit(800);
            }}
            className="p-3 rounded-full bg-slate-900/80 text-slate-300 hover:bg-indigo-600 hover:text-white transition-colors border border-slate-800 shadow-lg"
         >
             <Maximize className="w-5 h-5" />
         </button>
      </div>
      
       {/* React Force Graph */}
      <ForceGraph2D
        ref={graphRef}
        width={containerDimensions.width}
        height={containerDimensions.height}
        graphData={graphData}
        backgroundColor="#020617" // slate-950
        nodeLabel="name"
        nodeColor="color"
        linkColor="color"
        nodeRelSize={6}
        linkWidth={1}
        onNodeClick={handleNodeClick}
        onNodeHover={(node) => setHoveredNode(node)}
        cooldownTicks={100}
        d3VelocityDecay={0.4} // Less friction for more movement
        d3AlphaDecay={0.01}
        
        // Explicitly define pointer area for accurate hover/click
        nodePointerAreaPaint={(node: any, color, ctx) => {
           ctx.fillStyle = color;
           const isHovered = hoveredNode && hoveredNode.id === node.id;
           const size = node.group === 'category' ? node.val : (isHovered ? node.val * 1.5 : node.val);
           ctx.beginPath();
           ctx.arc(node.x, node.y, size + 2, 0, 2 * Math.PI, false); // Slightly larger hit area
           ctx.fill();
        }}
        
        // Custom Node Rendering
        nodeCanvasObject={(node: any, ctx, globalScale) => {
          const isSelected = selectedNode && selectedNode.id === node.id;
          const isHovered = hoveredNode && hoveredNode.id === node.id;
          const isCategory = node.group === 'category';
          
          const label = node.name;
          const fontSize = isCategory ? 14/globalScale : 10/globalScale;
          ctx.font = `${isCategory ? 'bold' : ''} ${fontSize}px Sans-Serif`;
          
          // Determine visibility
          const showLabel = 
            isCategory || 
            isSelected || 
            isHovered || 
            globalScale > 3.5; // Only show all labels when VERY zoomed in

          // Draw Node Circle
          ctx.beginPath();
          // Use exact same size logic as pointer area (minus padding)
          const size = isCategory ? node.val : (isHovered ? node.val * 1.5 : node.val);
          ctx.arc(node.x, node.y, size, 0, 2 * Math.PI, false);
          ctx.fillStyle = node.color;
          ctx.fill();
          
          // Selection/Hover Ring
          if (isSelected || isHovered) {
              ctx.strokeStyle = '#ffffff';
              ctx.lineWidth = 1.5 / globalScale;
              ctx.stroke();
          }

          // Draw Text
          if (showLabel) {
              ctx.fillStyle = isCategory ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.9)';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              
              // Shadow for better readability
              ctx.shadowColor = 'rgba(0,0,0,0.8)';
              ctx.shadowBlur = 4;
              
              const yOffset = size + fontSize + 2;
              ctx.fillText(label, node.x, node.y + yOffset);
              
              // Reset shadow
              ctx.shadowColor = 'transparent';
              ctx.shadowBlur = 0;
          }
        }}
      />

      {/* Selected Topic Modal */}
      {selectedNode && (
         <div 
             className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none"
         >
             {/* Backprop click to close */}
             <div 
                className="absolute inset-0 bg-black/20 pointer-events-auto"
                onClick={() => setSelectedNode(null)}
             />
             
             <div className="pointer-events-auto relative w-full max-w-lg m-4 rounded-3xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl p-6 shadow-2xl animate-in slide-in-from-bottom-10 fade-in duration-300">
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-900 hover:text-slate-300 cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="mb-4">
                    <span className={cn(
                      "inline-block rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider",
                      "bg-indigo-500/10 text-indigo-400"
                    )} style={{ color: CATEGORY_COLORS[selectedNode.category], backgroundColor: CATEGORY_COLORS[selectedNode.category] + '20' }}>
                      {selectedNode.category}
                    </span>
                  </div>
                  
                  <h3 className="mb-4 text-xl font-bold text-slate-100 leading-snug">
                    {selectedNode.title}
                  </h3>
                  
                  <div className="prose prose-invert max-w-none text-sm text-slate-300 max-h-[40vh] overflow-y-auto pr-2 scrollbar-thin">
                      <FormattedText text={selectedNode.description} />
                      
                      {selectedNode.opener && (
                        <div className="mt-4 rounded-lg bg-indigo-500/10 p-3 border border-indigo-500/20">
                            <p className="text-xs font-bold text-indigo-300 mb-1">📣 Söhbətə Başla:</p>
                            <p className="italic">"{selectedNode.opener}"</p>
                        </div>
                      )}

                      {selectedNode.question && (
                        <div className="mt-2 rounded-lg bg-emerald-500/10 p-3 border border-emerald-500/20">
                             <p className="text-xs font-bold text-emerald-300 mb-1">❓ Sual Ver:</p>
                            <p className="italic">"{selectedNode.question}"</p>
                        </div>
                      )}
                  </div>
             </div>
         </div>
      )}
      
       {/* Back Button */}
       <button
        onClick={() => router.back()}
        className="absolute top-4 right-4 z-20 md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/50 text-white backdrop-blur-sm border border-slate-800"
      >
         <X className="h-5 w-5" />
      </button>

    </div>
  );
}
