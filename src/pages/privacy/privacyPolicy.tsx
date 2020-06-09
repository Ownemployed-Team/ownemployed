import React from 'react'
import { NavLink } from 'react-router-dom'

import { Text, Flex, Box } from 'rebass'

import Layout from 'components/Layout'

function Heading() {
    return (
        <Flex mt={3} mb={2} px={[0, 2, 6]}>
            <Box textAlign="center" width={'100%'}>
                <Text as="h3">OwnEmployed Privacy Policy</Text>
            </Box>
        </Flex>
    )
}

const PrivacyPolicy = () => {
    return (
        <Layout boxed={false}>
            <Heading />
            <Text as="p" p={2}>
                Privacy Policy
            </Text>
            <Text as="p" p={2}>
                Last updated: June 07, 2020
            </Text>
            <Text as="p" p={2}>
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You. We use Your Personal data to provide and
                improve the Service. By using the Service, You agree to the
                collection and use of information in accordance with this
                Privacy Policy.
            </Text>
            <Text as="h1" p={2}>
                Interpretation and Definitions
            </Text>
            <Text as="h3" p={2}>
                Interpretation
            </Text>
            <Text as="p" p={2}>
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
            </Text>
            <Text as="h3" p={2}>
                Definitions
            </Text>
            <Text as="p" p={2}>
                <strong>You</strong> means the individual accessing or using the
                Service, or the company, or other legal entity on behalf of
                which such individual is accessing or using the Service, as
                applicable. Under GDPR (General Data Protection Regulation), You
                can be referred to as the Data Subject or as the User as you are
                the individual using the Service. <br />
                <strong>Company</strong> (referred to as either "the Company",
                "We", "Us" or "Our" in this Agreement) refers to Ownemployed,
                Stockholm, Sweden. For the purpose of the GDPR, the Company is
                the Data Controller. <br />
                <strong>Affiliate</strong> Affiliate means an entity that
                controls, is controlled by or is under common control with a
                party, where "control" means ownership of 50% or more of the
                shares, equity interest or other securities entitled to vote for
                the election of directors or other managing authority. <br />
                <strong>Account</strong> means a unique account created for You
                to access our Service or parts of our Service. <br />
                <strong>Website</strong> refers to Ownemployed, accessible from
                https://www.ownemployed.com/ <br />
                <strong>Service</strong> refers to the Website. <br />
                <strong>Country</strong> refers to: Sweden <br />
                <strong>Service Provider</strong> means any natural or legal
                person who processes the data on behalf of the Company. It
                refers to third-party companies or individuals employed by the
                Company to facilitate the Service, to provide the Service on
                behalf of the Company, to perform services related to the
                Service or to assist the Company in analyzing how the Service is
                used. For the purpose of the GDPR, Service Providers are
                considered Data Processors.
                <br />
                <strong>Third-party Social Media Service</strong> refers to any
                website or any social network website through which a User can
                log in or create an account to use the Service. <br />
                <strong>Facebook Fan Page</strong> is a public profile named
                Fight against Unemployment by Corona (help others) specifically
                created by the Company on the Facebook social network,
                accessible from
                https://www.facebook.com/groups/2968814199864929/ <br />
                <strong>Personal Data</strong> is any information that relates
                to an identified or identifiable individual. For the purposes
                for GDPR, Personal Data means any information relating to You
                such as a name, an identification number, location data, online
                identifier or to one or more factors specific to the physical,
                physiological, genetic, mental, economic, cultural or social
                identity. <br />
                Cookies are small files that are placed on Your computer, mobile
                device or any other device by a website, containing the details
                of Your browsing history on that website among its many uses.{' '}
                <br />
                <strong>Device</strong> means any device that can access the
                Service such as a computer, a cellphone or a digital tablet.{' '}
                <br />
                Usage Data refers to data collected automatically, either
                generated by the use of the Service or from the Service
                infrastructure itself (for example, the duration of a page
                visit). <br />
                <strong>Data Controller</strong>, for the purposes of the GDPR
                (General Data Protection Regulation), refers to the Company as
                the legal person which alone or jointly with others determines
                the purposes and means of the processing of Personal Data.
            </Text>
            <Text as="h1" p={2}>
                Collecting and Using Your Personal Data
            </Text>
            <Text as="h4" p={2}>
                Types of Data Collected
            </Text>
            <Text as="h5" p={2}>
                Personal Data
            </Text>
            <Text as="p" p={2}>
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. Personally identifiable information may
                include, but is not limited to: <br />
                - Email address <br />
                - First name and last name <br />
                - Usage Data <br />
            </Text>
            <Text as="h5" p={2}>
                Usage Data
            </Text>
            <Text as="p" p={2}>
                Usage Data is collected automatically when using the Service.{' '}
                <br />
                Usage Data may include information such as Your Device's
                Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data. <br />
                When You access the Service by or through a mobile device, We
                may collect certain information automatically, including, but
                not limited to, the type of mobile device You use, Your mobile
                device unique ID, the IP address of Your mobile device, Your
                mobile operating system, the type of mobile Internet browser You
                use, unique device identifiers and other diagnostic data. <br />
                We may also collect information that Your browser sends whenever
                You visit our Service or when You access the Service by or
                through a mobile device. <br />
            </Text>
            <Text as="h5" p={2}>
                Information from Third-Party Social Media Services
            </Text>
            <Text as="p" p={2}>
                The Company allows You to create an account and log in to use
                the Service through the following Third-party Social Media
                Services: <br />
                - LinkedIn <br />
                If You decide to register through or otherwise grant us access
                to a Third-Party Social Media Service, We may collect Personal
                data that is already associated with Your Third-Party Social
                Media Service's account, such as Your name, Your email address,
                Your activities or Your contact list associated with that
                account. You may also have the option of sharing additional
                information with the Company through Your Third-Party Social
                Media Service's account. If You choose to provide such
                information and Personal Data, during registration or otherwise,
                You are giving the Company permission to use, share, and store
                it in a manner consistent with this Privacy Policy. <br />
            </Text>
            <Text as="h5" p={2}>
                Tracking Technologies and Cookies
            </Text>
            <Text as="p" p={2}>
                We use Cookies and similar tracking technologies to track the
                activity on Our Service and store certain information. Tracking
                technologies used are beacons, tags, and scripts to collect and
                track information and to improve and analyze Our Service. <br />
                You can instruct Your browser to refuse all Cookies or to
                indicate when a Cookie is being sent. However, if You do not
                accept Cookies, You may not be able to use some parts of our
                Service. <br />
                Cookies can be "Persistent" or "Session" Cookies. Persistent
                Cookies remain on your personal computer or mobile device when
                You go offline, while Session Cookies are deleted as soon as You
                close your web browser. Learn more about cookies: All About
                Cookies. <br />
                We use both session and persistent Cookies for the purposes set
                out below:
                <br />
            </Text>
            <Text as="h5" p={2}>
                Necessary / Essential Cookies
            </Text>
            <Text as="p" p={2}>
                Type: Session Cookies <br />
                Administered by: Us <br />
                Purpose: These Cookies are essential to provide You with
                services available through the Website and to enable You to use
                some of its features. They help to authenticate users and
                prevent fraudulent use of user accounts. Without these Cookies,
                the services that You have asked for cannot be provided, and We
                only use these Cookies to provide You with those services.
            </Text>
            <Text as="h5" p={2}>
                Cookies Policy / Notice Acceptance Cookies
            </Text>
            <Text as="p" p={2}>
                Type: Persistent Cookies Administered by: Us Purpose: These
                Cookies identify if users have accepted the use of cookies on
                the Website.
            </Text>
            <Text as="h5" p={2}>
                Functionality Cookies
            </Text>
            <Text as="p" p={2}>
                Type: Persistent Cookies <br />
                Administered by: Us <br />
                Purpose: These Cookies allow us to remember choices You make
                when You use the Website, such as remembering your login details
                or language preference. The purpose of these Cookies is to
                provide You with a more personal experience and to avoid You
                having to re-enter your preferences every time You use the
                Website.
            </Text>
            <Text as="h5" p={2}>
                Tracking and Performance Cookies
            </Text>
            <Text as="p" p={2}>
                Type: Persistent Cookies <br />
                Administered by: Third-Parties <br />
                Purpose: These Cookies are used to track information about
                traffic to the Website and how users use the Website. The
                information gathered via these Cookies may directly or
                indirectly identify you as an individual visitor. This is
                because the information collected is typically linked to a
                pseudonymous identifier associated with the device you use to
                access the Website. We may also use these Cookies to test new
                advertisements, pages, features or new functionality of the
                Website to see how our users react to them.
            </Text>
            <Text as="p" p={2}>
                For more information about the cookies we use and your choices
                regarding cookies, please visit our Cookies Policy or the
                Cookies section of our Privacy Policy.
            </Text>
            <Text as="h4" p={2}>
                Use of Your Personal Data
            </Text>
            <Text as="p" p={2}>
                The Company may use Personal Data for the following purposes:
            </Text>
            ·{' '}
            <Text as="ul" p={2}>
                <li>
                    <strong>To provide and maintain our Service</strong>,
                    including to monitor the usage of our Service.
                </li>
                <li>
                    <strong>To manage Your Account</strong>: to manage Your
                    registration as a user of the Service. The Personal Data You
                    provide can give You access to different functionalities of
                    the Service that are available to You as a registered user.
                </li>
                <li>
                    <strong>For the performance of a contract</strong>: the
                    development, compliance and undertaking of the purchase
                    contract for the products, items or services You have
                    purchased or of any other contract with Us through the
                    Service.
                </li>
                <li>
                    <strong>To contact You</strong>: To contact You by email,
                    telephone calls, SMS, or other equivalent forms of
                    electronic communication, such as a mobile application's
                    push notifications regarding updates or informative
                    communications related to the functionalities, products or
                    contracted services, including the security updates, when
                    necessary or reasonable for their implementation.
                </li>
                <li>
                    <strong>To provide You</strong> with news, special offers
                    and general information about other goods, services and
                    events which we offer that are similar to those that you
                    have already purchased or enquired about unless You have
                    opted not to receive such information.
                </li>
                <li>
                    <strong>To manage Your requests</strong>: To attend and
                    manage Your requests to Us. We may share your personal
                    information in the following situations:
                </li>
                <li>
                    <strong>With Service Providers</strong>: We may share Your
                    personal information with Service Providers to monitor and
                    analyze the use of our Service, to contact You.
                </li>
                <li>
                    <strong>For Business transfers</strong>: We may share or
                    transfer Your personal information in connection with, or
                    during negotiations of, any merger, sale of Company assets,
                    financing, or acquisition of all or a portion of our
                    business to another company.
                </li>
                <li>
                    <strong>With Affiliates</strong>: We may share Your
                    information with Our affiliates, in which case we will
                    require those affiliates to honor this Privacy Policy.
                    Affiliates include Our parent company and any other
                    subsidiaries, joint venture partners or other companies that
                    We control or that are under common control with Us.
                </li>
                <li>
                    <strong>With Business partners</strong>: We may share Your
                    information with Our business partners to offer You certain
                    products, services or promotions.
                </li>
                <li>
                    <strong>With other users</strong>: when You share personal
                    information or otherwise interact in the public areas with
                    other users, such information may be viewed by all users and
                    may be publicly distributed outside. If You interact with
                    other users or register through a Third-Party Social Media
                    Service, Your contacts on the Third-Party Social Media
                    Service may see Your name, profile, pictures and description
                    of Your activity. Similarly, other users will be able to
                    view descriptions of Your activity, communicate with You and
                    view Your profile.
                </li>
            </Text>
            <Text as="h4" p={2}>
                Retention of Your Personal Data
            </Text>
            <Text as="p" p={2}>
                The Company will retain Your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy. We
                will retain and use Your Personal Data to the extent necessary
                to comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable laws),
                resolve disputes, and enforce our legal agreements and policies.{' '}
                <br />
                Company will also retain Usage Data for internal analysis
                purposes. Usage Data is generally retained for a shorter period
                of time, except when this data is used to strengthen the
                security or to improve the functionality of Our Service, or We
                are legally obligated to retain this data for longer time
                periods.
            </Text>
            <Text as="h4" p={2}>
                Transfer of Your Personal Data
            </Text>
            <Text as="p" p={2}>
                Your information, including Personal Data, is processed at the
                Company's operating offices and in any other places where the
                parties involved in the processing are located. It means that
                this information may be transferred to — and maintained on —
                computers located outside of Your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ than those from Your jurisdiction. <br />
                Your consent to this Privacy Policy followed by Your submission
                of such information represents Your agreement to that transfer.
                The Company will take all steps reasonably necessary to ensure
                that Your data is treated securely and in accordance with this
                Privacy Policy and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information.
            </Text>
            <Text as="h4" p={2}>
                Disclosure of Your Personal Data
            </Text>
            <Text as="p" p={2}>
                <strong>Business Transactions</strong> <br />
                If the Company is involved in a merger, acquisition or asset
                sale, Your Personal Data may be transferred. We will provide
                notice before Your Personal Data is transferred and becomes
                subject to a different Privacy Policy. <br />
                <strong>Law enforcement</strong> <br />
                Under certain circumstances, the Company may be required to
                disclose Your Personal Data if required to do so by law or in
                response to valid requests by public authorities (e.g. a court
                or a government agency). <br />
                <strong>Other legal requirements</strong> <br />
                The Company may disclose Your Personal Data in the good faith
                belief that such action is necessary to: <br />
            </Text>
            <Text as="ul" p={2}>
                <li>Comply with a legal obligation</li>
                <li>
                    Protect and defend the rights or property of the Company
                </li>
                <li>
                    Prevent or investigate possible wrongdoing in connection
                    with the Service
                </li>
                <li>
                    Protect the personal safety of Users of the Service or the
                    public
                </li>
                <li>Protect against legal liability</li>
            </Text>
            <Text as="p" p={2}>
                <strong>Security of Your Personal Data</strong> <br />
                The security of Your Personal Data is important to Us, but
                remember that no method of transmission over the Internet, or
                method of electronic storage is 100% secure. While We strive to
                use commercially acceptable means to protect Your Personal Data,
                We cannot guarantee its absolute security.
            </Text>
            <Text as="h2" p={2}>
                Detailed Information on the Processing of Your Personal Data
            </Text>{' '}
            ·
            <Text as="p" p={2}>
                Service Providers have access to Your Personal Data only to
                perform their tasks on Our behalf and are obligated not to
                disclose or use it for any other purpose. <br />
                For example:
            </Text>{' '}
            · ·{' '}
            <Text as="h5" p={2}>
                Analytics
            </Text>
            ·{' '}
            <Text as="p" p={2}>
                We may use third-party Service providers to monitor and analyze
                the use of our Service.
            </Text>
            <Text as="ul" p={2}>
                <li>
                    Google Analytics <br />
                    Google Analytics is a web analytics service offered by
                    Google that tracks and reports website traffic. Google uses
                    the data collected to track and monitor the use of our
                    Service. This data is shared with other Google services.
                    Google may use the collected data to contextualise and
                    personalise the ads of its own advertising network. You can
                    opt-out of having made your activity on the Service
                    available to Google Analytics by installing the Google
                    Analytics opt-out browser add-on. The add-on prevents the
                    Google Analytics JavaScript (ga.js, analytics.js and dc.js)
                    from sharing information with Google Analytics about visits
                    activity. For more information on the privacy practices of
                    Google, please visit the Google Privacy & Terms web page:
                    https://policies.google.com/privacy
                </li>
            </Text>
            ·{' '}
            <Text as="h5" p={2}>
                Email Marketing
            </Text>
            <Text as="p" p={2}>
                We may use Your Personal Data to contact You with newsletters,
                marketing or promotional materials and other information that
                may be of interest to You. You may opt-out of receiving any, or
                all, of these communications from Us by following the
                unsubscribe link or instructions provided in any email We send
                or by contacting Us. We may use Email Marketing Service
                Providers to manage and send emails to You.
                <ul>
                    <li>
                        Mailchimp <br />
                        Mailchimp is an email marketing sending service provided
                        by The Rocket Science Group LLC. <br />
                        For more information on the privacy practices of
                        Mailchimp, please visit their Privacy policy:
                        https://mailchimp.com/legal/privacy/
                    </li>
                </ul>
            </Text>
            <Text as="h2" p={2}>
                GDPR Privacy
            </Text>
            <Text as="h5" p={2}>
                Legal Basis for Processing Personal Data under GDPR
            </Text>
            <Text as="p" p={2}>
                We may process Personal Data under the following conditions:
                <ul>
                    <li>
                        Consent: You have given Your consent for processing
                        Personal Data for one or more specific purposes.
                    </li>
                    <li>
                        Performance of a contract: Provision of Personal Data is
                        necessary for the performance of an agreement with You
                        and/or for any pre-contractual obligations thereof.
                    </li>
                    <li>
                        Legal obligations: Processing Personal Data is necessary
                        for compliance with a legal obligation to which the
                        Company is subject.
                    </li>
                    <li>
                        Vital interests: Processing Personal Data is necessary
                        in order to protect Your vital interests or of another
                        natural person.
                    </li>
                    <li>
                        Public interests: Processing Personal Data is related to
                        a task that is carried out in the public interest or in
                        the exercise of official authority vested in the
                        Company.
                    </li>
                    <li>
                        Legitimate interests: Processing Personal Data is
                        necessary for the purposes of the legitimate interests
                        pursued by the Company.
                    </li>
                </ul>
                In any case, the Company will gladly help to clarify the
                specific legal basis that applies to the processing, and in
                particular whether the provision of Personal Data is a statutory
                or contractual requirement, or a requirement necessary to enter
                into a contract.
            </Text>
            <Text as="h5" p={2}>
                Your Rights under the GDPR
            </Text>
            <Text as="p" p={2}>
                The Company undertakes to respect the confidentiality of Your
                Personal Data and to guarantee You can exercise Your rights.{' '}
                <br />
                You have the right under this Privacy Policy, and by law if You
                are within the EU, to:
                <ul>
                    <li>
                        Request access to Your Personal Data. The right to
                        access, update or delete the information We have on You.
                        Whenever made possible, you can access, update or
                        request deletion of Your Personal Data directly within
                        Your account settings section. If you are unable to
                        perform these actions yourself, please contact Us to
                        assist You. This also enables You to receive a copy of
                        the Personal Data We hold about You.
                    </li>
                    <li>
                        Request correction of the Personal Data that We hold
                        about You. You have the right to to have any incomplete
                        or inaccurate information We hold about You corrected.
                    </li>
                    <li>
                        Object to processing of Your Personal Data. This right
                        exists where We are relying on a legitimate interest as
                        the legal basis for Our processing and there is
                        something about Your particular situation, which makes
                        You want to object to our processing of Your Personal
                        Data on this ground. You also have the right to object
                        where We are processing Your Personal Data for direct
                        marketing purposes.
                    </li>
                    <li>
                        Request erasure of Your Personal Data. You have the
                        right to ask Us to delete or remove Personal Data when
                        there is no good reason for Us to continue processing
                        it.
                    </li>
                    <li>
                        Request the transfer of Your Personal Data. We will
                        provide to You, or to a third-party You have chosen,
                        Your Personal Data in a structured, commonly used,
                        machine-readable format. Please note that this right
                        only applies to automated information which You
                        initially provided consent for Us to use or where We
                        used the information to perform a contract with You.
                    </li>
                    <li>
                        Withdraw Your consent. You have the right to withdraw
                        Your consent on using your Personal Data. If You
                        withdraw Your consent, We may not be able to provide You
                        with access to certain specific functionalities of the
                        Service.
                    </li>
                </ul>
            </Text>
            <Text as="h5" p={2}>
                Exercising of Your GDPR Data Protection Rights
            </Text>
            <Text as="p" p={2}>
                You may exercise Your rights of access, rectification,
                cancellation and opposition by contacting Us. Please note that
                we may ask You to verify Your identity before responding to such
                requests. If You make a request, We will try our best to respond
                to You as soon as possible. <br />
                You have the right to complain to a Data Protection Authority
                about Our collection and use of Your Personal Data. For more
                information, if You are in the European Economic Area (EEA),
                please contact Your local data protection authority in the EEA.
            </Text>
            <Text as="h2" p={2}>
                Facebook Fan Page
            </Text>
            <Text as="h4" p={2}>
                Data Controller for the Facebook Fan Page
            </Text>
            <Text as="p" p={2}>
                The Company is the Data Controller of Your Personal Data
                collected while using the Service. As operator of the Facebook
                Fan Page https://www.facebook.com/groups/2968814199864929/, the
                Company and the operator of the social network Facebook are
                Joint Controllers. The Company has entered into agreements with
                Facebook that define the terms for use of the Facebook Fan Page,
                among other things. These terms are mostly based on the Facebook
                Terms of Service: https://www.facebook.com/terms.php Visit the
                Facebook Privacy Policy https://www.facebook.com/policy.php for
                more information about how Facebook manages Personal data or
                contact Facebook online, or by mail: Facebook, Inc. ATTN,
                Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025,
                United States.
            </Text>
            <Text as="h4" p={2}>
                Facebook Insights
            </Text>
            <Text as="p" p={2}>
                We use the Facebook Insights function in connection with the
                operation of the Facebook Fan Page and on the basis of the GDPR,
                in order to obtain anonymized statistical data about Our users.
                For this purpose, Facebook places a Cookie on the device of the
                user visiting Our Facebook Fan Page. Each Cookie contains a
                unique identifier code and remains active for a period of two
                years, except when it is deleted before the end of this period.
                Facebook receives, records and processes the information stored
                in the Cookie, especially when the user visits the Facebook
                services, services that are provided by other members of the
                Facebook Fan Page and services by other companies that use
                Facebook services. For more information on the privacy practices
                of Facebook, please visit Facebook Privacy Policy here:
                https://www.facebook.com/full_data_use_policy
            </Text>
            <Text as="h2" p={2}>
                Your California Privacy Rights (California's Shine the Light
                law)
            </Text>
            <Text as="p" p={2}>
                Under California Civil Code Section 1798 (California's Shine the
                Light law), California residents with an established business
                relationship with us can request information once a year about
                sharing their Personal Data with third parties for the third
                parties' direct marketing purposes. If you'd like to request
                more information under the California Shine the Light law, and
                if you are a California resident, You can contact Us using the
                contact information provided below.
            </Text>
            <Text as="h2" p={2}>
                California Privacy Rights for Minor Users (California Business
                and Professions Code Section 22581)
            </Text>
            <Text as="p" p={2}>
                California Business and Professions Code section 22581 allow
                California residents under the age of 18 who are registered
                users of online sites, services or applications to request and
                obtain removal of content or information they have publicly
                posted. To request removal of such data, and if you are a
                California resident, You can contact Us using the contact
                information provided below, and include the email address
                associated with Your account. Be aware that Your request does
                not guarantee complete or comprehensive removal of content or
                information posted online and that the law may not permit or
                require removal in certain circumstances.
            </Text>
            <Text as="h2" p={2}>
                Links to Other Websites
            </Text>
            <Text as="p" p={2}>
                Our Service may contain links to other websites that are not
                operated by Us. If You click on a third party link, You will be
                directed to that third party's site. We strongly advise You to
                review the Privacy Policy of every site You visit. We have no
                control over and assume no responsibility for the content,
                privacy policies or practices of any third party sites or
                services.
            </Text>
            <Text as="h2" p={2}>
                Changes to this Privacy Policy
            </Text>
            <Text as="p" p={2}>
                We may update our Privacy Policy from time to time. We will
                notify You of any changes by posting the new Privacy Policy on
                this page. <br />
                We will let You know via email and/or a prominent notice on Our
                Service, prior to the change becoming effective and update the
                "Last updated" date at the top of this Privacy Policy. <br />
                You are advised to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
            </Text>
            <Text as="h2" p={2}>
                Contact Us
            </Text>
            <Text as="p" p={2}>
                If you have any questions about this Privacy Policy, You can
                contact us: <br />
                By email: ownemployed@gmail.com
            </Text>
            <NavLink to="/legal/terms-of-service" exact>
                Read Our Terms of Service
            </NavLink>
        </Layout>
    )
}

export default PrivacyPolicy
