// src/app/layout.tsx

import './globals.css'
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google'; // Juntei os imports
import Providers from './providers';

// 1. Configure a Inter para usar uma variável CSS
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Nome da variável
});

// 2. Configure a Montserrat para usar uma variável CSS
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat', // Nome da variável
});

export const metadata: Metadata = {
  title: 'Excel 360 - Do zero ao profissional',
  description: 'Aprenda Excel do zero ao avançado com aulas práticas e exercícios. Domine fórmulas, dashboards, automações e mais para se tornar um profissional eficiente.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 3. Aplique as DUAS variáveis na tag <html>
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      {/* 4. Remova o className do body */}
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}