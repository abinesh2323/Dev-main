// app/api/og/route.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          background: '#080B12',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'monospace',
        }}
      >
        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          backgroundImage: 'linear-gradient(rgba(99,179,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Glow orb top-right */}
        <div style={{
          position: 'absolute', top: '-120px', right: '-80px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* Glow orb bottom-left */}
        <div style={{
          position: 'absolute', bottom: '-100px', left: '-60px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* Top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, #38BDF8 40%, #818CF8 70%, transparent)',
          display: 'flex',
        }} />

        {/* Main content */}
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '72px 80px', width: '100%', position: 'relative',
        }}>

          {/* Status badge */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            marginBottom: '36px',
          }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#4ADE80',
              boxShadow: '0 0 8px #4ADE80',
              display: 'flex',
            }} />
            <span style={{ color: '#4ADE80', fontSize: '14px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Available for work
            </span>
          </div>

          {/* Name */}
          <div style={{
            fontSize: '64px', fontWeight: 700, color: '#F1F5F9',
            letterSpacing: '-0.02em', lineHeight: 1.05,
            marginBottom: '16px', display: 'flex',
          }}>
            Abinesh Kalyanasundaram
          </div>

          {/* Title row */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '16px',
            marginBottom: '48px',
          }}>
            <span style={{ color: '#38BDF8', fontSize: '22px', fontWeight: 500 }}>Full Stack Developer</span>
            <span style={{ color: '#334155', fontSize: '22px' }}>·</span>
            <span style={{ color: '#818CF8', fontSize: '22px', fontWeight: 500 }}>AI Engineer</span>
            <span style={{ color: '#334155', fontSize: '22px' }}>·</span>
            <span style={{ color: '#94A3B8', fontSize: '22px', fontWeight: 400 }}>Automation Specialist</span>
          </div>

          {/* Tech tags */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '52px' }}>
            {['React', 'Next.js', 'Node.js', 'AWS', 'TypeScript', 'n8n'].map((tech) => (
              <div key={tech} style={{
                padding: '6px 14px', borderRadius: '6px',
                border: '1px solid rgba(99,179,237,0.2)',
                background: 'rgba(99,179,237,0.06)',
                color: '#94A3B8', fontSize: '15px',
                display: 'flex',
              }}>
                {tech}
              </div>
            ))}
          </div>

          {/* URL */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <div style={{ width: '18px', height: '2px', background: '#334155', display: 'flex' }} />
            <span style={{ color: '#475569', fontSize: '16px', letterSpacing: '0.05em' }}>
              abinesh-one.vercel.app
            </span>
          </div>
        </div>

        {/* Right side — terminal card */}
        <div style={{
          position: 'absolute', right: '72px', top: '50%',
          transform: 'translateY(-50%)',
          width: '340px',
          background: 'rgba(15,23,42,0.8)',
          border: '1px solid rgba(99,179,237,0.12)',
          borderRadius: '12px',
          padding: '24px',
          display: 'flex', flexDirection: 'column', gap: '12px',
        }}>
          {/* Terminal header */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444', display: 'flex' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B', display: 'flex' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22C55E', display: 'flex' }} />
          </div>
          {[
            { label: 'stack', value: 'MERN + AWS' },
            { label: 'ai', value: 'LLM + n8n' },
            { label: 'cloud', value: 'DevOps' },
            { label: 'location', value: 'Chennai, IN' },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
              <span style={{ color: '#38BDF8', fontSize: '13px', minWidth: '70px' }}>{label}</span>
              <span style={{ color: '#475569', fontSize: '13px' }}>→</span>
              <span style={{ color: '#CBD5E1', fontSize: '13px' }}>{value}</span>
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(99,179,237,0.3) 50%, transparent)',
          display: 'flex',
        }} />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
