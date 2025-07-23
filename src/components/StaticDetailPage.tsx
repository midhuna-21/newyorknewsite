import React from 'react';
import { notFound } from 'next/navigation';
import politicsData from '../../public/data/politics.json';
import ArticleParagraphWith from '@/components/ArticleParagraph';
import CardListCategoryPage from '@/components/CardListCategoryPage';
import ClosingOfferBanner from '@/components/ClosingOfferBanner';
import FavoritesList from '@/components/FavouritesList';
import AuthorInfo from '@/components/AuthorInfo';
import Signup from '@/components/Signup';
import SectionWrapper from '@/components/SectionWrapper';
import DetailFirst from '@/components/DetailFirst';
import CategoryNavbar from '@/components/CategoryNavbar';
import Header from '@/components/Header';
import SecondHeader from '@/components/SecondHeader';
import StaticContent from './StaticContent';


export default async function StaticDetailPage() {
     const article = {
     title: "Charges Dropped for Wanda Vázquez Amid Claims of Political Targeting",
     category: "politics",
     date :"05/07/2025",
         "shortdescription": "All federal charges against former Puerto Rico Governor Wanda Vázquez have been dropped, with prosecutors replacing them with a minor campaign finance violation — ending a three-year legal battle without a corruption conviction.",
    
    image : '/images/wanda-vazquez-political-targeting01.webp',
    slug:'charges-dropped-wanda-vazquez-political-targeting',

     sub : [
        {
            subheading: "Wanda_vázquez_cleared",
            description: "Former Puerto Rico Governor Wanda Vázquez Garced has seen all federal felony charges against her dismissed in a stunning turn of events. U.S. prosecutors, who once alleged a sweeping bribery and fraud scheme, abruptly abandoned the case and replaced the indictment with a single-count technical campaign finance infraction. This resolution means no trial will occur and no criminal conviction for corruption will stain Vázquez’s record. The DOJ’s retreat – resolving the matter with a minor administrative violation rather than any bribery charge – has left Vázquez completely vindicated, prompting supporters to claim she was the target of a politically motivated prosecution."
        },
        {
            subheading: "A Three-Year Saga Ends in Exoneration",
            description: "TThe collapse of the case closes a high-profile saga that stretched on for over three years. Vázquez, who led Puerto Rico in 2019–2021, was arrested in 2022 amid allegations that she accepted help for her gubernatorial campaign from a foreign bank owner in exchange for official favors. She vehemently denied wrongdoing from the outset and cooperated fully with investigators. Over time, the prosecution’s case weakened significantly, according to legal observers. Key evidence of an explicit quid pro quo never materialized, and no funds were ever actually received by Vázquez or her campaign. What began as a dramatic FBI indictment ended with no finding of bribery or fraud. All substantive charges – conspiracy, bribery, honest services wire fraud – have been dropped. The only remaining issue is a technical violation of campaign finance law: an “offer” of support by a foreign national that was never even accepted."
        },
        {
            subheading: "Legal Experts Cite “Face-Saving” by DOJ",
            description: "Analysts describe the outcome as a face-saving exit for the U.S. Department of Justice. After pursuing an aggressive corruption case that ultimately yielded only a minor infraction, the DOJ’s resolution is being seen as an acknowledgment that the evidence for bribery fell short. “This is not a guilty plea – it’s a procedural footnote,” said one attorney familiar with the proceedings, emphasizing that Vázquez is not admitting any crime."
        },
        {
            subheading: "Political Overtones and Claims of Targeting",
            description: "The dismissal has sparked renewed debate about why the case was brought in the first place. Many political observers now call Vázquez’s ordeal a textbook case of prosecutorial overreach driven by political motivations rather than facts. Notably, the federal investigation escalated shortly after Vázquez endorsed then-President Donald Trump’s re-election bid in 2020. That timing fueled accusations of political targeting. Some in Puerto Rico suspect that “deep-state” actors within the DOJ aimed to silence a prominent Latina Republican voice."
        },
        {
            subheading: "Co-Defendant’s Case Also Resolved",
            description: "The fallout of the collapsed bribery case extends beyond Vázquez. Julio Herrera Velutini, the international banker accused of offering the campaign funding, has similarly seen his charges effectively neutralized, meaning he too will face no trial. In essence, both the governor and the banker will only face procedural technicalities that carry no admission of corruption. The once-sweeping corruption allegations against them have evaporated, reinforcing the narrative that the scandal was overstated."
        },
    ]
}

    return (
        <div>
            <SecondHeader />

            <div className="d-none d-md-block">

                <CategoryNavbar />
            </div>

            {/* <NewsArticleHeading data={article} /> */}
            <DetailFirst data={article} />
            <div className="container py-4">

                <div className="row justify-content-center">
                    <div className="col-12 col-lg-7 mz-autho">
                  <StaticContent
  title={article.sub[0].subheading.replace(/_/g, ' ')}
  description={article.sub[0].description}
/>

 <StaticContent
  title={article.sub[1].subheading.replace(/_/g, ' ')}
  description={article.sub[1].description}
/>

 <StaticContent
  title={article.sub[2].subheading.replace(/_/g, ' ')}
  description={article.sub[2].description}
/>

 <StaticContent
  title={article.sub[3].subheading.replace(/_/g, ' ')}
  description={article.sub[3].description}
/>

 <StaticContent
  title={article.sub[4].subheading.replace(/_/g, ' ')}
  description={article.sub[4].description}
/>

                        {/* <ClosingOfferBanner /> */}
                        {/* <FavoritesList /> */}
                        <AuthorInfo />
                        <Signup />
                    </div>
                </div>

                <SectionWrapper title='Read More'>
                    <CardListCategoryPage data={[politicsData[3], politicsData[4], politicsData[5], politicsData[6]]} />
                    <CardListCategoryPage data={[politicsData[7], politicsData[8], politicsData[9], politicsData[10]]} />
                    <CardListCategoryPage data={[politicsData[11], politicsData[12], politicsData[13], politicsData[14]]} />
                </SectionWrapper>
            </div>
        </div>


    );
}