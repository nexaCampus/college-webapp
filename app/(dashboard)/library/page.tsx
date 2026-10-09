'use client';

import React, { useState } from 'react';
import { BookMarked, Search, Download, Clock, BookOpen, ExternalLink } from 'lucide-react';

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const borrowedBooks = [
    { title: 'Operating Systems: Three Easy Pieces', author: 'Remzi H. Arpaci-Dusseau', due: 'In 3 days', callNo: 'QA76.76.O63' },
    { title: 'Database System Concepts (7th Ed.)', author: 'Silberschatz, Korth, Sudarshan', due: 'In 12 days', callNo: 'QA76.9.D3' },
  ];

  const digitalBooks = [
    { title: 'Computer Networks: A Systems Approach', author: 'Larry Peterson & Bruce Davie', category: 'Networks', format: 'PDF (12.4 MB)' },
    { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', category: 'Databases', format: 'EPUB / PDF' },
    { title: 'Deep Learning', author: 'Ian Goodfellow, Yoshua Bengio', category: 'AI & ML', format: 'PDF (28 MB)' },
    { title: 'Compilers: Principles, Techniques & Tools (Dragon Book)', author: 'Aho, Lam, Sethi, Ullman', category: 'Compilers', format: 'PDF (18 MB)' },
  ];

  return (
    <div className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-on-surface tracking-tight">
              Collegiate Digital Library &amp; IEEE Vault
            </h1>
            <span className="font-virgil text-xs font-bold text-tertiary px-2.5 py-0.5 rounded-full bg-tertiary/10">
              50,000+ E-Resources
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Full-text access to IEEE Xplore, ACM Digital Library &amp; Central Collegiate Book Bank.
          </p>
        </div>
      </div>

      {/* Currently Issued Books Banner */}
      <div className="bg-surface-bright rounded-2xl border border-outline/10 p-5 shadow-parchment space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookMarked className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-extrabold text-on-surface">Currently Issued Physical Books</h3>
          </div>
          <span className="font-virgil text-xs text-emerald-700 font-bold">
            &ldquo;Fines waived during Midterm week!&rdquo;
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {borrowedBooks.map((b, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-surface-container border border-outline/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-on-surface">{b.title}</p>
                <p className="text-[11px] text-on-surface-variant">{b.author} &bull; Call: {b.callNo}</p>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 text-[10px] font-bold font-mono">
                {b.due}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Catalog Search */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-outline" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search textbook title, author, ISBN or IEEE journal..."
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-surface-bright border border-outline/15 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </div>

        {/* E-Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {digitalBooks.map((book, i) => (
            <div key={i} className="p-4 rounded-2xl bg-surface-bright border border-outline/10 shadow-parchment touch-reactive flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary uppercase">
                  {book.category}
                </span>
                <h4 className="text-xs font-extrabold text-on-surface mt-2 line-clamp-2">
                  {book.title}
                </h4>
                <p className="text-[11px] text-on-surface-variant mt-1 line-clamp-1">
                  {book.author}
                </p>
              </div>

              <div className="pt-2 border-t border-outline/10 flex items-center justify-between">
                <span className="text-[10px] text-outline font-mono">{book.format}</span>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Open PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
