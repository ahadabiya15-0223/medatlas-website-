import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { Empty, PageHead } from '../components/ui';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found"
        path="/404"
        description="That page is not part of the MedAtlas website."
      />
      <PageHead
        title="That page is not here."
        lede="The link may be out of date, or the page may have moved. Everything the site holds is one click away."
        trail={[{ label: 'Home', to: '/' }, { label: 'Not found' }]}
      />
      <section className="section">
        <div className="shell shell--narrow">
          <Empty title="Where you might have been going">
            <p>
              Researcher profiles live under the network directory, article records under
              publications, and the seven areas of work under research divisions.
            </p>
            <div className="btn-row mt-md">
              <Link to="/" className="btn">
                Homepage
              </Link>
              <Link to="/publications" className="btn btn--ghost">
                Publications
              </Link>
              <Link to="/network" className="btn btn--ghost">
                Researchers
              </Link>
              <Link to="/search" className="btn btn--ghost">
                Search the site
              </Link>
            </div>
          </Empty>
        </div>
      </section>
    </>
  );
}
