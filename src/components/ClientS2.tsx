import React from 'react';
import politicsData from '../../public/data/politics.json';
import CardListCategoryPage from '@/components/CardListCategoryPage';
import AuthorInfo from '@/components/AuthorInfo';
import SectionWrapper from '@/components/SectionWrapper';
import DetailFirst from '@/components/DetailFirst';
import CategoryNavbar from '@/components/CategoryNavbar';
import SecondHeader from '@/components/SecondHeader';
import StaticContent from './StaticContent';
import Script from 'next/script';
import Image from 'next/image';
import { BiCalendar } from 'react-icons/bi';


export default async function ClientS2() {
 

    return (
        <div>
            <Script
                id={`schema-featured-bancredito-trusted-counsel-undoing`}
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "NewsArticle",
                        headline: "Abandonment, Conflicted Loyalties, and Lost Opportunities: How Trusted Counsel Became Bancrédito’s Undoing",
                        datePublished: '17th Sept 2025',
                        image: "/images/bancredito-counsel-undoing.webp",
                        author: {
                            "@type": "Person",
                            name: "NY State News",
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "NY State News",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://www.nystatenews.org/nystatenews-card.webp",
                            },
                        },
                        mainEntityOfPage: {
                            "@type": "WebPage",
                            "@id": `https://www.nystatenews.org/business/bancredito-trusted-counsel-undoing`,
                        },
                    }),
                }}
            />
            {/* <SecondHeader /> */}

            <div className="d-none d-lg-block">

                <CategoryNavbar />
            </div>

            <div
                id="detail-first"
                className="container-fluid"
                style={{
                    borderBottom: '1px solid #ccc',
                    marginTop: '70px',
                    padding: '0px',
                    backgroundColor: '#fff',
                }}
            >
                <div
                    className="row g-0 align-items-stretch"
                    style={{
                        minHeight: '500px',
                    }}
                >
                    <div
                        className="col-12 col-md-6 d-flex flex-column justify-content-center text-center"
                        style={{
                            padding: '40px 24px',
                        }}
                    >
                        <p
                            style={{
                                fontSize: '12px',
                                fontWeight: 400,
                                color: '#DB3334',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                fontFamily: 'Georgia, serif',
                                marginBottom: '16px',
                                marginTop: '20px',
                            }}
                        >
                            Business
                        </p>

                        <h1
                            style={{
                                fontFamily: 'Georgia, serif',
                                fontSize: 'clamp(22px, 5vw, 32px)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                fontWeight: 400,
                                lineHeight: 1.2,
                                marginBottom: '16px',
                            }}
                        >
                            Abandonment, Conflicted Loyalties, and Lost
                            Opportunities: How Trusted Counsel Became
                            Bancrédito’s Undoing.
                        </h1>

                        {/* <p
                    style={{
                      fontFamily: 'Georgia, serif',
                      fontStyle: 'italic',
                      fontSize: 'clamp(14px, 2vw, 18px)',
                      fontWeight: 400,
                      lineHeight: 1.6,
                      color: '#111',
                      marginBottom: '8px',
                    }}
                  >
                    {data.shortdescription}
                  </p> */}

                        <div
                            style={{
                                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '10px',
                            }}
                        >
                            <BiCalendar size={10} style={{ color: '#999', marginRight: '4px' }} />
                            <span style={{ color: '#000', opacity: 0.6, fontSize: '8px' }}>Published on</span>
                            <span style={{ color: '#555', marginLeft: '4px', fontSize: '8px' }}>17th Sept 2025</span>
                        </div>
                    </div>

                    {/* Image */}
                    <div
                        className="col-12 col-md-6 d-flex align-items-stretch justify-content-center"
                        style={{ padding: 0 }}
                    >
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                minHeight: '300px',
                            }}
                        >
                            <Image
                                src="/images/bancredito-counsel-undoing.webp"
                                alt="bancredito-trusted-counsel-undoing"
                                title="bancredito-trusted-counsel-undoing"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                                priority={true}

                            />

                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-4">

                <div className="row justify-content-center">
                    <div className="col-12 col-lg-7 mz-autho">
                        <div
                            className="fade-in-up"
                            style={{
                                marginBottom: '3rem',
                                padding: '0 1rem',
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    fontSize: 'clamp(24px, 5vw, 32px)',
                                    fontWeight: 400,
                                    textTransform: 'capitalize',
                                    lineHeight: 1.3,
                                    marginBottom: '1rem',
                                    color: '#111',
                                    textAlign: 'center',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid rgba(0,0,0,0.1)',
                                    paddingBottom: '0.5rem',
                                    maxWidth: '800px',
                                    marginInline: 'auto',
                                    textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',
                                }}
                            >
                                A Bank Surrounded, Yet Still Standing
                            </h2>

                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                By mid‑2021 Bancrédito International Bank & Trust Corporation looked as if it had weathered the worst of
                                six straight years of regulatory harassment. An independent BSA/AML technical audit by PAAST, P.L. had
                                just stamped the bank’s compliance programme <strong>“Satisfactory,”</strong> the highest rating available — no material
                                violations, only minor housekeeping fixes. Bancrédito’s management sent the report to Puerto Rico’s new
                                banking commissioner with a simple request: close the two‑year‑old examination so the institution could get
                                on with its business.
                            </p>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                What followed instead was a slow‑motion implosion. Within twenty‑six months the same institution was in
                                involuntary receivership, saddled with a <strong>US $15 million FinCEN penalty</strong>, and effectively erased from the
                                banking map. The decisive factor was not a sudden discovery of fraud or insolvency. It was the conduct of
                                the very law firms hired to defend the bank: <strong>Holland  &  Knight LLP.</strong> and <strong>McConnell  Valdés LLC</strong>.
                            </p>
                        </div>



                        <div
                            className="fade-in-up"
                            style={{
                                marginBottom: '3rem',
                                padding: '0 1rem',
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    fontSize: 'clamp(24px, 5vw, 32px)',
                                    fontWeight: 400,
                                    textTransform: 'capitalize',
                                    lineHeight: 1.3,
                                    marginBottom: '1rem',
                                    color: '#111',
                                    textAlign: 'center',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid rgba(0,0,0,0.1)',
                                    paddingBottom: '0.5rem',
                                    maxWidth: '800px',
                                    marginInline: 'auto',
                                    textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',
                                }}
                            >
                                The First Breach – Abandoning the Client When the Heat Rose
                            </h2>

                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                FinCEN quietly opened a federal BSA investigation in late 2019. Bancrédito retained Kobre & Kim to open a
                                dialogue in Washington, while H&K and McConnell continued to run point before Puerto Rico’s regulator,
                                OCIF. For eighteen months FinCEN stayed silent; H&K and McConnell treated the federal risk as remote and
                                concentrated on beating back OCIF’s ever‑expanding document demands.
                            </p>

                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >

                                That tactic blew up in early 2022. After OCIF forced a “voluntary” liquidation plan, the firms allowed OCIF to
                                appoint <strong>Driven Administrative Services</strong>—a former auditor and vendor of the bank—as liquidation
                                administrator <strong>without inserting any guard‑rails</strong> against conflicts. When Driven immediately defaulted on a
                                mandatory depositor payout and OCIF froze the bank’s funds, the firms offered no emergency motion to
                                enforce the plan. Bancrédito’s shareholder, BHC, had to intervene on its own, changing the board by written
                                consent in December 2022—only to be slapped with a regulatory cease‑and‑desist. In that pivotal moment,
                                counsel <strong>left the client to fend for itself</strong>.
                            </p>
                        </div>



                        <div
                            className="fade-in-up"
                            style={{
                                marginBottom: '3rem',
                                padding: '0 1rem',
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    fontSize: 'clamp(24px, 5vw, 32px)',
                                    fontWeight: 400,
                                    textTransform: 'capitalize',
                                    lineHeight: 1.3,
                                    marginBottom: '1rem',
                                    color: '#111',
                                    textAlign: 'center',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid rgba(0,0,0,0.1)',
                                    paddingBottom: '0.5rem',
                                    maxWidth: '800px',
                                    marginInline: 'auto',
                                    textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',
                                }}
                            >
                                Switching Sides Without Informed Consent
                            </h2>

                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                OCIF converted the liquidation into a formal receivership on 11 January 2023 and installed Driven as
                                <strong>receiver</strong>. Almost immediately, Bancrédito’s long‑time outside counsel surfaced on the other side of the
                                table
                            </p>

                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '7px auto',
                                }}
                            >
                                <i>“The Receiver’s current counsel, who represented [Bancrédito] in negotiations of the Consent Order, was the
                                    Bank’s former counsel.”</i>
                            </p>

                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                Neither H&K nor McConnell sought BHC’s written waiver, even though the Receiver’s interests were now
                                <strong>adverse</strong> to the shareholder’s—especially on the looming question of how large a penalty FinCEN might
                                impose. Puerto Rico’s Canons 18 & 19 and the ABA Model Rules flatly prohibit such a switch without
                                explicit, informed consent. None was given. The duty of loyalty was broken.
                            </p>
                        </div>




                        <div
                            className="fade-in-up"
                            style={{
                                marginBottom: '3rem',
                                padding: '0 1rem',
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    fontSize: 'clamp(24px, 5vw, 32px)',
                                    fontWeight: 400,
                                    textTransform: 'capitalize',
                                    lineHeight: 1.3,
                                    marginBottom: '1rem',
                                    color: '#111',
                                    textAlign: 'center',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid rgba(0,0,0,0.1)',
                                    paddingBottom: '0.5rem',
                                    maxWidth: '800px',
                                    marginInline: 'auto',
                                    textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',
                                }}
                            >
                                The Fatal Omission – Silencing the Client’s Mitigating Evidence
                            </h2>

                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                The March 2023 receivership settlement clawed back one protection: Driven <strong>promised</strong> it would
                                “immediately communicate to FinCEN” that it had <strong>no objection</strong> to BHC’s participation in any penalty
                                negotiations. Driven ignored that clause for three months. During that blackout:
                            </p>
                            <div
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                <ul>
                                    <li> FinCEN staff never saw the 2020 and 2021 PAAST/Crowe audit files showing the programme had
                                        been rated Satisfactory.
                                    </li>
                                    <li>
                                        They never saw the <strong>five‑year Look‑Back</strong> (Jan 2016–Dec 2020) confirming no unreported OFAC or
                                        CTR violations and finding only potential SAR escalations the bank itself had already flagged.
                                    </li>
                                    <li>
                                        They never saw documentary proof that supposedly “suspicious” yacht‑refit transfers were fully
                                        documented trust transactions benefitting the bank’s chairman.
                                    </li>
                                </ul>
                            </div>
                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                Instead, the Receiver’s counsel <strong>stipulated to FinCEN’s narrative</strong> that Bancrédito had long been a willful
                                violator, agreeing to an eye‑watering <strong>$15 million</strong> penalty. Only after the Consent Order was signed did
                                BHC’s new lawyers (Winston & Strawn) present the missing evidence, detailing how the admissions were
                                “incomplete and inaccurate”.
                            </p>
                        </div>



                        <div
                            className="fade-in-up"
                            style={{
                                marginBottom: '3rem',
                                padding: '0 1rem',
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    fontSize: 'clamp(24px, 5vw, 32px)',
                                    fontWeight: 400,
                                    textTransform: 'capitalize',
                                    lineHeight: 1.3,
                                    marginBottom: '1rem',
                                    color: '#111',
                                    textAlign: 'center',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid rgba(0,0,0,0.1)',
                                    paddingBottom: '0.5rem',
                                    maxWidth: '800px',
                                    marginInline: 'auto',
                                    textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',
                                }}
                            >
                                Causation in Plain Sight
                            </h2>

                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                Had counsel honoured their fiduciary obligations, the FinCEN calculus could have been radically different:
                            </p>




 {/* table  */}
<div className="container-fluid p-3">
  <div
    style={{
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      overflow: "hidden",
    }}
  >
    {/* Responsive table wrapper */}
    <div className="table-responsive">
      <table
        className="table table-bordered table-striped mb-0"
        style={{ fontSize: "13px" }} // 👈 reduced font size for all table text
      >
        <thead className="table-light">
          <tr>
            <th
              scope="col"
              style={{
                backgroundColor: "#f8f9fa",
                minWidth: "150px",
              }}
            >
              Required step
            </th>
            <th
              scope="col"
              style={{
                minWidth: "250px",
              }}
            >
              What competent, conflict-free counsel would have done
            </th>
            <th
              scope="col"
              style={{
                minWidth: "250px",
              }}
            >
              What actually happened
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: "#f8f9fa",
                fontWeight: 500,
                verticalAlign: "top",
              }}
            >
              Present full audit trail and Look-Back as mitigating evidence
            </td>
            <td style={{ verticalAlign: "top" }}>
              File comprehensive submission; demand management-level meeting
              before any penalty proposal
            </td>
            <td style={{ verticalAlign: "top" }}>
              Receiver's counsel provided partial fact-pattern; FinCEN never met
              or spoke with shareholder
            </td>
          </tr>
          <tr>
            <td
              style={{
                fontWeight: 500,
                verticalAlign: "top",
              }}
            >
              Secure BHC's seat in talks (per settlement)
            </td>
            <td style={{ verticalAlign: "top" }}>
              Notify FinCEN within days; coordinate joint strategy
            </td>
            <td style={{ verticalAlign: "top" }}>
              Notification delayed ~90 days, eliminating BHC voice
            </td>
          </tr>
          <tr>
            <td
              style={{
                backgroundColor: "#f8f9fa",
                fontWeight: 500,
                verticalAlign: "top",
              }}
            >
              Challenge size &amp; basis of CMP
            </td>
            <td style={{ verticalAlign: "top" }}>
              Argue ability-to-pay, program improvements, lack of willfulness
            </td>
            <td style={{ verticalAlign: "top" }}>
              No challenge; $15m assessment accepted as-is
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>



                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                FinCEN, deprived of context, imposed a penalty more typical of a major U.S. money‑centre bank than a
                                Puerto Rican IBE already in run‑off. The fine consumed the capital cushion that would have covered all
                                remaining depositor claims, sealing Bancrédito’s fate.
                            </p>
                        </div>


                        <div
                            className="fade-in-up"
                            style={{
                                marginBottom: '3rem',
                                padding: '0 1rem',
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    fontSize: 'clamp(24px, 5vw, 32px)',
                                    fontWeight: 400,
                                    textTransform: 'capitalize',
                                    lineHeight: 1.3,
                                    marginBottom: '1rem',
                                    color: '#111',
                                    textAlign: 'center',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid rgba(0,0,0,0.1)',
                                    paddingBottom: '0.5rem',
                                    maxWidth: '800px',
                                    marginInline: 'auto',
                                    textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',
                                }}
                            >
                                Legal Fault Lines for the Firms
                            </h2>

                            <div
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >

                                <ol>
                                    <li>
                                        <strong>Legal Malpractice (Negligence)</strong>. Failure to meet the standard of care by (i) ignoring federal
                                        exposure, (ii) conceding without presenting mitigation, and (iii) permitting conflicted liquidation
                                        architecture.
                                    </li>
                                    <li><strong>Breach of Fiduciary Duty / Conflict of Interest</strong>. Representing the Receiver against former client
                                        without informed consent, violating Canons 18/19 & Model Rule 1.9 . </li>
                                    <li>
                                        <strong>Breach of Contract</strong>. Retainer promises of conflict‑free representation; settlement clause requiring
                                        BHC inclusion.
                                    </li>
                                    <li><strong>Aiding & Abetting Receiver’s Breach</strong>. Substantially assisting Driven in sidelining shareholder and
                                        mishandling depositor payout.</li>
                                    <li>
                                        <strong>Fee Disgorgement & Damages</strong>. At minimum return of fees post‑conflict; at maximum recovery of
                                        $15 m penalty plus liquidation shortfall and reputational injury.
                                    </li>

                                </ol>
                            </div>

                            <p
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    textAlign: 'justify',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                            >
                                Statutes of limitation run as early as September 2024, but tolling letters can pause the clock.
                            </p>
                        </div>

                        <div
                            className="fade-in-up"
                            style={{
                                marginBottom: '3rem',
                                padding: '0 1rem',
                            }}
                        >
                            <h2
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    fontSize: 'clamp(24px, 5vw, 32px)',
                                    fontWeight: 400,
                                    textTransform: 'capitalize',
                                    lineHeight: 1.3,
                                    marginBottom: '1rem',
                                    color: '#111',
                                    textAlign: 'center',
                                    letterSpacing: '0.5px',
                                    borderBottom: '2px solid rgba(0,0,0,0.1)',
                                    paddingBottom: '0.5rem',
                                    maxWidth: '800px',
                                    marginInline: 'auto',
                                    textShadow: '0 1px 1px rgba(0, 0, 0, 0.05)',
                                }}
                            >
                                A Cautionary Tale in Three Sentences
                            </h2>

                            <div
                                style={{
                                    fontFamily: '"Times New Roman", Times, serif',
                                    fontSize: 'clamp(15px, 2vw, 19px)',
                                    lineHeight: 1.6,
                                    color: '#333',
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                }}
                                className='text-block'
                            >

                                <ol>
                                    <li>
                                        <strong>Bancrédito did not collapse from fraud or insolvency; it was strangled by a conflict‑ridden
                                            process its own lawyers engineered.</strong>
                                    </li>
                                    <li><strong>The moment counsel switched allegiance, the bank’s strongest defences—audits, Look‑Back,
                                        and shareholder oversight—were locked out of the room</strong></li>
                                    <li>
                                        <strong>What remained was an uncontested narrative that cost $15 million and a century‑old banking
                                            franchise, all traceable to abandonment, divided loyalty, and silence when advocacy was
                                            most needed.</strong>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <AuthorInfo />
                    </div>
                </div>

                <SectionWrapper title='Read More'>
                    <CardListCategoryPage data={[politicsData[3], politicsData[4], politicsData[5], politicsData[6]]} />
                    <CardListCategoryPage data={[politicsData[7], politicsData[8], politicsData[9], politicsData[10]]} />
                </SectionWrapper>
            </div>
        </div>


    );
}