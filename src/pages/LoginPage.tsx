
import { Layout } from '@/components/layout/Layout';
import { LoginForm } from '@/components/auth/LoginForm';

const LoginPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome Back</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Log in to your InnoVest account to continue your journey in the world of innovation and investment.
            </p>
            
            <div className="bg-card border rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-lg mb-3">What's New on InnoVest</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-primary">✦</span>
                  <span>AI Pitch Generator now supports regional languages</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✦</span>
                  <span>Extended mentorship sessions with industry experts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✦</span>
                  <span>New Social Impact scoring for sustainability-focused startups</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium">Need help logging in?</p>
              <p className="text-xs text-muted-foreground">
                Contact our support team at <span className="text-primary">support@innovest.com</span> or call <span className="text-primary">+91 98765 43210</span>
              </p>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
