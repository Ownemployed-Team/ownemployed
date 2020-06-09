import React from 'react'
import { NavLink } from 'react-router-dom'
import { Text, Flex, Box } from 'rebass'

import Layout from 'components/Layout'

function Heading() {
    return (
        <Flex mt={3} mb={2} px={[0, 2, 6]}>
            <Box textAlign="center" width={'100%'}>
                <Text as="h3">OwnEmployed Terms and Conditions</Text>
            </Box>
        </Flex>
    )
}

const TermsOfService = () => (
    <Layout boxed={false}>
        <Heading />
        <Text as="p" p={2}>
            Terms and Conditions <br />
            Last updated: June 05, 2020 <br />
            Please read these terms and conditions carefully before using Our
            Service.
        </Text>

        <Text as="h2" p={2}>
            Interpretation and Definitions
        </Text>

        <Text as="h5" p={2}>
            Interpretation
        </Text>

        <Text as="p" p={2}>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. <br />
            The following definitions shall have the same meaning regardless of
            whether they appear in singular or in plural.
        </Text>

        <Text as="h5" p={2}>
            Definitions
        </Text>

        <Text as="p" p={2}>
            For the purposes of these Terms and Conditions: <br />-{' '}
            <strong>Affiliate</strong> means an entity that controls, is
            controlled by or is under common control with a party, where
            "control" means ownership of 50% or more of the shares, equity
            interest or other securities entitled to vote for the election of
            directors or other managing authority. <br />-{' '}
            <strong>Account</strong> means a unique account created for You to
            access our Service or parts of our Service. <br />-{' '}
            <strong>Company</strong> (referred to as either "the Company", "We",
            "Us" or "Our" in this Agreement) refers to Ownemployed, Stockholm,
            Sweden. <br />- <strong>Content</strong> refers to content such as
            text, images, or other information that can be posted, uploaded,
            linked to or otherwise made available by You, regardless of the form
            of that content. <br />- <strong>Country</strong> refers to: Sweden
            <br />- <strong>Device</strong> means any device that can access the
            Service such as a computer, a cellphone or a digital tablet.
            <br />- <strong>Feedback</strong> means feedback, innovations or
            suggestions sent by You regarding the attributes, performance or
            features of our Service.
            <br />- <strong>Promotions</strong> refer to contests, sweepstakes
            or other promotions offered through the Service.
            <br />- <strong>Service</strong> refers to the Website.
            <br />- <strong>Terms and Conditions</strong> (also referred as
            "Terms") mean these Terms and Conditions that form the entire
            agreement between You and the Company regarding the use of the
            Service.
            <br />- <strong>Third-party Social Media Service</strong> means any
            services or content (including data, information, products or
            services) provided by a third-party that may be displayed, included
            or made available by the Service.
            <br />- <strong>Website</strong> refers to Ownemployed, accessible
            from https://www.ownemployed.com/
            <br />- <strong>You</strong> means the individual accessing or using
            the Service, or the company, or other legal entity on behalf of
            which such individual is accessing or using the Service, as
            applicable.
        </Text>

        <Text as="h2" p={2}>
            Acknowledgement
        </Text>
        <Text as="p" p={2}>
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company. These
            Terms and Conditions set out the rights and obligations of all users
            regarding the use of the Service. <br />
            Your access to and use of the Service is conditioned on Your
            acceptance of and compliance with these Terms and Conditions. These
            Terms and Conditions apply to all visitors, users and others who
            access or use the Service. <br />
            By accessing or using the Service You agree to be bound by these
            Terms and Conditions. If You disagree with any part of these Terms
            and Conditions then You may not access the Service. <br />
            You represent that you are over the age of 18. The Company does not
            permit those under 18 to use the Service. <br />
            Your access to and use of the Service is also conditioned on Your
            acceptance of and compliance with the Privacy Policy of the Company.
            Our Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your personal information when You
            use the Application or the Website and tells You about Your privacy
            rights and how the law protects You. Please read Our Privacy Policy
            carefully before using Our Service.
        </Text>

        <Text as="h2" p={2}>
            Promotions
        </Text>
        <Text as="p" p={2}>
            Any Promotions made available through the Service may be governed by
            rules that are separate from these Terms. <br />
            If You participate in any Promotions, please review the applicable
            rules as well as our Privacy policy. If the rules for a Promotion
            conflict with these Terms, the Promotion rules will apply.
        </Text>

        <Text as="h2" p={2}>
            User Accounts
        </Text>
        <Text as="p" p={2}>
            When You create an account with Us, You must provide Us information
            that is accurate, complete, and current at all times. Failure to do
            so constitutes a breach of the Terms, which may result in immediate
            termination of Your account on Our Service. <br />
            You are responsible for safeguarding the password that You use to
            access the Service and for any activities or actions under Your
            password, whether Your password is with Our Service or a Third-Party
            Social Media Service. <br />
            You agree not to disclose Your password to any third party. You must
            notify Us immediately upon becoming aware of any breach of security
            or unauthorized use of Your account. <br />
            You may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trademark that
            is subject to any rights of another person or entity other than You
            without appropriate authorization, or a name that is otherwise
            offensive, vulgar or obscene.
        </Text>

        <Text as="h2" p={2}>
            Content
        </Text>
        <Text as="h5" p={2}>
            Your Right to Post Content
        </Text>
        <Text as="p" p={2}>
            Our Service allows You to post Content. You are responsible for the
            Content that You post to the Service, including its legality,
            reliability, and appropriateness. <br />
            By posting Content to the Service, You grant Us the right and
            license to use, modify, publicly perform, publicly display,
            reproduce, and distribute such Content on and through the Service.
            You retain any and all of Your rights to any Content You submit,
            post or display on or through the Service and You are responsible
            for protecting those rights. You agree that this license includes
            the right for Us to make Your Content available to other users of
            the Service, who may also use Your Content subject to these Terms.{' '}
            <br />
            You represent and warrant that: (i) the Content is Yours (You own
            it) or You have the right to use it and grant Us the rights and
            license as provided in these Terms, and (ii) the posting of Your
            Content on or through the Service does not violate the privacy
            rights, publicity rights, copyrights, contract rights or any other
            rights of any person.
        </Text>

        <Text as="h5" p={2}>
            Content Restrictions
        </Text>
        <Text as="p" p={2}>
            The Company is not responsible for the content of the Service's
            users. You expressly understand and agree that You are solely
            responsible for the Content and for all activity that occurs under
            your account, whether done so by You or any third person using Your
            account. <br />
            You may not transmit any Content that is unlawful, offensive,
            upsetting, intended to disgust, threatening, libellous, defamatory,
            obscene or otherwise objectionable. <br /> Examples of such
            objectionable Content include, but are not limited to, the
            following: - Unlawful or promoting unlawful activity. <br />
            - Defamatory, discriminatory, or mean-spirited content, including
            references or commentary about religion, race, sexual orientation,
            gender, national/ethnic origin, or other targeted groups. <br />
            - Spam, machine – or randomly-generated, constituting unauthorized
            or unsolicited advertising, chain letters, any other form of
            unauthorized solicitation, or any form of lottery or gambling.{' '}
            <br />
            - Containing or installing any viruses, worms, malware, trojan
            horses, or other content that is designed or intended to disrupt,
            damage, or limit the functioning of any software, hardware or
            telecommunications equipment or to damage or obtain unauthorized
            access to any data or other information of a third person. <br />
            - Infringing on any proprietary rights of any party, including
            patent, trademark, trade secret, copyright, right of publicity or
            other rights. <br />
            - Impersonating any person or entity including the Company and its
            employees or representatives. <br />
            - Violating the privacy of any third person. <br />
            - False information and features. <br />
            The Company reserves the right, but not the obligation, to, in its
            sole discretion, determine whether or not any Content is appropriate
            and complies with this Terms, refuse or remove this Content. The
            Company further reserves the right to make formatting and edits and
            change the manner any Content. The Company can also limit or revoke
            the use of the Service if You post such objectionable Content. As
            the Company cannot control all content posted by users and/or third
            parties on the Service, you agree to use the Service at your own
            risk. You understand that by using the Service You may be exposed to
            content that You may find offensive, indecent, incorrect or
            objectionable, and You agree that under no circumstances will the
            Company be liable in any way for any content, including any errors
            or omissions in any content, or any loss or damage of any kind
            incurred as a result of your use of any content.
        </Text>

        <Text as="h5" p={2}>
            Content Backups
        </Text>
        <Text as="p" p={2}>
            Although regular backups of Content are performed, the Company do
            not guarantee there will be no loss or corruption of data. <br />
            Corrupt or invalid backup points may be caused by, without
            limitation, Content that is corrupted prior to being backed up or
            that changes during the time a backup is performed. <br />
            The Company will provide support and attempt to troubleshoot any
            known or discovered issues that may affect the backups of Content.
            But You acknowledge that the Company has no liability related to the
            integrity of Content or the failure to successfully restore Content
            to a usable state. <br />
            You agree to maintain a complete and accurate copy of any Content in
            a location independent of the Service.
        </Text>

        <Text as="h2" p={2}>
            Copyright Policy
        </Text>

        <Text as="h5" p={2}>
            Intellectual Property Infringement
        </Text>
        <Text as="p" p={2}>
            We respect the intellectual property rights of others. It is Our
            policy to respond to any claim that Content posted on the Service
            infringes a copyright or other intellectual property infringement of
            any person. <br />
            If You are a copyright owner or authorized on behalf of one, and You
            believe that the copyrighted work has been copied in a way that
            constitutes copyright infringement that is taking place through the
            Service, You must submit Your notice in writing to the attention of
            our copyright agent via email at ownemployed@gmail.com and include
            in Your notice a detailed description of the alleged infringement.{' '}
            <br />
            You may be held accountable for damages (including costs and
            attorneys' fees) for misrepresenting that any Content is infringing
            Your copyright.
        </Text>

        <Text as="h5" p={2}>
            EUCD (European Copyright Directive) Notice and EUCD Procedure for
            Copyright Infringement Claims
        </Text>
        <Text as="p" p={2}>
            Considering for that EUCD (European Copyright Directive), officially
            Directive 2001/29/EC, a copyright owner or their agent may submit a
            takedown notice to us. As an internet service provider, we are
            entitled to claim immunity from said infringement claims pursuant to
            the “safe harbour” provisions of the EUCD. To submit a good faith
            infringement claim to us, you must submit notice to us that sets
            forth the following information:
        </Text>

        <Text as="h2" p={2}>
            NOTICE OF INFRINGEMENT – CLAIM
        </Text>

        <Text as="ol" p={2}>
            <li>
                A physical or electronic signature of the copyright owner (or
                someone authorized to act on behalf of the owner);
            </li>
            <li>
                Identification of the copyrighted work claimed to have been
                infringed;
            </li>
            <li>
                Identification of the infringing material to be removed, and
                information reasonably sufficient to permit the service provider
                to locate the material. [Please submit the URL of the page in
                question to assist us in identifying the allegedly offending
                work];
            </li>
            <li>
                Information reasonably sufficient to permit the service provider
                to contact the complaining party including your name, physical
                address, email address, phone number and fax number;
            </li>
            <li>
                A statement that the complaining party has a good faith belief
                that the use of the material is unauthorized by the copyright
                agent; and
            </li>
            <li>
                A statement that the information in the notification is
                accurate, and, under penalty of perjury, that the complaining
                party is authorized to act on behalf of the copyright owner.
            </li>
        </Text>
        <Text as="p" p={2}>
            Send all takedown notices to the following email:
            ownemployed@gmail.com
        </Text>

        <Text as="h2" p={2}>
            COUNTER-NOTIFICATION – RESTORATION OF MATERIAL
        </Text>
        <Text as="p" p={2}>
            If you have received a notice of material being takedown because of
            a copyright infringement claim, you may provide us with a
            counter-notification in an effort to have the material in question
            restored to the site. Said notification must contain substantially
            the following elements:
        </Text>
        <Text as="ol" p={2}>
            <li>Your physical or electronic signature.</li>
            <li>
                A description of the material that has been taken down and the
                original location of the material before it was taken down.
            </li>
            <li>
                A statement under penalty of perjury that you have a good faith
                belief that the material was removed or disabled as a result of
                mistake or misidentification of the material to be removed or
                disabled.
            </li>
            <li>
                Your name, address, and telephone number, and a statement that
                you consent to the jurisdiction of Spain, and that you will
                accept service of process from the person or company who
                provided the original infringement notification.
            </li>
            <li>
                Email your counter-notice to the Email: ownemployed@gmail.com
            </li>
        </Text>

        <Text as="h2" p={2}>
            Intellectual Property
        </Text>
        <Text as="p" p={2}>
            The Service and its original content (excluding Content provided by
            You or other users), features and functionality are and will remain
            the exclusive property of the Company and its licensors. <br />
            The Service is protected by copyright, trademark, and other laws of
            both the Country and foreign countries. <br />
            Our trademarks and trade dress may not be used in connection with
            any product or service without the prior written consent of the
            Company.
        </Text>

        <Text as="h2" p={2}>
            Your Feedback to Us
        </Text>
        <Text as="p" p={2}>
            You assign all rights, title and interest in any Feedback You
            provide the Company. If for any reason such assignment is
            ineffective, You agree to grant the Company a non-exclusive,
            perpetual, irrevocable, royalty-free, worldwide right and licence to
            use, reproduce, disclose, sub-license, distribute, modify and
            exploit such Feedback without restriction.
        </Text>

        <Text as="h2" p={2}>
            Links to Other Websites
        </Text>
        <Text as="p" p={2}>
            Where this Site contains links to other sites and resources provided
            by third parties, these links are provided for your information
            only. We have no control over the contents of those sites or
            resources. <br />
            We assume no responsibility for the content of websites linked on
            our Site. Such links should not be interpreted as endorsement by us
            of those linked websites. We will not be liable for any loss or
            damage that may arise from your use of them.
        </Text>

        <Text as="h2" p={2}>
            Termination
        </Text>
        <Text as="p" p={2}>
            We may terminate or suspend Your Account immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if You breach these Terms and Conditions. <br />
            Upon termination, Your right to use the Service will cease
            immediately. If You wish to terminate Your Account, You may simply
            discontinue using the Service.
        </Text>

        <Text as="h2" p={2}>
            Limitation of Liability
        </Text>
        <Text as="p" p={2}>
            Notwithstanding any damages that You might incur, the entire
            liability of the Company and any of its suppliers under any
            provision of this Terms and Your exclusive remedy for all of the
            foregoing shall be limited to the amount actually paid by You
            through the Service or 100 USD if You haven't purchased anything
            through the Service. <br />
            To the maximum extent permitted by applicable law, in no event shall
            the Company or its suppliers be liable for any special, incidental,
            indirect, or consequential damages whatsoever (including, but not
            limited to, damages for loss of profits, loss of data or other
            information, for business interruption, for personal injury, loss of
            privacy arising out of or in any way related to the use of or
            inability to use the Service, third-party software and/or
            third-party hardware used with the Service, or otherwise in
            connection with any provision of this Terms), even if the Company or
            any supplier has been advised of the possibility of such damages and
            even if the remedy fails of its essential purpose. <br />
            Some states do not allow the exclusion of implied warranties or
            limitation of liability for incidental or consequential damages,
            which means that some of the above limitations may not apply. In
            these states, each party's liability will be limited to the greatest
            extent permitted by law.
        </Text>

        <Text as="h2" p={2}>
            "AS IS" and "AS AVAILABLE" Disclaimer
        </Text>
        <Text as="p" p={2}>
            The Service is provided to You "AS IS" and "AS AVAILABLE" and with
            all faults and defects without warranty of any kind. To the maximum
            extent permitted under applicable law, the Company, on its own
            behalf and on behalf of its Affiliates and its and their respective
            licensors and service providers, expressly disclaims all warranties,
            whether express, implied, statutory or otherwise, with respect to
            the Service, including all implied warranties of merchantability,
            fitness for a particular purpose, title and non-infringement, and
            warranties that may arise out of course of dealing, course of
            performance, usage or trade practice. Without limitation to the
            foregoing, the Company provides no warranty or undertaking, and
            makes no representation of any kind that the Service will meet Your
            requirements, achieve any intended results, be compatible or work
            with any other software, applications, systems or services, operate
            without interruption, meet any performance or reliability standards
            or be error-free or that any errors or defects can or will be
            corrected. <br />
            Without limiting the foregoing, neither the Company nor any of the
            company's provider makes any representation or warranty of any kind,
            express or implied: (i) as to the operation or availability of the
            Service, or the information, content, and materials or products
            included thereon; (ii) that the Service will be uninterrupted or
            error-free; (iii) as to the accuracy, reliability, or currency of
            any information or content provided through the Service; or (iv)
            that the Service, its servers, the content, or e-mails sent from or
            on behalf of the Company are free of viruses, scripts, trojan
            horses, worms, malware, timebombs or other harmful components.{' '}
            <br />
            Some jurisdictions do not allow the exclusion of certain types of
            warranties or limitations on applicable statutory rights of a
            consumer, so some or all of the above exclusions and limitations may
            not apply to You. But in such a case the exclusions and limitations
            set forth in this section shall be applied to the greatest extent
            enforceable under applicable law.
        </Text>

        <Text as="h2" p={2}>
            Governing Law
        </Text>
        <Text as="p" p={2}>
            The laws of the Country, excluding its conflicts of law rules, shall
            govern this Terms and Your use of the Service. Your use of the
            Application may also be subject to other local, state, national, or
            international laws.
        </Text>

        <Text as="h2" p={2}>
            Disputes Resolution
        </Text>
        <Text as="p" p={2}>
            If You have any concern or dispute about the Service, You agree to
            first try to resolve the dispute informally by contacting the
            Company.
        </Text>

        <Text as="h2" p={2}>
            For European Union (EU) Users
        </Text>
        <Text as="p" p={2}>
            If You are a European Union consumer, you will benefit from any
            mandatory provisions of the law of the country in which you are
            resident in.
        </Text>

        <Text as="h2" p={2}>
            The United States Legal Compliance
        </Text>
        <Text as="p" p={2}>
            You represent and warrant that (i) You are not located in a country
            that is subject to the United States government embargo, or that has
            been designated by the United States government as a "terrorist
            supporting" country, and (ii) You are not listed on any United
            States government list of prohibited or restricted parties.
        </Text>

        <Text as="h2" p={2}>
            Severability and Waiver
        </Text>

        <Text as="p" p={2}>
            If any provision of these Terms is held to be unenforceable or
            invalid, such provision will be changed and interpreted to
            accomplish the objectives of such provision to the greatest extent
            possible under applicable law and the remaining provisions will
            continue in full force and effect.
        </Text>

        <Text as="h5" p={2}>
            Waiver
        </Text>
        <Text as="p" p={2}>
            Except as provided herein, the failure to exercise a right or to
            require performance of an obligation under this Terms shall not
            affect a party's ability to exercise such right or require such
            performance at any time thereafter nor shall be the waiver of a
            breach constitute a waiver of any subsequent breach.
        </Text>

        <Text as="h2" p={2}>
            Translation Interpretation
        </Text>
        <Text as="p" p={2}>
            These Terms and Conditions may have been translated if We have made
            them available to You on our Service. You agree that the original
            English text shall prevail in the case of a dispute.
        </Text>

        <Text as="h2" p={2}>
            Changes to These Terms and Conditions
        </Text>
        <Text as="p" p={2}>
            We reserve the right, at Our sole discretion, to modify or replace
            these Terms at any time. If a revision is material We will make
            reasonable efforts to provide at least 30 days' notice prior to any
            new terms taking effect. What constitutes a material change will be
            determined at Our sole discretion. <br />
            By continuing to access or use Our Service after those revisions
            become effective, You agree to be bound by the revised terms. If You
            do not agree to the new terms, in whole or in part, please stop
            using the website and the Service.
        </Text>

        <Text as="h2" p={2}>
            Contact Us
        </Text>
        <Text as="p" p={2}>
            If you have any questions about these Terms and Conditions, You can
            contact us: <br />
            By email: ownemployed@gmail.com
        </Text>

        <NavLink to="/legal/privacy-policy" exact>
            Read Our Privacy Policy
        </NavLink>
    </Layout>
)

export default TermsOfService
