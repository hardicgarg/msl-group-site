import React from 'react';

const PrivacyPolicy = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'white' }}>Privacy Policy</h1>
                    <p className="text-lg opacity-90">Last updated: July 04, 2024</p>
                </div>
            </section>

            <div className="py-16 px-6 md:px-12 lg:px-24" style={{ paddingTop: '80px' }}>
                <div className="max-w-4xl mx-auto text-center">

                    <div className="prose prose-slate max-w-none text-center">
                        <p className="text-slate-700 mb-6 leading-relaxed text-center">
                            This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                        </p>
                        <p className="text-slate-700 mb-10 leading-relaxed text-center">
                            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Interpretation and Definitions</h2>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Interpretation</h3>
                        <p className="text-slate-700 mb-8 leading-relaxed text-center">
                            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">Definitions</h3>
                        <p className="text-slate-700 mb-6 text-center">For the purposes of this Privacy Policy:</p>

                        <ul className="space-y-4 mb-8 list-none p-0 flex flex-column align-items-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <li className="flex items-start text-slate-700 max-w-2xl text-center">
                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0"></span>
                                <span><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</span>
                            </li>
                            <li className="flex items-start text-slate-700 max-w-2xl text-center">
                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0"></span>
                                <span><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</span>
                            </li>
                            <li className="flex items-start text-slate-700 max-w-2xl text-center">
                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0"></span>
                                <span><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Mittal Software Labs Ltd, Mittal Software Labs Ltd. B1/E13, Block E, Mohan Cooperative Industrial Estate, Badarpur, New Delhi, Delhi, India - 110044.</span>
                            </li>
                            <li className="flex items-start text-slate-700 max-w-2xl text-center">
                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0"></span>
                                <span><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</span>
                            </li>
                            <li className="flex items-start text-slate-700 max-w-2xl text-center">
                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0"></span>
                                <span><strong>Country</strong> refers to: Delhi, India</span>
                            </li>
                            <li className="flex items-start text-slate-700 max-w-2xl text-center">
                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0"></span>
                                <span><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</span>
                            </li>
                            <li className="flex items-start text-slate-700 max-w-2xl text-center">
                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0"></span>
                                <span><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</span>
                            </li>
                            <li className="flex items-start text-slate-700 max-w-2xl text-center">
                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0"></span>
                                <span><strong>Service</strong> refers to the Website.</span>
                            </li>
                            <li className="flex items-start text-slate-700 max-w-2xl text-center">
                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0"></span>
                                <span><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</span>
                            </li>
                            <li className="flex items-start text-slate-700 max-w-2xl text-center">
                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0"></span>
                                <span><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</span>
                            </li>
                            <li className="flex items-start text-slate-700 max-w-2xl text-center">
                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0"></span>
                                <span><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</span>
                            </li>
                            <li className="flex items-start text-slate-700 max-w-2xl text-center">
                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0"></span>
                                <span><strong>Website</strong> refers to Mittal Software Labs, accessible from <a href="https://www.mittalsoftwarelabs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.mittalsoftwarelabs.com/</a></span>
                            </li>
                            <li className="flex items-start text-slate-700 max-w-2xl text-center">
                                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900 shrink-0"></span>
                                <span><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
