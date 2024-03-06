/* eslint-disable no-template-curly-in-string */
import { useNavigate } from "react-router-dom";
import { addMetaData } from "core/helpers/seoHelpers";
import { Link } from "react-router-dom";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <>
      {addMetaData({
        title: "",
        description: " ",
      })}

      <div className="m-[0px] mx-auto mb-[34px] h-full w-11/12 overflow-hidden pt-[20px] md:w-4/5">
        <section className="mb-[28px]">
          <header className="flex flex-wrap items-center gap-3 text-[12px] text-black-shade">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/privacy" className="text-black hover:underline">
              Privacy
            </Link>
          </header>
        </section>

        <section>
          <h1 className="mb-[18px] font-[600] text-white">
            SEACHEMS.NG PRIVACY POLICY - MARCH 2024
          </h1>

          {/* SECTION 1 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] capitalize">INTRODUCTION</h3>
            <div className="my-[10px]  flex">
              <p>
                Seachems NG ("Seachems", "we", "us", or "our") is committed to
                protecting the privacy of our website visitors and customers
                ("you" or "your"). This Privacy Policy describes how we collect,
                use, and disclose your personal information when you use our
                website [https://seachems.ng] (the "Website") and any related
                services (collectively, the "Services").
              </p>
            </div>
          </div>
          {/* END SECTION 1 */}

          {/* SECTION 2 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] capitalize">
              1. Information We Collect{" "}
            </h3>
            <div className="my-[10px] flex">
              <span className="min-w-[50px]">2.1</span>
              <p>
                This privacy policy aims to give you information on how we
                collect and process your personal data through your use of the
                Service, including any data you may provide through any medium
                when you sign up to our newsletter or purchase a product or
                service or take part in a competition.
              </p>
            </div>
            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">2.2</span>
              <p>
                It is important that you read this privacy policy together with
                other related policies including the Terms and Conditions
                (T&Cs), that Seachems may provide on specific occasions when
                collecting or processing your personal data, so that you are
                fully aware and consent on how and why we are using your
                personal data. This privacy policy supplements other notices and
                privacy policies and is not intended to override them.
              </p>
            </div>
          </div>
          {/* END SECTION 2 */}

          {/* SECTION 3 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] uppercase">
              3. Consent for Collection, Use and Disclosure{" "}
            </h3>
            <div className="my-[10px] flex">
              <span className="min-w-[50px]">3.1</span>
              <p>
                Your use of the Platform and/or registration for the Services
                constitutes your consent to the terms of this privacy policy. If
                you do not agree, you can withdraw your consent at any time but
                please note that Seachems will not be able to provide you with
                its Service.
              </p>
            </div>
            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">3.2</span>
              <p>
                Seachems reserves the right to amend this privacy policy at any
                time. When we do, we will also revise the "last updated" date at
                the top of this Privacy Policy.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">3.3</span>
              <p>
                We will notify you by email regarding material changes to this
                privacy policy that will affect information collected from you
                in the future. However, Seachems will not notify you in certain
                circumstances, such as in connection with investigation of a
                breach of an agreement, contravention of laws, an emergency
                where the life, health or security of an individual is
                threatened, the collection of a debt or in compliance with the
                request of a law enforcement agency or a court order. However,
                the Company may notify Users of such circumstances upon request
                by the User in permissible circumstances.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">3.4</span>
              <p>
                You may withdraw your consent for collection, use and disclosure
                at any time by sending an email using the Company’s contact
                details on the ‘Contact’ section on the website. Please note
                that, if you withdraw your consent for collection, the Company
                may suspend its provision of Services to you.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">3.5</span>
              <p>
                By continuing to access and use the Services, you are deemed to
                have accepted the changes to the provisions of this privacy
                policy.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">3.6</span>
              <p>
                It is important that personal data we hold about you is accurate
                and current. Please keep us informed if your personal data
                changes during your business relationship with us. In the event
                that we have not received information regarding a change of
                status on your personal data, please note that you inherently
                accept the responsibility for the information you provided
                and/or the failure to timely and accurately update your details
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">3.6</span>
              <p>
                If you provide Personal Information of any third party to us, we
                assume that you have obtained the required consent from the
                relevant third party to share and transfer his/her Personal
                Information to us.
              </p>
            </div>
          </div>
          {/* END SECTION 3 */}

          {/* SECTION 4 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] uppercase">
              4. Classes of Personal Information{" "}
            </h3>
            <p className="my-[10px]">
              Personal data, or personal information, means data that allows
              someone to identify you individually, including, for example, your
              name, email address, as well as any other non-public information
              about you that is associated with or linked to any of the
              foregoing. “Anonymous Data” means data, including aggregated and
              de-identified data, that is not associated with or linked to your
              Personal Data; Anonymous Data does not, by itself, permit the
              identification of individual persons.
            </p>
            <p className="my-[10px]">
              We may collect, use, store and transfer different kinds of
              personal data about you which we have classified as follows:{" "}
            </p>
            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">4.1</span>
              <p>
                <span className="font-[600]">Identity Data: </span>
                includes first name, maiden name, last name, images or photos,
                biometrics, username or similar identifier, marital status,
                title, date of birth and gender.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">4.2</span>
              <p>
                <span className="font-[600]">Contact Data: </span>
                includes billing address, delivery address, email address and
                telephone numbers.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">4.3</span>
              <p>
                <span className="font-[600]">Financial Data: </span>
                includes first name, maiden name, last name, images or photos,
                biometrics, username or similar identifier, marital status,
                title, date of birth and gender.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">4.4</span>
              <p>
                <span className="font-[600]">Transaction Data: </span>
                includes details about payments to and from you and other
                details of products and services you have purchased from us.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">4.5</span>
              <p>
                <span className="font-[600]">Technical Data: </span>
                includes internet protocol (IP) address, your login data,
                browser type and version, time zone setting and location,
                browser plug-in types and versions, operating system and
                platform, and other technology on the devices you use to access
                our Platform.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">4.6</span>
              <p>
                <span className="font-[600]">Profile Data: </span>
                includes first name, maiden name, last name, images or photos,
                includes your username and password, purchases or orders made by
                you, your interests, preferences, feedback and survey responses.
                Please use unique numbers, letters and special characters, and
                do not disclose your password to anyone. Please remember that
                you are responsible for all actions taken in the name of your
                account. If you lose control of your password, you may lose
                substantial control over your personal information and may be
                subject to legally binding actions taken on your behalf.
                Therefore, if your password has been compromised for any reason,
                you should immediately notify us and change your password.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">4.7</span>
              <p>
                <span className="font-[600]">Usage Data: </span>
                includes information about how you use our Platforms, products
                and services.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">4.8</span>
              <p>
                <span className="font-[600]">
                  Marketing and Communications Data:{" "}
                </span>
                includes your preferences in receiving marketing from us and our
                third parties and your communication preferences.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">4.9</span>
              <p>
                <span className="font-[600]">Mobile Device Access: </span>
                We may request access or permission to certain features from
                your mobile device, including your mobile device’s [Bluetooth,
                calendar, camera, contacts, microphone, SMS messages, social
                media accounts, files and storage, and other features. You can
                decline granting access to your mobile device by clicking on
                “disagree” “do not allow” options that may pop-up or by changing
                our access or permissions via your device’s settings.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">4.10</span>
              <p>
                <span className="font-[600]">Push Notifications: </span>
                We may request to send you push notifications regarding your
                account or the Application. If you wish to opt-out from
                receiving these types of communications, you may turn them off
                in your device’s settings.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">4.11</span>
              <p>
                <span className="font-[600]">Contact List Information: </span>
                Includes users’ contact lists. Seachems may for the purpose of
                networking and connecting users upload your contacts to the
                Seachems server. Similarly, this would enable users to send
                invitations to persons on their contact list, or by manually
                entering a telephone number. We do not share this information or
                make it available to others. We will only access your contact
                list if you click on the “allow” “agree” or other consent words
                that may pop-up on your device.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">4.12</span>
              <p>
                <span className="font-[600]"></span>
                If required to help us verify your identity, you may provide us
                a copy of your driver’s license, passport or other government
                issued ID. If required to help us verify your residence, you may
                provide us with a utility bill, lease or other proof of
                residence. You may also provide us other verification documents,
                such as bank statements reflecting the source of funds, to meet
                international anti-money laundering regulations, or other legal
                requirements. If you seek to invest through an entity, you may
                provide us with documentation relating to the entity’s
                jurisdiction of formation, legal status and ownership. By
                providing the verification information and documents mentioned
                above, you also provide us information within those records,
                which may include characteristics of protected classifications
                like your sex, age, national origin, and citizenship.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">4.13</span>
              <p>
                <span className="font-[600]"></span>
                We also collect, use and share Aggregated Data such as
                statistical or demographic data for any purpose.
                <span className="font-[600]"> Aggregated Data</span> could be
                derived from your personal data but is not considered personal
                data in law as this data will not directly or indirectly reveal
                your identity. For example, we may aggregate your Usage Data to
                calculate the percentage of users accessing a specific feature
                on our Platform. However, if we combine or connect Aggregated
                Data with your personal data so that it can directly or
                indirectly identify you, we treat the combined data as personal
                data which will be used in accordance with this privacy policy.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">4.14</span>
              <p>
                <span className="font-[600]"></span>
                We do not collect any{" "}
                <span className="font-[600]">
                  Special Categories of Personal Data
                </span>{" "}
                about you (this includes details about your race or ethnicity,
                religious or philosophical beliefs, sex life, sexual
                orientation, political opinions, trade union membership and
                information about your health. We also do not collect any
                information about criminal convictions and offences that do not
                pertain to the misuse or abuse of our platform.
              </p>
            </div>
          </div>
          {/* END SECTION 4 */}

          {/* SECTION 5 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] uppercase">
              5. Collection of Personal Information.{" "}
            </h3>
            <p className="my-[10px]">
              All information supplied by Users of the Services as defined under
              the Terms of Use is covered by the provisions of Constitution of
              the Federal Republic of Nigeria 1999 (as amended), Nigerian Data
              Protection Act 2023 (NDPA) and other extant laws and regulations
              regulating the use and management of personal data.
            </p>
            <div className="my-[10px] flex">
              <span className="min-w-[50px]">5.1</span>
              <p>
                <span className="font-[600]">Voluntarily Submitted Data: </span>
                When you sign up for the Company’s Services, pay for a
                subscription, consult with our customer service team, send us an
                email, or communicate with us in any way, you are voluntarily
                giving us information that we process, including, but not
                limited to; name, username, email address, mobile number, IP
                address, credit card information, bank information, and purchase
                history. By submitting this information, you consent to its’
                collection, usage, disclosure, and storage by us, as described
                in our Terms of Use and in this Privacy Policy.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">5.2</span>
              <p>
                <span className="font-[600]">
                  Automatically Collected Data:{" "}
                </span>
                When you use the Services or browse any of our Platforms, we may
                collect information about your visit, your usage of the
                Services, and/or your web browsing; which may include your IP
                address, operating system, device type, operating system,
                browser ID, browsing activity, and other information about how
                you interacted with our website. We may collect this information
                as a part of log files or through the use of cookies or other
                tracking technologies. Our use of cookies is more outlined in
                our Cookie Policy.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">5.3</span>
              <p>
                <span className="font-[600]">Service Usage Data: </span>
                We may receive information about how and when you use the
                Services, store it in log files or other types of files
                associated with your account, and link it to other information
                we collect about you. This information may include, for example,
                your IP address, time, date, browser used, and actions you have
                taken on the website. This type of information helps us to
                improve our Services for both you and for all of our users.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">5.4</span>
              <p>
                <span className="font-[600]"> Website Data: </span>
                When you use our website, we may collect certain information in
                addition to information described elsewhere in this Policy. For
                example, the type of device and operating system you use. We may
                ask you if you want to receive push notifications. If you have
                opted into these notifications and no longer wish to receive
                them, you may turn them off through your device’s operating
                system. We may use mobile analytics software to better
                understand how people use our website. We may collect
                information about how often you use the website and other
                performance data.
              </p>
            </div>
          </div>
          {/* END SECTION 5 */}

          {/* SECTION 6 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] uppercase">
              6. Purposes for collecting Personal Information .{" "}
            </h3>
            <p className="my-[10px]">
              We collect Personal Information for the following reasons:
            </p>
            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">6.1</span>
              <p>
                <span className="font-[600]">For Promotional Purposes: </span>
                This includes sending you emails relating to the merits of a
                product, service, brand or issue. You can stop receiving our
                promotional emails by following the unsubscribe instructions
                included in every email we send, or by adjusting your Marketing
                Preferences in your profile. This data is processed in
                accordance with consent under the NDPA and extant data
                protection laws.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">6.2</span>
              <p>
                <span className="font-[600]">For Billing Purposes: </span>
                This includes sending you emails, invoices, receipts, notices of
                delinquency, and alerting you if we need a different credit card
                number. We use third parties for secure credit card transaction
                processing, and we send billing information to those third
                parties to process your orders and credit card payments. This
                data is processed in accordance with consent and third-party
                data processing contract requirements under the NDPA and extant
                data protection laws.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">6.3</span>
              <p>
                <span className="font-[600]">
                  To Provide and Improve Our Services:{" "}
                </span>
                This includes, for example, aggregating information from your
                use of the Services or visit to our Platforms and sharing this
                information with third parties to improve our Services. This
                might also include sharing your information with third parties
                in order to provide and support our Services. When we do have to
                share Personal Information with third parties, we take steps to
                protect your information by requiring these third parties to
                enter into a contract with us that requires them to use the
                Personal Information we transfer to them in a manner that is
                consistent with this policy. This data is processed in
                accordance with consent and third-party data processing contract
                requirements under the NDPA and extant data protection laws.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">6.4</span>
              <p>
                <span className="font-[600]">
                  For Account and Support Communication:{" "}
                </span>
                For example, we may inform you of subscription payment successes
                or failures, password reset attempts, and other support-related
                functions. This data is processed in accordance with consent
                under the NDPA and extant data protection laws.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">6.5</span>
              <p>
                <span className="font-[600]"> For Platform Alerts: </span>
                For example, we may inform you of temporary or permanent changes
                to our Services, such as pricing changes, planned outages, new
                features, releases, abuse warnings, and changes to our Privacy
                Policy. This data is processed in accordance with the contract
                requirements under the NDPA and extant data protection laws.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">6.6</span>
              <p>
                <span className="font-[600]">For Legal Purposes: </span>
                For example, complying with court orders, valid discovery
                requests, valid subpoenas, to prosecute and defend a court,
                arbitration, or similar legal proceeding. To respond to lawful
                requests by public authorities, including to meet national
                security or law enforcement requirements. To provide information
                to representatives and advisors, including attorneys and
                accountants, to help us comply with legal, accounting, or
                security requirements. This data is processed in accordance with
                legal obligation under the NDPA and extant data protection laws.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">6.7</span>
              <p>
                <span className="font-[600]">For Transfer Purposes: </span>
                In the case of a sale, merger, consolidation, liquidation,
                reorganization, or acquisition. In that event, any acquirer will
                be subject to our obligations under this Privacy Policy,
                including your rights to access and choice. We will notify you
                of the change either by sending you an email or posting a notice
                on our website. This data is processed in accordance with legal
                obligation under the NDPA and extant data protection laws.
              </p>
            </div>
          </div>
          {/* END SECTION 6 */}

          {/* SECTION 7 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] uppercase">
              7. Limiting the Collection of Personal Information
            </h3>
            <p className="my-[10px]">
              The Company may limit its collection of Personal Information only
              to the extent that the information is unnecessary for the
              identified purposes. The Company does not direct the Platforms to,
              nor does it knowingly collect any Personal Information from
              persons under the age of eighteen (18 years). Consequently, the
              Company shall not be liable for any use or processing of Personal
              Information of persons under the age of 18.
            </p>
          </div>
          {/* END SECTION 7 */}

          {/* SECTION 8 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] uppercase">
              8. Disclosure of Personal Information
            </h3>
            <p className="my-[10px]">
              The Company will not disclose any of your Personal Information to
              anyone else, except:
            </p>
            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">8.1</span>
              <p>
                to its employees, independent contractors, subsidiaries,
                affiliates, consultants, business associates, service providers,
                suppliers and agents, acting on its behalf for any of the
                identified purposes;
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">8.2</span>
              <p>
                if it has reason to believe that disclosure is necessary to
                identify, contact or bring legal action against someone who may
                be causing injury to or interference (either intentionally or
                unintentionally) with the Company’s rights or property, other
                users of the Platforms, the Services, or anyone else that could
                be harmed by such activities;
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">8.3</span>
              <p>
                in the event of business transfers which may occur when we sell
                or buy businesses or assets. In the event of a corporate sale,
                merger, reorganization, dissolution or similar event, personal
                data may be part of the transferred assets; and
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">8.4</span>
              <p>
                to respond to judicial process and provide information to law
                enforcement agencies or in connection with an investigation on
                matters related to public safety, as permitted by law, or
                otherwise as required by law.
              </p>
            </div>
          </div>
          {/* END SECTION 8 */}

          {/* SECTION 9 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] uppercase">9. Data Retention </h3>

            <div className="my-[10px] flex">
              <span className="min-w-[50px]">9.1</span>
              <p>
                We may retain Personal Information about the User, as long as it
                is necessary for business and/or legal purposes. Also, we may
                retain aggregated anonymous information indefinitely. In
                addition, we may retain your information for an additional
                period as is permitted or required to, among other things,
                comply with our legal obligations, resolve disputes, and enforce
                agreements.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">9.2</span>
              <p>
                To determine the appropriate retention period for personal data,
                we consider the amount, nature and sensitivity of the personal
                data, the potential risk of harm from unauthorized use or
                disclosure of your personal data, the purposes for which we
                process your personal data and whether we can achieve those
                purposes through other means, and the applicable legal,
                regulatory, tax, accounting or other requirements.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">9.3</span>
              <p>
                In some circumstances we will anonymize your personal data (so
                that it can no longer be associated with you) for research or
                statistical purposes, in which case we may use this information
                indefinitely without further notice to you.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">9.4</span>
              <p>
                If your account becomes inactive (that is, if you request to be
                removed from the Company’s database), the Company will keep your
                Personal Information in its archives for the duration required
                by law. Your information will be used only as necessary for tax
                reasons or to prove the Company's compliance with any applicable
                law.
              </p>
            </div>
          </div>
          {/* END SECTION 9 */}

          {/* SECTION 10 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] uppercase">10. Data Transfer</h3>

            <div className="my-[10px] flex">
              <span className="min-w-[50px]">10.1</span>
              <p>
                For the purpose of providing the Services, the Company (through
                the Platform) processes information about our Users on servers
                located in a number of countries.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">10.2</span>
              <p>
                The Company may also subcontract processing or sharing of
                information to third parties located in other countries, other
                than your home country. Also, such information may be
                transferred to another company if the need arises. Therefore,
                information may be transferred across international borders
                outside the country where you use our services, including to
                countries that do not have laws providing specific protection
                for personal data or those that have different legal rules on
                data protection.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">10.3</span>
              <p>
                We will only transfer Personal Information outside the country
                upon compliance with the provisions of any applicable law in
                relation to transfer of Personal Information outside Nigeria.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">10.4</span>
              <p>
                By this Privacy Policy, you hereby explicitly and contractually
                consent to the transfer of your Personal Information by the
                Company as contemplated herein.
              </p>
            </div>
          </div>
          {/* END SECTION 10 */}

          {/* SECTION 11 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] uppercase">
              11. Accuracy of Personal Information{" "}
            </h3>

            <div className="my-[10px] flex">
              <span className="min-w-[50px]">11.1</span>
              <p>
                We will use commercially reasonable efforts to keep your
                Personal Information as provided by you accurate for the
                identified purposes. Users are responsible for informing us
                about any changes to their Personal Information from time to
                time.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">11.2</span>
              <p>
                Users will be informed that in order to implement the
                measurements of verification of information provided by the
                user, we may request you to provide copies of documents related
                to your Personal Information including but not limited to an
                official ID Card, bank verification number, etc.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">11.3</span>
              <p>
                Users represent that all Personal Information provided to us is
                accurate for the identified purpose
              </p>
            </div>
          </div>
          {/* END SECTION 11 */}

          {/* SECTION 12 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] uppercase">12. Data Security</h3>

            <div className="my-[10px] flex">
              <span className="min-w-[50px]">12.1</span>
              <div>
                <p className="mb-[10px]">
                  We transmit and store the information we collect using
                  standard security techniques. However, given the nature of the
                  internet and the fact that network security measures are not
                  fool proof, we cannot guarantee the security of such
                  information. We protect your Personal Information by:
                </p>

                <div className="mb-[5px] flex">
                  <span className="min-w-[50px]">i.</span>
                  <p>restricting access to the Personal Information;</p>
                </div>

                <div className="mb-[5px] flex">
                  <span className="min-w-[50px]">ii.</span>
                  <p>
                    maintaining technology products to prevent unauthorized
                    computer access; and{" "}
                  </p>
                </div>

                <div className="mb-[5px] flex">
                  <span className="min-w-[50px]">iii.</span>
                  <p>
                    securely destroying your Personal Information when it is no
                    longer needed for any legal or business purpose.{" "}
                  </p>
                </div>

                <div className="mb-[5px] flex">
                  <span className="min-w-[50px]">iv.</span>
                  <p>
                    using state of the art Secure Socket Layer (SSL) encryption
                    technology when processing your financial details.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">12.2</span>
              <p>
                Your password is the key to your account. Please use unique
                numbers, letters and special characters, and do not share your
                password to anyone. If you do, you will be responsible for all
                actions taken in the name of your account and the consequences.
                If you lose control of your password, you may lose substantial
                control over your Personal Information and other information
                submitted to us. You could also be subject to legally binding
                actions taken on your behalf. Therefore, if your password has
                been compromised for any reason or if you have grounds to
                believe that your password has been compromised, you should
                immediately contact us and change your password.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">12.3</span>
              <p>
                As a safety measure, you are required to log off from your
                account and close the browser after using a shared computer.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">12.4</span>
              <p>
                Should a security breach occur, the Company will notify all
                affected customers as soon as is reasonably possible, and later
                may file a report with the appropriate authorities on the
                actions we took if the need arises.
              </p>
            </div>
          </div>
          {/* END SECTION 12 */}

          {/* SECTION 13 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] uppercase">
              13. Other Websites and Links
            </h3>
            <p className="my-[10px]">
              Our Platforms may contain links to third party websites (“Linked
              Websites”). This Privacy Policy does not cover collection or use
              of information by Linked Websites. We are not responsible for the
              privacy practices of Linked Websites. If you have questions about
              the privacy policies or practices of a Linked Website; you should
              contact the web administrator of the site directly.
            </p>
          </div>
          {/* END SECTION 13 */}

          {/* SECTION 14 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] uppercase">
              14. Privacy Policy Changes{" "}
            </h3>
            <p className="my-[10px]">
              We may make changes to this Privacy Policy from time to time, and
              for any reason. You are advised to consult this privacy policy
              regularly for any changes, as we deem your continued use,
              following posting of any amendment, modification or change,
              approval of all changes.
            </p>
          </div>
          {/* END SECTION 14 */}

          {/* SECTION 15 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] uppercase">
              15. Your Data Privacy Right
            </h3>

            <div className="my-[10px] flex">
              <span className="min-w-[50px]">15.1</span>
              <p>
                <span className="font-[600]">Right to Rectification: </span>
                Users can modify or change their name, email password, and
                mobile login PIN via their profile. For all other requests, such
                as updating email address or mobile number, please contact us at{" "}
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">15.2</span>
              <p>
                <span className="font-[600]">
                  Right of Access, Right to Erasure, Right to Restrict
                  Processing:{" "}
                </span>
                Users can request access or erasure of their Personal
                Information, as well as request restriction on further
                processing of their Personal Information by contacting us Please
                allow up to 30 (thirty) days for requests to be processed. The
                Company reserves the right to charge a reasonable fee to process
                excessive or repeat requests.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">15.3</span>
              <p>
                <span className="font-[600]">Right to Withdraw Consent: </span>
                Users can stop receiving our promotional emails by following the
                unsubscribe instructions included in every email we send, or by
                adjusting your Marketing Preferences in your profile. Users also
                have choices with respect to cookies, as described above and
                more particularly set out in the Cookie Policy.
              </p>
            </div>

            <div className="mb-[10px] flex">
              <span className="min-w-[50px]">15.4</span>
              <p>
                <span className="font-[600]">
                  Right to lodge a complaint with a supervisory authority:{" "}
                </span>
                Should you feel your data privacy rights are not being
                adequately protected by the Company, you have the right to lodge
                a formal complaint with the appropriate supervisory authority.
              </p>
            </div>
          </div>
          {/* END SECTION 15 */}

          {/* SECTION 16 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] uppercase">
              16. Available Remedies in The Case of Breach
            </h3>
            <p className="my-[10px]">
              In the case of a breach of any of the obligations with respect to
              your Personal Information being breached or compromised, please
              exercise your right to contact us through any of the channels
              highlighted below immediately. A data breach procedure is
              established and maintained in order to deal with incidents
              concerning personal data or privacy practices leading to the
              accidental or unlawful destruction, loss, alteration, unauthorized
              disclosure of, or access to, personal data transmitted, stored or
              otherwise processed. On notification of such breach, we will
              investigate to determine if an actual breach has occurred, the
              actions required to manage such breach, communicate with the
              subject of the breach and take appropriate action under its
              dispute resolution framework to remedy such breach.
            </p>
          </div>
          {/* END SECTION 16 */}

          {/* SECTION 17 */}
          <div className="mb-[28px]">
            <h3 className="font-[600] uppercase">17. Contact us</h3>
            <p className="my-[10px]">
              If you have questions regarding your data privacy rights or would
              like to submit a related data privacy right request, please email
              us at Please allow up to 30 (thirty) days for requests to be
              processed. The Company reserves the right to charge a reasonable
              fee to process excessive or repeat requests.
            </p>

            <p className="my-[10px]">
              If you have general questions concerning this Privacy Policy,
              please contact us at:{" "}
            </p>

            <p className="mt-[28px] font-[600]">
              This Policy was updated in March 2024 and will remain on effect
              subject to any changes or amendments to its provisions.
            </p>
          </div>
          {/* END SECTION 17 */}
        </section>
      </div>
    </>
  );
};

export default Privacy;
