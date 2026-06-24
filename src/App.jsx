import { useEffect, useState } from 'react';

const whatsappUrl =
  'https://api.whatsapp.com/send?phone=558491340163&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20momento%20com%20a%20psic%C3%B3loga%20Andreia%20Lucynara.';
const googleReviewsUrl =
  'https://www.google.com/search?q=Andreia+Lucynara+psic%C3%B3loga+avalia%C3%A7%C3%B5es';

const quotes = [
  {
    text: 'A escuta fenomenológica acolhe a experiência como ela se mostra, antes de reduzi-la a rótulos.',
    author: 'Inspiração na fenomenologia existencial',
  },
  {
    text: 'Cuidar de si é abrir espaço para compreender a própria história com mais presença e sentido.',
    author: 'Clínica do encontro',
  },
  {
    text: 'Na terapia, o sofrimento não precisa ser enfrentado em solidão: ele pode ser olhado com o cuidado que cada história precisa.',
    author: 'Processo terapêutico' ,
  },
  {
    text: 'Isso de querer ser exatamente aquilo que a gente é ainda vai nos levar além',
    author: ' Paulo Leminski' ,
  },
];

const helpTopics = [
  'Ansiedade, sobrecarga emocional e cansaço persistente.',
  'Conflitos nos relacionamentos, dificuldades de comunicação e limites.',
  'Momentos de transição, escolhas importantes e busca de sentido.',
  'Autoconhecimento, autoestima e reconexão com a própria história.',
];

const careItems = [
  'Atendimento psicológico online para quem busca praticidade e continuidade.',
  'Sessões presenciais na @caroacoletivapsi, em um espaço de escuta e acolhimento.',
  'Atendimento ético, sensível e que considera o modo de ser e a singularidade de cada pessoa.',
];

const faqs = [
  {
    question: 'Como funciona a primeira consulta?',
    answer:
      'A primeira sessão é um espaço para você apresentar sua demanda, conhecer a forma de trabalho da psicóloga e avaliar, com calma, se esse acompanhamento faz sentido para você.',
  },
  {
    question: 'O atendimento pode ser online?',
    answer:
      'Sim. Andreia realiza atendimento online e também presencial, permitindo que você escolha o formato mais adequado para sua rotina e momento de vida.',
  },
  {
    question: 'Para quem a psicoterapia é indicada?',
    answer:
      'A psicoterapia pode ajudar pessoas que estejam vivendo sofrimento emocional, conflitos internos, mudanças importantes ou simplesmente desejem se conhecer melhor.',
  },
  {
    question: 'Como faço para agendar?',
    answer:
      'Você pode usar qualquer botão de agendamento ao longo da página para iniciar o contato pelo WhatsApp e combinar disponibilidade.',
  },
];

function App() {
  const [activeQuote, setActiveQuote] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveQuote((current) => (current + 1) % quotes.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
        <div className="brand-block">
  <img
    src="/logoNova.png"
    alt="Logo Andreia Lucynara"
    className="brand-logo"
  />

  <div>
    <p className="eyebrow">Psicóloga Clínica</p>
    <strong className="brand">Andréia Lucynara</strong>
  </div>
</div>
          <a className="ghost-button" href={googleReviewsUrl} target="_blank" rel="noreferrer">
            Ver avaliações
          </a>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <span className="badge">CRP 17/3551</span>
            <h1>Um espaço de escuta, presença e cuidado para a sua experiência.</h1>
            <p className="lead">
              Andréia oferece atendimento psicológico online e presencial com base na
              fenomenologia existencial, acolhendo cada história com profundidade, sensibilidade e
              ética.
            </p>

            <div className="cta-row">
              <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
                Agendar pelo WhatsApp
              </a>
              <a className="secondary-button" href="#abordagem">
                Conhecer a abordagem
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="photo-frame">
              <img
                src="/andreia-lucynara.png"
                alt="Andreia Lucynara"
                width="635"
                height="637"
              />
            </div>
            <div className="profile-note">
              <p className="note-title">Sobre mim</p>
              <p>A psicologia clínica faz parte do meu percurso profissional há cerca de 10 anos. Nesse período, muitas histórias foram acolhidas, desvelando possibilidades diversas de transformação, cuidado, autoconhecimento e abertura para autenticidade.</p>
              <p>O espaço psicoterapêutico produz sentido ao meu trabalho. Me sinto honrada em acompanhar o percurso tão singular das pessoas que me procuram.</p> 
              <p>Faço atendimento online, em língua portuguesa, para pessoas de qualquer lugar do mundo.</p>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="section intro">
          <div className="section-heading">
            <p className="eyebrow">Sobre o atendimento</p>
            <h2>Um processo psicoterapêutico construído com presença, diálogo e respeito à singularidade.</h2>
          </div>

          <div className="cards three-columns">
            {careItems.map((item) => (
              <article className="info-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section accent">
          <div className="section-heading narrow">
            <p className="eyebrow">Como pode ajudar</p>
            <h2>A psicoterapia pode ser uma aliada em momentos de dor, dúvida e desejo de transformação.</h2>
          </div>

          <div className="cards two-columns">
            {helpTopics.map((topic) => (
              <article className="topic-card" key={topic}>
                <span className="topic-marker" />
                <p>{topic}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section carousel-section">
          <div className="carousel-card">
            <p className="quote-mark">“</p>
            <p className="quote-text">{quotes[activeQuote].text}</p>
            <p className="quote-author">{quotes[activeQuote].author}</p>
            <div className="carousel-dots" aria-label="Controle do carrossel">
              {quotes.map((quote, index) => (
                <button
                  key={quote.author}
                  className={index === activeQuote ? 'dot active' : 'dot'}
                  type="button"
                  onClick={() => setActiveQuote(index)}
                  aria-label={`Exibir citação ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="abordagem">
          <div className="split-layout">
            <div className="section-heading">
              <p className="eyebrow">A abordagem</p>
              <h2>Fenomenologia existencial: compreender a experiência vivida antes de encaixá-la em respostas prontas.</h2>
            </div>

            <div className="approach-copy">
              <p>
                A fenomenologia existencial busca compreender como cada pessoa vive, sente e atribui
                sentido ao seu mundo. Na clínica, isso se traduz em uma escuta cuidadosa, aberta e
                interessada no que a sua experiência revela.
              </p>
              <p>
                Em vez de reduzir o sofrimento a explicações automáticas, essa abordagem favorece um
                encontro mais autêntico com sua história, seus afetos, seus impasses e suas
                possibilidades de escolha.
              </p>
              <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
                Quero agendar minha consulta
              </a>
            </div>
          </div>
        </section>

        <section className="section review-section">
          <div className="review-box">
            <div>
              <p className="eyebrow">Avaliações</p>
              <h2>Veja como outras pessoas descrevem a experiência de cuidado.</h2>
              <p>
                Use o link abaixo para acessar as avaliações no Google e conhecer melhor a percepção
                de quem já passou por esse processo.
              </p>
            </div>
            <a className="secondary-button" href={googleReviewsUrl} target="_blank" rel="noreferrer">
              Abrir reviews no Google
            </a>
          </div>
        </section>

        <section className="section faq-section">
          <div className="section-heading narrow">
            <p className="eyebrow">Dúvidas comuns</p>
            <h2>Perguntas frequentes antes de iniciar a psicoterapia.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article className={isOpen ? 'faq-item open' : 'faq-item'} key={faq.question}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span>{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen ? <p className="faq-answer">{faq.answer}</p> : null}
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p className="footer-line">Seu momento de cuidado pode começar com uma conversa.</p>
        </div>
        <a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">
          Agendar agora
        </a>
      </footer>
    </div>
  );
}

export default App;
