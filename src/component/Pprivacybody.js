import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './pprivacybody.css'
import img1 from '../images/valid-document 3.svg';
import img2 from '../images/drone 1.svg';

const Pprivacybody = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <section className='ppolicybody-section'>
            <Container>
                <Row>
                    <Col className='col-md-3'>
                        <div className="tab">
                            <h3 className='mb-4'>Navigation Tab</h3>
                            <button className={activeTab === 'tab1' ? "tablinks active" : "tablinks"} onClick={() => { setActiveTab('tab1') }} ><span><img src={img1} alt=''/></span>Terms & Conditions</button>
                            <button className={activeTab === 'tab2' ? "tablinks active" : "tablinks"} onClick={() => { setActiveTab('tab2') }} ><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.9479 9.99259C15.4881 9.95939 13.5018 7.73912 13.5018 4.99816C11.0349 4.99816 9.03694 2.79156 9.0067 0.0588002C8.04835 -0.102915 7.06855 0.0705187 6.20406 0.559572L3.77372 1.93533C2.89883 2.43072 2.18761 3.22123 1.74205 4.19349L0.508071 6.88406C0.061186 7.85879 -0.0965811 8.96566 0.0573698 10.0461L0.482055 13.0253C0.635853 14.1047 1.09315 15.1023 1.78846 15.8753L3.71395 18.0143C4.40706 18.7847 5.30188 19.2914 6.27015 19.4619L8.96697 19.9365C9.93412 20.1069 10.9252 19.9322 11.7981 19.4381L14.2284 18.0628C15.1032 17.5672 15.8144 16.7768 16.2601 15.8046L17.4941 13.114C17.9356 12.1515 18.0921 11.0602 17.9479 9.99259ZM6.18754 14.3745C5.56633 14.3745 5.06254 13.8148 5.06254 13.1246C5.06254 12.4343 5.56633 11.8746 6.18754 11.8746C6.80874 11.8746 7.31253 12.4343 7.31253 13.1246C7.31253 13.8148 6.80874 14.3745 6.18754 14.3745ZM7.31253 8.12466C6.69132 8.12466 6.18754 7.56491 6.18754 6.87468C6.18754 6.18446 6.69132 5.62471 7.31253 5.62471C7.93374 5.62471 8.43752 6.18446 8.43752 6.87468C8.43752 7.56491 7.93374 8.12466 7.31253 8.12466ZM12.9375 13.1246C12.3163 13.1246 11.8125 12.5648 11.8125 11.8746C11.8125 11.1844 12.3163 10.6246 12.9375 10.6246C13.5587 10.6246 14.0625 11.1844 14.0625 11.8746C14.0625 12.5648 13.5587 13.1246 12.9375 13.1246Z" fill="black" />
                            </svg>
                                Cookies Policy</button>
                            <button className={activeTab === 'tab3' ? "tablinks active" : "tablinks"} onClick={() => { setActiveTab('tab3') }} ><span><img src={img1} alt=''/></span>Trademarks & Copyright</button>
                            <button className={activeTab === 'tab4' ? "tablinks active" : "tablinks"} onClick={() => { setActiveTab('tab4') }} ><span><img src={img2} alt=''/></span>Disclaimer</button>
                            <button className={activeTab === 'tab5' ? "tablinks active" : "tablinks"} onClick={() => { setActiveTab('tab5') }} ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516h-4-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48V304c0 26.5 21.5 48 48 48H156.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z"/></svg>User’s Rights</button>
                        </div>

                    </Col>
                    <Col className='col-md-9 tabdiv'>
                        <div className={activeTab === "tab1" ? "tabcontent active" : "tabcontent"} >
                            {/* <h3>Lorem ipsum 1</h3> */}
                            <p>Welcome to the MXB Investment Company’s website (www.mxb.sa, 'the website').
                                This Privacy Policy is maintained by MXB Investment Company ('MXB', 'We', 'Our', 'Us') between us and users of this website (‘you', 'your') for respecting our users' privacy and ensuring that we take all reasonable measures to safeguard our users' information and data including their personal data (the “Data”) in accordance with the applicable regulations of the Kingdom of Saudi Arabia.  We provide this Privacy Policy to our users so that our users can understand how we may process, collect, use, treat, and protect our users' data when they visit our website.
                                The Privacy Policy is to be read in conjunction with our Terms of Use, which sets out the terms on which we process any personal data we collect from you, or that you provide to us. By using our website, you agree to be bound by the terms of this Privacy Policy and for us to use your data in the manner described in this Privacy Policy.</p>

                            <h6> Collection of Information</h6>
                            <p>We collect non-personally identifiable information about you in several ways, including tracking your activities through your Internet Protocol (IP) address or most-recently-visited URL.
                                However, we do not collect any Personally Identifiable Information (PII) about you unless you voluntarily submit contact information to us, such as, but not limited to, name, phone, email address, and mailing address by filling out a form or survey, registering your email address with us or emailing us. We may also collect personal information from you at other points on our website that state that personal information is being collected.</p>

                            <h6> Disclosure of Information</h6>
                            <p>We do not sell or rent your personally identifiable information to any third parties.</p>

                            <h6> Use of Information</h6>
                            <p>We use personally identifiable and non-personally identifiable information for internal marketing purposes, trend analysis, pattern detection, and site administration. However, we do not use personally identifiable information collected from the website to send unsolicited mailings to you.</p>

                            <h6>Third Party Sites</h6>
                            <p>This policy only addresses our activities from our servers. Other sites (including those that we link to within an advertisement, article or otherwise, and third-party sites or services with which we offer or co-brand) may have their own policies, which we do not control, and thus are not addressed by this policy.</p>

                            <h6>Review and Removal of Your Personally Identifiable Data</h6>
                            <p>If you provide us with personally identifiable information, we will provide you with a way to review the information we have on file and either change or remove such data. To do so, please notify us via post or email at the address above and we will provide you with your contact information for review. To make changes, send us the changes and we will respond to your request for access within thirty (30) days of the request. Unfortunately, to the extent that such information is also stored in other databases, we cannot always ensure that such corrections or deletions will reach the other databases.  Should you desire the removal of the information you have provided to us online from our records, kindly furnish us with the identical information as originally submitted, utilizing the aforementioned address. We will use all reasonable efforts to ensure that your information is removed from our records.<br /><br />

                                We will only keep your personal information for as long as is reasonably necessary or legally permitted or required by the Applicable Law. We will ensure that it is disposed of in a secure manner when it’s no longer needed or upon your request. When data destruction is required, our team will ensure secure disposal.
                            </p>
                        </div>

                        <div className={activeTab === "tab2" ? "tabcontent active" : "tabcontent"} >
                            {/* <h3>Lorem ipsum 2</h3> */}
                            <h6>Cookies and Other Tracking Methods</h6>
                            <p>When you view our website, we might store some information on your computer through the use of cookies. “Cookies” are small pieces of text stored on your hard drive primarily to improve the services provided.  When you access our website, we may send a cookie to your device. Cookies, which are tied to personal information, do not spy on you and/or invade your privacy or hard drive and steal information, rather, they help you navigate a website as easily as possible. These cookies enable us to recognize your device and customize your online experience. Cookies can help us provide information that is targeted to your interests and they allow us to better understand how users use our website, which in turn helps us focus our resources on features that are most popular with our users. If you do not wish to receive cookies, you are free to decline if your browser permits, but some parts of our site, may not work properly in that case.<br />
                                We use a third-party tracking service from Google Analytics that uses cookies to track information about visitors to our site in the aggregate on page visits, time on page, and visitor bounce rates to enable our making the site better and more informative to our visitors.</p>
                        </div>

                        <div className={activeTab === "tab3" ? "tabcontent active" : "tabcontent"} >
                            {/* <h3>Lorem ipsum 3</h3> */}
                            <h6>Trademarks And Copyright</h6>
                            <p>This site includes material, trademarks, logos, slogans, and products. We do not grant you any license to use them, whether they belong to MXB Investment Company or any third-party intellectual property rights. MXB Investment Company and its logo are registered in the Kingdom of Saudi Arabia. You are prohibited from the copy or use of the MXB Investment Company logo or any service products or any third-party products without the prior written permission of the legal owner.</p>

                            <h6>Legal Disclosure</h6>
                            <p> We reserve the right to disclose your personally identifiable information as required by law and when we believe that disclosure is necessary to protect our rights and/or comply with a judicial proceeding, court order, or legal process served on our website. This will generally not affect your ability to access and enjoy our website. However, you may not be able to access some of the functionalities of our website. Also, we might share your data with other government entities as required by law as and when required.</p>

                            <h6>Security</h6>
                            <p> We use industry-standard methods to protect your personally identifiable information from unauthorized access. Among other techniques, we usually store such information on a computer behind our “firewall” in a secure location, and we often restrict the number of employees internally who can access such data.</p>

                            <h6>Amendments</h6>
                            <p>The information, material, and content provided on this website may be changed by us at any time without notice to you. In addition, changes and updates may be made to these terms and conditions by us at any time without notice to you.
                            </p>
                        </div>
                        <div className={activeTab === "tab4" ? "tabcontent active" : "tabcontent"} >
                            {/* <h3>Lorem ipsum 3</h3> */}
                            <h6>Disclaimer</h6>
                            <p>MXB Investment is not responsible if the information made available on our platforms is not accurate, complete, or current. The information provided is for general information purposes only. Any reliance you place on such information is strictly at your own risk. You agree that it is your responsibility to monitor changes on our platforms.
                                MXB accepts no responsibility for any loss or damage, howsoever incurred, which may result from accessing or reliance on the content on the website, and disclaims, to the fullest extent permitted by applicable law, any, or all liability with respect to acts or omissions made by readers on the basis of the content on the website. If you have any questions on the content of the MXB’s website, please contact  info@mxb.sa.</p>
                        </div>
                        <div className={activeTab === "tab5" ? "tabcontent active" : "tabcontent"} >
                            {/* <h3>Lorem ipsum 3</h3> */}
                            <h6>User’s Rights</h6>
                            <p> If you wish to carry out any of your rights -mentioned below-, we may ask you for additional information to confirm your identity and for security purposes, before disclosing personal information to you. Those rights are as follows:</p>
                            <p>1. If it would impact the confidentiality, we owe to others, or</p>
                            <p>2. If we are legally entitled to deal with the request in a different way, or</p>
                            <p>3. If your request involves the deletion of information that is required to comply with legal requirements.</p>

                            <p> In the event we require additional time due to the complexity of the request, we shall promptly inform you of the same. Your right as a Data owner includes the following:</p>
                            <p>1. The right to view your Data</p>
                            <p>2. The right to delete your Data</p>
                            <p>3. The right to modify/update your Data</p>
                            <p>4. The right to know how and why we process your Data</p>
                            <p>5. Other rights granted by the Applicable Law</p>

                            <h6>Unlawful Use</h6>
                            <p>You are prohibited from using this website for any purpose which is unlawful, abusive, libelous, obscene, or threatening.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Pprivacybody
