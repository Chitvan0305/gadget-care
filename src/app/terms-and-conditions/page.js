"use client";

import { useState } from "react";
import {
  PhoneCall,
  Menu,
  X,
} from "lucide-react";
import "../globals.css";
import Image from "next/image";

export default function AboutUs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Header/Navigation */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/">
            <img
              src="/img/logo.png"
              alt="GKB solutions Logo"
              className="w-[120px]"
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-600 hover:text-primary">
            Home
          </a>
          <a href="/" className="text-gray-600 hover:text-primary">
            How It Works
          </a>
          <a href="/" className="text-gray-600 font-medium">
            About Us
          </a>
          <a href="/" className="text-gray-600 hover:text-primary">
            Contact
          </a>
        </nav>

        <div>
          <a
            href="tel:+918076406998"
            className="hidden md:flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
          >
            <PhoneCall className="me-2" size={20} /> 8076406998
          </a>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-50"
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg p-6 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mb-4 text-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-600 hover:text-primary">
                Home
              </a>
              <a
                href="/how-it-works"
                className="text-gray-600 hover:text-primary"
              >
                How It Works
              </a>
              <a href="/about-us" className="text-green-500 font-medium">
                About Us
              </a>
              <a href="/contact" className="text-gray-600 hover:text-primary">
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="bg-green-50 rounded-2xl px-3 py-2 my-3 container">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-500">
            <a href="/" className="hover:text-green-500">
              HOME
            </a>
            <span className="mx-2">/</span>
            <span className="text-green-700 font-bold">Terms-and-Conditions</span>
          </div>
        </div>
      </div>

      <div class="sectipn px-4">
        <h1 class="font-bold text-lg py-3">INTRODUCTION</h1>
        <p>
          Welcome to GKB Solutions web portal (“the Company”) the sole property
          of Tecmicra Solutions. These terms and conditions are applicable to
          the domain and sub-domains and Mobile Apps of gkbsolutions.in
          offering Home & Office Support Services (the “Website”) to you
          (“User”) and partner (“Partner”). These terms and conditions are
          applicable to all users across India who log into the Website using
          any communication media including but not limited to personal
          computer, other computers, laptops, kiosks, mobile phones or other
          devices whatsoever presently in use or introduced in future. Your
          usage of the Website, in particular any Technical Support Services
          provided by the Company are governed by the terms and conditions
          contained herein (hereinafter called “Agreement”).
        </p>
        <p>
          THE USER AND PARTNER IS ADVISED TO READ THE TERMS AND CONDITIONS
          THOROUGHLY BEFORE USING OUR SERVICES.
        </p>
        <p>
          By reading and accepting the terms of use and/or browsing on the
          Website, you agree to be legally bound by the terms of the User
          Agreement. The Company may modify the terms and conditions as may be
          required within its sole at its discretion from time to time without
          prior notice to a User and the User is obliged to read the terms
          whenever it visits the Website, as such changes shall also constitute
          legally binding terms.
        </p>
      </div>

      <div class="sectipn px-4">
        <h1 class="font-bold text-lg py-3">DEFINITIONS</h1>
        <p>
          “Agreement” means the terms and conditions as detailed herein,
          including privacy policy, promotional terms when promotions are
          launched, supplemental terms and conditions for Technical Support
          Services provided on the Website, and will include the references to
          this Agreement as amended, negated, supplemented, varied or replaced
          from time to time.
        </p>
        <p>
          “Charges” means the price payable by a User on the Website directly
          using account details or its payment Gateway towards purchase of any
          Service(s) or Products chosen by the User and Partner on the Website
          inclusive of all service charges and taxes.
        </p>
        <p>
          “Chargeback” means where the User has claimed return of Transaction
          Amount owing to any dissatisfaction or partial or incomplete delivery
          of Products or Services on the Website.
        </p>
        <p>
          “Company” means website gkbsolutions.in and GKB Solutions Partner
          Mobile App owned by GKB Solutions Pvt Ltd.
        </p>
        <p>“Delivery” means delivery of Services requested by a User.</p>
        <p>
          “Intellectual Property Right” shall mean all the rights to any
          intellectual property acquired or developed in respect of the all our
          Services or Products (whether or not registered or capable of being
          registered) including but not limited to design, trademarks,
          copyrights and patents.
        </p>
        <p>
          “Products” means the services offered on the Website provided by
          partners against the booking of a service.
        </p>
        <p>
          “Refund” means the return of part or whole of the Transaction Amount
          initiated by the company in writing to return the Transaction Amount
          for non-fulfillment or partial fulfillment of Products or Services
          ordered by the User or if inadvertently the Transaction Amount has
          been collected twice from the User.
        </p>
        <p>
          “Home & Business Support Services” or in short, “Services” shall mean
          all the services mentioned on the site.
        </p>
        <p>
          “Transaction” (or “Order”) shall mean the purchase by a customer of
          any one or more Services or Products offered by our partners and
          chosen by the customer on the Website.
        </p>
        <p>
          “Transaction Amount” is the total amount paid by a Customer for
          purchase of Services or Products to be delivered by the company on the
          Website.
        </p>
        <p>“User” means and includes any person who visits the Website.</p>
        <p>
          “Website” refers to the domain and sub-domains and mobile apps of
          gkbsolutions.in offering Services.
        </p>
      </div>

      <div class="sectipn px-4">
        <h1 class="font-bold text-lg py-3">GENERAL CLAUSES</h1>
        <p>
          The Website does not recognize any terms and conditions set by the
          User that differ from the terms and conditions mentioned herein unless
          otherwise agreed in writing.
        </p>
        <p>
          Any special promotions publicized by the Website shall be valid if
          they are announced on the Website, media channels, newspaper and print
          media, blogs or e-mail or other media to the Users by the Company.
          These promotions may include limited-duration promotions and long-term
          promotions and its terms and conditions shall apply in addition to
          this Agreement. A promotion is deemed to have ended upon expiration of
          the time stated therein.
        </p>
        <p>
          By browsing and booking our Services on the Website, the User confirms
          that he/she is above 18 years in age and is otherwise eligible to use
          this Website.
        </p>
        <p>
          When a User visits the Website or sends e-mails to us or provides the
          Company with any feedback, he/she is communicating with the Company
          electronically. User consents to receive communications from the
          Company electronically or through phone. The Company will communicate
          with a User by e-mail or by posting notices on this Website. User
          agrees that all agreements, notices, disclosures and other
          communications that we provide to him/her electronically or vox file
          in case of communication through phone satisfy any legal requirement
          that such communications be in writing.
        </p>
        <p>
          Words of the masculine gender shall mean and include corresponding
          words of the neutral gender/feminine gender as the context in the
          agreement may require.
        </p>
      </div>

      <div class="sectipn px-4">
        <h1 class="font-bold text-lg py-3">BOOKING OF HOME AND BUSINESS SUPPORT SERVICES</h1>
        <p>
          The Website provides detailed information on Services that a User can
          book on the Website and such Services are delivered to the User by the
          Company via Partner that is chosen by the User. User agrees that
          pursuant to the discussion with the expert or information placed on
          the Website, User believes the Products and/or Services ordered by
          him/her on the Website are essential for creation, maintenance and
          proper functioning of the ordered Services /Products offered on the
          Website is capable of delivering continuous and reliable services
          throughout the duration of the contracted service.
        </p>
        <p>
          Company provides home & business support services through website and
          provide leads to the partner via its mobile app which the verified
          partners may purchase and contact the user to provide him with the
          service.
        </p>
        <p>
          User fully understands that the website gkbsolutions.in owned by
          GKB Solutions is an independent company based in India and it has no
          connection or affiliation with any other service provider company. The
          User may be contacted by the expert representative of the partner
          company to discuss the bookings and best offers for Services and
          Products available on the Website and reach an agreement on the
          Charges which cannot exceed the charges specified on the Website for
          delivering the particular Service by the company. Once the payment for
          ordered Services and Products has been agreed and paid by a User no
          additional payment will be required to be made by a User for the
          purchased Products and Services.
        </p>
        <p>
          On opting to book Services or Products to be delivered by the Partner,
          user agrees to provide personal particulars, including full name,
          e-mail id, phone number, city, state, country, and accept the terms
          and conditions, privacy policy and disclaimers before he/she proceeds
          to pay for the ordered Services.
        </p>
        <p>
          Payment can be made by using credit card or debit card, cash etc to
          Company’s assigned and verified partners who provides. The payment
          transactions take place on a secure server of the payment service
          provider protected by SSL.
        </p>
        <p>
          In case a User encounters any communication problem with respect to
          the ordered Services, User may contact the Company at
          services@gkbsolutions.in and through the phone number displayed on
          the website as notified in the payment confirmation notification. The
          company will respond to customer basic queries placed before/after
          purchase of services/products within 24 hrs. (at no charge) and fix
          the complaints within two working days when a User reports a complaint
          at the designated e-mail id. In the event that the matter remains
          unresolved or no satisfactory services are rendered by the company
          even after complaint, the User is entitled to claim chargeback of the
          Transactions Amount which the Partner shall pay to the User.
        </p>
        <p>
          Please click here to read in detail our Chargeback and Refund Policy
          for Partner who recharge their wallet in GKB Solutions Partner Mobile
          App.
        </p>
        <p>
          Company reserves the right to introduce new Services or Products or to
          replace existing Products and Services on the Website and Transaction
          amount for each Service/Product at any time without prior notice.
        </p>
        <p>
          Company through its website acts as a link between user and the
          vendors and is not responsible for any unprofessional behaviour or
          loss by the vendor party. Any loss or mis-happening that takes place
          on the customer site will be beared by the customer.
        </p>
      </div>

      <div class="sectipn px-4">
        <h1 class="font-bold text-lg py-3">USER RESPONSIBILITIES</h1>
        <p>
          The User shall not use misleading or incorrect names or contact
          particulars in the order form that gives misleading indication or
          misrepresents others as to User’s identity. In case the Company finds
          any User has violated the terms and conditions herein, it may in its
          sole discretion verify the identity of any user and/or stop the
          processing of any order as may be required.
        </p>
        <p>
          The User must provide a valid mobile phone number, e-mail address,
          residential for the purposes of placing an order for
          Services/Products. This information shall be utilized by the Website
          to authenticate the User (if necessary), for processing of the order
          sending payment confirmation and other notifications. A User is fully
          responsible and agrees to fully indemnify the Company, directors,
          employees and Affiliates, for any non-compliance by a User of
          prevailing laws of his/her jurisdiction before availing any Services
          offered on the Website.
        </p>
        <p>
          User warrants that he/she is not paying for any Services or Products
          using money which has been gained from criminal or other illegal
          activity or with a credit, debit or charge card that does not belong
          to him/her.
        </p>
        <p>
          If user has opted for a plan, he cannot cancel or opt out of it until
          the full period of that plan.
        </p>
        <p>
          User agrees that his/her activities on the Website will not make
          improper use of Company’s Products or Services or submit false reports
          of abuse or commit misconduct or contravene any provision of this
          Agreement or commit any other illegal acts.
        </p>
        <p>
          User warrants and undertakes that he/she has neither revealed nor will
          reveal any confidential information pertaining to his/her credit card
          details, including credit card number and password, and the password
          of his/her e-mail address to any representative at any stage, before
          or after booking an order or availing any Services, or writing
          feedback or acting at any stage with reference to Products or Services
          mentioned on the Website or even otherwise. A User is fully
          responsible, accepts liability and undertakes to fully indemnify the
          Company, directors, employees and Affiliates, for any unauthorized
          transactions, damage or loss that takes place using a User’s credit
          card or e-mail account information if a user has been negligent and
          has revealed this confidential information to any person, including a
          tele-caller, with reference to or in connection with the products or
          services mentioned on the Website or even otherwise.
        </p>
        <p>
          The user will be responsible to open a ticket in case of any emergency
          service he/she needs. The user must open a ticket or call on the toll
          free numbers displayed on the website to get an emergency service or
          to install product in case he/she purchased from the website.
        </p>
        <p>
          The user will be liable to fill up and submit the feedback form after
          getting any routine/emergency service or installation of any product
          in case of purchase.
        </p>
        <p>User can always call in case of any emergency.</p>
      </div>

      <div class="sectipn px-4">
        <h1 class="font-bold text-lg py-3">RESTRICTIONS AND DISQUALIFICATIONS</h1>
        <p>
          The Company shall within its sole discretion, suspend, or cancel an
          order or continued processing of an order and forfeit the Transaction
          Amount paid by a User for a Transaction, where it is suspected that
          any User is indulging in any kind of manipulation including but not
          limited to use of unauthorized software of any form or reverse
          engineering; decompiling; posting of defamatory or obscene content
          about Company, its directors, partners, or any of its Affiliates, its
          Websites, Products or Services; posting hate speech on the Website or
          in any instant or non-instant messaging service or another forum’s
          websites in connection with use of the Website or about its Services;
          disabling the Website, server or software of the Company or other
          software on the Website; or breach of a third party’s rights or
          engaging in other forms of illegal activity or breach of any provision
          of the Agreement. Offenders shall be prosecuted as per law.
        </p>
      </div>

      <div class="sectipn px-4">
        <h1 class="font-bold text-lg py-3">DISCLAIMER</h1>
        <p>
          In a credit/debit card transaction, User must use a credit /debit card
          that is issued in the name of the User. The Company or its directors
          and employees will not be liable for any credit/debit card fraud
          because of the card being used fraudulently. The liability to use a
          credit/debit card or a net banking transaction fraudulently will be on
          the User, and the onus to ‘prove otherwise’ shall be exclusively on
          the User. In case of satisfactory delivery of services ordered via a
          fraudulent transaction on a credit card/debit card (caused due to
          user’s negligence, hacking by third party or otherwise), chargeback or
          refund shall not be permissible OR In case of a fraudulent transaction
          on a credit card /debit card, User may report the matter on immediate
          helpdesk@gkbsolutions.in for claiming chargeback. In case the user
          makes the payment using account details, he or she must enter the
          details correctly for correct transaction.
        </p>
        <p>
          When a User makes a payment on the Website using any of the available
          modes of payment, his/her payment is processed by a third-party
          payment gateway, and in most cases any information entered by him/her
          in this regard is not visible to Company. A User also understands and
          agrees that a payment made through any mode of payment available on
          the Website may also be rejected by the payment gateway for several
          other reasons independent from Company. In case of payments made using
          a payment card, Company shall be under no liability whatsoever in
          respect of any loss or damage arising directly or indirectly out of
          the decline of authorization for any transaction for any reason and in
          such cases, there will be deemed to be no successful purchase by a
          User and the User shall be accordingly notified instantaneously.
        </p>
        <p>
          The use of the Website is totally at the User’s sole risk. This
          Website, information provided through it and its Services and Products
          are provided on an “as is” and “as available” basis to the prospective
          users. The Company and its Website disclaim all implied warranties,
          including but not limited to implied and statutory warranties of
          merchantability, fitness of any product, Services, that may be offered
          to the Users. The Company takes reasonable measures to maintain
          uninterrupted service through its Website, but the Company does not
          give any warranties about uninterrupted service or availability of its
          Website services at all times.
        </p>
        <p>
          The Company may endorse in anyway any advertisers/third-party content
          on website or other communication.
        </p>
        <p>
          For the Products purchased by a User on the Website, only such
          warranties and guarantees as provided by its manufacturer flows to the
          User and no other warranties or guarantees are expressly or impliedly
          made by the Company.
        </p>
        <p>
          The Company does not warrant that the information displayed on the
          Website is accurate, reliable or correct and does not confirm that the
          Website will be available at any particular time or location,
          uninterrupted or secure or that any defects or errors will be
          corrected or that the materials are free of viruses or other harmful
          components. This disclaimer of liability also applies to any damages
          or injury caused by any failure of performance, error, omission,
          interruption, deletion, delayed delivery, miss-delivery, defect, delay
          in operation or improper transmission, computer virus, communication
          line failure, theft or destruction or unauthorized access to,
          alteration of, or use of record, data loss, system failure under any
          cause of action, loss of business, system crash, faulty operation,
          malware attacks or slow transmission of the telephone line or web
          servers or email servers or hardware or software involved in the
          conduct of the Website or otherwise or loss of other equipment or
          property, or economic loss or damage, third-party losses, or any loss
          of actual or anticipated profit, interest, revenue, savings or damage
          of goodwill to User, User’s negligence, even if the Company is advised
          in advance of possibility of such loss or damages because of use of
          the Website or its Services.
        </p>
        <p>
          No advice or information, whether oral or written, obtained by the
          User from the Company or the Website shall create any warranty not
          expressly stated in the terms expressed therein.
        </p>
        <p>
          The User expressly understands and agrees that the Company and the
          Website shall not be liable for any damages of any kind arising from
          the use of or inability to use this Website, software, or any related
          Services, including, but not limited to, direct, indirect, incidental,
          consequential, special, exemplary, anticipated and punitive damages
          whether such claim is based on warranty, contract, tort (including
          negligence), or otherwise,(even if provider has been advised of the
          possibility of such damages.)
        </p>
        <p>
          The Company shall not be responsible for any opinions, views, advice
          or statements posted on the Website or another website, blog or other
          public space (including, without limitation, in any public posting
          areas of the Website) by any person or entity other than an authorized
          Company’s spokesperson. Advertisers, content providers, Users, guests,
          independent writers and experts are not authorized Company’s
          spokespersons. At no time should the opinions, views, advice or
          statements provided by advertisers, content providers, Users, guests,
          independent writers or experts be relied upon for important personal
          decisions without independent verification.
        </p>
        <p>
          User specifically acknowledges, agrees and accepts that Company,
          directors or agents are not liable to User for any loss incurred in
          transmitting information from or to the Company from or to Website by
          the internet or by other connecting media. The Company shall not be
          liable for any faulty operation or slow transmission of the telephone
          line or web servers or email servers or hardware or software involved
          in the conduct of the Website or other servers or websites to process
          the order.
        </p>
        <p>
          User agrees to indemnify, defend and hold Company, its partners,
          directors, employees and its Affiliates harmless from all claims,
          damages and expenses, litigation instituted by a third party against
          the Company arising out of User’s acts and omissions in connection
          with the Website or any violation of laws or breach of any terms of
          this Agreement or Privacy policy.
        </p>
        <p>
          THE LIMITATIONS OF THIS SECTION SHALL APPLY NOTWITHSTANDING ANY
          RELIANCE ON ANY INFORMATION OBTAINED FROM THE WEBSITE THAT RESULT FROM
          MISTAKES, OMISSIONS, INTERRUPTIONS, DELETION OF FILES OR E-MAIL,
          ERRORS, DEFECTS, VIRUSES OR OTHER MALICIOUS CODE, DELAYS IN OPERATION
          OR TRANSMISSION, OR ANY FAILURE OF PERFORMANCE, LOSS OF TIME, WHETHER
          OR NOT RESULTING FROM ACTS OF GOD, COMMUNICATIONS FAILURE, THEFT,
          DESTRUCTION, OR UNAUTHORIZED ACCESS TO PROVIDER RECORDS, PROGRAMS, OR
          SERVICES, AND WHETHER OR NOT THE COMPANY HAS BEEN ADVISED OF THE
          POSSIBILITY OF SUCH DAMAGES. USER HEREBY ACKNOWLEDGES THAT THIS
          PARAGRAPH SHALL APPLY TO ALL CONTENT, SERVICES AVAILABLE THROUGH THE
          WEBSITE OR OTHER COMMUNICATION MEDIA INCLUDING INTERNET, VOIP, MOBILE
          AND SMS NETWORK, ADVERTISING AND PROMOTION USING ANY FORM OF MEDIA.
          SUCH LIMITATION OF LIABILITY SHALL APPLY WHETHER THE DAMAGES ARISE
          FROM USE OR MISUSE OF AND RELIANCE ON THE WEBSITE’S SERVICES, FROM
          INABILITY TO USE WEBSITE’S SERVICES OR FROM THE INTERRUPTION,
          SUSPENSION, OR TERMINATION OF THE WEBSITE’S SERVICES (INCLUDING SUCH
          DAMAGES INCURRED BY THIRD PARTIES). IN ANY EVENT, THE LIABILITY OF THE
          COMPANY SHALL NOT EXCEED THE TRANSACTION AMOUNT PAID BY USER IN
          RESPECT OF A PARTICULAR TRANSACTION.
        </p>
      </div>

      <div class="sectipn px-4">
        <h1 class="font-bold text-lg py-3">FORCE MAJEURE</h1>
        <p>
          The Company shall not be liable or responsible for any failure to
          perform or delay in performance of any of obligations under this
          Agreement, which is caused by events outside the Company’s reasonable
          control. This will include any act, event, occurrence, omission,
          incident, or accident that is beyond the Company’s reasonable control
          and includes in particular but is not limited to strikes, lockouts or
          other industrial outrage, civil commotion, riots, affray, invasion,
          terrorist attack, war, fire or explosion, storm, flood, earthquake,
          epidemic or other natural disaster, or impossibility of the use of
          public or private telecommunication networks and computer networks and
          similar reasons which are beyond the control of the Company.
        </p>
        <p>
          The Company’s obligations under this Agreement are suspended for the
          period that the Force Majeure Event continues, and it will have an
          extension of time to perform these obligations for the duration of
          that period. The Company shall take reasonable steps to bring the
          Force Majeure Event to a close or to find a solution by which its
          obligations under this Agreement can be performed despite the Force
          Majeure Event. Neither party is liable for loss caused due to a force
          majeure event.
        </p>
      </div>

      <div class="sectipn px-4">
        <h1 class="font-bold text-lg py-3">THIRD- PARTY SITES</h1>
        <p>
          The Website may contain links to third-party websites. If a User
          visits any such website, he/she will be subject to terms and
          conditions posted on it. The Company neither controls nor is
          responsible for Content on such sites. The fact of a link existing on
          the Website to a third-party website is not an endorsement of that
          website by Company. A User understands that his/her
          activities/transactions on such third-party websites are solely
          between him/her and such third parties. User understands and
          acknowledges that Company will not be liable for any loss or damage it
          may incur as a result of any of his/her transactions with such third
          parties.
        </p>
      </div>

      <div class="sectipn px-4">
        <h1 class="font-bold text-lg py-3">INTELLECTUAL PROPERTY RIGHTS</h1>
        <p>
          The User hereby agrees that the trademark, copyright and other forms
          of intellectual property are exclusive property of the Company and all
          rights in this connection are reserved. All other trademarks for which
          the exclusivity of rights is not claimed by the Company are the
          property of the respective owners. In case of any infringement of
          trademark or copyright by the User or the Company’s intellectual
          property rights are challenged by a User at any point of time, the
          Company reserves the right to terminate the User Account immediately
          and lodge appropriate legal actions and file actions for appropriate
          remedies against the errant User.
        </p>
        <p>
          The Company grants the User a limited license to access and make
          personal use of this site and not to download (other than page
          caching) or modify it, or any portion of it, except in case Company
          gives consent for the same. This license does not include any resale
          or commercial use of this site or its contents; any collection and use
          of any product listings, descriptions, or prices; any derivative use
          of this site or its contents; any downloading or copying of Account
          information for the benefit of another merchant; or any use of data
          mining, robots, or similar data gathering and extraction tools. The
          Website or any portion of the Website may not be reproduced,
          duplicated, copied, sold, resold, visited, or otherwise exploited for
          any commercial purpose without express written consent of Company.
          User may not frame or use framing techniques to enclose any trademark,
          logo, or other proprietary information (including images, text, page
          layout, or form) of Company and Affiliates without express written
          consent. User may not use any Meta tags or any other “hidden text” and
          Website or Company’s name or trademarks without the express written
          consent of Company. Any unauthorized use terminates the permission or
          license granted by Company. User is granted a limited, revocable, and
          nonexclusive right to create a hyperlink to the home page of Company
          as long as the link does not portray Company, its Affiliates, or their
          products or Services in a false, misleading, derogatory, or otherwise
          offensive matter or having a right to ownership of the same in any
          form. User may not use the Company’s or its Website’s logo or other
          proprietary graphic or trademark as part of the link without express
          written permission.
        </p>
      </div>

      <div class="sectipn px-4">
        <h1 class="font-bold text-lg py-3">DISPUTES & JURISDICTION</h1>
        <p>
          This User Agreement shall be governed by the Indian laws and all
          disputes are subject to jurisdiction of NCT Delhi only. In case any
          dispute arises, the matter shall be amicably settled between both the
          parties through negotiation, failing which it will be adjudicated by
          the courts at New Delhi.
        </p>
      </div>

      <div class="sectipn px-4">
        <h1 class="font-bold text-lg py-3">TERMINATION</h1>
        <p>
          The Company reserves the right to terminate the User Account at its
          sole discretion in case the terms and conditions of this Agreement are
          violated by the User.
        </p>
        <p>
          In case the Company reasonably suspects any User engages in any
          fraudulent, objectionable, illegal activities in connection with the
          Website or in breach of the terms of this Agreement, then Company
          shall have the exclusive and immediate right to temporarily suspend or
          indefinitely terminate the Agreement upon immediate notice as it may
          deem fit or cancel any refunds. The clauses in the Agreement shall
          survive the termination or expiry of this Agreement.
        </p>
      </div>

      <div class="sectipn px-4">
        <h1 class="font-bold text-lg py-3">SEVERABILITY</h1>
        <p>
          If any court or competent authority decides that any of the provisions
          of these terms are invalid, unlawful or unenforceable to any extent,
          the term will, to that extent only, be severed from the remaining
          terms, which will continue to be valid to the fullest extent permitted
          by law.
        </p>
      </div>

      <div class="sectipn px-4">
        <h1 class="font-bold text-lg py-3">NO WAIVER</h1>
        <p>
          If the Company fails, at any time while these terms are in force, to
          insist that a User performs any of his/her obligations under these
          terms, or if the Company does not exercise any of its rights or
          remedies under these terms, that will not mean that the Company has
          waived such rights or remedies and will not mean that a User does not
          have to comply with those obligations. If the Company waives a default
          by a User that will not mean that the Company will automatically waive
          any subsequent default by a User. No waiver by the Company of any of
          these terms shall be effective unless the Company expressly states
          that it is a waiver and the Company informs a User so in writing.
        </p>
      </div>

      <div class="sectipn px-4 pb-4">
        <p>
          For any query about our terms of service, Kindly mail us at{" "}
          <a href="mailto:services@gkbsolutions.in">
            services@gkbsolutions.in
          </a>
        </p>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-green-500 mb-4">
                About Us
              </h3>
              <p className="text-gray-600">
                Your trusted partner for security solutions. Our expert
                technicians specialize in smart home systems, networking, and
                laptop setup. We're committed to delivering exceptional customer
                service for all IT security and surveillance needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-500 mb-4">Address</h3>
              <p className="text-gray-600 mb-0">Building No./Flat No.: 12</p>
              <p className="text-gray-600 mb-0">
                Name of Premises/Building: LAXMI BAZAAR
              </p>
              <p className="text-gray-600 mb-0">Road/Street: Madanpuri Road </p>
              <p className="text-gray-600 mb-0">
                Nearby Landmark: LAXMI BAZAAR{" "}
              </p>
              <p className="text-gray-600 mb-0">
                Locality/Sub Locality: LAXMI BAZAAR{" "}
              </p>
              <p className="text-gray-600 mb-0">City/Town/Village: Gurugram</p>
              <p className="text-gray-600 mb-0">District: Gurugram</p>
              <p className="text-gray-600 mb-0">State: Haryana</p>
              <p className="text-gray-600">PIN Code: 122006</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-500 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about-us"
                    className="text-gray-600 hover:text-green-500"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-600 hover:text-green-500"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-use"
                    className="text-gray-600 hover:text-green-500"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-600 hover:text-green-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-6 text-center text-gray-500 text-sm">
            <p>
              Copyright © {new Date().getFullYear()} - GKBsolutions | All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="https://wa.me/918076406998?text=How%20can%20we%20help%20you?"
          className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
      <div className="fixed bottom-22 left-6 z-50">
        <a
          href="tel:+918076406998"
          className="flex items-center justify-center w-12 h-12 text-white rounded-full shadow-lg transition-colors"
        >
          <Image src="/img/phone.png" width={32} height={32} alt="call" />
        </a>
      </div>
    </main>
  );
}
