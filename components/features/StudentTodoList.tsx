'use client';

import React, { useState } from 'react';
import { CheckSquare, Square, Plus, Trash2, CheckCircle, Tag } from 'lucide-react';

interface TaskItem {
  id: string;
  text: string;
  category: string;
  completed: boolean;
  dueText?: string;
}

const INITIAL_TASKS: TaskItem[] = [
  {
    id: 't1',
    text: 'Submit Git commit for CS304 Thread Pool milestone',
    category: 'CS-304',
    completed: true,
    dueText: 'Done today',
  },
  {
    id: 't2',
    text: 'Review Dijkstra & Shortest Path proofs for Discrete Math',
    category: 'MATH-220',
    completed: false,
    dueText: 'Due Friday',
  },
  {
    id: 't3',
    text: 'Download Proctored Exam lockdown browser profile & test webcam',
    category: 'Proctoring',
    completed: false,
    dueText: 'Urgent',
  },
  {
    id: 't4',
    text: 'Schedule faculty advising slot with Prof. Vance (Thu 2:00 PM)',
    category: 'Advising',
    completed: false,
    dueText: 'This week',
  },
];

export default function StudentTodoList() {
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);
  const [newTaskText, setNewTaskText] = useState('');
  const [selectedTag, setSelectedTag] = useState('CS-304');

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const newTask: TaskItem = {
      id: `t-${Date.now()}`,
      text: newTaskText.trim(),
      category: selectedTag,
      completed: false,
      dueText: 'Active',
    };
    setTasks([newTask, ...tasks]);
    setNewTaskText('');
  };

  const removeTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="w-full bg-surface-bright rounded-2xl border border-outline/10 p-4 sm:p-6 shadow-parchment touch-reactive">
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-outline/10">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-on-surface tracking-tight">
              Student Scratchpad &amp; Tasks
            </h3>
            <span className="font-virgil text-xs text-emerald-700 font-bold px-2 py-0.5 rounded-full bg-emerald-50">
              {completedCount}/{tasks.length} Completed
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Tactile study checklist — click boxes to cross out tasks.
          </p>
        </div>
      </div>

      {/* Task Input Form */}
      <form onSubmit={addTask} className="mt-3.5 flex gap-2">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add quick study reminder or assignment..."
          className="flex-1 px-3 py-2 text-xs rounded-xl bg-surface border border-outline/15 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="px-2.5 py-2 text-xs rounded-xl bg-surface border border-outline/15 text-on-surface font-semibold focus:outline-none focus:border-primary"
        >
          <option value="CS-304">CS-304</option>
          <option value="MATH-220">MATH-220</option>
          <option value="Proctoring">Exam Prep</option>
          <option value="Advising">Advising</option>
        </select>
        <button
          type="submit"
          className="px-3.5 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-light transition-all flex items-center gap-1 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Add</span>
        </button>
      </form>

      {/* Task Items List */}
      <div className="mt-3.5 space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`group flex items-center justify-between p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer ${
              task.completed
                ? 'bg-surface-container/60 border-outline/10 opacity-70'
                : 'bg-surface-bright hover:bg-surface border-outline/15 shadow-xs'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <button
                type="button"
                className="text-primary hover:text-primary-light transition-colors flex-shrink-0"
              >
                {task.completed ? (
                  <CheckSquare className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Square className="w-4 h-4 text-outline" />
                )}
              </button>

              <div className="min-w-0">
                <p
                  className={`text-xs transition-all truncate ${
                    task.completed
                      ? 'line-through text-on-surface-variant font-normal'
                      : 'text-on-surface font-medium'
                  }`}
                >
                  {task.text}
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-primary/5 text-primary border border-primary/10">
                    {task.category}
                  </span>
                  {task.dueText && (
                    <span
                      className={`text-[10px] font-medium ${
                        task.dueText === 'Urgent' ? 'text-rose-600 font-bold' : 'text-on-surface-variant'
                      }`}
                    >
                      &bull; {task.dueText}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeTask(task.id);
              }}
              className="p-1 rounded-lg text-outline hover:text-rose-600 hover:bg-rose-50 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0"
              aria-label="Delete task"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Virgil font footer encouragement */}
      <div className="mt-4 pt-3 border-t border-outline/10 flex items-center justify-between text-xs">
        <span className="font-virgil text-tertiary text-[13px]">
          &ldquo;3 study milestones left before midterm break! Keep it up ☕&rdquo;
        </span>
        <button
          type="button"
          onClick={() => setTasks(tasks.map((t) => ({ ...t, completed: true })))}
          className="text-[11px] font-semibold text-primary hover:underline"
        >
          Check All
        </button>
      </div>
    </div>
  );
}
