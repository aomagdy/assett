import { BackgroundPattern } from '../../components/ui/BackgroundPattern';
import { LegalContent } from '../../components/legal/LegalContent';

function PrivacyPolicyPage() {
  return (
    <>
      <BackgroundPattern variant="primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Learn how we protect and handle your personal information.
            </p>
          </div>
        </div>
      </BackgroundPattern>
      <LegalContent type="privacy-policy" />
    </>
  );
}

export default PrivacyPolicyPage;