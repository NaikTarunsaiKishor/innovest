
import { Layout } from '@/components/layout/Layout';
import { SignupForm } from '@/components/auth/SignupForm';

const SignupPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Join InnoVest Today</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Create your free account to connect with innovators, investors, and mentors 
              from around the world.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                <div>
                  <h3 className="font-semibold">Create your profile</h3>
                  <p className="text-muted-foreground">Sign up and tell us about yourself and your goals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                <div>
                  <h3 className="font-semibold">Complete onboarding</h3>
                  <p className="text-muted-foreground">Answer a few questions so we can personalize your experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                <div>
                  <h3 className="font-semibold">Connect and grow</h3>
                  <p className="text-muted-foreground">Start collaborating with our community of innovators and investors</p>
                </div>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium">🔒 Your privacy is our priority</p>
              <p className="text-xs text-muted-foreground">
                We take data security seriously. Your information is encrypted and never shared without your permission.
              </p>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md">
            <SignupForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
