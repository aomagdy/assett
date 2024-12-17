import { BackgroundPattern } from '../../components/ui/BackgroundPattern';
import { LegalContent } from '../../components/legal/LegalContent';

function TermsPage() {
  return (
    <>
      <BackgroundPattern variant="primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Review our terms and conditions for using our platform.
            </p>
          </div>
        </div>
      </BackgroundPattern>
      <LegalContent type="terms-of-service" />
    </>
  );
}

export default TermsPage;