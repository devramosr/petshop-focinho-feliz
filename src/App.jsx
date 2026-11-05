import { useState } from 'react'
import { negocio, portes, servicos, diferenciais, depoimentos, horarios, conteudo } from './data.js'

// Seletor de idioma: cada idioma é uma página própria (/ e /en/)
function Idiomas({ lang, rotulo }) {
  return (
    <nav className="idioma" aria-label={rotulo}>
      <a href="/" lang="pt-BR" hrefLang="pt-BR" title="Português" aria-current={lang === 'pt' ? 'true' : undefined}>PT</a>
      <a href="/en/" lang="en" hrefLang="en" title="English" aria-current={lang === 'en' ? 'true' : undefined}>EN</a>
    </nav>
  )
}

// Patinha desenhada em SVG (usada na marca)
function Pata() {
  return (
    <svg className="pata" viewBox="0 0 32 32" aria-hidden="true">
      <ellipse cx="16" cy="21" rx="7.500" ry="6" />
      <ellipse cx="6.500" cy="14" rx="2.800" ry="3.600" />
      <ellipse cx="12.500" cy="8.500" rx="2.800" ry="3.800" />
      <ellipse cx="19.500" cy="8.500" rx="2.800" ry="3.800" />
      <ellipse cx="25.500" cy="14" rx="2.800" ry="3.600" />
    </svg>
  )
}

export default function App({ lang = 'pt' }) {
  const c = conteudo[lang] || conteudo.pt
  const ui = c.ui
  const brl = (v) => v.toLocaleString(ui.moeda, { style: 'currency', currency: 'BRL' })
  const wa = (texto) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`

  const [porte, setPorte] = useState('m')
  const [escolhidos, setEscolhidos] = useState(['combo'])
  const [pet, setPet] = useState('')

  const alternar = (id) =>
    setEscolhidos((atual) => (atual.includes(id) ? atual.filter((x) => x !== id) : [...atual, id]))

  const selecionados = servicos.filter((s) => escolhidos.includes(s.id))
  const total = selecionados.reduce((soma, s) => soma + s.precos[porte], 0)
  const porteAtual = portes.find((p) => p.id === porte)[lang]

  const base = selecionados.length ? ui.msgComServicos : ui.msgSemServicos
  const mensagem = base
    .replace('{pet}', pet.trim() || ui.msgPetPadrao)
    .replace('{porte}', porteAtual.nome.toLowerCase())
    .replace('{servicos}', selecionados.map((s) => s[lang].nome).join(', '))
    .replace('{total}', brl(total))

  return (
    <>
      <header className="topo">
        <a className="marca" href="#inicio">
          <Pata /> {negocio.nome}
        </a>
        <div className="topo-direita">
          <nav aria-label={ui.navAria}>
            <a href="#servicos">{ui.nav.servicos}</a>
            <a href="#agendar">{ui.nav.agendar}</a>
            <a href="#contato">{ui.nav.contato}</a>
          </nav>
          <Idiomas lang={lang} rotulo={ui.idiomaAria} />
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">{ui.eyebrow} {negocio.cidade}</p>
              <h1>{ui.titulo}</h1>
              <p className="lead">{ui.lead}</p>
              <div className="acoes">
                <a className="btn btn-primario" href="#agendar">{ui.btnAgendar}</a>
                <a className="btn btn-linha" href="#servicos">{ui.btnPrecos}</a>
              </div>
            </div>
            <div className="cachorro" aria-hidden="true">
              <span className="bolha b1" /><span className="bolha b2" /><span className="bolha b3" />
              <svg viewBox="0 0 240 240">
                <ellipse cx="62" cy="96" rx="30" ry="52" transform="rotate(14 62 96)" fill="#b97b3f" />
                <ellipse cx="178" cy="96" rx="30" ry="52" transform="rotate(-14 178 96)" fill="#b97b3f" />
                <circle cx="120" cy="116" r="72" fill="#e9b872" />
                <ellipse cx="120" cy="146" rx="40" ry="32" fill="#fbe3bf" />
                <circle cx="94" cy="104" r="9" fill="#17375e" /><circle cx="97" cy="101" r="3" fill="#fff" />
                <circle cx="146" cy="104" r="9" fill="#17375e" /><circle cx="149" cy="101" r="3" fill="#fff" />
                <ellipse cx="120" cy="132" rx="13" ry="9" fill="#17375e" />
                <path d="M120 141v10M106 156c7 8 21 8 28 0" stroke="#17375e" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M112 158c2 14 14 14 16 0z" fill="#ff7a59" />
              </svg>
            </div>
          </div>
        </section>

        <section className="difs">
          <ul className="container difs-lista">
            {diferenciais.map((d) => (
              <li key={d.pt.t}>
                <strong>{d[lang].t}</strong>
                <span>{d[lang].d}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="secao" id="servicos">
          <div className="container">
            <h2>{ui.servicosTitulo}</h2>
            <div className="portes" role="group" aria-label={ui.porteAria}>
              <p>{ui.porteTitulo}</p>
              {portes.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  aria-pressed={porte === p.id}
                  className={porte === p.id ? 'porte ativo' : 'porte'}
                  onClick={() => setPorte(p.id)}
                >
                  <strong>{p[lang].nome}</strong>
                  <span>{p[lang].faixa}</span>
                </button>
              ))}
            </div>
            <ul className="lista-servicos">
              {servicos.map((s) => (
                <li key={s.id} className={s.destaque ? 'item destaque' : 'item'}>
                  <div>
                    <h3>
                      {s[lang].nome} {s.destaque && <span className="selo">{ui.selo}</span>}
                    </h3>
                    <p>{s[lang].desc}</p>
                  </div>
                  <div className="preco">
                    <strong>{brl(s.precos[porte])}</strong>
                    <span>{s[lang].tempo}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="secao escura" id="agendar">
          <div className="container agendar">
            <div>
              <h2>{ui.agendarTitulo}</h2>
              <p className="lead">{ui.agendarLead}</p>
            </div>
            <div className="caixa">
              <label className="campo" htmlFor="pet">{ui.labelPet}
                <input id="pet" type="text" value={pet} onChange={(e) => setPet(e.target.value)} placeholder={ui.placeholderPet} />
              </label>
              <p className="porte-info">{ui.porteLabel}: <strong>{porteAtual.nome}</strong> ({porteAtual.faixa})</p>
              <fieldset>
                <legend className="sr">{ui.servicosLegenda}</legend>
                {servicos.map((s) => (
                  <label key={s.id} className="check" htmlFor={`s-${s.id}`}>
                    <input
                      id={`s-${s.id}`}
                      type="checkbox"
                      checked={escolhidos.includes(s.id)}
                      onChange={() => alternar(s.id)}
                    />
                    <span>{s[lang].nome}</span>
                    <em>{brl(s.precos[porte])}</em>
                  </label>
                ))}
              </fieldset>
              <div className="total">
                <span>{ui.total}</span>
                <strong>{brl(total)}</strong>
              </div>
              <a className="btn btn-whats" href={wa(mensagem)} target="_blank" rel="noreferrer">
                {ui.btnWhats}
              </a>
            </div>
          </div>
        </section>

        <section className="secao">
          <div className="container">
            <h2>{ui.depoimentosTitulo}</h2>
            <div className="depoimentos">
              {depoimentos.map((d) => (
                <figure key={d.nome}>
                  <blockquote>{d[lang]}</blockquote>
                  <figcaption>{d.nome}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="secao claro" id="contato">
          <div className="container contato">
            <div>
              <h2>{ui.ondeTitulo}</h2>
              <p>{negocio.endereco}</p>
              <p>
                WhatsApp: <a href={wa(ui.msgOla)} target="_blank" rel="noreferrer">{negocio.whatsappTexto}</a>
              </p>
              <p>Instagram: {negocio.instagram}</p>
            </div>
            <div>
              <h2>{ui.horariosTitulo}</h2>
              <ul className="horarios">
                {horarios.map((h) => (
                  <li key={h.pt.dia}>
                    <span>{h[lang].dia}</span>
                    <strong>{h[lang].hora}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="container">
          <span>© 2026 {negocio.nome}</span>
          <span>{ui.demo}</span>
        </div>
      </footer>
    </>
  )
}
