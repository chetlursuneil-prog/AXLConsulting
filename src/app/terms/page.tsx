import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'AXL Consulting terms of service - the terms and conditions governing your use of our website and services.',
};

export default function TermsPage() {
  const lastUpdated = 'January 1, 2024';
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="container-custom">
          <nav className="flex items-center space-x-2 text-sm text-charcoal-500 mb-8">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-charcoal-700">Terms of Service</span>
          </nav>
          
          <h1 className="text-display-sm md:text-display-md text-navy-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-charcoal-600">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-navy-900 prose-p:text-charcoal-700 prose-a:text-primary-600 prose-strong:text-navy-900">
            
            <h2>Acceptance of Terms</h2>
            <p>
              Welcome to AXL Consulting. By accessing or using our website and services, you agree 
              to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, 
              please do not use our website or services.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and AXL Consulting 
              (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We reserve the right to modify these Terms at any time, 
              and such modifications will be effective immediately upon posting on this page.
            </p>

            <h2>Description of Services</h2>
            <p>
              AXL Consulting provides management consulting, technology advisory, digital transformation, 
              and AI implementation services to business clients. Our website provides information about 
              our services, thought leadership content, and means to contact us.
            </p>
            <p>
              The specific terms governing any consulting engagement will be set forth in a separate 
              written agreement between you and AXL Consulting.
            </p>

            <h2>Use of Website</h2>
            <h3>Permitted Use</h3>
            <p>
              You may use our website for lawful purposes only and in accordance with these Terms. 
              You agree to use our website only for its intended purposes.
            </p>
            
            <h3>Prohibited Activities</h3>
            <p>
              When using our website, you agree NOT to:
            </p>
            <ul>
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Use the website for any unlawful or fraudulent purpose</li>
              <li>Interfere with or disrupt the website or servers connected to the website</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Use automated systems (bots, scrapers) to access or collect data from the website</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Impersonate any person or entity</li>
              <li>Collect personal information about other users without consent</li>
            </ul>

            <h2>Intellectual Property Rights</h2>
            <h3>Our Content</h3>
            <p>
              All content on our website, including but not limited to text, graphics, logos, images, 
              audio clips, digital downloads, data compilations, and software, is the property of 
              AXL Consulting or its content suppliers and is protected by international copyright, 
              trademark, and other intellectual property laws.
            </p>
            
            <h3>Limited License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to access and use our 
              website for personal, non-commercial purposes. This license does not include the right to:
            </p>
            <ul>
              <li>Modify or copy our content</li>
              <li>Use our content for commercial purposes</li>
              <li>Remove any copyright or proprietary notices</li>
              <li>Transfer content to another person or &quot;mirror&quot; content on any other server</li>
            </ul>
            
            <h3>Trademarks</h3>
            <p>
              &quot;AXL Consulting,&quot; &quot;MenuSense,&quot; and associated logos are trademarks of AXL Consulting. 
              You may not use these trademarks without our prior written permission.
            </p>

            <h2>User Content</h2>
            <p>
              If you submit content to us (such as through contact forms or job applications), you grant 
              us a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, and display 
              such content in connection with providing our services.
            </p>
            <p>
              You represent and warrant that you own or have the necessary rights to submit such content 
              and that your content does not violate any third-party rights.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              OUR WEBSITE AND CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY 
              KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL 
              WARRANTIES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul>
              <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
              <li>Warranties that our website will be uninterrupted, error-free, or secure</li>
              <li>Warranties regarding the accuracy, reliability, or completeness of any content</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, AXL CONSULTING AND ITS OFFICERS, DIRECTORS, 
              EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, 
              DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH:
            </p>
            <ul>
              <li>Your use or inability to use our website</li>
              <li>Any conduct or content of third parties on our website</li>
              <li>Any content obtained from our website</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            <p>
              Our total liability for any claims arising out of or relating to these Terms or your use 
              of our website shall not exceed the amount you paid us, if any, for accessing our website 
              during the twelve (12) months prior to the claim.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless AXL Consulting and its officers, directors, 
              employees, agents, and affiliates from and against any claims, liabilities, damages, losses, 
              and expenses, including reasonable attorneys&apos; fees, arising out of or in any way connected with:
            </p>
            <ul>
              <li>Your access to or use of our website</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
            </ul>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned or 
              controlled by AXL Consulting. We have no control over and assume no responsibility for the 
              content, privacy policies, or practices of any third-party websites or services.
            </p>

            <h2>Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Denmark, 
              without regard to its conflict of law provisions. You agree to submit to the exclusive 
              jurisdiction of the courts located in Copenhagen, Denmark, for any disputes arising out 
              of or relating to these Terms or your use of our website.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision 
              shall be limited or eliminated to the minimum extent necessary, and the remaining provisions 
              shall remain in full force and effect.
            </p>

            <h2>Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and any other legal notices published on our 
              website, constitute the entire agreement between you and AXL Consulting regarding your use 
              of our website.
            </p>

            <h2>Waiver</h2>
            <p>
              Our failure to enforce any right or provision of these Terms shall not be considered a 
              waiver of those rights. Any waiver must be in writing and signed by AXL Consulting.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li><strong>Email:</strong> {siteConfig.contact.email}</li>
              <li><strong>Phone:</strong> {siteConfig.contact.phone}</li>
              <li><strong>Address:</strong> {siteConfig.headquarters.address}, {siteConfig.headquarters.city}, {siteConfig.headquarters.country}</li>
            </ul>

          </div>
        </div>
      </section>
    </>
  );
}
