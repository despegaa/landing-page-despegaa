import React, { useEffect } from 'react'

import Logo from './components/logo/logo'
import Form from './components/form/form'
import services from './data/services'

import Service from './components/service/service'
import animations from './utils/animations'

function App() {
  useEffect(() => {
    if (window.location.href === 'http://www.despegaa.com/') {
      window.location.href = 'https://www.despegaa.com/'
    }
    animations()
  }, [])

  return (
    <div className="body-wrap">
      <header className="site-header">
        <div className="container">
          <div className="site-header-inner">
            <div className="brand header-brand">
              <h2 className="m-0">
                <div className="logo-container">
                  <Logo logo={process.env.PUBLIC_URL + '/images/logo.png'} />
                  <span>Despegaa</span>
                </div>
              </h2>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero hero-margin ">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-copy">
                <h1 className="hero-title mt-0">
                  ¡Incrementa tus ventas en todos los canales!
                </h1>
                <p className="hero-paragraph">
                  Somos una Agencia de Publicidad que orienta todos sus trabajos
                  bajo los modernos perfiles dictados por los constantes avances
                  tecnológicos. Sabemos que el mundo digital es un desafío
                  constante para todos. Es por eso que nuestro equipo cuenta con
                  las mejores herramientas para desarrollar la estrategia que
                  cada cliente necesita.
                </p>
                <div className="hero-cta">
                  <a className="button button-primary" href="#contact">
                    ¡Contactanos!
                  </a>
                  {/**<a className="button" href="/">Calcular Precio</a> */}
                </div>
              </div>
              <div className="hero-figure anime-element hero-figure-relative">
                <img
                  className="hero-image headline"
                  src={process.env.PUBLIC_URL + '/images/hero.svg'}
                  alt="hero"
                />
                <svg
                  className="placeholder transparent"
                  width="528"
                  height="396"
                  viewBox="0 0 528 396"
                >
                  <rect width="528" height="396" />
                </svg>
                <div
                  className="hero-figure-box hero-figure-box-01"
                  data-rotation="45deg"
                ></div>
                <div
                  className="hero-figure-box hero-figure-box-02"
                  data-rotation="-45deg"
                ></div>
                <div
                  className="hero-figure-box hero-figure-box-03"
                  data-rotation="0deg"
                ></div>
                <div
                  className="hero-figure-box hero-figure-box-04"
                  data-rotation="-135deg"
                ></div>
                <div className="hero-figure-box hero-figure-box-05"></div>
                <div className="hero-figure-box hero-figure-box-06"></div>
                <div className="hero-figure-box hero-figure-box-07"></div>
                <div
                  className="hero-figure-box hero-figure-box-08"
                  data-rotation="-22deg"
                ></div>
                <div
                  className="hero-figure-box hero-figure-box-09"
                  data-rotation="-52deg"
                ></div>
                <div
                  className="hero-figure-box hero-figure-box-10"
                  data-rotation="-50deg"
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section className="features section">
          <div className="container">
            <div className="features-inner section-inner has-bottom-divider">
              <div className="features-wrap">
                {services.map((service, i) => (
                  <Service
                    key={i}
                    title={service.title}
                    image={service.image}
                    alt={service.alt}
                    description={service.description}
                    backgroundImage={service.backgroundImage}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="pricing section">
        <div className="container-sm">
          <div className="pricing-inner section-inner">
            <div className="pricing-tables-wrap">
              <div className="pricing-table">
                <div className=" is-revealing">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer-inner">
            <div className="brand footer-brand">
              <a href="/">
                <Logo logo={process.env.PUBLIC_URL + '/images/logo.png'} />
              </a>
            </div>
            <ul className="footer-links list-reset">
              <li>
                <a href="/">Contactanos</a>
              </li>
              <li>
                <a href="/">Acerca de nosotros</a>
              </li>
            </ul>
            <ul className="footer-social-links list-reset">
              <li>
                <a
                  href="https://www.facebook.com/despegaa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="screen-reader-text">Facebook</span>
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                      fill="#0270D7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/despegaa_marketing_agency"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram color-icons"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/526391683782"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp color-icons"></i>
                </a>
              </li>
            </ul>
            <div className="footer-copyright">&copy; 2021 Despegaa</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
