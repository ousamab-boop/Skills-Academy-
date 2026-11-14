import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { ArrowDown, ArrowRight, BookOpen, Globe2, GraduationCap, Languages, Menu, MessageCircle, X } from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.title = 'Language Courses in Qatar | Skills Academy Qatar';
    const description = 'Explore IELTS, French TCF, Arabic and German at Skills Academy Qatar. Message us on WhatsApp to ask about language courses and test preparation in Qatar.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
    const addMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };
    addMeta('og:title', 'Language Courses in Qatar | Skills Academy Qatar');
    addMeta('og:description', description);
    addMeta('og:type', 'website');
  }, []);

  const inquiry = (course?: string) => `https://wa.me/97430043998?text=${encodeURIComponent(course ? `Hello Skills Academy Qatar, I would like to ask about the ${course} course.` : 'Hello Skills Academy Qatar, I would like to learn more about your courses.')}`;
  const courses = [
    { number: '01', title: 'IELTS preparation', note: 'English language test preparation', symbol: 'IELTS', tint: 'coral', icon: BookOpen, copy: 'Build the language skills and test readiness you need for your next academic or professional step.' },
    { number: '02', title: 'French · TCF', note: 'French language & TCF preparation', symbol: 'FR', tint: 'blue', icon: Globe2, copy: 'Develop practical French and prepare for the Test de connaissance du français.' },
    { number: '03', title: 'Arabic', note: 'Arabic language learning', symbol: 'عربي', tint: 'sand', icon: Languages, copy: 'Grow your confidence with Arabic for the goals and conversations that matter to you.' },
    { number: '04', title: 'German', note: 'Goethe & Ausbildung pathways', symbol: 'DE', tint: 'sage', icon: GraduationCap, copy: 'Explore German language learning, including preparation for Goethe and Ausbildung.' },
  ];
  return (
    <div className="academy-shell min-h-[100dvh]">
      <div className="topline"><span>Language learning for your next chapter</span><a href={inquiry()} target="_blank" rel="noopener noreferrer" data-testid="link-top-whatsapp">Message us on WhatsApp <ArrowRight size={14} /></a></div>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Skills Academy Qatar home" data-testid="link-brand-home">
            <span className="brand-mark"><span className="mark-navy" /><span className="mark-red" /><span className="mark-dot" /></span>
            <span className="brand-wordmark"><strong>SKILLS</strong><span>ACADEMY QATAR</span><small className="arabic-font" lang="ar" dir="rtl">أكادمية مهارات القطرية</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a className="nav-link" href="#courses" data-testid="link-nav-courses">Our courses</a>
            <a className="nav-link" href="#approach" data-testid="link-nav-approach">Our approach</a>
            <a className="nav-link" href="#contact" data-testid="link-nav-contact">Contact</a>
          </nav>
          <a className="header-cta" href={inquiry()} target="_blank" rel="noopener noreferrer" data-testid="link-header-inquiry">Ask us a question <ArrowRight size={16} /></a>
          <button className="mobile-menu-button" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu">{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
        </div>
        {menuOpen && <nav className="mobile-nav menu-panel" aria-label="Mobile navigation">
          <a href="#courses" onClick={() => setMenuOpen(false)} data-testid="link-mobile-courses">Our courses <ArrowRight size={16} /></a>
          <a href="#approach" onClick={() => setMenuOpen(false)} data-testid="link-mobile-approach">Our approach <ArrowRight size={16} /></a>
          <a href="#contact" onClick={() => setMenuOpen(false)} data-testid="link-mobile-contact">Contact <ArrowRight size={16} /></a>
          <a className="mobile-nav-cta" href={inquiry()} target="_blank" rel="noopener noreferrer" data-testid="link-mobile-inquiry">Start an inquiry <MessageCircle size={16} /></a>
        </nav>}
      </header>

      <main>
        <section className="hero hero-grid" id="home" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <div className="eyebrow reveal"><span className="eyebrow-line" /> SKILLS FOR WHAT'S NEXT <span className="eyebrow-arabic arabic-font" lang="ar">مهارات للمستقبل</span></div>
            <h1 id="hero-heading" className="display-font reveal reveal-delay">Language courses<br />in <em>Qatar.</em></h1>
            <p className="hero-intro reveal reveal-delay-2">Practical language training and test preparation for learners and professionals in Qatar.</p>
            <div className="hero-actions reveal reveal-delay-2">
              <a className="button-primary" href="#courses" data-testid="link-explore-courses">Explore courses <ArrowDown size={17} /></a>
              <a className="button-text" href={inquiry()} target="_blank" rel="noopener noreferrer" data-testid="link-hero-whatsapp"><span className="whatsapp-icon"><MessageCircle size={17} /></span> Ask us on WhatsApp</a>
            </div>
            <div className="hero-footnote"><span className="footnote-rule" /> Learn for academic, career & personal goals</div>
          </div>
          <div className="hero-visual reveal reveal-delay">
            <div className="hero-image-wrap"><img src="/academy-hero.jpg" alt="A learner at a sunlit desk with language books and an open notebook" width="960" height="1100" fetchPriority="high" data-testid="img-hero-learner" /></div>
            <div className="image-caption"><span>LEARN WITH PURPOSE</span><span>QATAR · LANGUAGE LEARNING</span></div>
            <div className="hero-stamp"><span>ONE STEP</span><span className="stamp-center">AT A</span><span>TIME</span><i /></div>
            <div className="image-index">01 <span>/</span> 04</div>
          </div>
          <div className="hero-side-label">LANGUAGE · LEARNING · POSSIBILITY</div>
        </section>

        <section className="course-section section-pad" id="courses" aria-labelledby="courses-heading">
          <div className="section-heading">
            <div><div className="eyebrow"><span className="eyebrow-line" /> FIND YOUR STARTING POINT</div><h2 className="display-font" id="courses-heading">A course for <em>your next step.</em></h2></div>
            <p>Choose a language or test preparation path, then talk with us about what you’re working toward.</p>
          </div>
          <div className="course-grid">
            {courses.map((course) => {
              const Icon = course.icon;
              return <article className={`course-card course-${course.tint}`} key={course.number} data-testid={`card-course-${course.number}`}>
                <div className="course-card-top"><span className="course-number">{course.number} / COURSE</span><span className="course-symbol" lang={course.symbol === 'عربي' ? 'ar' : undefined}>{course.symbol}</span></div>
                <div className="course-icon"><Icon size={20} strokeWidth={1.7} /></div>
                <h3 className="display-font">{course.title}</h3><p className="course-note">{course.note}</p><p className="course-copy">{course.copy}</p>
                <a className="course-link" href={inquiry(course.title)} target="_blank" rel="noopener noreferrer" data-testid={`link-inquire-${course.number}`}>Ask about this course <ArrowRight size={16} /></a>
              </article>;
            })}
          </div>
          <div className="course-tail"><span>Not sure where to begin?</span><a href={inquiry()} target="_blank" rel="noopener noreferrer" data-testid="link-course-guidance">Tell us what you’re aiming for <ArrowRight size={15} /></a></div>
        </section>

        <section className="mission-section" id="approach" aria-labelledby="mission-heading">
          <div className="mission-mark" aria-hidden="true"><span /><span /><span /></div>
          <div className="mission-content">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> OUR PURPOSE</div>
            <h2 className="display-font" id="mission-heading">Skills that take you <em>further.</em></h2>
            <p>Our mission is to help students and professionals gain skills that support their academic, career and personal goals.</p>
            <a className="mission-link" href={inquiry()} target="_blank" rel="noopener noreferrer" data-testid="link-mission-inquiry">Let’s talk about your goal <ArrowRight size={17} /></a>
          </div>
          <div className="mission-note"><span className="note-mark">“</span><p>Practical learning<br />for real-life ambitions.</p><span className="note-arabic arabic-font" lang="ar" dir="rtl">أكادمية مهارات القطرية</span></div>
        </section>

        <section className="more-section section-pad" aria-labelledby="more-heading">
          <div className="more-intro">
            <div className="eyebrow"><span className="eyebrow-line" /> LEARNING THAT FITS YOUR GOAL</div>
            <h2 className="display-font" id="more-heading">More ways to<br /><em>move forward.</em></h2>
            <p>Explore other language learning and test preparation areas named in our mission.</p>
          </div>
          <div className="more-list">
            <a className="more-row" href={inquiry('English')} target="_blank" rel="noopener noreferrer" data-testid="link-inquire-english"><span className="more-index">A</span><div><h3>English</h3><p>English language learning.</p></div><span className="more-arrow"><ArrowRight size={18} /></span></a>
            <a className="more-row" href={inquiry('OET preparation')} target="_blank" rel="noopener noreferrer" data-testid="link-inquire-oet"><span className="more-index">B</span><div><h3>OET preparation</h3><p>English test preparation for OET.</p></div><span className="more-arrow"><ArrowRight size={18} /></span></a>
            <a className="more-row" href={inquiry('Arabic and Qatari dialect')} target="_blank" rel="noopener noreferrer" data-testid="link-inquire-arabic-dialect"><span className="more-index">C</span><div><h3>Arabic & Qatari dialect</h3><p>Learn Arabic, including the Qatari dialect.</p></div><span className="more-arrow"><ArrowRight size={18} /></span></a>
            <a className="more-inquiry" href={inquiry()} target="_blank" rel="noopener noreferrer" data-testid="link-more-inquiry">Ask about learning options <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" />
          <div className="contact-inner">
            <div className="contact-kicker"><span /> YOUR NEXT STEP STARTS WITH A CONVERSATION</div>
            <h2 className="display-font" id="contact-heading">Tell us what<br />you want to <em>learn.</em></h2>
            <p>Send us a message on WhatsApp to ask about a course or share the goal you have in mind.</p>
            <a className="contact-button" href={inquiry()} target="_blank" rel="noopener noreferrer" data-testid="link-contact-whatsapp"><MessageCircle size={19} /> Start a WhatsApp inquiry <ArrowRight size={18} /></a>
            <a className="contact-number" href="https://wa.me/97430043998" target="_blank" rel="noopener noreferrer" data-testid="link-whatsapp-number">+974 3004 3998</a>
          </div>
          <div className="contact-side">SKILLS ACADEMY QATAR <span>—</span> LEARNING IN MOTION</div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home" data-testid="link-footer-brand"><span className="brand-mark"><span className="mark-navy" /><span className="mark-red" /><span className="mark-dot" /></span><span className="brand-wordmark"><strong>SKILLS</strong><span>ACADEMY QATAR</span><small className="arabic-font" lang="ar" dir="rtl">أكادمية مهارات القطرية</small></span></a>
        <p>Practical language learning for what comes next.</p>
        <a className="footer-whatsapp" href={inquiry()} target="_blank" rel="noopener noreferrer" data-testid="link-footer-whatsapp">WhatsApp <ArrowRight size={15} /></a>
        <span className="copyright">© Skills Academy Qatar</span>
      </footer>
      <a className="whatsapp-float" href={inquiry()} target="_blank" rel="noopener noreferrer" aria-label="Start a general inquiry on WhatsApp" data-testid="link-floating-whatsapp"><MessageCircle size={23} /><span>Message us</span></a>
    </div>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
