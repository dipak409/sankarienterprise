export default function Blueprint() {
  return (
    <div className="hero-art">
      <div className="hero-art-head">
        <span>Fig. 01 — Custom steel unit</span>
        <span className="hero-art-dot" />
      </div>

      <svg className="blueprint" viewBox="0 0 560 560" role="img" aria-label="Blueprint drawing of a custom steel wardrobe">
        <defs>
          <linearGradient id="faceFront" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2b333c" />
            <stop offset="100%" stopColor="#151b21" />
          </linearGradient>
          <linearGradient id="faceSide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d242c" />
            <stop offset="100%" stopColor="#10151a" />
          </linearGradient>
          <linearGradient id="faceTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#39434e" />
            <stop offset="100%" stopColor="#222a32" />
          </linearGradient>
          <linearGradient id="accentEdge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f0b45c" />
            <stop offset="100%" stopColor="#d98a2b" />
          </linearGradient>
        </defs>

        <g className="bp-grid" stroke="rgba(255,255,255,0.055)" strokeWidth="1">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={60 + i * 55} y1="60" x2={60 + i * 55} y2="500" />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="60" y1={60 + i * 55} x2="500" y2={60 + i * 55} />
          ))}
        </g>

        <g className="bp-cabinet">
          <polygon points="110,190 310,250 500,190 300,130" fill="url(#faceTop)" stroke="rgba(240,180,92,0.6)" strokeWidth="1.4" />
          <polygon points="110,190 310,250 310,430 110,370" fill="url(#faceFront)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.4" />
          <polygon points="310,250 500,190 500,370 310,430" fill="url(#faceSide)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.4" />

          <polyline points="117,196 303,252" fill="none" stroke="rgba(255,255,255,0.12)" />
          <line x1="210" y1="222" x2="210" y2="402" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />
          <line x1="310" y1="250" x2="310" y2="430" stroke="rgba(240,180,92,0.35)" strokeWidth="1.6" />

          <rect x="196" y="306" width="4" height="26" rx="2" fill="url(#accentEdge)" />
          <rect x="220" y="312" width="4" height="26" rx="2" fill="url(#accentEdge)" />

          <line x1="320" y1="272" x2="490" y2="217" stroke="rgba(255,255,255,0.1)" />
          <line x1="320" y1="330" x2="490" y2="275" stroke="rgba(255,255,255,0.1)" />

          <rect x="112" y="366" width="10" height="14" rx="2" fill="#3a444e" />
          <rect x="298" y="424" width="10" height="14" rx="2" fill="#3a444e" />
          <rect x="490" y="364" width="10" height="14" rx="2" fill="#2c343d" />
        </g>

        <g className="bp-measures" stroke="rgba(240,180,92,0.55)" strokeWidth="1" fill="none">
          <line x1="110" y1="166" x2="500" y2="166" />
          <line x1="110" y1="160" x2="110" y2="176" />
          <line x1="500" y1="160" x2="500" y2="176" />
          <line x1="528" y1="190" x2="528" y2="370" />
          <line x1="520" y1="190" x2="536" y2="190" />
          <line x1="520" y1="370" x2="536" y2="370" />
        </g>

        <text x="305" y="158" fill="rgba(240,180,92,0.85)" fontSize="10" letterSpacing="3" textAnchor="middle" fontFamily="Inter, sans-serif">
          CUSTOM WIDTH
        </text>
        <text
          x="545"
          y="284"
          fill="rgba(240,180,92,0.85)"
          fontSize="10"
          letterSpacing="3"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          transform="rotate(90 545 284)"
        >
          H 2100 MM
        </text>

        <g stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="none">
          <path d="M92 190h-12M110 172v-12M300 112v-12M518 190h12M310 448v12" />
        </g>
      </svg>

      <div className="spec-chip spec-chip-a">
        <span>Material</span>
        <strong>1.2mm CR steel</strong>
      </div>
      <div className="spec-chip spec-chip-b">
        <span>Finish</span>
        <strong>Powder-coated</strong>
      </div>

      <div className="steel-stamp" aria-hidden="true">
        <svg viewBox="0 0 120 120">
          <defs>
            <path id="stampPath" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" />
          </defs>
          <circle cx="60" cy="60" r="57" className="stamp-border" />
          <g className="stamp-rotor">
            <text className="stamp-text">
              <textPath href="#stampPath" startOffset="0">
                CUSTOM STEEL FURNITURE · BUILT TO LAST ·
              </textPath>
            </text>
          </g>
          <text x="60" y="57" textAnchor="middle" className="stamp-big">
            35+
          </text>
          <text x="60" y="71" textAnchor="middle" className="stamp-small">
            YEARS
          </text>
        </svg>
      </div>
    </div>
  )
}
