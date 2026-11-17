import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '@/src/pages/Landing';
import AppLayout from '@/src/layouts/AppLayout';
import Dashboard from '@/src/pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="*" element={
            <div className="flex items-center justify-center h-full text-text-secondary">
              Módulo en construcción
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
