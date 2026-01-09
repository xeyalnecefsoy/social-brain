import { useState, useEffect, useCallback } from 'react';
import Backendless from '@/lib/backendless';
import { Topic } from '@/data/inspiration';

/**
 * A hook that syncs topics with Backendless database.
 * Falls back to localStorage if offline (rudimentary).
 */
export function useTopics(initialData: Topic[]) {
  const [topics, setTopics] = useState<Topic[]>(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load from Backendless on mount
  useEffect(() => {
    let isMounted = true;

    async function fetchTopics() {
      if (!Backendless.applicationId) {
          console.warn("Backendless not initialized yet. Skipping fetch.");
          setLoading(false);
          return;
      }

      try {
        setLoading(true);
        // "Topic" table will be created automatically if it doesn't exist
          const result = await Backendless.Data.of('Topic').find({
            pageSize: 100,
            sortBy: ['created DESC']
          }) as Topic[];
        
        if (isMounted) {
            const mapped = result.map(item => ({
                id: (item as any).objectId || item.id, 
                title: item.title,
                description: item.description,
                category: item.category,
                source: item.source,
                opener: item.opener,
                question: item.question
            }));
            
            setTopics(mapped);
        }
      } catch (err: any) {
        // Error 1009: Table not found (normal on first run)
        if (err.code === 1009 || err.message?.includes('Table not found')) {
            console.log("Table 'Topic' not found yet, starting empty.");
            if (isMounted) setTopics([]);
        } else {
            console.error("Backendless fetch error:", err);
            setError(err.message);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchTopics();

    // Enable Real-Time subscription only if initialized
    let channel: any = null;
    try {
        if (Backendless.applicationId) {
            channel = Backendless.Data.of('Topic').rt();
            const onCreate = channel.addCreateListener((newItem: object) => {
                const item = newItem as any;
                setTopics(prev => [{...item, id: item.objectId}, ...prev]);
            });
            const onDelete = channel.addDeleteListener((deletedItem: object) => {
                const item = deletedItem as any;
                setTopics(prev => prev.filter(t => t.id !== item.objectId));
            });
        }
    } catch (e) {
        console.warn("Real-time subscription failed:", e);
    }

    return () => {
      isMounted = false;
      if (channel) {
          try {
            channel.removeCreateListener();
            channel.removeDeleteListener();
          } catch(e) { /* ignore cleanup errors */ }
      }
    };
  }, []);

  const addTopic = async (topic: Topic) => {
    try {
        // Optimistic update LƏĞV EDİLDİ (Dublikat yaratmaması üçün)
        
        // Save to DB
        const { id, ...dataToSave } = topic; 
        if (Backendless.applicationId) {
            await Backendless.Data.of('Topic').save(dataToSave);
        } else {
            console.warn("Backendless not init, skipping save");
        }
    } catch (err) {
        console.error("Save error:", err);
    }
  };

  const deleteTopic = async (id: string) => {
      try {
          // Optimistic update LƏĞV EDİLDİ
          
          if (Backendless.applicationId) {
             await Backendless.Data.of('Topic').remove(id);
          }
      } catch (err) {
           console.error("Delete error:", err);
      }
  }

  return { topics, loading, error, addTopic, deleteTopic, setTopics };
}
