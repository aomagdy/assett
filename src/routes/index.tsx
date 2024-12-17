import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LoadingScreen } from '../components/ui/LoadingScreen';
import { ROUTES } from '../utils/constants';

// Lazy load pages
const HomePage = lazy(() => import('../pages/HomePage').then(module => ({ default: module.default })));
const AboutPage = lazy(() => import('../pages/AboutPage').then(module => ({ default: module.default })));
const ContactPage = lazy(() => import('../pages/ContactPage').then(module => ({ default: module.default })));
const FAQsPage = lazy(() => import('../pages/FAQsPage').then(module => ({ default: module.default })));
const FractionalizePage = lazy(() => import('../pages/FractionalizePage').then(module => ({ default: module.default })));
const MarketplacePage = lazy(() => import('../pages/MarketplacePage').then(module => ({ default: module.default })));
const LoginPage = lazy(() => import('../pages/LoginPage').then(module => ({ default: module.default })));
const RegisterPage = lazy(() => import('../pages/RegisterPage').then(module => ({ default: module.default })));
const HowItWorksPage = lazy(() => import('../pages/HowItWorksPage').then(module => ({ default: module.default })));
const PrivacyPolicyPage = lazy(() => import('../pages/legal/PrivacyPolicyPage').then(module => ({ default: module.default })));
const TermsPage = lazy(() => import('../pages/legal/TermsPage').then(module => ({ default: module.default })));
const NotFoundPage = lazy(() => import('../pages/error/NotFoundPage').then(module => ({ default: module.default })));

export function AppRoutes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.FAQS} element={<FAQsPage />} />
        <Route path={ROUTES.HOW_IT_WORKS} element={<HowItWorksPage />} />
        <Route path={ROUTES.MARKETPLACE} element={<MarketplacePage />} />
        <Route path={ROUTES.FRACTIONALIZE} element={<FractionalizePage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
        <Route path={ROUTES.TERMS} element={<TermsPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
      </Routes>
    </Suspense>
  );
}