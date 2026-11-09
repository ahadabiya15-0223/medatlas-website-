import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

/* Home ships in the first chunk. Everything else loads on navigation,
   which keeps the initial payload small on a mobile connection. */
const About = lazy(() => import('./pages/About'));
const Leadership = lazy(() => import('./pages/Leadership'));
const PersonProfile = lazy(() => import('./pages/PersonProfile'));
const Network = lazy(() => import('./pages/Network'));
const Collaborations = lazy(() => import('./pages/Collaborations'));
const Partners = lazy(() => import('./pages/Partners'));
const Join = lazy(() => import('./pages/Join'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const DivisionsIndex = lazy(() =>
  import('./pages/Divisions').then((m) => ({ default: m.DivisionsIndex }))
);
const DivisionDetail = lazy(() =>
  import('./pages/Divisions').then((m) => ({ default: m.DivisionDetail }))
);
const PublicationsIndex = lazy(() =>
  import('./pages/Publications').then((m) => ({ default: m.PublicationsIndex }))
);
const PublicationDetail = lazy(() =>
  import('./pages/Publications').then((m) => ({ default: m.PublicationDetail }))
);
const EducationIndex = lazy(() =>
  import('./pages/Education').then((m) => ({ default: m.EducationIndex }))
);
const ResourceDetail = lazy(() =>
  import('./pages/Education').then((m) => ({ default: m.ResourceDetail }))
);
const NewsIndex = lazy(() => import('./pages/News').then((m) => ({ default: m.NewsIndex })));
const NewsArticle = lazy(() => import('./pages/News').then((m) => ({ default: m.NewsArticle })));
const Conferences = lazy(() => import('./pages/Misc').then((m) => ({ default: m.Conferences })));
const Certificates = lazy(() => import('./pages/Misc').then((m) => ({ default: m.Certificates })));
const Faq = lazy(() => import('./pages/Misc').then((m) => ({ default: m.Faq })));
const LegalPage = lazy(() => import('./pages/Misc').then((m) => ({ default: m.LegalPage })));
const Search = lazy(() => import('./pages/Misc').then((m) => ({ default: m.Search })));
const ServerError = lazy(() => import('./pages/Misc').then((m) => ({ default: m.ServerError })));

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  return null;
}

function Loading() {
  return (
    <div className="loading" role="status" aria-live="polite">
      <div className="spinner" />
      <span>Loading</span>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <ScrollToTop />
      <main id="main">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/leadership" element={<Leadership />} />
            <Route path="/leadership/:slug" element={<PersonProfile base="/leadership" />} />

            <Route path="/network" element={<Network />} />
            <Route path="/network/:slug" element={<PersonProfile base="/network" />} />

            <Route path="/research-divisions" element={<DivisionsIndex />} />
            <Route path="/research-divisions/:id" element={<DivisionDetail />} />

            <Route path="/publications" element={<PublicationsIndex />} />
            <Route path="/publications/:id" element={<PublicationDetail />} />

            <Route path="/education" element={<EducationIndex />} />
            <Route path="/education/:id" element={<ResourceDetail />} />

            <Route path="/news" element={<NewsIndex />} />
            <Route path="/news/:id" element={<NewsArticle />} />

            <Route path="/conferences" element={<Conferences />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/search" element={<Search />} />

            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/terms" element={<LegalPage />} />
            <Route path="/cookies" element={<LegalPage />} />
            <Route path="/accessibility" element={<LegalPage />} />

            <Route path="/500" element={<ServerError />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
