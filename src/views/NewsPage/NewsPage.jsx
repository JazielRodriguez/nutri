import { AiOutlineArrowRight } from "react-icons/ai";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import Title from "../../components/NewsPageSections/Title";
import Articles from "../../components/NewsPageSections/Articles";
import TopArticle, {
    Content,
} from "../../components/NewsPageSections/TopArticle";
import Article from "../../components/NewsPageSections/Article";
import { Image, Description } from "../../components/NewsPageSections/Article";
import news2 from "../../assets/images/news2.jpeg";
import Bar from "../../components/NewsPageSections/Bar";
import { useTranslation } from "react-i18next";
import { news } from "./news";
const NewsPage = () => {
    const { t } = useTranslation("newsPage");
    return (
        <>
            <CustomNavbar />
            <Title>
                <span>
                    <AiOutlineArrowRight />
                </span>
                <span>{t("translations.title")}</span>
            </Title>
            <Articles>
                {news.map((art, index) => (
                    <a
                        key={index}
                        href={art.linkNews}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Article>
                            <Image src={art.imageNews} />
                            <Description>
                                <h2>{art.titleNews}</h2>
                                <p>{art.descNews}</p>
                            </Description>
                        </Article>
                    </a>
                ))}
            </Articles>
            {/* <Title>
                <span>
                    <AiOutlineArrowRight />
                </span>
                <span>{t("translations.topArticle")}</span>
            </Title>
            <TopArticle>
                <h2>Green energy</h2>
                <Content>
                    <div id="image">
                        <Image src={news2} />
                    </div>
                    <div>
                        <p>
                            Medical cannabis is already providing a better
                            quality of life for millions of patients every year.
                            Medical cannabis is already.
                        </p>
                        <p>
                            Medical cannabis is already providing a better
                            quality of life for millions of patients every year.
                            Medical cannabis is already.
                        </p>
                    </div>
                </Content>
                <Bar />
            </TopArticle> */}
        </>
    );
};

export default NewsPage;
