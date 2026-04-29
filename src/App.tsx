/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Map, Users, Lightbulb, ChevronRight, Hash, GraduationCap } from 'lucide-react';
import { DANCE_DATA } from './data';
import { ClassicalDance, FolkDance } from './types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function DanceCard({ dance }: { dance: ClassicalDance; key?: React.Key }) {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-blue-50/50 p-3 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-colors"
    >
      <div className="flex justify-between items-start mb-1">
        <h4 className="font-bold text-blue-700 text-sm">{dance.name}</h4>
      </div>
      <p className="text-[10px] font-bold text-blue-400 mb-1 uppercase tracking-tight">{dance.origin} {dance.element ? `• ${dance.element}` : ''}</p>
      <p className="text-[11px] text-slate-600 leading-tight line-clamp-2">{dance.feature}</p>
    </motion.div>
  );
}

function FolkGroup({ group }: { group: FolkDance; key?: React.Key }) {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-orange-50/50 p-3 rounded-xl border-2 border-orange-100"
    >
      <h4 className="font-bold text-orange-700 text-sm mb-2 flex items-center gap-2 uppercase tracking-wide">
        {group.region}
      </h4>
      <div className="flex flex-wrap gap-1.5">
        {group.dances.map((dance, idx) => (
          <span key={idx} className="bg-white text-orange-800 px-2 py-0.5 rounded border border-orange-200 text-[10px] font-medium leading-none">
            {dance}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-slate-800 font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-black text-brand-red tracking-tight leading-none mb-1">
              INDIAN DANCE FORMS
            </h1>
            <p className="text-brand-brown font-medium flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Interactive Mind Map & Cheat Sheet
            </p>
          </div>
          <div className="bg-white px-6 py-3 rounded-full border-2 border-brand-red shadow-[4px_4px_0px_#D94F33] flex items-center gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-brand-red">Exam Prep Mode</span>
            <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="grid grid-cols-1 gap-8">
          
          {/* Mind Map Visual */}
          <section className="relative bg-[#FFFBF0] rounded-[2rem] border-2 border-brand-tan p-6 md:p-10 flex flex-col items-center">
            <div className="absolute top-4 left-6 text-xs font-black uppercase tracking-widest text-brand-tan opacity-60">Mind Map Layout</div>
            
            {/* Central Root */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-brand-red text-white px-10 py-4 rounded-full text-2xl font-black shadow-xl z-10 mb-8 tracking-tight"
            >
              INDIAN DANCE
            </motion.div>

            {/* Branches */}
            <div className="grid md:grid-cols-2 gap-8 w-full mt-4 h-full relative">
              {/* Connector lines visual aid (abstract) */}
              <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-brand-tan/30 -z-0"></div>

              {/* Classical Branch */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col bg-white rounded-3xl border-2 border-blue-500 border-b-8 border-r-8 p-6 shadow-sm z-10"
              >
                <h3 className="text-blue-600 font-black text-center border-b-2 border-blue-100 pb-3 mb-5 tracking-widest text-lg">CLASSICAL (8 FORMS)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DANCE_DATA.classical.map((dance, idx) => (
                    <DanceCard key={idx} dance={dance} />
                  ))}
                </div>
              </motion.div>

              {/* Folk Branch */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col bg-white rounded-3xl border-2 border-orange-500 border-b-8 border-r-8 p-6 shadow-sm z-10"
              >
                <h3 className="text-orange-600 font-black text-center border-b-2 border-orange-100 pb-3 mb-5 tracking-widest text-lg">FOLK (REGIONAL)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DANCE_DATA.folk.map((group, idx) => (
                    <FolkGroup key={idx} group={group} />
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Bottom Grid: Learning Map & Table + Mnemonics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cheat Sheet Table */}
            <div className="lg:col-span-2 bg-white rounded-[2rem] border-2 border-slate-200 overflow-hidden flex flex-col shadow-xl shadow-slate-200/40">
              <div className="bg-brand-green p-4">
                <h2 className="text-white font-black text-center text-sm tracking-[0.2em] uppercase">Fast Learning Map: Classical Legends</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-4 font-black text-slate-400 text-[10px] uppercase tracking-widest">Dance</th>
                      <th className="p-4 font-black text-slate-400 text-[10px] uppercase tracking-widest">Origin</th>
                      <th className="p-4 font-black text-slate-400 text-[10px] uppercase tracking-widest">Famous Artist</th>
                      <th className="p-4 font-black text-slate-400 text-[10px] uppercase tracking-widest">Key Recall</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {DANCE_DATA.classical.map((dance, idx) => (
                      <tr key={idx} className="hover:bg-green-50/50 transition-colors">
                        <td className="p-4 font-bold text-slate-900">{dance.name}</td>
                        <td className="p-4 font-medium text-slate-600">{dance.origin}</td>
                        <td className="p-4">
                          <span className="text-slate-700 italic text-xs">{dance.artist}</span>
                        </td>
                        <td className="p-4 text-xs text-slate-500 font-medium">{dance.feature}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mnemonics & Tricks */}
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-brand-yellow p-6 rounded-[2rem] border-b-8 border-r-8 border-amber-500/30 flex-1 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white rounded-xl p-2 shadow-sm">
                    <Lightbulb className="w-5 h-5 text-amber-600" />
                  </div>
                  <h4 className="text-amber-900 font-black tracking-widest text-sm uppercase">Memory Tricks</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    { rule: "1", title: "Reddy Names", desc: "Kuchipudi (AP)" },
                    { rule: "2", title: "Maharaj Names", desc: "Kathak (UP)" },
                    { rule: "3", title: "Mohapatra", desc: "Odissi (OR)" },
                    { rule: "4", title: "Double K Rule", desc: "Kerala (Kathakali) vs UP (Kathak)" }
                  ].map((trick, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="bg-white/80 rounded-lg px-2 py-0.5 font-black text-amber-600 text-xs shadow-sm mt-0.5">{trick.rule}</span>
                      <div>
                        <span className="font-bold text-amber-950 text-xs block">{trick.title}</span>
                        <span className="text-[11px] text-amber-800/80">{trick.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-brand-purple p-6 rounded-[2rem] border-b-8 border-r-8 border-indigo-500/30 shadow-sm"
              >
                <h4 className="text-indigo-900 font-black text-sm mb-2 uppercase tracking-widest">EXAM TIP</h4>
                <p className="text-[11px] leading-relaxed text-indigo-800 font-medium italic">
                  Note: Sangeet Natak Akademi recognizes 8 forms; Ministry of Culture recognizes 9 (adding Chhau).
                </p>
              </motion.div>
            </div>
          </div>
        </main>

        {/* Footer Area */}
        <footer className="mt-8 mb-4 flex justify-between items-end border-t border-slate-200 pt-8 opacity-40">
          <div className="text-[10px] font-mono tracking-widest uppercase font-bold">Course Code: IND-H-01</div>
          <div className="text-[10px] font-mono uppercase tracking-widest font-bold">NrityaGuide Study System • Concept Mapping v1.0</div>
        </footer>
      </div>
    </div>
  );
}
