import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section
                style={{
                    position: 'relative',
                    minHeight: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '200px',
                    paddingBottom: '60px',
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                    textAlign: 'center',
                    color: 'white'
                }}
            >
                <div
                    className="container mx-auto px-6"
                    style={{
                        maxWidth: '1600px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'white' }}>Terms and Conditions</h1>
                    <p className="text-lg opacity-90">Last updated: July 04, 2024</p>
                </div>
            </section>

            <div className="py-16 px-6 md:px-12 lg:px-24" style={{ paddingTop: '80px' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <div className="prose prose-slate max-w-none text-center">
                        <p className="text-slate-700 mb-8 leading-relaxed text-center">
                            Welcome to Mittal Software Labs (mittalsoftwarelabs.com). Please read the following information carefully before using this site. By accessing or using this site, you agree to adhere to the following terms. If you do not agree with any part of these terms, please refrain from using this site.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12 text-center">Disclaimer of Warranties</h2>
                        <p className="text-slate-700 mb-6 leading-relaxed text-center">
                            All information, products, and services on this website are provided "as is" without any warranties, either express or implied. This includes, but is not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Mittal Software Labs (MSL) will not be liable for any damages arising from the use or inability to use this website or any linked site. This includes, but is not limited to, direct, indirect, special, or consequential damages such as lost profits, loss of use, business interruptions, or loss of data. This limitation of liability applies regardless of whether the action is based on contract, negligence, or any other tortious action, even if MSL has been advised of the possibility of such damages. Some jurisdictions do not permit the exclusion or limitation of certain warranties or damages, so these exclusions may not apply to you.
                        </p>
                        <p className="text-slate-700 mb-8 leading-relaxed text-center">
                            MSL does not guarantee the accuracy, completeness, or suitability of the information, products, or services provided on this site for any particular purpose.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12 text-center">Changes to Terms and Conditions</h2>
                        <p className="text-slate-700 mb-8 leading-relaxed text-center">
                            MSL reserves the right to modify, add, or remove portions of these terms and conditions at any time. Any changes will take effect immediately upon notice, which can be given by posting the updated terms on the site or by other means. We encourage you to review these terms regularly. Continued use of the site after any changes implies acceptance of the revised terms.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12 text-center">Submissions and Ideas</h2>
                        <p className="text-slate-700 mb-8 leading-relaxed text-center">
                            MSL and its employees do not accept or consider unsolicited ideas, including new advertising campaigns, promotions, products, technologies, processes, materials, marketing plans, or product names. Please do not submit any original artwork, samples, demos, or other creative materials. This policy is intended to prevent misunderstandings or disputes if MSL's solutions or strategies appear similar to unsolicited ideas submitted to us. Any unsolicited ideas or materials sent to MSL will not be treated as confidential or proprietary.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12 text-center">Links to Third-Party Sites</h2>
                        <p className="text-slate-700 mb-8 leading-relaxed text-center">
                            For your convenience, our site may include links to third-party websites. MSL does not make any representations or warranties regarding the content or use of these external sites. Providing a link does not imply endorsement, adoption, or acceptance of responsibility for the third-party site's content or its use.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12 text-center">Trademarks and Copyrights</h2>
                        <p className="text-slate-700 mb-6 leading-relaxed text-center">
                            All product and company names mentioned on our site may be trademarks of their respective owners. Use of these trademarks is prohibited without express written consent from the trademark owner.
                        </p>
                        <p className="text-slate-700 mb-6 leading-relaxed text-center">
                            The content on this website, including text, graphics, logos, and images, is the property of MSL and is protected by copyright laws. You may not reproduce, modify, or distribute any part of this website without prior written permission from MSL.
                        </p>
                        <p className="text-slate-700 mb-6 leading-relaxed text-center">
                            Elements of the MSL website are protected by trade dress, trademark, unfair competition, and other laws and may not be copied in whole or in part. No logos, graphics, or images from this site may be used without express written permission from MSL.
                        </p>

                        <div className="mt-12 pt-8 border-t border-slate-200">
                            <p className="text-slate-500 text-sm text-center">
                                Copyright © 2024 Mittal Software Labs. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
