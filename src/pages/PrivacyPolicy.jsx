import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section
                style={{
                    position: 'relative',
                    minHeight: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '200px',
                    paddingBottom: '60px',
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                    textAlign: 'center',
                    color: 'white'
                }}
            >
                <div
                    className="container"
                    style={{
                        width: '100%',
                        maxWidth: '1600px',
                        margin: '0 auto',
                        padding: '0 2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'white' }}>Privacy Policy</h1>
                    <p className="text-lg opacity-90" style={{ textAlign: 'center', width: '100%' }}>Last updated: July 04, 2024</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-white">
                <div className="container max-w-4xl mx-auto px-6">
                    <div className="prose prose-lg" style={{ maxWidth: 'none' }}>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                        </p>
                        <p className="text-slate-600 mb-12 leading-relaxed">
                            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                        </p>

                        {/* Interpretation and Definitions */}
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-12">Interpretation and Definitions</h2>

                        <h3 className="text-xl font-semibold text-slate-800 mb-4">Interpretation</h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                        </p>

                        <h3 className="text-xl font-semibold text-slate-800 mb-4">Definitions</h3>
                        <p className="text-slate-600 mb-6">For the purposes of this Privacy Policy:</p>

                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #3b82f6' }}>
                                <strong className="text-slate-900">Account</strong>
                                <span className="text-slate-600"> means a unique account created for You to access our Service or parts of our Service.</span>
                            </li>
                            <li style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #3b82f6' }}>
                                <strong className="text-slate-900">Affiliate</strong>
                                <span className="text-slate-600"> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</span>
                            </li>
                            <li style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #3b82f6' }}>
                                <strong className="text-slate-900">Company</strong>
                                <span className="text-slate-600"> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Mittal Software Labs Ltd, Mittal Software Labs Ltd. B1/E13, Block E, Mohan Cooperative Industrial Estate, Badarpur, New Delhi, Delhi, India - 110044.</span>
                            </li>
                            <li style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #3b82f6' }}>
                                <strong className="text-slate-900">Cookies</strong>
                                <span className="text-slate-600"> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</span>
                            </li>
                            <li style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #3b82f6' }}>
                                <strong className="text-slate-900">Country</strong>
                                <span className="text-slate-600"> refers to: Delhi, India</span>
                            </li>
                            <li style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #3b82f6' }}>
                                <strong className="text-slate-900">Device</strong>
                                <span className="text-slate-600"> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</span>
                            </li>
                            <li style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #3b82f6' }}>
                                <strong className="text-slate-900">Personal Data</strong>
                                <span className="text-slate-600"> is any information that relates to an identified or identifiable individual.</span>
                            </li>
                            <li style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #3b82f6' }}>
                                <strong className="text-slate-900">Service</strong>
                                <span className="text-slate-600"> refers to the Website.</span>
                            </li>
                            <li style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #3b82f6' }}>
                                <strong className="text-slate-900">Service Provider</strong>
                                <span className="text-slate-600"> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</span>
                            </li>
                            <li style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #3b82f6' }}>
                                <strong className="text-slate-900">Third-party Social Media Service</strong>
                                <span className="text-slate-600"> refers to any website or any social network website through which a User can log in or create an account to use the Service.</span>
                            </li>
                            <li style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #3b82f6' }}>
                                <strong className="text-slate-900">Usage Data</strong>
                                <span className="text-slate-600"> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</span>
                            </li>
                            <li style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #3b82f6' }}>
                                <strong className="text-slate-900">Website</strong>
                                <span className="text-slate-600"> refers to Mittal Software Labs, accessible from </span>
                                <a href="https://www.mittalsoftwarelabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>https://www.mittalsoftwarelabs.com/</a>
                            </li>
                            <li style={{ marginBottom: '1.25rem', paddingLeft: '1rem', borderLeft: '3px solid #3b82f6' }}>
                                <strong className="text-slate-900">You</strong>
                                <span className="text-slate-600"> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
